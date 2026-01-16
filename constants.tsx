
import { Product } from './types';

export const PRODUCTS: Product[] = [
  // أرز
  {
    id: 'r1',
    name: 'أرز بسمتي حبة طويلة (عنبر)',
    category: 'rice',
    price: 85,
    description: 'أرز بسمتي هندي درجة أولى، يتميز بطول الحبة الفائق ورائحة العنبر الزكية التي تميز الموائد الفاخرة.',
    image: 'https://images.unsplash.com/photo-1591814468924-caf7f582324d?auto=format&fit=crop&w=800&q=80',
    weight: '5 كجم'
  },
  {
    id: 'r2',
    name: 'أرز بسمتي حبة صغيرة',
    category: 'rice',
    price: 70,
    description: 'أرز عطري بحبة قصيرة ناعمة، مثالي للأطباق اليومية ويمتاز بسرعة النضج وامتصاص النكهات.',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
    weight: '5 كجم'
  },
  // تمور
  {
    id: 'd1',
    name: 'تمر عجوة المدينة الملكي',
    category: 'dates',
    price: 150,
    description: 'من بساتين المدينة المنورة، تمر العجوة الأصلي بفوائده الصحية العظيمة وقوامه اللين المميز.',
    image: 'https://images.unsplash.com/photo-1626139575235-908076939f50?auto=format&fit=crop&w=800&q=80',
    weight: '1 كجم'
  },
  {
    id: 'd2',
    name: 'تمر مجدول جامبو فاخر',
    category: 'dates',
    price: 90,
    description: 'ملك التمور، حبة كبيرة جداً، غنية بالألياف وطعم يشبه التوفي الطبيعي. جودة تصدير.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    weight: '1 كجم'
  },
  {
    id: 'd3',
    name: 'رطب سكري قصيمي',
    category: 'dates',
    price: 45,
    description: 'رطب سكري طازج، يذوب في الفم، منتقى من أجود مزارع القصيم لضمان الحلاوة المثالية.',
    image: 'https://images.unsplash.com/photo-1623055421523-9526759239a5?auto=format&fit=crop&w=800&q=80',
    weight: '1 كجم'
  },
  {
    id: 'd4',
    name: 'تمر سكري مفتل فاخر',
    category: 'dates',
    price: 60,
    description: 'سكري مفتل درجة أولى، حبات شقراء قوية القوام وحلوة المذاق، الرفيق الأمثل للقهوة السعودية.',
    image: 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=800&q=80',
    weight: '1 كجم'
  },
  // توابل
  {
    id: 's1',
    name: 'ينسون بلدي منقى',
    category: 'spices',
    price: 25,
    description: 'ينسون طازج برائحة نفاذة، منقى يدوياً من الشوائب، مثالي للمشروبات الدافئة والمخبوزات.',
    image: 'https://images.unsplash.com/photo-1558283620-e2ef6060c4bc?auto=format&fit=crop&w=800&q=80',
    weight: '250 جم'
  },
  {
    id: 's2',
    name: 'كمون بلدي مطحون',
    category: 'spices',
    price: 30,
    description: 'كمون عالي الجودة مطحون طحن ناعم، يحافظ على زيوت الطيارة ليعطيك نكهة قوية لأطباقك.',
    image: 'https://images.unsplash.com/photo-1608797175674-ebdd3e3326f4?auto=format&fit=crop&w=800&q=80',
    weight: '250 جم'
  },
  {
    id: 's3',
    name: 'فلفل أسود حب ملكي',
    category: 'spices',
    price: 35,
    description: 'حبات فلفل أسود كبيرة كاملة النضج، تعطي لسعة حرارة متزنة ونكهة عميقة عند الطحن الفوري.',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    weight: '200 جم'
  },
  {
    id: 's4',
    name: 'زنجبيل ناعم طازج',
    category: 'spices',
    price: 28,
    description: 'زنجبيل مطحون بعناية، حار ومنعش، يستخدم في التتبيلات والحلويات والمشروبات الصحية.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d019cb5?auto=format&fit=crop&w=800&q=80',
    weight: '200 جم'
  },
  {
    id: 's5',
    name: 'قرفة سيلانية (أعواد)',
    category: 'spices',
    price: 40,
    description: 'أعواد قرفة سيلانية أصلية، تتميز بطبقاتها الرقيقة وحلاوتها الطبيعية ورائحتها العطرة الهادئة.',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80',
    weight: '150 جم'
  },
  {
    id: 's6',
    name: 'شطة حمراء ناعمة (حارة جداً)',
    category: 'spices',
    price: 20,
    description: 'قرون فلفل أحمر مجففة ومطحونة بعناية، تضيف حرارة قوية ولوناً أحمر طبيعياً لأطباقك.',
    image: 'https://images.unsplash.com/photo-1519623286359-e9f3cbef015b?auto=format&fit=crop&w=800&q=80',
    weight: '150 جم'
  },
  // بقوليات
  {
    id: 'l1',
    name: 'عدس أحمر تركي منقى',
    category: 'legumes',
    price: 15,
    description: 'عدس أحمر منقى بعناية، سريع النضج، مثالي لتحضير شوربة العدس العربية التقليدية.',
    image: 'https://images.unsplash.com/photo-1515942661900-94b3d197c56a?auto=format&fit=crop&w=800&q=80',
    weight: '1 كجم'
  },
  {
    id: 'l2',
    name: 'حمص حب (بليلة) بلدي',
    category: 'legumes',
    price: 18,
    description: 'حبات حمص ممتلئة وسهلة الطبخ، غنية بالبروتين ومثالية للمقبلات والسلطات الشعبية.',
    image: 'https://images.unsplash.com/photo-1585996853880-bd94782de12d?auto=format&fit=crop&w=800&q=80',
    weight: '1 كجم'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'الكل' },
  { id: 'legumes', name: 'بقوليات' },
  { id: 'dates', name: 'تمور' },
  { id: 'rice', name: 'أرز' },
  { id: 'spices', name: 'توابل' },
];
