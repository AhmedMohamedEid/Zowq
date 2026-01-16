
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Catalog from './components/Catalog';
import GeminiAssistant from './components/GeminiAssistant';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem, Category } from './types';
import { Star, Truck, ShieldCheck, Clock, Instagram, Twitter, Facebook, MapPin, Phone, Mail, ArrowLeft, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'catalog'>('home');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Scroll revelation logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stagger-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [view]);

  const filteredProducts = useMemo(() => {
    return activeCategory === 'all' 
      ? PRODUCTS.slice(0, 8) // Show top 8 on home
      : PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

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

  return (
    <div className="min-h-screen flex flex-col font-['Cairo'] bg-stone-50">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        onNavigate={setView}
      />

      <main className="flex-grow transition-opacity duration-500">
        {view === 'home' ? (
          <>
            {/* Hero Section */}
            <section className="relative h-[90vh] overflow-hidden flex items-center">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1920&q=80" 
                  alt="Zouq Hero" 
                  className="w-full h-full object-cover animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1512]/90 via-[#4a3728]/60 to-transparent" />
              </div>
              
              <div className="container mx-auto px-4 relative z-10 text-white">
                <div className="max-w-3xl animate__animated animate__fadeInRight">
                  <div className="inline-flex items-center gap-3 mb-6 bg-amber-600/20 backdrop-blur px-4 py-2 rounded-full border border-amber-500/30">
                    <span className="w-8 h-[2px] bg-amber-500"></span>
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">أصالة المذاق وجودة المصدر</span>
                  </div>
                  <h1 className="text-6xl lg:text-[100px] font-black leading-[1] mb-8">
                    نختار <span className="text-amber-400 italic">بذوق</span> <br /> لتطهو بفن
                  </h1>
                  <p className="text-xl text-stone-200 mb-12 leading-relaxed max-w-xl font-light">
                    خبرة تمتد لسنوات في استيراد أجود البقوليات والتوابل العالمية. نضع بين يديك خلاصة الطبيعة في تغليف عصري يحفظ الأمانة.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <button 
                      onClick={() => setView('catalog')}
                      className="group bg-amber-600 hover:bg-amber-700 text-white font-black px-12 py-5 rounded-[24px] transition-all shadow-2xl shadow-amber-900/40 active:scale-95 text-lg flex items-center gap-3"
                    >
                      تسوق الآن
                      <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
                    </button>
                    <button className="flex items-center gap-4 font-bold text-white hover:text-amber-400 transition-all">
                      <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 backdrop-blur group hover:border-amber-400">
                        <Star size={24} className="fill-amber-500 text-amber-500" />
                      </div>
                      شاهد الجودة
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Bar */}
            <div className="container mx-auto px-4 -mt-16 relative z-20">
              <div className="bg-white rounded-[40px] shadow-2xl p-8 lg:p-14 grid grid-cols-2 lg:grid-cols-4 gap-12 reveal">
                {[
                  { icon: <Truck size={40} className="text-amber-700" />, title: "توصيل بارد", desc: "لحفظ زيوت التوابل" },
                  { icon: <ShieldCheck size={40} className="text-amber-700" />, title: "ضمان 100%", desc: "استرجع إذا لم تعجبك" },
                  { icon: <Clock size={40} className="text-amber-700" />, title: "سرعة التنفيذ", desc: "طلبك يصل في ساعتين" },
                  { icon: <Star size={40} className="text-amber-700" />, title: "منتجات ملكية", desc: "أعلى جودة عالمية" },
                ].map((f, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="mb-6 bg-amber-50 p-5 rounded-[24px] group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">
                      {f.icon}
                    </div>
                    <h3 className="font-black text-stone-900 text-xl mb-2">{f.title}</h3>
                    <p className="text-stone-500 text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Home Products Highlight */}
            <section id="products" className="py-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-8">
                  <div className="max-w-md">
                    <h2 className="text-5xl font-black text-stone-900 mb-6 leading-tight">منتجاتنا الأكثر <span className="text-amber-700">طلباً</span></h2>
                    <p className="text-stone-500 text-lg">مختارات من أفضل ما يقدمه متجر ذوق لعملائه المتميزين.</p>
                  </div>
                  <button 
                    onClick={() => setView('catalog')}
                    className="flex items-center gap-3 font-black text-amber-700 border-b-2 border-amber-700 pb-2 hover:text-amber-900 hover:border-amber-900 transition-all group"
                  >
                    مشاهدة كل المنتجات <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {PRODUCTS.slice(0, 4).map((product, idx) => (
                    <div key={product.id} onClick={() => setSelectedProduct(product)} className="stagger-item">
                      <ProductCard product={product} onAddToCart={addToCart} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* AI Assistant Banner */}
            <section className="py-12">
              <div className="container mx-auto px-4">
                <GeminiAssistant selectedIngredients={cartIngredients} />
              </div>
            </section>
          </>
        ) : (
          <Catalog 
            products={PRODUCTS} 
            onAddToCart={addToCart} 
            onSelectProduct={setSelectedProduct} 
          />
        )}

        {/* Info Section / About */}
        <section id="about" className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative stagger-item">
                <div className="aspect-square rounded-[60px] overflow-hidden shadow-3xl">
                  <img src="https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=1200&q=80" alt="Authentic Dates" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#4a3728] text-white p-12 rounded-[40px] shadow-2xl hidden lg:block animate__animated animate__bounceIn">
                  <p className="text-5xl font-black mb-2 tracking-tighter">10+ سنين</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-amber-500">من العطاء والأصالة</p>
                </div>
              </div>
              
              <div className="space-y-10 stagger-item">
                <div className="space-y-6">
                  <h3 className="text-amber-700 font-black tracking-[0.3em] uppercase text-sm">حكاية بدأت بشغف</h3>
                  <h2 className="text-6xl font-black text-stone-900 leading-[1.1]">نعيد تعريف <br /> معنى <span className="text-amber-600">الجودة</span></h2>
                </div>
                <p className="text-stone-600 text-2xl leading-relaxed font-light">
                  في "ذوق"، نحن نؤمن أن الطبخ هو تعبير عن الكرم. لذا، نسعى جاهدين لتوفير مكونات تليق بكرم ضيافتكم وتفاصيل بيوتكم.
                </p>
                <div className="grid sm:grid-cols-2 gap-12">
                  <div className="bg-stone-50 p-8 rounded-[32px] border-r-4 border-amber-600">
                    <h4 className="font-black text-xl text-stone-900 mb-3">رؤيتنا</h4>
                    <p className="text-stone-500 text-sm">أن يصبح "ذوق" المرجع الأول لكل مطبخ عربي يبحث عن التميز والفرادة.</p>
                  </div>
                  <div className="bg-stone-50 p-8 rounded-[32px] border-r-4 border-amber-600">
                    <h4 className="font-black text-xl text-stone-900 mb-3">قيمنا</h4>
                    <p className="text-stone-500 text-sm">الأمانة في المصدر، الدقة في التفاصيل، والولاء المطلق لعملائنا.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer id="contact" className="bg-[#1a1512] text-stone-300 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24 border-b border-stone-800 pb-24">
            <div className="space-y-10">
              <div className="flex flex-col">
                 <span className="text-5xl font-black text-white tracking-tighter">ذوق</span>
                 <span className="text-xs text-amber-600 font-black uppercase tracking-[0.4em] leading-none mt-2">Premium Spice House</span>
              </div>
              <p className="text-xl leading-relaxed text-stone-400 font-light">
                نحن نؤمن أن كل حبة توابل أو تمر تحمل قصة أرض بعيدة، ونحن هنا لننقل تلك القصص إلى مائدتكم.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 rounded-[20px] bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all transform hover:-translate-y-2">
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-white font-black text-2xl">تواصل معنا</h4>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-stone-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-amber-600"><MapPin size={24} /></div>
                  <span className="text-lg">المنطقة الصناعية، الرياض، المملكة العربية السعودية</span>
                </li>
                <li className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-stone-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-amber-600"><Phone size={24} /></div>
                  <span className="text-lg" dir="ltr">+966 9200 000 00</span>
                </li>
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-white font-black text-2xl">أقسام المتجر</h4>
              <ul className="space-y-5">
                {CATEGORIES.slice(1).map(cat => (
                  <li key={cat.id}>
                    <button onClick={() => { setView('catalog'); setActiveCategory(cat.id as Category); }} className="hover:text-amber-500 transition-colors flex items-center gap-4 text-lg">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-white font-black text-2xl">النشرة الإخبارية</h4>
              <p className="text-stone-400 text-lg">احصل على عروضنا الحصرية والوصفات الموسمية مباشرة في بريدك.</p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="w-full bg-stone-800 border-none rounded-[20px] px-6 py-5 text-white focus:ring-2 focus:ring-amber-600 outline-none transition-all"
                />
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-black py-5 rounded-[20px] transition-all shadow-xl shadow-amber-900/20 active:scale-95 uppercase tracking-widest">
                  اشترك الآن
                </button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-stone-500 font-bold">
            <p>© {new Date().getFullYear()} متجر ذوق. جميع الحقوق محفوظة.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-amber-500 transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors">اتفاقية الخدمة</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={addToCart}
      />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
