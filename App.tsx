
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Catalog from './components/Catalog';
import GeminiAssistant from './components/GeminiAssistant';
import Collections from './components/Collections';
import QualityProcess from './components/QualityProcess'; 
import Testimonials from './components/Testimonials'; 
import AboutPage from './components/AboutPage'; 
import ContactPage from './components/ContactPage'; 
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem, Category, View } from './types';
import { Star, Truck, ShieldCheck, Clock, Instagram, Twitter, Facebook, MapPin, Phone, Mail, ArrowLeft, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stagger-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [view]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartIngredients = useMemo(() => {
    return cart.map(item => item.name);
  }, [cart]);

  const renderContent = () => {
    switch(view) {
      case 'catalog':
        return (
          <Catalog 
            products={PRODUCTS} 
            onAddToCart={addToCart} 
            onSelectProduct={setSelectedProduct} 
          />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage onNavigate={setView} />;
      case 'register':
        return <RegisterPage onNavigate={setView} />;
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] md:h-[90vh] overflow-hidden flex items-center py-20 md:py-0">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1920&q=80" 
                  alt="Zouq Hero" 
                  className="w-full h-full object-cover animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1512]/95 md:from-[#1a1512]/90 via-[#4a3728]/70 md:via-[#4a3728]/60 to-transparent" />
              </div>
              
              <div className="container mx-auto px-4 relative z-10 text-white">
                <div className="max-w-3xl animate__animated animate__fadeInRight">
                  <div className="inline-flex items-center gap-2 mb-4 md:mb-6 bg-amber-600/20 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-amber-500/30">
                    <span className="w-4 md:w-8 h-[1px] md:h-[2px] bg-amber-500"></span>
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">أصالة المذاق وجودة المصدر</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl lg:text-[100px] font-black leading-[1.1] mb-6 md:mb-8">
                    نختار <span className="text-amber-400 italic">بذوق</span> <br className="hidden sm:block" /> لتطهو بفن
                  </h1>
                  <p className="text-base md:text-xl text-stone-200 mb-8 md:mb-12 leading-relaxed max-w-xl font-light">
                    خبرة تمتد لسنوات في استيراد أجود البقوليات والتوابل العالمية. نضع بين يديك خلاصة الطبيعة.
                  </p>
                  <div className="flex flex-wrap gap-4 md:gap-6">
                    <button 
                      onClick={() => setView('catalog')}
                      className="group bg-amber-600 hover:bg-amber-700 text-white font-black px-8 py-4 md:px-12 md:py-5 rounded-2xl md:rounded-[24px] transition-all shadow-xl active:scale-95 text-sm md:text-lg flex items-center gap-2"
                    >
                      تسوق الآن
                      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <button onClick={() => setView('about')} className="flex items-center gap-3 font-bold text-white text-sm md:text-base">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur group hover:border-amber-400">
                        <Star size={18} className="fill-amber-500 text-amber-500 md:w-6 md:h-6" />
                      </div>
                      حكايتنا
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Bar */}
            <div className="container mx-auto px-4 -mt-10 md:-mt-16 relative z-20">
              <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-2xl p-6 md:p-14 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 reveal">
                {[
                  { icon: <Truck className="text-amber-700 w-6 h-6 md:w-10 md:h-10" />, title: "توصيل بارد", desc: "لحفظ الزيوت" },
                  { icon: <ShieldCheck className="text-amber-700 w-6 h-6 md:w-10 md:h-10" />, title: "ضمان 100%", desc: "استرجع طلبك" },
                  { icon: <Clock className="text-amber-700 w-6 h-6 md:w-10 md:h-10" />, title: "سرعة التنفيذ", desc: "خلال ساعتين" },
                  { icon: <Star className="text-amber-700 w-6 h-6 md:w-10 md:h-10" />, title: "منتجات ملكية", desc: "أعلى جودة" },
                ].map((f, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="mb-3 md:mb-6 bg-amber-50 p-3 md:p-5 rounded-xl md:rounded-[24px] group-hover:bg-amber-600 group-hover:text-white transition-all">
                      {f.icon}
                    </div>
                    <h3 className="font-black text-stone-900 text-sm md:text-xl mb-1">{f.title}</h3>
                    <p className="text-stone-400 text-[10px] md:text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <QualityProcess />

            <section id="products" className="py-12 md:py-24 bg-stone-50">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-20 gap-6">
                  <div className="max-w-md text-center md:text-right">
                    <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-2 md:mb-6">الأكثر <span className="text-amber-700">طلباً</span></h2>
                    <p className="text-stone-500 text-sm md:text-lg">مختارات من أفضل ما يقدمه متجر ذوق.</p>
                  </div>
                  <button 
                    onClick={() => setView('catalog')}
                    className="flex items-center gap-2 font-black text-amber-700 border-b-2 border-amber-700 pb-1 text-sm md:text-base"
                  >
                    كل المنتجات <ArrowLeft size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
                  {PRODUCTS.slice(0, 4).map((product, idx) => (
                    <div key={product.id} onClick={() => setSelectedProduct(product)} className="stagger-item">
                      <ProductCard product={product} onAddToCart={addToCart} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-10 md:py-12">
              <div className="container mx-auto px-4">
                <GeminiAssistant selectedIngredients={cartIngredients} />
              </div>
            </section>

            <Collections />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-['Cairo'] bg-stone-50 text-right overflow-x-hidden" dir="rtl">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        onNavigate={setView}
      />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-stone-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
                 <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center">
                   <span className="text-2xl font-black text-white">ذ</span>
                 </div>
                 <span className="text-2xl font-bold text-white">ذوق</span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">
                وجهتكم الأولى للأغذية الفاخرة والمختارة بذوق. نجمع لكم أصالة المذاق في تجربة فريدة.
              </p>
              <div className="flex gap-4">
                <Instagram className="text-stone-500 hover:text-amber-500 cursor-pointer transition-colors" />
                <Twitter className="text-stone-500 hover:text-amber-500 cursor-pointer transition-colors" />
                <Facebook className="text-stone-500 hover:text-amber-500 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div className="hidden md:block">
              <h4 className="font-bold mb-6 text-lg">روابط سريعة</h4>
              <ul className="space-y-4 text-stone-400 text-sm">
                <li onClick={() => setView('about')} className="hover:text-amber-500 cursor-pointer transition-colors">حكايتنا</li>
                <li onClick={() => setView('contact')} className="hover:text-amber-500 cursor-pointer transition-colors">اتصل بنا</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">سياسة الاسترجاع</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">الشحن والتوصيل</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg">تواصل معنا</h4>
              <ul className="space-y-4 text-stone-400 text-sm">
                <li className="flex items-center gap-3"><MapPin size={18} className="text-amber-600" /> الرياض، حي العقيق</li>
                <li className="flex items-center gap-3" dir="ltr"><Phone size={18} className="text-amber-600" /> +966 9200 12345</li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-amber-600" /> hello@zouq.sa</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg">النشرة البريدية</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="بريدك" className="bg-stone-800 border-none rounded-xl px-4 py-3 text-sm flex-grow outline-none" />
                <button className="bg-amber-600 hover:bg-amber-700 p-3 rounded-xl transition-all">
                  <ArrowLeft size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-center text-stone-500 text-[10px] md:text-xs">
            <p>جميع الحقوق محفوظة لمتجر ذوق © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQuantity={updateQuantity} 
        onRemove={removeFromCart} 
      />

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={addToCart} 
        />
      )}
    </div>
  );
};

export default App;
