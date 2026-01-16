
import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove 
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute inset-y-0 left-0 max-w-md w-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-amber-700" />
            <h2 className="text-xl font-bold text-stone-800">سلة التسوق</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400 gap-4">
              <ShoppingBag size={64} strokeWidth={1} />
              <p className="text-lg">السلة فارغة حالياً</p>
              <button 
                onClick={onClose}
                className="text-amber-700 font-bold hover:underline"
              >
                ابدأ التسوق الآن
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 rounded-xl object-cover bg-stone-100"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-bold text-stone-800">{item.name}</h4>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-stone-500 text-sm mb-3">{item.weight}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1.5 hover:bg-stone-200 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1.5 hover:bg-stone-200 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-bold text-amber-700">
                        {item.price * item.quantity} ر.س
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-stone-50 border-t border-stone-200 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="text-stone-600">المجموع الإجمالي</span>
              <span className="font-bold text-2xl text-stone-900">{total} ر.س</span>
            </div>
            <p className="text-xs text-stone-400 text-center">الأسعار تشمل ضريبة القيمة المضافة</p>
            <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-700/20 transition-all active:scale-95">
              إتمام الطلب
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
