
import React from 'react';
import { Mail, Lock, User, Phone, UserPlus, ArrowLeft } from 'lucide-react';
import { View } from '../types';

interface RegisterPageProps {
  onNavigate: (view: View) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 animate__animated animate__fadeIn">
      <div className="max-w-lg w-full bg-white rounded-[40px] shadow-2xl border border-stone-100 overflow-hidden">
        <div className="bg-[#4a3728] p-10 text-center text-white relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
          <h2 className="text-3xl font-black mb-2">عضوية "ذوق"</h2>
          <p className="text-stone-300 text-sm">انضم لنخبة متذوقي الأغذية الفاخرة</p>
        </div>
        
        <div className="p-8 md:p-12 space-y-6">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-black text-stone-700 pr-2">الاسم الكامل</label>
                <div className="relative">
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="محمد الروقي" 
                    className="w-full bg-stone-50 border-none rounded-2xl pr-12 pl-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-stone-700 pr-2">رقم الجوال</label>
                <div className="relative">
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                  <input 
                    type="tel" 
                    placeholder="05xxxxxxx" 
                    className="w-full bg-stone-50 border-none rounded-2xl pr-12 pl-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all text-right"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-stone-700 pr-2">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-stone-50 border-none rounded-2xl pr-12 pl-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-stone-700 pr-2">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-stone-50 border-none rounded-2xl pr-12 pl-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-2 py-2">
              <input type="checkbox" className="w-5 h-5 rounded border-stone-300 text-amber-600 focus:ring-amber-600" />
              <label className="text-xs text-stone-500 font-medium">أوافق على <button className="text-amber-700 font-bold hover:underline">الشروط والأحكام</button> وسياسة الخصوصية.</label>
            </div>

            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-amber-900/20 transition-all active:scale-95 flex items-center justify-center gap-2">
              <UserPlus size={20} />
              إنشاء الحساب
            </button>
          </form>

          <div className="text-center pt-4 border-t border-stone-100">
            <p className="text-sm text-stone-500 font-medium">
              لديك حساب بالفعل؟{' '}
              <button 
                onClick={() => onNavigate('login')}
                className="text-amber-700 font-black hover:underline inline-flex items-center gap-1"
              >
                تسجيل الدخول <ArrowLeft size={14} />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
