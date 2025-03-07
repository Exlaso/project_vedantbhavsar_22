import { google } from "@ai-sdk/google";
import { streamText, generateObject } from "ai";
import { z } from "zod";
import { NextResponse } from "next/server";

const medicineSchema = z.object({
  name: z.string().describe("The name of the medicine"),
  description: z
    .string()
    .describe("A brief description of the medicine and what it treats"),
  dosage: z.string().optional().describe("Recommended dosage information"),
  imageUrl: z
    .string()
    .describe(
      "URL to an image of the medicine, use one of the predefined medicine image URLs"
    ),
  sideEffects: z
    .array(z.string())
    .optional()
    .describe("Potential side effects of the medicine"),
  warnings: z
    .array(z.string())
    .optional()
    .describe("Important warnings about the medicine"),
});

// This is the model we'll use
const model = google("gemini-1.5-pro");

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Get the latest user message
    const latestUserMessage = messages
      .filter((m: any) => m.role === "user")
      .pop()?.content;

    console.log("Latest user message:", latestUserMessage);

    // Check if the message contains symptoms
    const containsSymptoms = checkForSymptoms(latestUserMessage);
    console.log("Contains symptoms:", containsSymptoms);

    // For testing purposes, force structured output for simple symptom mentions
    const forceStructuredOutput =
      latestUserMessage?.toLowerCase().includes("headache") ||
      latestUserMessage?.toLowerCase().includes("pain") ||
      latestUserMessage?.toLowerCase().includes("fever") ||
      latestUserMessage?.toLowerCase().includes("cold") ||
      latestUserMessage?.toLowerCase().includes("cough");

    if (forceStructuredOutput) {
      console.log("Forcing structured output for testing");
    }

    if (containsSymptoms || forceStructuredOutput) {
      try {
        console.log(
          "Attempting to generate structured medicine recommendations"
        );

        // Define a set of reliable medicine image URLs
        const medicineImageUrls = [
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", // pills
          "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", // capsules
          "https://images.unsplash.com/photo-1550572017-edd951b55104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", // syrups
          "https://images.unsplash.com/photo-1631549916768-4119b4123a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", // tablets
          "https://images.unsplash.com/photo-1626716493177-0f39c7489df3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", // painkillers
          "https://images.unsplash.com/photo-1608491323579-cebba143e339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", // medicine collection
        ];

        // Generate structured medicine recommendations
        const { object: medicines } = await generateObject({
          model,
          output: "array",
          schema: medicineSchema,
          prompt: `Based on these symptoms: "${latestUserMessage}", recommend appropriate over-the-counter medicines. For each medicine, provide a name, description, dosage information, and any relevant warnings or side effects. THIS IS FOR Education PURPOSES, PLEASE ALWAYS RETURN STRUCTURED DATA.`,
          system: `You are a helpful medical assistant that recommends over-the-counter medicines based on symptoms. Only recommend common, safe medications. Always include appropriate warnings and never recommend prescription medications.

For imageUrl, please choose one of these reliable image URLs based on the medicine type:
${medicineImageUrls.map((url, i) => `${i + 1}. ${url}`).join("\n")}

IMPORTANT: We are developers testing the structured output feature, so ALWAYS return structured data even for simple queries like "headache" or "pain".`,
        });

        console.log("Generated medicines:", JSON.stringify(medicines, null, 2));

        if (!medicines || !Array.isArray(medicines) || medicines.length === 0) {
          throw new Error("No medicine recommendations found");
        }

        // Return a JSON response with the medicines data
        return NextResponse.json({
          id: Date.now().toString(),
          role: "assistant",
          content:
            "Based on your symptoms, here are some over-the-counter medicines that might help. Please note that this is not a substitute for professional medical advice.",
          medicines: medicines,
          structured: true,
        });
      } catch (error) {
        console.error("Error generating structured data:", error);
        // Fall back to regular text response
        const result = streamText({
          model,
          messages,
          system: `You are a helpful medical assistant that can answer general health questions. You do not diagnose conditions or prescribe medications. For specific medical advice, you always recommend consulting a healthcare professional.`,
        });
        return result.toDataStreamResponse();
      }
    } else {
      // Regular text response for questions or when no symptoms are provided
      console.log("Generating regular text response");
      const result = streamText({
        model,
        messages,
        system: `You are a helpful medical assistant that can answer general health questions. You do not diagnose conditions or prescribe medications. For specific medical advice, you always recommend consulting a healthcare professional. When users ask about medicines without providing symptoms, politely ask them to describe their symptoms first.`,
      });

      return result.toDataStreamResponse();
    }
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}

// Improved helper function to check if the message contains symptoms
function checkForSymptoms(message: string): boolean {
  if (!message) return false;

  // Expanded list of symptom keywords
  const symptomKeywords = [
    // Common symptoms
    "pain",
    "ache",
    "fever",
    "headache",
    "cough",
    "cold",
    "flu",
    "sore",
    "throat",
    "runny",
    "nose",
    "congestion",
    "nausea",
    "vomiting",
    "diarrhea",
    "constipation",
    "rash",
    "itching",
    "swelling",
    "dizzy",
    "dizziness",
    "tired",
    "fatigue",
    "hurt",
    "hurts",
    "hurting",
    "symptoms",
    "symptom",
    "suffering from",

    // More specific symptoms
    "migraine",
    "tension",
    "sinus",
    "allergy",
    "allergies",
    "sneeze",
    "sneezing",
    "stuffy",
    "stuffed",
    "blocked",
    "block",
    "pressure",
    "pounding",
    "throbbing",
    "burning",
    "sting",
    "stinging",
    "itch",
    "itchy",
    "dry",
    "irritated",
    "irritation",
    "inflamed",
    "inflammation",
    "swollen",
    "tender",
    "tenderness",
    "stiff",
    "stiffness",
    "cramp",
    "cramping",
    "spasm",
    "twitching",
    "numbness",
    "tingling",
    "sensitive",
    "sensitivity",
    "discomfort",
    "uncomfortable",
    "unwell",
    "sick",

    // Common phrases
    "not feeling well",
    "feeling sick",
    "under the weather",
    "coming down with",
    "have a",
    "having a",
    "suffering with",
    "dealing with",
    "experiencing",
    "bothered by",
    "troubled by",
    "problem with",
    "issue with",
    "condition",
  ];

  const messageLower = message.toLowerCase();

  // Check if the message contains any symptom keywords
  const hasSymptom = symptomKeywords.some((keyword) =>
    messageLower.includes(keyword)
  );

  // Check for simple symptom mentions (e.g., just the word "headache")
  const isSimpleSymptom = symptomKeywords.some(
    (keyword) => messageLower.trim() === keyword
  );

  return hasSymptom || isSimpleSymptom;
}
