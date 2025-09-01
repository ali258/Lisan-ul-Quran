import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { getCurrentTheme, THEME_CONFIG } from '../utils/theme';
import AnimatedHeader from '../components/AnimatedHeader';
import BottomNavigation from '../components/BottomNavigation';

interface QuranScreenProps {
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
}

const QuranScreen: React.FC<QuranScreenProps> = ({ onGoToSettings, onBottomNavigation }) => {
  const { isDarkMode, themeVariant } = useThemeStore();
  const currentTheme = getCurrentTheme(themeVariant, isDarkMode);

  const quranOptions = [
    {
      id: 'read-quran',
      title: 'Read Quran',
      description: 'Read the Holy Quran with translation and tafseer',
      icon: '📖',
      onPress: () => console.log('Read Quran'),
    },
    {
      id: 'listen-quran',
      title: 'Listen Quran',
      description: 'Listen to beautiful recitations by famous Qaris',
      icon: '🎧',
      onPress: () => console.log('Listen Quran'),
    },
    {
      id: 'search-quran',
      title: 'Search Quran',
      description: 'Search verses, topics, and keywords',
      icon: '🔍',
      onPress: () => console.log('Search Quran'),
    },
    {
      id: 'bookmarks',
      title: 'Bookmarks',
      description: 'Your saved verses and favorite passages',
      icon: '🔖',
      onPress: () => console.log('Bookmarks'),
    },
    {
      id: 'last-read',
      title: 'Continue Reading',
      description: 'Continue from where you left off',
      icon: '📍',
      onPress: () => console.log('Continue Reading'),
    },
    {
      id: 'daily-verse',
      title: 'Daily Verse',
      description: 'Today\'s verse for reflection and contemplation',
      icon: '🌅',
      onPress: () => console.log('Daily Verse'),
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <AnimatedHeader 
        title="Holy Quran"
        showSubtitle={false}
        showSettings={true}
        showBackButton={false}
        onSettingsPress={onGoToSettings}
      />
      
      <ScrollView 
        style={[styles.scrollContainer, { paddingTop: 90 }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.welcomeSection}>
          <Text style={[styles.welcomeText, { color: currentTheme.text }]}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </Text>
          <Text style={[styles.welcomeTranslation, { color: currentTheme.textSecondary }]}>
            In the name of Allah, the Most Gracious, the Most Merciful
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {quranOptions.map((option, index) => (
            <TouchableOpacity 
              key={option.id}
              style={[
                styles.optionCard, 
                { 
                  backgroundColor: currentTheme.card, 
                  borderColor: currentTheme.border,
                  shadowColor: currentTheme.shadow 
                }
              ]}
              onPress={option.onPress}
            >
              <Text style={styles.optionIcon}>{option.icon}</Text>
              <Text style={[styles.optionTitle, { color: currentTheme.primary }]}>
                {option.title}
              </Text>
              <Text style={[styles.optionDescription, { color: currentTheme.textSecondary }]}>
                {option.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      <BottomNavigation 
        onMenuSelect={onBottomNavigation || (() => {})}
        activeMenu="quran"
      />
    </View>
  );
};

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
  optionsContainer: {
    paddingHorizontal: THEME_CONFIG.spacing.xl,
  },
  optionCard: {
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
  optionIcon: {
    fontSize: 40,
    marginBottom: THEME_CONFIG.spacing.sm + THEME_CONFIG.spacing.xs,
  },
  optionTitle: {
    fontSize: THEME_CONFIG.fontSize.xlarge,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: THEME_CONFIG.spacing.xs + 1,
  },
  optionDescription: {
    fontSize: THEME_CONFIG.fontSize.medium,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default QuranScreen;