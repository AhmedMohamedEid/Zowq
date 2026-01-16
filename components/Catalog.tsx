
import React, { useState } from 'react';
/* Added Search to imports to fix "Cannot find name 'Search'" error */
import { Filter, Grid, List, ChevronDown, Check, Search } from 'lucide-react';
import { Product, Category } from '../types';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../constants';

interface CatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ products, onAddToCart, onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-12 animate__animated animate__fadeIn">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Filters - Odoo Style */}
        <aside className="lg:w-1/4 space-y-10">
          <div>
            <h3 className="text-xl font-black text-stone-900 mb-6 flex items-center gap-2">
              <Filter size={20} className="text-amber-700" />
              الأقسام
            </h3>
            <div className="space-y-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all group ${
                    activeCategory === cat.id 
                      ? 'bg-[#4a3728] text-white shadow-lg' 
                      : 'bg-white hover:bg-stone-100 text-stone-600'
                  }`}
                >
                  <span className="font-bold">{cat.name}</span>
                  {activeCategory === cat.id ? <Check size={18} /> : <div className="w-5 h-5 border-2 border-stone-200 rounded-md group-hover:border-amber-600 transition-colors" />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 p-8 rounded-[32px] border border-amber-100">
            <h4 className="font-black text-amber-900 mb-4 text-lg">تحتاج مساعدة؟</h4>
            <p className="text-amber-800 text-sm leading-relaxed mb-6">
              فريق خدمة العملاء جاهز لمساعدتك في اختيار أفضل أنواع البقوليات والتوابل.
            </p>
            <button className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl hover:bg-amber-700 transition-colors">
              تحدث معنا
            </button>
          </div>
        </aside>

        {/* Main Products Area */}
        <main className="lg:w-3/4 flex-grow">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-[24px] border border-stone-100 mb-10 gap-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black text-stone-900">
                {CATEGORIES.find(c => c.id === activeCategory)?.name}
              </h2>
              <span className="px-3 py-1 bg-stone-100 rounded-full text-stone-400 text-sm font-bold">
                {filteredProducts.length} منتج
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex bg-stone-100 p-1.5 rounded-xl">
                <button className="p-2 bg-white shadow-sm rounded-lg text-amber-700"><Grid size={18} /></button>
                <button className="p-2 text-stone-400 hover:text-stone-600 transition-colors"><List size={18} /></button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-3 px-5 py-2.5 bg-white border border-stone-200 rounded-xl font-bold text-stone-700 hover:border-amber-600 transition-all">
                  الأحدث <ChevronDown size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <div 
                key={product.id} 
                className="animate__animated animate__fadeInUp" 
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => onSelectProduct(product)}
              >
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[40px] border border-stone-100">
              <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-stone-300" />
              </div>
              <h3 className="text-2xl font-black text-stone-800 mb-2">لا توجد منتجات</h3>
              <p className="text-stone-500">حاول تغيير الفلاتر أو البحث عن شيء آخر.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Catalog;
