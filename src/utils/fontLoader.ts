// Font loading utility for web applications

/**
 * Load custom fonts dynamically
 */
export const loadCustomFonts = async (): Promise<void> => {
  try {
    // Check if fonts are already loaded
    const scheherazadeLoaded = await isFontAvailable('Scheherazade New');
    const amiriLoaded = await isFontAvailable('Amiri');
    
    if (scheherazadeLoaded || amiriLoaded) {
      console.log('✅ Arabic fonts already loaded');
      return;
    }

    // Try to load fonts from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    console.log('✅ Arabic fonts loaded from Google Fonts');
  } catch (error) {
    console.error('❌ Failed to load custom fonts:', error);
  }
};

/**
 * Check if a font is available
 * @param fontName - The font name to check
 * @returns Promise that resolves to boolean
 */
export const isFontAvailable = async (fontName: string): Promise<boolean> => {
  try {
    return (document as any).fonts.check(`12px "${fontName}"`);
  } catch {
    return false;
  }
};

/**
 * Wait for font to be loaded
 * @param fontName - The font name to wait for
 * @param timeout - Timeout in milliseconds
 * @returns Promise that resolves when font is loaded
 */
export const waitForFont = async (fontName: string, timeout: number = 5000): Promise<boolean> => {
  const startTime = Date.now();
  
  while (Date.now() - startTime < timeout) {
    if (await isFontAvailable(fontName)) {
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  return false;
};

/**
 * Initialize font loading
 */
export const initializeFonts = async (): Promise<void> => {
  try {
    // Load custom fonts
    await loadCustomFonts();
    
    // Wait a bit for fonts to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check if fonts are available
    const scheherazadeLoaded = await isFontAvailable('Scheherazade New');
    const amiriLoaded = await isFontAvailable('Amiri');
    const notoLoaded = await isFontAvailable('Noto Naskh Arabic');
    
    if (scheherazadeLoaded || amiriLoaded || notoLoaded) {
      console.log('✅ Arabic fonts loaded successfully');
      console.log(`📊 Font Status: Scheherazade=${scheherazadeLoaded}, Amiri=${amiriLoaded}, Noto=${notoLoaded}`);
    } else {
      console.warn('⚠️ Arabic fonts not loaded, using system fonts');
      console.log('💡 This is normal for React Native - fonts will be handled by the native system');
    }
  } catch (error) {
    console.error('Failed to initialize fonts:', error);
  }
}; 