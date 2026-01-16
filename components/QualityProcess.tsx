
import React from 'react';
import { Search, ShieldCheck, Zap, Award } from 'lucide-react';

const STEPS = [
  {
    icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'الاختيار الدقيق',
    desc: 'نسافر لنختار أجود المحاصيل من مزارعها الأصلية.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'التنقية والفرز',
    desc: 'تمر كل حبة بمراحل تنقية يدوية وآلية دقيقة.'
  },
  {
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'تغليف ذكي',
    desc: 'تقنيات تغليف تسحب الأكسجين للحفاظ على الزيوت.'
  },
  {
    icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'ضمان ذوق',
    desc: 'نضمن لك الرضا الكامل أو الاسترجاع الفوري.'
  }
];

const QualityProcess: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-black text-stone-900 mb-3 md:mb-6">سر <span className="text-amber-700">التميز</span> في ذوق</h2>
          <p className="text-stone-500 text-sm md:text-lg font-bold">نحن لا نبيع مجرد مواد غذائية، نحن نقدم لك نتيجة شغف.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative group text-center stagger-item">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-stone-50 rounded-2xl md:rounded-[32px] flex items-center justify-center mx-auto mb-4 md:mb-8 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-base md:text-2xl font-black text-stone-900 mb-2 md:mb-4">{step.title}</h3>
              <p className="text-stone-400 text-xs md:text-stone-500 leading-relaxed font-medium px-2 md:px-0">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;
