
import React from 'react';
import { Award, Heart, Globe, Users, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1920&q=80" 
          alt="Our Heritage" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#4a3728]/70 backdrop-blur-sm" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">حكاية <span className="text-amber-500 italic">ذوق</span></h1>
          <p className="text-xl max-w-2xl mx-auto font-light leading-relaxed">
            من قلب الجزيرة العربية، انطلقنا لنبحث عن الجودة في كل حبة توابل، لنقدمها لكم بشغف وأمانة.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-amber-50 text-amber-700 font-bold rounded-lg text-sm tracking-widest uppercase">من نحن؟</div>
              <h2 className="text-4xl font-black text-stone-900 leading-tight">بدأنا بشغف.. <br /> وأصبحنا وجهة الباحثين عن <span className="text-amber-700">التميز</span></h2>
              <p className="text-stone-500 text-lg leading-relaxed">
                في عام 2014، كانت البداية متواضعة، مدفوعة برؤية واضحة: إعادة الاعتبار للجودة في سوق المواد الغذائية الأساسية. لاحظنا أن السوق يفتقر إلى المعايير الملكية في التوابل والتمور، فقررنا أن نكون الجسر بين المزارع العالمية ومطبخكم.
              </p>
              <p className="text-stone-500 text-lg leading-relaxed">
                اليوم، "ذوق" ليست مجرد متجر، بل هي علامة تجارية يثق بها آلاف الطهاة وربات البيوت في جميع أنحاء المملكة، بفضل التزامنا الصارم بمعايير التنقية والتغليف.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-100">
                <div>
                  <h4 className="text-3xl font-black text-amber-700 mb-1">+500</h4>
                  <p className="text-stone-400 font-bold text-sm">منتج مختار بعناية</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-amber-700 mb-1">+100k</h4>
                  <p className="text-stone-400 font-bold text-sm">عميل سعيد</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1506764519623-6e1919808d2a?auto=format&fit=crop&w=800&q=80" alt="Dates selection" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-600 rounded-[40px] p-8 text-white hidden md:flex flex-col justify-end shadow-3xl">
                <Award size={48} className="mb-4" />
                <p className="font-black text-xl leading-tight">ضمان الجودة الملكية في كل عبوة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-stone-900 mb-4">قيمنا التي <span className="text-amber-700">نعتز بها</span></h2>
            <p className="text-stone-500 font-bold">المبادئ التي تقودنا في كل قرار نتخذه</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Heart className="text-amber-700" size={32} />, title: 'الأمانة', desc: 'نتعامل مع كل منتج وكأننا سنقدمه لعائلتنا، لا تنازل عن النظافة والجودة.' },
              { icon: <Globe className="text-amber-700" size={32} />, title: 'الاستدامة', desc: 'ندعم المزارعين الذين يتبعون أساليب زراعة مستدامة تحافظ على البيئة.' },
              { icon: <Target className="text-amber-700" size={32} />, title: 'الابتكار', desc: 'نبحث دائماً عن طرق تغليف وحفظ متطورة تضمن وصول النكهة طازجة.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] border border-stone-100 hover:shadow-xl transition-all group text-center">
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black text-stone-900 mb-4">{v.title}</h3>
                <p className="text-stone-500 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
