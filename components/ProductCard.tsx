
import React from 'react';
import { Plus, Weight, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-[32px] border border-stone-100 overflow-hidden hover:shadow-2xl hover:shadow-stone-200 transition-all duration-500 relative flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-stone-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-black text-[#4a3728] shadow-sm">
          <Weight size={14} className="text-amber-600" />
          {product.weight}
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-xl text-stone-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Heart size={18} />
        </button>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-black text-stone-800 group-hover:text-amber-700 transition-colors line-clamp-1 mb-2">
            {product.name}
          </h3>
          <p className="text-stone-500 text-sm line-clamp-2 leading-relaxed h-10">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
          <div className="flex flex-col">
            <span className="text-stone-400 text-xs font-bold mb-1 uppercase tracking-widest">السعر</span>
            <span className="text-amber-700 font-black text-2xl">
              {product.price} <span className="text-xs font-bold text-stone-400 mr-1">ر.س</span>
            </span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-[#4a3728] text-white p-4 rounded-2xl hover:bg-amber-600 transition-all shadow-xl shadow-[#4a3728]/10 active:scale-90 group-hover:rotate-[360deg] duration-700"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
