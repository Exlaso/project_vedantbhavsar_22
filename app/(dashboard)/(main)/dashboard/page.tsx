import { SadRates } from "@/components/onboarding/charts/SadRates";
import { InsightSection } from "@/components/shared/InsightSection";
import { gemini } from "@/lib/gemeni-model";
import { generateObject, generateText } from "ai";
import { z } from "zod";
import { getUserAnswers } from "@/action/db/getUserAnswers";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

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

async function renderMDX(mdxString: string) {
  const code = await compile(mdxString, { outputFormat: "function-body" });
  const { default: Content } = await run(code, runtime);
  return Content;
}

const Page = async () => {
  const userQuestions = await getUserAnswers();

  // Generate chart data
  const chartData = await generateObject({
    model: gemini,
    schema: chartDataSchema,
    prompt:
      "Give me Depression, Anxiety, Stress Rates (percentage range from 0-100); from the question asked to the user following: ",
    system: JSON.stringify(userQuestions.data),
    mode: "json",
  });

  // Generate article content
  const article = await generateText({
    model: gemini,
    prompt: `Generate a concise overview of the user's mental health based on their answers. Focus on key insights and patterns.`,
    system: JSON.stringify(userQuestions.data),
  });

  // Generate structured causes and solutions
  const insights = await generateObject({
    model: gemini,
    schema: insightSchema,
    prompt:
      "Based on the user's answers, generate structured data for potential causes of their mental health state and practical solutions. For each, provide a title and detailed description.",
    system: JSON.stringify(userQuestions.data),
    mode: "json",
  });

  const MdxArticle = await renderMDX(article.text);

  const sadData = chartData.object as {
    name: string;
    value: number;
  }[];

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Mental Health Assessment</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SadRates data={sadData} />

        <InsightSection
          content={<MdxArticle />}
          causes={insights.object.causes}
          solutions={insights.object.solutions}
        />
      </div>
    </div>
  );
};

export default Page;
