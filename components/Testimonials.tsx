
import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'سارة العتيبي',
    role: 'طاهية محترفة',
    text: 'بهارات الكبسة من ذوق غيرت طعم أطباقي تماماً. الرائحة قوية وطازجة وكأنها طُحنت للتو. أنصح بها بشدة.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sara'
  },
  {
    name: 'محمد الدوسري',
    role: 'عميل دائم',
    text: 'تمر السكري عندهم حكايته حكاية، مغلف بطريقة فاخرة جداً ويصل في وقت قياسي. أفضل مكان للتمور الفاخرة.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=mohammed'
  },
  {
    name: 'نورة السعيد',
    role: 'ربة منزل',
    text: 'جربت الأرز البسمتي، الحبة طويلة جداً ولا تكسر. نظافة البقوليات عندهم تريحني من عناء التنقية الطويل.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=noura'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#fcfaf7]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-black text-stone-900 mb-2">عائلة <span className="text-amber-700">ذوق</span></h2>
            <p className="text-stone-500 font-bold">أكثر من 5000 عميل يثقون في جودتنا</p>
          </div>
          <div className="hidden md:flex gap-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-amber-500 text-amber-500" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] shadow-xl shadow-stone-200/50 relative stagger-item">
              <Quote className="absolute top-8 left-8 text-amber-500/10" size={60} />
              <div className="flex items-center gap-4 mb-8">
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
                <div>
                  <h4 className="font-black text-stone-900">{review.name}</h4>
                  <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} className="fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-stone-600 leading-relaxed italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
