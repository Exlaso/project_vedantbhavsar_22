import {GoogleGenerativeAI} from "@google/generative-ai";


const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || "");
export const gemeni = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});