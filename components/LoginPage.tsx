
import React from 'react';
import { Mail, Lock, LogIn, ArrowLeft, Github, Chrome } from 'lucide-react';
import { View } from '../types';

interface LoginPageProps {
  onNavigate: (view: View) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 animate__animated animate__fadeIn">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl border border-stone-100 overflow-hidden">
        <div className="bg-[#4a3728] p-10 text-center text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
          <h2 className="text-3xl font-black mb-2">مرحباً بك مجدداً</h2>
          <p className="text-stone-300 text-sm">سعداء بعودتك لأسرة "ذوق"</p>
        </div>
        
        <div className="p-8 md:p-12 space-y-6">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
              <div className="flex justify-between items-center px-2">
                <label className="text-xs font-black text-stone-700">كلمة المرور</label>
                <button className="text-[10px] font-bold text-amber-700 hover:underline">نسيت كلمة المرور؟</button>
              </div>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-stone-50 border-none rounded-2xl pr-12 pl-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-amber-900/20 transition-all active:scale-95 flex items-center justify-center gap-2">
              <LogIn size={20} />
              تسجيل الدخول
            </button>
          </form>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-100"></div></div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest text-stone-400">
              <span className="bg-white px-4">أو الدخول عبر</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-3 border border-stone-100 rounded-xl hover:bg-stone-50 transition-colors">
              <Chrome size={18} className="text-red-500" />
              <span className="text-xs font-bold text-stone-600">جوجل</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 border border-stone-100 rounded-xl hover:bg-stone-50 transition-colors">
              <Github size={18} className="text-stone-900" />
              <span className="text-xs font-bold text-stone-600">جيت هب</span>
            </button>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-stone-500 font-medium">
              ليس لديك حساب؟{' '}
              <button 
                onClick={() => onNavigate('register')}
                className="text-amber-700 font-black hover:underline inline-flex items-center gap-1"
              >
                إنشاء حساب جديد <ArrowLeft size={14} />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
