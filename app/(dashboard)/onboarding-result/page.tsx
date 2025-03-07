import { SadRates } from "@/components/onboarding/charts/SadRates";
import { gemini } from "@/lib/gemeni-model";
import { generateObject } from "ai";
import { z } from "zod";

const Page = async () => {
  const schema = z.array(
    z.object({
      name: z.string(),
      value: z.number(),
    })
  );
  const content = await generateObject({
    model: gemini,
    schema,
    prompt:
      "Give me Depression, Anxiety, Stress Rates (percentage); if im feeling i wanna harm my self",
    system: "range from 0-100",
    mode: "json",
  });
  console.log({ content });

  const sadData = content.object satisfies {
    name: string;
    value: number | `${number}`;
  }[];
  return (
    <>
      <SadRates data={sadData} />
    </>
  );
};
export default Page;
