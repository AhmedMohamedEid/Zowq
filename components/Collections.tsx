
import React from 'react';
import { Gift, ShoppingBag } from 'lucide-react';

const COLLECTIONS = [
  {
    id: 'c1',
    title: 'مجموعة ضيافة ذوق (تشكيلة التمر)',
    desc: 'بوكس إهدائي فاخر يحتوي على (عجوة المدينة، مجدول، وسكري مفتل) لضيافة سعودية أصيلة تليق بضيوفك.',
    price: 275,
    oldPrice: 320,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    tag: 'الأكثر مبيعاً'
  },
  {
    id: 'c2',
    title: 'حقيبة "بهاراتي" الأساسية',
    desc: 'مزيج من التوابل التي لا يخلو منها مطبخ: (فلفل أسود، كمون، قرفة، زنجبيل، وشطة) بجودة "ذوق" المضمونة.',
    price: 135,
    oldPrice: 160,
    image: 'https://images.unsplash.com/photo-1599940824399-b87987cb947d?auto=format&fit=crop&w=800&q=80',
    tag: 'توفير 15%'
  },
  {
    id: 'c3',
    title: 'بوكس "وليمة العائلة"',
    desc: 'كل ما تحتاجه للوجبة الكبيرة: أرز بسمتي حبة طويلة، عدس أحمر، وتشكيلة بهارات الكبسة الخاصة بنا.',
    price: 110,
    oldPrice: 135,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
    tag: 'إصدار محدود'
  }
];

const Collections: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-xl text-right">
            <div className="flex items-center gap-3 text-amber-700 font-bold mb-4 justify-end md:justify-start">
              <Gift size={24} />
              <span>الإهداء والتميز</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 leading-tight">
              مجموعات <span className="text-amber-700">ذوق</span> المختارة
            </h2>
          </div>
          <p className="text-stone-500 font-bold max-w-sm text-center md:text-right">
            وفرنا عليك عناء الاختيار بجمع أفضل الأصناف في مجموعات فاخرة تناسب احتياجاتك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {COLLECTIONS.map((col, idx) => (
            <div 
              key={col.id} 
              className="group relative bg-white rounded-[32px] md:rounded-[40px] overflow-hidden border border-stone-100 shadow-xl hover:shadow-2xl transition-all duration-700 md:hover:-translate-y-4 stagger-item"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-amber-600 text-white text-[10px] font-black px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest shadow-lg">
                  {col.tag}
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-xl md:text-2xl font-black text-stone-900 group-hover:text-amber-700 transition-colors">{col.title}</h3>
                  <p className="text-stone-500 text-xs md:text-sm leading-relaxed line-clamp-2">{col.desc}</p>
                </div>

                <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-stone-50">
                  <div className="flex flex-col text-right">
                    <span className="text-stone-400 text-[10px] md:text-xs line-through">{col.oldPrice} ر.س</span>
                    <span className="text-lg md:text-2xl font-black text-amber-700">{col.price} <span className="text-sm">ر.س</span></span>
                  </div>
                  <button className="flex items-center gap-2 bg-[#4a3728] text-white px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-amber-700 transition-all shadow-lg active:scale-95 group/btn text-xs md:text-base">
                    <ShoppingBag size={18} className="group-hover/btn:rotate-12 transition-transform" />
                    <span>اطلب الآن</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
