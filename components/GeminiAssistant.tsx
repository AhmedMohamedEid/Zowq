
import React, { useState } from 'react';
import { Sparkles, Loader2, ChefHat, ChevronLeft, Lightbulb } from 'lucide-react';
import { getRecipeSuggestion } from '../services/geminiService';
import { RecipeSuggestion } from '../types';

interface GeminiAssistantProps {
  selectedIngredients: string[];
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ selectedIngredients }) => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<RecipeSuggestion | null>(null);

  const handleGetSuggestion = async () => {
    if (selectedIngredients.length === 0) return;
    setLoading(true);
    const result = await getRecipeSuggestion(selectedIngredients);
    setRecipe(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-[40px] p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="max-w-xl text-center md:text-right space-y-6">
          <div className="inline-flex items-center gap-3 bg-amber-500/20 px-5 py-2 rounded-full text-amber-400 font-bold text-sm border border-amber-500/30">
            <Sparkles size={18} />
            تكنولوجيا الذوق الذكية
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            ماذا سنطبخ بمنتجات <br /> "ذوق" اليوم؟
          </h2>
          <p className="text-stone-300 text-lg font-light leading-relaxed">
            أضف منتجاتك المفضلة إلى السلة، وسيقوم مساعدنا الذكي بابتكار وصفة عربية أصلية أو "تتبيلة سرية" مخصصة لك فقط.
          </p>
          
          {!recipe && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                disabled={loading || selectedIngredients.length === 0}
                onClick={handleGetSuggestion}
                className="bg-amber-600 hover:bg-amber-500 disabled:bg-stone-700 disabled:text-stone-500 text-white font-black px-12 py-5 rounded-[20px] transition-all shadow-2xl shadow-amber-900/40 flex items-center justify-center gap-3 active:scale-95 text-lg"
              >
                {loading ? <Loader2 className="animate-spin" size={24} /> : <ChefHat size={24} />}
                {loading ? "جاري ابتكار الوصفة..." : "احصل على اقتراح ذكي"}
              </button>
              {selectedIngredients.length === 0 && (
                <div className="flex items-center gap-2 text-amber-400/80 text-sm font-medium">
                  <Lightbulb size={18} />
                  أضف منتجاً واحداً على الأقل للسلة لتبدأ
                </div>
              )}
            </div>
          )}
        </div>

        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
             <div className="w-64 h-64 bg-amber-600 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(217,119,6,0.3)] animate-pulse-slow">
                <ChefHat size={100} className="text-white" />
             </div>
             <div className="absolute -top-4 -right-4 bg-white p-4 rounded-3xl shadow-xl text-stone-900 animate-bounce">
                <Sparkles className="text-amber-600" size={32} />
             </div>
          </div>
        </div>
      </div>

      {recipe && (
        <div className="mt-16 bg-white rounded-[32px] p-8 lg:p-12 shadow-2xl animate-in zoom-in-95 duration-500 text-stone-900">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <div>
              <span className="text-amber-700 font-bold tracking-widest uppercase text-sm block mb-2">وصفة خاصة لعملاء ذوق</span>
              <h3 className="text-4xl font-black text-[#4a3728]">{recipe.title}</h3>
            </div>
            <button 
              onClick={() => setRecipe(null)}
              className="px-6 py-3 bg-stone-100 hover:bg-stone-200 rounded-2xl text-stone-600 font-bold transition-all flex items-center gap-2"
            >
              اقتراح آخر <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold flex items-center gap-3 text-amber-700">
                <span className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center"><Lightbulb size={20} /></span>
                المكونات المطلوبة
              </h4>
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-100 group hover:border-amber-200 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-150 transition-transform"></span>
                    <span className="text-stone-700 font-medium">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold flex items-center gap-3 text-amber-700">
                <span className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center"><ChefHat size={20} /></span>
                طريقة التحضير
              </h4>
              <div className="space-y-6 relative border-r-2 border-stone-100 pr-8">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -right-[41px] top-0 w-6 h-6 bg-white border-2 border-amber-500 rounded-full flex items-center justify-center text-[10px] font-black text-amber-700 z-10">
                      {idx + 1}
                    </span>
                    <p className="text-stone-600 text-lg leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
