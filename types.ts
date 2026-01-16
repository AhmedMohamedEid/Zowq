
export interface Product {
  id: string;
  name: string;
  category: 'legumes' | 'dates' | 'rice' | 'spices';
  price: number;
  description: string;
  image: string;
  weight: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'all' | 'legumes' | 'dates' | 'rice' | 'spices';

export type View = 'home' | 'catalog' | 'about' | 'contact' | 'login' | 'register';

export type SuggestionMode = 'recipe' | 'spice_blend' | 'chef_hack';

export interface RecipeSuggestion {
  title: string;
  type: SuggestionMode;
  ingredients: string[];
  instructions: string[];
  pro_tip?: string;
}
