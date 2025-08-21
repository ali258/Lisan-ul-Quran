import { TAILWIND_COLORS } from './constants';

// Tailwind color mapping to actual hex values
const TAILWIND_COLOR_MAP = {
  // Primary colors
  'primary-50': '#fef7f0',
  'primary-100': '#fdecd8',
  'primary-200': '#fbd5b0',
  'primary-300': '#f8b87a',
  'primary-400': '#f5933d',
  'primary-500': '#f2751a',
  'primary-600': '#e35a0f',
  'primary-700': '#bc4410',
  'primary-800': '#963714',
  'primary-900': '#7a3014',
  'primary-950': '#421607',
  
  // Secondary colors
  'secondary-50': '#fef7f0',
  'secondary-100': '#fdecd8',
  'secondary-200': '#fbd5b0',
  'secondary-300': '#f8b87a',
  'secondary-400': '#f5933d',
  'secondary-500': '#d2691e',
  'secondary-600': '#bc4410',
  'secondary-700': '#963714',
  'secondary-800': '#7a3014',
  'secondary-900': '#421607',
  
  // Beige colors
  'beige-50': '#fefefe',
  'beige-100': '#fefefe',
  'beige-200': '#fefdfb',
  'beige-300': '#fdfaf5',
  'beige-400': '#faf5e6',
  'beige-500': '#f5f5dc',
  'beige-600': '#e6d7c3',
  'beige-700': '#d4c4a8',
  'beige-800': '#c2b18d',
  'beige-900': '#b09e72',
  
  // Dark colors
  'dark-50': '#f6f6f6',
  'dark-100': '#e7e7e7',
  'dark-200': '#d1d1d1',
  'dark-300': '#b0b0b0',
  'dark-400': '#888888',
  'dark-500': '#6d6d6d',
  'dark-600': '#5d5d5d',
  'dark-700': '#4f4f4f',
  'dark-800': '#454545',
  'dark-900': '#3d3d3d',
  'dark-950': '#0d0d0d',
  
  // Standard colors
  'white': '#ffffff',
  'black': '#000000',
  'gray-50': '#f9fafb',
  'gray-100': '#f3f4f6',
  'gray-200': '#e5e7eb',
  'gray-300': '#d1d5db',
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  'green-600': '#059669',
  'yellow-500': '#eab308',
  'red-600': '#dc2626',
  
  // Harf-orange colors
  'harf-orange-light': '#FF6B35',
  'harf-orange-light-text': '#FFF0EA',
  'harf-orange-dark': '#FFF0EA',
  'harf-orange-dark-text': '#FF6B35',

  // Ism-blue colors
  // 'ism-blue-light': '#333D79',
  // 'ism-blue-light-text': '#FAF9F6',
  // 'ism-blue-dark': '#FAF9F6',  
  // 'ism-blue-dark-text': '#333D79',

  // Ism-blue colors
  'ism-blue-light': '#246CF6',           // Vibrant, clear blue
  'ism-blue-light-text': '#F9F9FB',      // Crisp off-white for text
  'ism-blue-dark': '#E6F0FF',            // Soft blue-tinted light background
  'ism-blue-dark-text': '#246CF6',       // Vibrant blue for text on light BG


  // 'ism-blue-dark': '#333D79',  
  // 'ism-blue-dark-text': '#FAF9F6',

  'markab-purple-light': '#8F5CF7',
  'markab-purple-light-text': '#FAF9F6',
  'markab-purple-dark': '#EAE6FF',
  'markab-purple-dark-text': '#673AB7',


  'black-text': '#000000',
  'white-text': '#ffffff',

  'ism-blue': '#1e40af',
};

/**
 * Convert a Tailwind color class to its hex value
 * @param colorClass - The Tailwind color class (e.g., 'primary-600')
 * @returns The hex color value
 */
export const getColorFromClass = (colorClass: string): string => {
  return TAILWIND_COLOR_MAP[colorClass as keyof typeof TAILWIND_COLOR_MAP] || '#000000';
};

/**
 * Get theme-aware color class
 * @param colorClass - The base color class
 * @param isDarkMode - Whether dark mode is active
 * @returns The appropriate color class for the theme
 */
export const getThemeColorClass = (colorClass: string, isDarkMode: boolean): string => {
  if (isDarkMode) {
    // For dark mode, we might want to use different color classes
    // For now, we'll use the same class but you can customize this
    return colorClass;
  }
  return colorClass;
};

/**
 * Get the color value for a given color class and theme
 * @param colorClass - The Tailwind color class
 * @param isDarkMode - Whether dark mode is active
 * @returns The hex color value
 */
export const getThemeColor = (colorClass: string, isDarkMode: boolean): string => {
  const themeClass = getThemeColorClass(colorClass, isDarkMode);
  return getColorFromClass(themeClass);
};

/**
 * Get background color with opacity
 * @param colorClass - The Tailwind color class
 * @param opacity - The opacity value (0-1)
 * @returns The color with opacity
 */
export const getColorWithOpacity = (colorClass: string, opacity: number): string => {
  const color = getColorFromClass(colorClass);
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const alpha = Math.round(opacity * 255);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}; 