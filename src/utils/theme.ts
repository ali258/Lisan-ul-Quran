// Theme Types
export type ThemeVariant = 'green' | 'teal' | 'pastelGreen';
export type ThemeMode = 'light' | 'dark';

// Theme Colors Configuration
export const THEMES = {
  green: {
    light: {
      primary: '#00a86b', // Paradise Green
      secondary: '#4caf50', // Light Green
      accent: '#8bc34a', // Lighter Green
      background: '#f1f8e9', // Very Light Green
      surface: '#ffffff',
      text: '#1b5e20', // Dark Green
      textSecondary: '#388e3c',
      card: '#ffffff',
      border: '#c8e6c9',
      shadow: '#000000',
    },
    dark: {
      primary: '#4caf50', // Bright Green
      secondary: '#388e3c', // Medium Green
      accent: '#66bb6a', // Light Green
      background: '#0d1b0f', // Very Dark Green
      surface: '#1b2e1f', // Dark Green Surface
      text: '#a5d6a7', // Light Green Text
      textSecondary: '#81c784',
      card: '#263238', // Dark Card
      border: '#2e4f3e',
      shadow: '#000000',
    },
  },
  teal: {
    light: {
      primary: '#00ADB5', // Beautiful Teal Header
      secondary: '#393E46', // Medium Gray Secondary
      accent: '#222831', // Dark Charcoal Accent
      background: '#EEEEEE', // Light Gray Background
      surface: '#FFFFFF', // Pure White Surface
      text: '#222831', // Dark Charcoal Text
      textSecondary: '#393E46', // Medium Gray Text
      card: '#FFFFFF', // White Cards
      border: '#393E46', // Medium Gray Border
      shadow: '#000000',
    },
    dark: {
      primary: '#00ADB5', // Beautiful Teal Header
      secondary: '#393E46', // Medium Gray Secondary
      accent: '#EEEEEE', // Light Gray Accent
      background: '#222831', // Dark Charcoal Background
      surface: '#393E46', // Medium Gray Surface
      text: '#EEEEEE', // Light Gray Text
      textSecondary: '#00ADB5', // Teal Secondary Text
      card: '#393E46', // Medium Gray Cards
      border: '#00ADB5', // Teal Border for highlights
      shadow: '#000000',
    },
  },
  crimsonNight: {
    light: {
      primary: '#AD2831', // Vibrant Crimson Header
      secondary: '#800E13', // Dark Ruby Secondary
      accent: '#640D14', // Deep Red Accent
      background: '#F5F5F5', // Soft Light Gray Background for contrast
      surface: '#FFFFFF', // Clean White Surface
      text: '#250902', // Black Cherry Text
      textSecondary: '#38040E', // Dark Red Text
      card: '#FFFFFF', // White Cards
      border: '#AD2831', // Crimson Border
      shadow: '#000000',
    },
    dark: {
      primary: '#800E13', // Ruby Header
      secondary: '#AD2831', // Crimson Secondary
      accent: '#38040E', // Dark Maroon Accent
      background: '#250902', // Black Cherry Background
      surface: '#38040E', // Dark Red Surface
      text: '#F5F5F5', // Light Text
      textSecondary: '#AD2831', // Crimson Secondary Text
      card: '#38040E', // Dark Red Cards
      border: '#AD2831', // Crimson Border
      shadow: '#000000',
    },
  },
  sunsetCrimson: {
    light: {
      primary: '#9D0208', // Bold Crimson Header
      secondary: '#DC2F02', // Bright Red-Orange Secondary
      accent: '#F48C06', // Vibrant Orange Accent
      background: '#FFF8F0', // Soft Off-White Background
      surface: '#FFFFFF', // White Surface
      text: '#03071E', // Deep Navy Text
      textSecondary: '#370617', // Dark Maroon Text
      card: '#FFFFFF', // White Cards
      border: '#E85D04', // Orange Border
      shadow: '#000000',
    },
    dark: {
      primary: '#D00000', // Vivid Red Header
      secondary: '#E85D04', // Fiery Orange Secondary
      accent: '#FAA307', // Golden Accent
      background: '#03071E', // Deep Navy Background
      surface: '#370617', // Dark Maroon Surface
      text: '#FFBA08', // Bright Golden Text
      textSecondary: '#F48C06', // Orange Secondary Text
      card: '#6A040F', // Dark Crimson Cards
      border: '#AD2831', // Crimson Border
      shadow: '#000000',
    },
  },

};


export type Theme = typeof THEMES.green.light;

// Helper function to get current theme
export const getCurrentTheme = (themeVariant: ThemeVariant, isDarkMode: boolean): Theme => {
  // Handle legacy theme variants or invalid values
  const validThemeVariant = THEMES[themeVariant] ? themeVariant : 'teal';
  return THEMES[validThemeVariant][isDarkMode ? 'dark' : 'light'];
};

