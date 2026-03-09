import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

console.log("Gemini key:", process.env.GEMINI_API_KEY);

export const generateTravelPlan = async (destination, days, budget) => {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

const prompt = `
You are a travel planner AI.

Generate a realistic travel plan based on the following details.

Destination: ${destination}
Days: ${days}
Budget: ₹${budget}

IMPORTANT RULES:
1. Return ONLY valid JSON.
2. Do NOT include explanations, markdown, or text outside JSON.
3. itinerary.day must be a NUMBER (1, 2, 3...) — NOT "Day 1".
4. hotels must be objects with: name, location, price_range, description.
5. cafes must be objects with: name, location, specialty, price_range.
6. activities must be an array of strings.
7. daily_cost must contain numbers only.

Follow this JSON schema exactly:

{
  "budget_breakdown": {
    "stay": number,
    "food": number,
    "transport": number,
    "activities": number
  },

  "hotels": [
    {
      "name": "string",
      "location": "string",
      "price_range": "string",
      "description": "string"
    }
  ],

  "cafes": [
    {
      "name": "string",
      "location": "string",
      "specialty": "string",
      "price_range": "string"
    }
  ],

  "daily_cost": [number],

  "itinerary": [
    {
      "day": number,
      "theme": "string",
      "activities": ["string"]
    }
  ]
}

Return ONLY the JSON object.
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
};