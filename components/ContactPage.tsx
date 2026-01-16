
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="animate__animated animate__fadeIn">
      {/* Header */}
      <section className="bg-stone-900 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black mb-6">يسعدنا <span className="text-amber-500">سماع</span> صوتك</h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">نحن هنا للإجابة على استفساراتكم وملاحظاتكم بكل رحابة صدر.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-8">
              {[
                { icon: <Phone />, title: 'اتصل بنا', detail: '+966 9200 12345', sub: 'متاح من 9ص - 9م' },
                { icon: <Mail />, title: 'راسلنا', detail: 'hello@zouq.sa', sub: 'نرد خلال 24 ساعة' },
                { icon: <MapPin />, title: 'موقعنا', detail: 'حي العقيق، الرياض', sub: 'المملكة العربية السعودية' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 bg-white p-8 rounded-[32px] border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-700 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-stone-900 text-xl mb-1">{item.title}</h3>
                    <p className="text-amber-700 font-bold mb-1" dir="ltr">{item.detail}</p>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">{item.sub}</p>
                  </div>
                </div>
              ))}

              <div className="bg-[#4a3728] text-white p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-black text-2xl mb-4">خدمة العملاء</h3>
                  <p className="text-stone-300 mb-8 leading-relaxed">فريقنا متاح دائماً لمساعدتك في اختيار المنتجات المناسبة لوصفاتك.</p>
                  <button className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-bold transition-all w-full justify-center">
                    <MessageCircle size={20} />
                    واتساب مباشر
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[48px] p-8 lg:p-16 shadow-xl border border-stone-100">
                {submitted ? (
                  <div className="text-center py-20 space-y-6 animate__animated animate__zoomIn">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Send size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-stone-900">وصلت رسالتك!</h2>
                    <p className="text-stone-500 text-lg">شكراً لتواصلك مع ذوق. سيتصل بك أحد خبراء الجودة قريباً.</p>
                    <button onClick={() => setSubmitted(false)} className="text-amber-700 font-bold underline">إرسال رسالة أخرى</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-sm font-black text-stone-700 pr-2">الاسم بالكامل</label>
                        <input required type="text" placeholder="مثلاً: محمد الروقي" className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-black text-stone-700 pr-2">البريد الإلكتروني</label>
                        <input required type="email" placeholder="example@mail.com" className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-stone-700 pr-2">الموضوع</label>
                      <select className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all appearance-none cursor-pointer">
                        <option>استفسار عن طلب</option>
                        <option>جودة المنتجات</option>
                        <option>اقتراحات</option>
                        <option>أخرى</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-stone-700 pr-2">رسالتك</label>
                      <textarea required rows={6} placeholder="كيف يمكننا مساعدتك اليوم؟" className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-amber-900/20 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg">
                      <Send size={24} />
                      إرسال الرسالة
                    </button>
                  </form>
                )}
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-12 h-80 bg-stone-100 rounded-[48px] overflow-hidden relative shadow-inner border border-stone-200">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-4">
                  <MapPin size={48} strokeWidth={1} />
                  <p className="font-bold">موقعنا في الرياض - حي العقيق</p>
                  <button className="text-amber-700 text-sm font-black border border-amber-700/30 px-6 py-2 rounded-full hover:bg-amber-50">فتح في خرائط جوجل</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
