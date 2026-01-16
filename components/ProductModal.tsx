
import React from 'react';
import { X, Plus, Minus, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md text-stone-800 transition-all"
        >
          <X size={24} />
        </button>

        <div className="md:w-1/2 h-[300px] md:h-auto relative bg-stone-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 bg-amber-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
            {product.weight}
          </div>
        </div>

        <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <span className="text-amber-700 font-bold text-sm tracking-widest uppercase mb-2 block">متجر ذوق للأغذية الفاخرة</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">{product.name}</h2>
            <div className="text-2xl font-bold text-amber-700 mb-6">
              {product.price} ر.س
            </div>
            <p className="text-stone-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 text-stone-500 text-sm">
              <Truck size={18} className="text-amber-600" />
              <span>توصيل خلال 24 ساعة</span>
            </div>
            <div className="flex items-center gap-3 text-stone-500 text-sm">
              <ShieldCheck size={18} className="text-amber-600" />
              <span>جودة مضمونة 100%</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 bg-[#4a3728] hover:bg-amber-800 text-white font-bold py-4 rounded-2xl shadow-xl shadow-stone-200 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
