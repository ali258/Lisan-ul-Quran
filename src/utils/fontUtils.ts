import { FONT_CLASSES } from './constants';

// Font mapping for React Native with better Arabic font support
const FONT_MAP = {
  'font-arabic': 'Scheherazade New, Amiri, Noto Naskh Arabic', // Multiple Arabic fonts for better diacritics
  'font-urdu': 'Noto Nastaliq Urdu', // System font
  'font-amiri': 'Amiri',
  'font-sans': 'Inter',
};

// Fallback fonts in case custom fonts are not loaded
const FALLBACK_FONTS = {
  'font-arabic': 'Arial, sans-serif',
  'font-urdu': 'Arial, sans-serif',
  'font-amiri': 'serif',
  'font-sans': 'Inter, Arial, sans-serif',
};

/**
 * Get font family from Tailwind font class
 * @param fontClass - The Tailwind font class (e.g., 'font-arabic')
 * @returns The font family name
 */
export const getFontFromClass = (fontClass: string): string => {
  return FONT_MAP[fontClass as keyof typeof FONT_MAP] || 'Inter';
};

/**
 * Get font family for a specific language
 * @param language - The language ('arabic', 'urdu', 'amiri', 'sans')
 * @returns The font family name
 */
export const getFontForLanguage = (language: 'arabic' | 'urdu' | 'amiri' | 'sans'): string => {
  const fontClass = FONT_CLASSES[language];
  return getFontFromClass(fontClass);
};

/**
 * Get font family with fallback
 * @param fontClass - The Tailwind font class
 * @param fallback - Fallback font family
 * @returns The font family with fallback
 */
export const getFontWithFallback = (fontClass: string, fallback: string = 'Inter'): string => {
  const font = getFontFromClass(fontClass);
  return `${font}, ${fallback}`;
};

/**
 * Get font family with proper fallback for custom fonts
 * @param fontClass - The Tailwind font class
 * @returns The font family with appropriate fallbacks
 */
export const getFontWithProperFallback = (fontClass: string): string => {
  const primaryFont = getFontFromClass(fontClass);
  const fallbackFont = FALLBACK_FONTS[fontClass as keyof typeof FALLBACK_FONTS] || 'Arial, sans-serif';
  return `${primaryFont}, ${fallbackFont}`;
};

/**
 * Check if custom font is available
 * @param fontName - The font name to check
 * @returns Promise that resolves to boolean
 */
export const isFontAvailable = async (fontName: string): Promise<boolean> => {
  try {
    // This is a simple check - in a real app you might want to use a font loading library
    return (document as any).fonts.check(`12px "${fontName}"`);
  } catch {
    return false;
  }
}; 