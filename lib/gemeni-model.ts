import {createGoogleGenerativeAI} from '@ai-sdk/google';

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = createGoogleGenerativeAI({
    apiKey: GEMINI_API_KEY,
});
export const gemini = genAI("gemini-1.5-flash");
