
import React, { useState } from 'react';
import { Sparkles, Loader2, ChefHat, ChevronLeft, Lightbulb, Flame, Wand2, BookOpen } from 'lucide-react';
import { getSmartSuggestion } from '../services/geminiService';
import { RecipeSuggestion, SuggestionMode } from '../types';

interface GeminiAssistantProps {
  selectedIngredients: string[];
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ selectedIngredients }) => {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<SuggestionMode>('recipe');
  const [recipe, setRecipe] = useState<RecipeSuggestion | null>(null);

  const handleGetSuggestion = async (selectedMode: SuggestionMode) => {
    if (selectedIngredients.length === 0) return;
    setMode(selectedMode);
    setLoading(true);
    const result = await getSmartSuggestion(selectedIngredients, selectedMode);
    setRecipe(result);
    setLoading(false);
  };

  const modes = [
    { id: 'recipe', name: 'وصفة فاخرة', icon: <ChefHat size={18} />, color: 'bg-amber-600' },
    { id: 'spice_blend', name: 'خلطة سرية', icon: <Flame size={18} />, color: 'bg-red-600' },
    { id: 'chef_hack', name: 'سر المهنة', icon: <Wand2 size={18} />, color: 'bg-indigo-600' },
  ];

  return (
    <div id="ai-assistant" className="bg-stone-900 rounded-[32px] md:rounded-[48px] p-6 md:p-16 border border-white/5 shadow-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-amber-600/10 blur-[80px] md:blur-[120px] rounded-full"></div>
      
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 relative z-10">
        <div className="lg:w-1/2 space-y-6 md:space-y-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-amber-500 font-black text-[10px] md:text-sm border border-amber-500/20">
            <Sparkles size={16} />
            ذكاء "ذوق" الاصطناعي
          </div>
          
          <div className="space-y-3 md:space-y-6">
            <h2 className="text-3xl lg:text-7xl font-black text-white leading-tight">
              مطبخك <span className="text-amber-500 italic">أكثر ذكاءً</span>
            </h2>
            <p className="text-stone-400 text-sm md:text-xl leading-relaxed font-light">
              حلل مئات الوصفات في ثوانٍ. اختر "الوضع" المفضل لديك.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {modes.map((m) => (
              <button
                key={m.id}
                onClick={() => handleGetSuggestion(m.id as SuggestionMode)}
                disabled={loading || selectedIngredients.length === 0}
                className={`flex items-center sm:flex-col sm:justify-center gap-3 sm:gap-0 p-4 sm:p-6 rounded-2xl md:rounded-[32px] border transition-all duration-500 ${
                  mode === m.id && recipe 
                    ? `${m.color} text-white border-transparent`
                    : 'bg-white/5 border-white/10 text-stone-300'
                } disabled:opacity-50 text-right sm:text-center`}
              >
                <div className={`p-2 sm:p-3 rounded-xl ${mode === m.id && recipe ? 'bg-white/20' : 'bg-stone-800'} transition-transform sm:mb-3`}>
                  {m.icon}
                </div>
                <span className="font-bold text-xs md:text-sm">{m.name}</span>
              </button>
            ))}
          </div>

          {selectedIngredients.length === 0 && (
            <div className="p-3 bg-amber-900/20 border border-amber-500/20 rounded-xl flex items-center gap-2 text-amber-500 text-[10px] md:text-sm font-bold">
              <Lightbulb size={16} />
              أضف منتجات لسلتك لتفعيل الذكاء الاصطناعي
            </div>
          )}
        </div>

        <div className="lg:w-1/2 min-h-[300px] flex items-center justify-center">
          {loading ? (
            <div className="text-center space-y-4">
              <Loader2 className="w-12 h-12 md:w-24 md:h-24 text-amber-500 animate-spin mx-auto opacity-20" />
              <p className="text-amber-500 font-black text-sm md:text-xl animate-pulse">جاري الابتكار...</p>
            </div>
          ) : recipe ? (
            <div className="w-full bg-white rounded-3xl md:rounded-[40px] p-6 md:p-12 text-stone-900 shadow-2xl">
              <div className="flex items-start justify-between mb-6 md:mb-10">
                <div className="space-y-1">
                  <span className="px-3 py-1 bg-amber-600 rounded-full text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                    {modes.find(m => m.id === recipe.type)?.name}
                  </span>
                  <h3 className="text-xl md:text-4xl font-black text-[#4a3728]">{recipe.title}</h3>
                </div>
                <button onClick={() => setRecipe(null)} className="p-2 bg-stone-100 rounded-full text-stone-400">
                  <ChevronLeft size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 font-black text-stone-800 border-b border-stone-100 pb-2 text-sm md:text-base">
                    <BookOpen size={16} /> المتطلبات
                  </h4>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-stone-600 text-xs md:text-sm">
                        <div className="w-1 h-1 rounded-full bg-amber-500"></div> {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 font-black text-stone-800 border-b border-stone-100 pb-2 text-sm md:text-base">
                    <Flame size={16} /> طريقة الإعداد
                  </h4>
                  <div className="space-y-3">
                    {recipe.instructions.map((step, idx) => (
                      <p key={idx} className="text-stone-500 text-xs md:text-sm leading-relaxed">
                        <span className="font-black text-amber-700">{idx + 1}.</span> {step}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4 opacity-50">
               <Wand2 size={48} className="text-amber-500 mx-auto md:w-20 md:h-20" />
               <p className="text-stone-500 font-bold text-xs md:text-lg">اختر وضعاً لنبدأ السحر...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiAssistant;
