
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, User, X, ChevronDown } from 'lucide-react';
import { View } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (v: View) => {
    onNavigate(v);
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white shadow-md h-20' : 'bg-white/80 backdrop-blur-md h-24'
    }`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        <button 
          className="lg:hidden p-3 bg-stone-100 rounded-2xl text-[#4a3728] hover:bg-amber-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav('home')}>
          <div className="flex flex-col items-center">
            <div className="relative w-14 h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform">
               <svg viewBox="0 0 100 80" className="w-full h-full fill-[#4a3728]">
                 <path d="M50,10 C25,10 5,30 5,55 L95,55 C95,30 75,10 50,10 Z M50,5 C53,5 55,7 55,10 C55,13 53,15 50,15 C47,15 45,13 45,10 C45,7 47,5 50,5 Z" />
                 <path d="M30,50 C35,40 45,35 55,40 C65,45 70,55 65,65" fill="none" stroke="#d97706" strokeWidth="2" />
               </svg>
            </div>
            <span className="text-xl font-bold text-[#4a3728] -mt-1 tracking-tight">ذوق</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-bold text-stone-700">
          <button onClick={() => handleNav('home')} className="hover:text-amber-700 transition-colors">الرئيسية</button>
          <div className="relative group">
            <button 
              onClick={() => handleNav('catalog')}
              className="flex items-center gap-1 hover:text-amber-700 transition-colors"
            >
              المنتجات <ChevronDown size={16} />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-2xl border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <button onClick={() => handleNav('catalog')} className="w-full text-right px-6 py-3 hover:bg-amber-50 hover:text-amber-700 transition-colors">بقوليات</button>
              <button onClick={() => handleNav('catalog')} className="w-full text-right px-6 py-3 hover:bg-amber-50 hover:text-amber-700 transition-colors">تمور فاخرة</button>
              <button onClick={() => handleNav('catalog')} className="w-full text-right px-6 py-3 hover:bg-amber-50 hover:text-amber-700 transition-colors">توابل ذوق</button>
            </div>
          </div>
          <button onClick={() => handleNav('about')} className="hover:text-amber-700 transition-colors">حكايتنا</button>
          <button onClick={() => handleNav('contact')} className="hover:text-amber-700 transition-colors">اتصل بنا</button>
        </nav>

        <div className="flex items-center gap-2 lg:gap-4">
          <button 
            onClick={() => handleNav('login')}
            className="p-3 hover:bg-stone-100 rounded-2xl transition-colors text-stone-700"
          >
            <User size={22} />
          </button>
          <button 
            onClick={onOpenCart}
            className="relative p-3 bg-[#4a3728] text-white rounded-2xl hover:bg-amber-800 transition-all shadow-lg hover:shadow-amber-900/20 active:scale-95"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full min-w-[20px] text-center border-2 border-white animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 z-[90] bg-white transition-all duration-500 transform ${
        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div className="pt-28 px-6 space-y-8">
          <div className="flex flex-col gap-6">
            <button onClick={() => handleNav('home')} className="text-3xl font-black text-stone-800 text-right">الرئيسية</button>
            <button onClick={() => handleNav('catalog')} className="text-3xl font-black text-stone-800 text-right">تسوق المنتجات</button>
            <button onClick={() => handleNav('about')} className="text-3xl font-black text-stone-800 text-right">حكايتنا</button>
            <button onClick={() => handleNav('contact')} className="text-3xl font-black text-stone-800 text-right">اتصل بنا</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
