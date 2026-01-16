
import { GoogleGenAI, Type } from "@google/genai";
import { SuggestionMode } from "../types";

export const getSmartSuggestion = async (ingredients: string[], mode: SuggestionMode = 'recipe') => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let promptContext = "";
    switch(mode) {
      case 'spice_blend':
        promptContext = "ابتكر 'خلطة توابل سرية' فريدة (تتبيلة) تعتمد بشكل أساسي على هذه المكونات، أعطها اسماً تسويقياً فاخراً.";
        break;
      case 'chef_hack':
        promptContext = "أعطني 'سر مهنة' أو نصيحة احترافية من كبار الطهاة تتعلق بكيفية حفظ أو تحسين طعم هذه المكونات المحددة.";
        break;
      default:
        promptContext = "ابتكر وصفة طبق رئيسي عربي فاخر وعصري يبرز جودة هذه المكونات.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `أنت خبير طهي وتوابل في 'متجر ذوق'. المكونات المتاحة حالياً في سلة العميل هي: ${ingredients.join(', ')}.
      المطلوب: ${promptContext}
      يجب أن تكون الإجابة باللغة العربية الفصحى وبأسلوب فخم.
      أعد النتيجة بتنسيق JSON حصراً يحتوي على الحقول التالية:
      - title: اسم الابتكار
      - ingredients: مصفوفة بالمواد المطلوبة (بما فيها المكونات المذكورة)
      - instructions: خطوات العمل بالتفصيل
      - pro_tip: نصيحة إضافية قصيرة ومبهرة`,
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
            },
            pro_tip: { type: Type.STRING }
          },
          required: ["title", "ingredients", "instructions"]
        }
      }
    });

    const jsonStr = response.text.trim();
    const result = JSON.parse(jsonStr);
    return { ...result, type: mode };
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return null;
  }
};
