import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { FONT_CLASSES, getCurrentTheme, getFontWithProperFallback, THEME_CONFIG } from '../utils/theme';
import AnimatedHeader from '../components/AnimatedHeader';
import BottomNavigation from '../components/BottomNavigation';
import { getThemeColor } from './harf/harfUtils';

interface HomeScreenProps {
  onBackToSplash?: () => void;
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
}

interface MenuItem {
  icon: string;
  title: string;
  description: string;
  onPress: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onBackToSplash, onGoToSettings, onBottomNavigation }) => {
  const { isDarkMode, themeVariant } = useThemeStore();
  const currentTheme = getCurrentTheme(themeVariant, isDarkMode);
  const [activeMenu, setActiveMenu] = useState('quran');

  const handleMenuSelect = (menuId: string) => {
    setActiveMenu(menuId);
    if (onBottomNavigation) {
      onBottomNavigation(menuId);
    }
  };

  const items: MenuItem[] = [
    { 
      icon: '📖', 
      title: 'Read Quran', 
      description: 'Read the Holy Quran with translation',
      onPress: () => onBottomNavigation?.('quran')
    },
    { 
      icon: '🎧', 
      title: 'Arabic Grammar', 
      description: 'Learn the grammar of the Quranic Arabic',
      onPress: () => onBottomNavigation?.('grammar')
    },
    { 
      icon: '🔍', 
      title: 'Quranic Words', 
      description: 'Learn 85% of Quranic words with meanings',
      onPress: () => onBottomNavigation?.('words')
    },
  ]

  const getMenuContent = () => {
    switch (activeMenu) {
      case 'quran':
        return {
          title: 'Holy Quran',
          subtitle: 'Read and study the Holy Quran',
          items: [
            { icon: '📖', title: 'Read Quran', description: 'Read the Holy Quran with translation' },
            { icon: '🎧', title: 'Arabic Grammar', description: 'Learn the grammar of the Quranic Arabic' },
          ]
        };
      case 'grammar':
        return {
          title: 'Quranic Arabic',
          subtitle: 'Learn Arabic for Quranic understanding',
          items: [
            { icon: '🔤', title: 'Arabic Grammar', description: 'Learn fundamental Arabic grammar rules' },
            { icon: '📚', title: 'Vocabulary', description: 'Build your Arabic vocabulary' },
            { icon: '✍️', title: 'Writing Practice', description: 'Practice Arabic writing skills' },
          ]
        };
      case 'words':
        return {
          title: 'Quranic Words',
          subtitle: 'Explore individual Quranic words and meanings',
          items: [
            { icon: '📝', title: 'Word Study', description: 'Study individual Quranic words' },
            { icon: '🔄', title: 'Root Analysis', description: 'Analyze word roots and patterns' },
            { icon: '💭', title: 'Meanings', description: 'Understand word meanings and contexts' },
          ]
        };
      case 'tajweed':
        return {
          title: 'Quranic Tajweed',
          subtitle: 'Master the art of Quranic recitation',
          items: [
            { icon: '🎵', title: 'Tajweed Rules', description: 'Learn the rules of proper recitation' },
            { icon: '🎤', title: 'Practice Recitation', description: 'Practice with audio feedback' },
            { icon: '📖', title: 'Makharij', description: 'Learn correct pronunciation points' },
          ]
        };
      case 'more':
        return {
          title: 'Other Menu',
          subtitle: 'Additional features and settings',
          items: [
            { icon: '⚙️', title: 'Settings', description: 'Customize your app preferences' },
            { icon: '📊', title: 'Progress', description: 'Track your learning progress' },
            { icon: '💡', title: 'Help', description: 'Get help and support' },
          ]
        };
      default:
        return {
          title: 'Lisan ul Quran',
          subtitle: 'Welcome to Quranic Arabic Learning',
          items: []
        };
    }
  };

  const menuContent = getMenuContent();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContainer: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: 100, // Space for bottom navigation
    },
    welcomeSection: {
      padding: THEME_CONFIG.spacing.xl,
      alignItems: 'center',
      marginBottom: THEME_CONFIG.spacing.sm + THEME_CONFIG.spacing.xs,
    },
    welcomeText: {
      fontSize: THEME_CONFIG.fontSize.xxlarge,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      textAlign: 'center',
      marginBottom: THEME_CONFIG.spacing.sm,
    },
    welcomeTranslation: {
      fontSize: THEME_CONFIG.fontSize.medium,
      textAlign: 'center',
      fontStyle: 'italic',
    },
    menuContainer: {
      paddingHorizontal: THEME_CONFIG.spacing.xl,
    },
    menuCard: {
      padding: THEME_CONFIG.spacing.xl,
      marginVertical: THEME_CONFIG.spacing.sm + THEME_CONFIG.spacing.xs,
      borderRadius: THEME_CONFIG.borderRadius.large,
      alignItems: 'center',
      borderWidth: 1,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
    },
    menuIcon: {
      fontSize: 40,
      marginBottom: THEME_CONFIG.spacing.sm + THEME_CONFIG.spacing.xs,
    },
    menuTitle: {
      fontSize: THEME_CONFIG.fontSize.xlarge,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      marginBottom: THEME_CONFIG.spacing.xs + 1,
    },
    menuDescription: {
      fontSize: THEME_CONFIG.fontSize.medium,
      textAlign: 'center',
      lineHeight: 20,
    },
    backToSplashButton: {
      marginHorizontal: THEME_CONFIG.spacing.xl,
      marginTop: THEME_CONFIG.spacing.xl,
      marginBottom: THEME_CONFIG.spacing.sm + THEME_CONFIG.spacing.xs,
      padding: THEME_CONFIG.spacing.lg - 1,
      borderRadius: THEME_CONFIG.spacing.sm + THEME_CONFIG.spacing.xs,
      alignItems: 'center',
    },
    backToSplashText: {
      fontSize: THEME_CONFIG.fontSize.large,
      fontWeight: THEME_CONFIG.fontWeight.bold,
    },
    duaSection: {
      marginBottom: 40,
      marginTop: 40,
      padding: 24,
      borderRadius: 20,
      backgroundColor: currentTheme.surface,
      borderWidth: 2,
      borderColor: currentTheme.primary,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 4,
      marginLeft: 20,
      marginRight: 20,
    },
    duaTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    arabicText: {
      fontSize: 32,
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.primary,
      lineHeight: 48,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      writingDirection: 'rtl',
    },
    urduText: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 12,
      color: currentTheme.text,
      lineHeight: 28,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    englishText: {
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.8,
      color: currentTheme.textSecondary,
      lineHeight: 24,
      fontStyle: 'italic',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.english),
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <AnimatedHeader 
        title="لسان القرآن"
        showSubtitle={false}
        showSettings={true}
        showBackButton={false}
        onSettingsPress={onGoToSettings}
      />
      
      <ScrollView 
        style={[styles.scrollContainer, { paddingTop: 90 }]} // Add padding for fixed header
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* <View style={styles.welcomeSection}>
          <Text style={[styles.welcomeText, { color: currentTheme.text }]}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </Text>
          <Text style={[styles.welcomeTranslation, { color: currentTheme.textSecondary }]}>
            In the name of Allah, the Most Gracious, the Most Merciful
          </Text>
        </View> */}

        {/* Dua Section */}
        <View style={styles.duaSection}>
          <Text style={styles.duaTitle}>دعا</Text>
          <Text style={styles.arabicText}>
            رَبِّ يَسِّرْ وَلَا تُعَسِّرْ وَتَمِّمْ بِالْخَيْرِ
          </Text>
          <Text style={styles.urduText}>
            اے میرے رب! آسان فرما اور مشکل نہ فرما، اور خیر کے ساتھ مکمل فرما۔
          </Text>
          <Text style={styles.englishText}>
            "My Lord, make it easy and do not make it difficult, and complete it with goodness."
          </Text>
        </View>

        <View style={styles.menuContainer}>
          {items.map((item, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.menuCard, 
                { 
                  backgroundColor: currentTheme.card, 
                  borderColor: currentTheme.border,
                  shadowColor: currentTheme.shadow 
                }
              ]}
              onPress={item.onPress}
              activeOpacity={0.7}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={[styles.menuTitle, { color: currentTheme.primary }]}>
                {item.title}
              </Text>
              <Text style={[styles.menuDescription, { color: currentTheme.textSecondary }]}>
                {item.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {onBackToSplash && (
          <TouchableOpacity 
            style={[styles.backToSplashButton, { backgroundColor: currentTheme.primary }]}
            onPress={onBackToSplash}
          >
            <Text style={[styles.backToSplashText, { color: currentTheme.surface }]}>
              Show Splash Again
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      
      <BottomNavigation 
        onMenuSelect={handleMenuSelect}
        activeMenu="home"
      />
    </View>
  );
};



export default HomeScreen;