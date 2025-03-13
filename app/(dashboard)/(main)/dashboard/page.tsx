import {SadRates} from "@/components/onboarding/charts/SadRates";
import {InsightSection} from "@/components/shared/InsightSection";
import {gemini} from "@/lib/gemeni-model";
import {generateObject, generateText} from "ai";
import {TypeOf, z} from "zod";
import graphqlClient from "@/lib/graphql";
import {
    GetUserAiDataDocument,
    GetUserAnswersDocument,
    InsertUserAiDataDocument,
    InsertUserAiDataMutationVariables
} from "@/lib/generated/graphql";
import {renderMDX} from "@/action/mdx";

// Schema for the pie chart data
const chartDataSchema = z.array(
    z.object({
        name: z.string(),
        value: z.number(),
    })
);

// Schema for causes and solutions
const insightSchema = z.object({
    causes: z.array(
        z.object({
            title: z.string(),
            description: z.string(),
        })
    ),
    solutions: z.array(
        z.object({
            title: z.string(),
            description: z.string(),
        })
    ),
});

const getAiData = async ():Promise<[
    TypeOf<typeof chartDataSchema>,
    string,
    TypeOf<typeof insightSchema>
]> => {
//   get data from db
    const userQuestionsQuery = graphqlClient.request(GetUserAnswersDocument);
    const aiDataQuery = graphqlClient.request(GetUserAiDataDocument)
    const [userQuestions, aiDataSnapshot] = await Promise.all([userQuestionsQuery, aiDataQuery]);
    const aiData = aiDataSnapshot.onboarding_resultCollection?.edges.at(0)?.node


//   if exist then return
    if (aiData) {
        console.log(JSON.parse(aiData.SADrates), aiData.article, JSON.parse((
            aiData.insights
        )))
        return [JSON.parse(aiData.SADrates), aiData.article || "", JSON.parse((
            aiData.insights
        ))]
    } else {
//   else generate
        const chartDataSnapshot = generateObject({
            model: gemini,
            schema: chartDataSchema,
            prompt:
                "Give me Depression, Anxiety, Stress Rates (percentage range from 0-100); from the question asked to the user following: ",
            system: JSON.stringify(userQuestions?.user_answersCollection?.edges),
            mode: "json",
        });

        // Generate article content
        const articleSnapshot = generateText({
            model: gemini,
            prompt: `Generate a concise overview of the user's mental health based on their answers. Focus on key insights and patterns.`,
            system: JSON.stringify(userQuestions?.user_answersCollection?.edges),
        });

        // Generate structured causes and solutions
        const insightsSnapshot = generateObject({
            model: gemini,
            schema: insightSchema,
            prompt:
                "Based on the user's answers, generate structured data for potential causes of their mental health state and practical solutions. For each, provide a title and detailed description.",
            system: JSON.stringify(userQuestions),
            mode: "json",
        });

        const [chartData, article, insights] = await Promise.all([chartDataSnapshot, articleSnapshot, insightsSnapshot]);
        graphqlClient.request(InsertUserAiDataDocument, {
            input: {
                SADrates: JSON.stringify(chartData.object),
                article: article.text,
                insights: JSON.stringify(insights.object)
            }
        } satisfies InsertUserAiDataMutationVariables).then(e => console.info(`DB SYNCED: ` + e.insertIntoonboarding_resultCollection?.affectedCount))
        return [chartData.object, article.text, insights.object]
    }
}

const Page = async () => {


    const [chartData, article, insights] = await getAiData()


    const MdxArticle = await renderMDX(article);


    return (
        <div className="container mx-auto p-10 space-y-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Your Mental Health Assessment</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SadRates data={chartData}/>

                <InsightSection
                    content={<MdxArticle/>}
                    causes={insights.causes}
                    solutions={insights.solutions}
                />
            </div>
        </div>
    );
};

export default Page;
