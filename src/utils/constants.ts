import { MenuItem } from '../types/navigation';

// Tailwind Color Classes
export const TAILWIND_COLORS = {
  // Light Theme Colors
  light: {
    primary: 'primary-600',
    secondary: 'primary-500',
    accent: 'primary-400',
    background: 'white',
    surface: 'gray-50',
    text: 'gray-800',
    textSecondary: 'gray-600',
    border: 'gray-200',
    shadow: 'gray-900',
    success: 'green-600',
    warning: 'yellow-500',
    error: 'red-600',
  },
  // Dark Theme Colors
  dark: {
    primary: 'beige-500',
    secondary: 'beige-400',
    accent: 'beige-300',
    background: 'dark-900',
    surface: 'dark-800',
    text: 'beige-100',
    textSecondary: 'beige-300',
    border: 'dark-700',
    shadow: 'black',
    success: 'beige-500',
    warning: 'beige-500',
    error: 'beige-500',
  },
};

// Font Classes
export const FONT_CLASSES = {
  arabic: 'font-arabic',
  urdu: 'font-urdu',
  amiri: 'font-amiri',
  sans: 'font-sans',
};

// Legacy COLORS object for backward compatibility
export const COLORS = {
  light: {
    primary: '#e35a0f', // primary-600
    secondary: '#f2751a', // primary-500
    accent: '#f5933d', // primary-400
    background: '#ffffff', // white
    surface: '#f9fafb', // gray-50
    text: '#1f2937', // gray-800
    textSecondary: '#4b5563', // gray-600
    border: '#e5e7eb', // gray-200
    shadow: '#111827', // gray-900
    success: '#059669', // green-600
    warning: '#eab308', // yellow-500
    error: '#dc2626', // red-600
  },
  dark: {
    primary: '#f5f5dc', // beige-500
    secondary: '#faf5e6', // beige-400
    accent: '#fdfaf5', // beige-300
    background: '#3d3d3d', // dark-900
    surface: '#454545', // dark-800
    text: '#fefefe', // beige-100
    textSecondary: '#fdfaf5', // beige-300
    border: '#4f4f4f', // dark-700
    shadow: '#000000', // black
    success: '#f5f5dc', // beige-500
    warning: '#f5f5dc', // beige-500
    error: '#f5f5dc', // beige-500
  },
};

// Main Quran Arabic Item
export const QURAN_ARABIC_ITEM: MenuItem = {
  id: 'quran-arabic',
  title: 'Quran Arabic',
  subtitle: 'Learn Arabic through the Holy Quran',
  icon: '📖',
  color: 'primary-600',
  route: 'QuranArabic',
};

// Main Quranic Word Item
export const QURANIC_WORD_ITEM: MenuItem = {
  id: 'quranic-word',
  title: 'Quranic Word',
  subtitle: 'Learn Quranic vocabulary and meanings',
  icon: '🔤',
  color: 'primary-500',
  route: 'QuranicWord',
};

// Quran Parts
export const QURAN_PARTS: MenuItem[] = [
  {
    id: 'part-1',
    title: 'حصہ اول',
    subtitle: 'مقدمہ',
    icon: '1️⃣',
    color: 'primary-600',
    route: 'QuranPart1',
  },
  {
    id: 'part-2',
    title: 'حصہ دوم',
    subtitle: 'اسم کی تعلیم',
    icon: '2️⃣',
    color: 'primary-500',
    route: 'QuranPart2',
  },
  {
    id: 'part-3',
    title: 'حصہ سوم',
    subtitle: 'مرکبات کی تعلیم',
    icon: '3️⃣',
    color: 'primary-400',
    route: 'QuranPart3',
  },
  {
    id: 'part-4',
    title: 'حصہ چہارم',
    subtitle: 'Hissa Charam',
    icon: '4️⃣',
    color: 'green-600',
    route: 'QuranPart4',
  },
];

// Quranic Word Categories
export const QURANIC_WORD_CATEGORIES: MenuItem[] = [
  {
    id: 'quranic-word-harf',
    title: 'حرف',
    subtitle: 'Particles',
    icon: '🔤',
    color: 'primary-600',
    route: 'QuranicWordHarf',
  },
  {
    id: 'quranic-word-ism',
    title: 'اسم',
    subtitle: 'Nouns',
    icon: '📝',
    color: 'primary-500',
    route: 'QuranicWordIsm',
  },
  {
    id: 'quranic-word-fal',
    title: 'فعل',
    subtitle: 'Verbs',
    icon: '📚',
    color: 'primary-400',
    route: 'QuranicWordFal',
  },
];

// Quranic Word Lessons (for Ism category)
export const QURANIC_WORD_LESSONS: MenuItem[] = [
  {
    id: 'quranic-word-lesson-1',
    title: 'Lesson 1',
    subtitle: 'بنیادی قرآنی الفاظ',
    icon: '📝',
    color: 'primary-600',
    route: 'QuranicWordLesson1',
  },
  {
    id: 'quranic-word-lesson-2',
    title: 'Lesson 2',
    subtitle: 'اشارے والے اسماء',
    icon: '📚',
    color: 'primary-500',
    route: 'QuranicWordLesson2',
  },
  {
    id: 'quranic-word-lesson-3',
    title: 'Lesson 3',
    subtitle: 'ضمائر کی تفصیل',
    icon: '🎯',
    color: 'primary-400',
    route: 'QuranicWordLesson3',
  },
  {
    id: 'quranic-word-lesson-4',
    title: 'Lesson 4',
    subtitle: 'اسم موصول کی تفصیل',
    icon: '🔗',
    color: 'primary-300',
    route: 'QuranicWordLesson4',
  },
];

export const APP_CONFIG = {
  name: 'Lisan ul Quran',
  subtitle: 'Learn Quranic Arabic',
  description: 'Discover the beauty of Arabic through the Quran',
  version: '1.0.0',
}; 