// Dedicated ISM Blue Theme (only for ISM screen)
export const getIsmTheme = (isDarkMode: boolean): Theme => {
  return {
    primary: isDarkMode ? '#3B82F6' : '#246CF6', // Blue primary
    secondary: isDarkMode ? '#60A5FA' : '#1E40AF', // Blue secondary
    accent: isDarkMode ? '#93C5FD' : '#1D4ED8', // Blue accent
    background: isDarkMode ? '#0F172A' : '#F8FAFC', // Blue-tinted background
    surface: isDarkMode ? '#1E293B' : '#FFFFFF', // Blue-tinted surface
    text: isDarkMode ? '#F8FAFC' : '#0F172A', // High contrast text
    textSecondary: isDarkMode ? '#CBD5E1' : '#475569', // Secondary text
    card: isDarkMode ? '#1E293B' : '#FFFFFF', // Card background
    border: isDarkMode ? '#3B82F6' : '#246CF6', // Blue borders
    shadow: '#000000',
  };
};

// Dedicated HARF Orange Theme (only for HARF screen)
export const getHarfTheme = (isDarkMode: boolean): Theme => {
  return {
    primary: isDarkMode ? '#FB923C' : '#FF6B35', // Orange primary
    secondary: isDarkMode ? '#FDBA74' : '#EA580C', // Orange secondary
    accent: isDarkMode ? '#FED7AA' : '#C2410C', // Orange accent
    background: isDarkMode ? '#1C1917' : '#FFF7ED', // Orange-tinted background
    surface: isDarkMode ? '#292524' : '#FFFFFF', // Orange-tinted surface
    text: isDarkMode ? '#FFF7ED' : '#1C1917', // High contrast text
    textSecondary: isDarkMode ? '#D6D3D1' : '#57534E', // Secondary text
    card: isDarkMode ? '#292524' : '#FFFFFF', // Card background
    border: isDarkMode ? '#FB923C' : '#FF6B35', // Orange borders
    shadow: '#000000',
  };
};

// Dedicated MARKAB Purple Theme (only for MARKAB lessons - where harf and ism combine)
export const getMarkabTheme = (isDarkMode: boolean): Theme => {
  return {
    primary: isDarkMode ? '#A855F7' : '#9333EA', // Purple primary
    secondary: isDarkMode ? '#C084FC' : '#7C3AED', // Purple secondary
    accent: isDarkMode ? '#DDD6FE' : '#6D28D9', // Purple accent
    background: isDarkMode ? '#1E1B2E' : '#FAF5FF', // Purple-tinted background
    surface: isDarkMode ? '#2D2A3E' : '#FFFFFF', // Purple-tinted surface
    text: isDarkMode ? '#FAF5FF' : '#1E1B2E', // High contrast text
    textSecondary: isDarkMode ? '#D8B4FE' : '#6B46C1', // Secondary text
    card: isDarkMode ? '#2D2A3E' : '#FFFFFF', // Card background
    border: isDarkMode ? '#A855F7' : '#9333EA', // Purple borders
    shadow: '#000000',
  };
};

export const getFaalTheme = (isDarkMode: boolean): Theme => {
  return {
    primary: isDarkMode ? '#D84040' : '#8E1616',      // Strong red
    secondary: isDarkMode ? '#8E1616' : '#D84040',    // Deep/bright red
    accent: isDarkMode ? '#EEEEEE' : '#D84040',       // Accent for highlights
    background: isDarkMode ? '#1D1616' : '#EEEEEE',   // Dark or light background
    surface: isDarkMode ? '#292020' : '#FFFFFF',      // Slightly off-black for cards
    text: isDarkMode ? '#EEEEEE' : '#1D1616',         // Main text (contrasty)
    textSecondary: isDarkMode ? '#D84040' : '#8E1616',// Secondary text color
    card: isDarkMode ? '#292020' : '#FFFFFF',         // Card background
    border: isDarkMode ? '#D84040' : '#8E1616',       // Red borders
    shadow: '#000000',                                // Shadow
  };
};

// Theme Display Names
export const THEME_NAMES = {
  green: 'Green Theme',
  teal: 'Teal & Gray Theme',
  pastelGreen: 'Pastel Green Theme',
};

// Theme configuration
export const THEME_CONFIG = {
  animationDuration: 300,
  borderRadius: {
    small: 8,
    medium: 12,
    large: 15,
    round: 25,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  fontSize: {
    small: 12,
    medium: 14,
    large: 16,
    xlarge: 20,
    xxlarge: 24,
    xxxlarge: 28,
    header: 32,
  },
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

// Font classes for compatibility with original lessons
export const FONT_CLASSES = {
  arabic: 'arabic',
  urdu: 'urdu',
  english: 'english',
  primary: 'primary',
  secondary: 'secondary',
};




// Helper function for colors with opacity
export const getColorWithOpacity = (color: string, opacity: number) => {
  // Convert opacity (0-1) to hex (00-FF)
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
  return `${color}${alpha}`;
};

// Helper function for fonts
export const getFontWithProperFallback = (fontClass: any) => {
  // For now, return system font as fallback
  // You can extend this to handle specific font families later
  return 'System';
};

// Helper function to get frequency color based on value
export const getFrequencyColor = (frequency: number): string => {
  if (frequency >= 100) return '#FF6B6B'; // Very high frequency - Red
  if (frequency >= 50) return '#4ECDC4'; // High frequency - Teal
  if (frequency >= 25) return '#45B7D1'; // Medium-high frequency - Blue
  if (frequency >= 10) return '#96CEB4'; // Medium frequency - Green
  return '#FFEAA7'; // Low frequency - Yellow
};