
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'زعفران سوبر نقيل فاخر',
    category: 'spices',
    price: 185,
    description: 'الذهب الأحمر النقي، مياسم طويلة مصنفة كأعلى جودة عالمياً، نكهة ولون لا يضاهى.',
    image: 'https://images.unsplash.com/photo-1599307767316-776533da941c?auto=format&fit=crop&w=600&q=80',
    weight: '5 جرام'
  },
  {
    id: '2',
    name: 'تمر سكري مفتل ملكي',
    category: 'dates',
    price: 65,
    description: 'حبات ذهبية منتقاة بعناية من مزارع القصيم، تذوب في الفم بحلاوة طبيعية فريدة.',
    image: 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=600&q=80',
    weight: '1 كجم'
  },
  {
    id: '3',
    name: 'هيل هندي جامبو (درجة أولى)',
    category: 'spices',
    price: 110,
    description: 'حبات خضراء كبيرة ممتلئة بالزيوت العطرية، سر رائحة القهوة العربية الأصيلة.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    weight: '500 جم'
  },
  {
    id: '4',
    name: 'أرز بسمتي عنبر كلاسيك',
    category: 'rice',
    price: 95,
    description: 'أرز العنبر طويل الحبة المشهور برائحته الزكية التي تملأ المكان، ملك الولائم العربية.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    weight: '5 كجم'
  },
  {
    id: '5',
    name: 'عدس أحمر تركي منقى',
    category: 'legumes',
    price: 14,
    description: 'حبات منقاة ومغسولة بعناية، ناعمة القوام وسريعة النضج لتحضير ألذ شوربة دافئة.',
    image: 'https://images.unsplash.com/photo-1585996853880-bd94782de12d?auto=format&fit=crop&w=600&q=80',
    weight: '1 كجم'
  },
  {
    id: '6',
    name: 'بهارات الكبسة (خلطة ذوق)',
    category: 'spices',
    price: 35,
    description: 'سر المذاق التقليدي في خلطة واحدة، مزيج من 12 نوعاً من التوابل المحمصة والمطحونة.',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=600&q=80',
    weight: '250 جم'
  },
  {
    id: '7',
    name: 'تمر عجوة المدينة (عالية)',
    category: 'dates',
    price: 140,
    description: 'من بساتين المدينة المنورة المباركة، تتميز بلونها الأسود وقوامها اللين وفوائدها العظيمة.',
    image: 'https://images.unsplash.com/photo-1506764519623-6e1919808d2a?auto=format&fit=crop&w=600&q=80',
    weight: '500 جم'
  },
  {
    id: '8',
    name: 'جريش قصيمي بلدي',
    category: 'legumes',
    price: 22,
    description: 'قمح كامل مجروش بعناية، مثالي لتحضير طبق الجريش الشعبي بقوامه الكريمي اللذيذ.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    weight: '2 كجم'
  },
  {
    id: '9',
    name: 'كمون بلدي منقى مطحون',
    category: 'spices',
    price: 18,
    description: 'كمون طازج يتم تنقيته وطحنه عند الطلب لضمان بقاء الزيوت العطرية والنكهة القوية.',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987cb947d?auto=format&fit=crop&w=600&q=80',
    weight: '200 جم'
  },
  {
    id: '10',
    name: 'فلفل أحمر مجفف (قرون)',
    category: 'spices',
    price: 12,
    description: 'فلفل حار مجفف طبيعياً تحت أشعة الشمس، يضيف حرارة ونكهة عميقة لأطباقك.',
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=600&q=80',
    weight: '150 جم'
  },
  {
    id: '11',
    name: 'ماش أخضر بلدي',
    category: 'legumes',
    price: 16,
    description: 'بقوليات غنية بالبروتين والألياف، منتقاة من أجود المحاصيل لضمان النضج المتساوي.',
    image: 'https://images.unsplash.com/photo-1585996853880-bd94782de12d?auto=format&fit=crop&w=600&q=80',
    weight: '800 جم'
  },
  {
    id: '12',
    name: 'أرز مزة سيلا (بسمتي)',
    category: 'rice',
    price: 80,
    description: 'أرز قوي يتحمل الطبخ الطويل، حباته لا تتكسر، مثالي للمندي والمضغوط السعودي.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    weight: '5 كجم'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'الكل' },
  { id: 'legumes', name: 'بقوليات' },
  { id: 'dates', name: 'تمور' },
  { id: 'rice', name: 'أرز' },
  { id: 'spices', name: 'توابل' },
];
