import {SadRates} from "@/components/onboarding/charts/SadRates";
import {gemini} from "@/lib/gemeni-model";
import {generateObject, generateText} from "ai";
import {z} from "zod";
import {getUserAnswers} from "@/action/db/getUserAnswers";
import {compile, run} from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";


async function renderMDX(mdxString: string) {
    const code = await compile(mdxString, {outputFormat: "function-body"});
    const {default: Content} = await run(code, runtime);
    return Content;
}

const Page = async () => {
    const userQuestions = await getUserAnswers()
    const schema = z.array(z.object({
        name: z.string(),
        value: z.number(),
    }))
    const content = await generateObject({
        model: gemini,
        schema,
        prompt: "Give me Depression, Anxiety, Stress Rates (percentage range from 0-100); from the question asked to the user following: ",
        system: JSON.stringify(userQuestions.data),
        mode: "json",
    })

    const article = await generateText({
        model: gemini,
        prompt: `Generate Causes and Solution for the Depression, Anxiety, Stress if any in relevance to the user data: `,
        system: JSON.stringify(userQuestions.data),

    })
    const MdxArticle = await renderMDX(article.text)


    const sadData = content.object satisfies {
        name: string,
        value: number | `${number}`,
    }[]
    return <div className={"container mx-auto  py-10"}>
        <SadRates data={sadData}/>
        <div>
            <MdxArticle />
        </div>
    </div>

}
export default Page