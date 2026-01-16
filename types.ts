
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

export interface RecipeSuggestion {
  title: string;
  ingredients: string[];
  instructions: string[];
}
