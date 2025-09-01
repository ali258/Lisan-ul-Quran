import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { getCurrentTheme, THEME_CONFIG } from '../utils/theme';
import AnimatedHeader from '../components/AnimatedHeader';
import BottomNavigation from '../components/BottomNavigation';

interface WordScreenProps {
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
  onNavigateToHarf?: () => void;
  onNavigateToIsm?: () => void;
  onNavigateToFal?: () => void;
}

const WordScreen: React.FC<WordScreenProps> = ({ onGoToSettings, onBottomNavigation, onNavigateToHarf, onNavigateToIsm, onNavigateToFal }) => {
  const { isDarkMode, themeVariant } = useThemeStore();
  const currentTheme = getCurrentTheme(themeVariant, isDarkMode);
  const [searchQuery, setSearchQuery] = useState('');

  const wordCategories = [
    {
      id: 'harf',
      title: 'Harf',
      description: 'Understanding particles and prepositions',
      icon: '🔗',
      count: 80,
      color: '#FF9800', // Orange
      onPress: () => onNavigateToHarf?.(),
    },
    {
      id: 'ism',
      title: 'Ism',
      description: 'Learn Quranic nouns and their meanings',
      icon: '📚',
      count: 150,
      color: '#2196F3', // Blue
      onPress: () => onNavigateToIsm?.(),
    },
    {
      id: 'fal',
      title: 'Fal',
      description: 'Explore Quranic verbs and their forms',
      icon: '⚡',
      count: 120,
      color: '#F44336', // Red
      onPress: () => onNavigateToFal?.(),
    },
  ];

  const recentWords = [
    { arabic: 'الْحَمْدُ', english: 'Praise, Thanks', type: 'Noun' },
    { arabic: 'رَبِّ', english: 'Lord, Master', type: 'Noun' },
    { arabic: 'الْعَالَمِينَ', english: 'The Worlds', type: 'Noun' },
    { arabic: 'الرَّحْمَٰنِ', english: 'The Most Merciful', type: 'Adjective' },
    { arabic: 'الرَّحِيمِ', english: 'The Most Compassionate', type: 'Adjective' },
  ];

  const featuredWord = {
    arabic: 'بِسْمِ',
    english: 'In the name of',
    transliteration: 'Bismi',
    type: 'Preposition + Noun',
    definition: 'A combination meaning "in the name of" or "with the name of", commonly used to begin actions seeking Allah\'s blessing.',
    examples: ['بِسْمِ اللَّهِ - In the name of Allah'],
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <AnimatedHeader 
        title="Quranic Words"
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
        {/* Search Section */}
        <View style={styles.searchSection}>
          <View style={[styles.searchContainer, { backgroundColor: currentTheme.card, borderColor: currentTheme.border }]}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={[styles.searchInput, { color: currentTheme.text }]}
              placeholder="Search Quranic words..."
              placeholderTextColor={currentTheme.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Featured Word */}
        <View style={styles.featuredSection}>
          <Text style={[styles.sectionTitle, { color: currentTheme.text }]}>
            Word of the Day
          </Text>
          <View style={[styles.featuredCard, { backgroundColor: currentTheme.card, borderColor: currentTheme.border }]}>
            <Text style={[styles.featuredArabic, { color: currentTheme.primary }]}>
              {featuredWord.arabic}
            </Text>
            <Text style={[styles.featuredTransliteration, { color: currentTheme.textSecondary }]}>
              {featuredWord.transliteration}
            </Text>
            <Text style={[styles.featuredEnglish, { color: currentTheme.text }]}>
              {featuredWord.english}
            </Text>
            <Text style={[styles.featuredType, { color: currentTheme.textSecondary }]}>
              {featuredWord.type}
            </Text>
            <Text style={[styles.featuredDefinition, { color: currentTheme.textSecondary }]}>
              {featuredWord.definition}
            </Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesSection}>
          <Text style={[styles.sectionTitle, { color: currentTheme.text }]}>
            Word Categories
          </Text>
          {wordCategories.map((category) => (
            <TouchableOpacity 
              key={category.id}
              style={[
                styles.categoryCard, 
                { 
                  backgroundColor: currentTheme.card, 
                  borderColor: currentTheme.border,
                  shadowColor: currentTheme.shadow 
                }
              ]}
              onPress={category.onPress}
            >
              <View style={styles.categoryLeft}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <View style={styles.categoryInfo}>
                  <Text style={[styles.categoryTitle, { color: currentTheme.primary }]}>
                    {category.title}
                  </Text>
                  <Text style={[styles.categoryDescription, { color: currentTheme.textSecondary }]}>
                    {category.description}
                  </Text>
                </View>
              </View>
              <View style={styles.categoryRight}>
                <Text style={[styles.categoryCount, { color: category.color }]}>
                  {category.count}
                </Text>
                <Text style={[styles.categoryLabel, { color: currentTheme.textSecondary }]}>
                  words
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Words */}
        <View style={styles.recentSection}>
          <Text style={[styles.sectionTitle, { color: currentTheme.text }]}>
            Recently Studied
          </Text>
          {recentWords.map((word, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.wordItem, { backgroundColor: currentTheme.card, borderColor: currentTheme.border }]}
            >
              <Text style={[styles.wordArabic, { color: currentTheme.primary }]}>
                {word.arabic}
              </Text>
              <Text style={[styles.wordEnglish, { color: currentTheme.text }]}>
                {word.english}
              </Text>
              <Text style={[styles.wordType, { color: currentTheme.textSecondary }]}>
                {word.type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      <BottomNavigation 
        onMenuSelect={onBottomNavigation || (() => {})}
        activeMenu="words"
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
    paddingBottom: 160, // Increased space for bottom navigation
  },
  searchSection: {
    padding: THEME_CONFIG.spacing.xl,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: THEME_CONFIG.spacing.md,
    borderRadius: THEME_CONFIG.borderRadius.medium,
    borderWidth: 1,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: THEME_CONFIG.spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: THEME_CONFIG.fontSize.medium,
    padding: 0,
  },
  featuredSection: {
    paddingHorizontal: THEME_CONFIG.spacing.xl,
    marginBottom: THEME_CONFIG.spacing.lg,
  },
  sectionTitle: {
    fontSize: THEME_CONFIG.fontSize.xlarge,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: THEME_CONFIG.spacing.md,
  },
  featuredCard: {
    padding: THEME_CONFIG.spacing.xl,
    borderRadius: THEME_CONFIG.borderRadius.large,
    borderWidth: 1,
    alignItems: 'center',
  },
  featuredArabic: {
    fontSize: 36,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: THEME_CONFIG.spacing.xs,
  },
  featuredTransliteration: {
    fontSize: THEME_CONFIG.fontSize.medium,
    fontStyle: 'italic',
    marginBottom: THEME_CONFIG.spacing.sm,
  },
  featuredEnglish: {
    fontSize: THEME_CONFIG.fontSize.xlarge,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    marginBottom: THEME_CONFIG.spacing.xs,
  },
  featuredType: {
    fontSize: THEME_CONFIG.fontSize.small,
    marginBottom: THEME_CONFIG.spacing.md,
  },
  featuredDefinition: {
    fontSize: THEME_CONFIG.fontSize.medium,
    textAlign: 'center',
    lineHeight: 22,
  },
  categoriesSection: {
    paddingHorizontal: THEME_CONFIG.spacing.xl,
    marginBottom: THEME_CONFIG.spacing.lg,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: THEME_CONFIG.spacing.lg,
    marginBottom: THEME_CONFIG.spacing.md,
    borderRadius: THEME_CONFIG.borderRadius.large,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    fontSize: 32,
    marginRight: THEME_CONFIG.spacing.md,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: THEME_CONFIG.fontSize.large,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    marginBottom: THEME_CONFIG.spacing.xs / 2,
  },
  categoryDescription: {
    fontSize: THEME_CONFIG.fontSize.small,
    lineHeight: 18,
  },
  categoryRight: {
    alignItems: 'center',
  },
  categoryCount: {
    fontSize: THEME_CONFIG.fontSize.xlarge,
    fontWeight: THEME_CONFIG.fontWeight.bold,
  },
  categoryLabel: {
    fontSize: THEME_CONFIG.fontSize.small,
  },
  recentSection: {
    paddingHorizontal: THEME_CONFIG.spacing.xl,
  },
  wordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: THEME_CONFIG.spacing.md,
    marginBottom: THEME_CONFIG.spacing.sm,
    borderRadius: THEME_CONFIG.borderRadius.medium,
    borderWidth: 1,
  },
  wordArabic: {
    fontSize: THEME_CONFIG.fontSize.large,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginRight: THEME_CONFIG.spacing.md,
    minWidth: 80,
  },
  wordEnglish: {
    fontSize: THEME_CONFIG.fontSize.medium,
    flex: 1,
    marginRight: THEME_CONFIG.spacing.sm,
  },
  wordType: {
    fontSize: THEME_CONFIG.fontSize.small,
  },
});

export default WordScreen;