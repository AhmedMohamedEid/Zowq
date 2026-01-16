
import React from 'react';
import { Plus, Weight, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-[24px] md:rounded-[32px] border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-500 relative flex flex-col h-full shadow-sm">
      <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-stone-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-2 right-2 md:top-4 md:right-4 p-1.5 md:p-2 bg-white/90 backdrop-blur rounded-lg text-stone-300 hover:text-red-500 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100">
          <Heart size={16} />
        </div>
      </div>
      
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 mb-1 uppercase tracking-wider">
            <Weight size={12} />
            {product.weight}
          </div>
          <h3 className="text-base md:text-xl font-black text-stone-800 group-hover:text-amber-700 transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
          <p className="text-stone-500 text-xs md:text-sm line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-50">
          <div className="flex flex-col">
            <span className="text-amber-700 font-black text-lg md:text-2xl">
              {product.price} <span className="text-[10px] md:text-xs font-bold text-stone-400 mr-1">ر.س</span>
            </span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-[#4a3728] text-white p-2.5 md:p-4 rounded-xl md:rounded-2xl hover:bg-amber-600 transition-all active:scale-90"
          >
            <Plus size={18} className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
