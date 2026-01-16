
import { GoogleGenAI, Type } from "@google/genai";

/* Optimized to use process.env.API_KEY directly in the constructor as per SDK guidelines */
export const getRecipeSuggestion = async (ingredients: string[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `بناءً على هذه المكونات من متجري (متجر ذوق): ${ingredients.join(', ')}، اقترح وصفة عربية شهية. أعطني النتيجة بتنسيق JSON يحتوي على:
      - title (اسم الوصفة)
      - ingredients (قائمة المكونات كمصفوفة)
      - instructions (خطوات التحضير كمصفوفة)`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            ingredients: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            instructions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "ingredients", "instructions"]
        }
      }
    });

    /* Correctly accessing the .text property (not a method) from GenerateContentResponse */
    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
