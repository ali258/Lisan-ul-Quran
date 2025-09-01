import React, { useState } from 'react';
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
import Part1Screen from './Part1Screen';
import Part2Screen from './Part2Screen';
import Part3Screen from './Part3Screen';
import Part4Screen from './Part4Screen';

interface ArabicScreenProps {
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
}

const ArabicScreen: React.FC<ArabicScreenProps> = ({ onGoToSettings, onBottomNavigation }) => {
  const { isDarkMode, themeVariant } = useThemeStore();
  const currentTheme = getCurrentTheme(themeVariant, isDarkMode);
  const [currentPart, setCurrentPart] = useState<string | null>(null);

  const arabicLessons = [
    {
      id: 'part-1',
      title: 'حصہ اول',
      description: 'مقدمہ',
      icon: '1️⃣',
      progress: 85,
      onPress: () => setCurrentPart('part-1'),
    },
    {
      id: 'part-2',
      title: 'حصہ دوم',
      description: 'اسم کی تعلیم',
      icon: '2️⃣',
      progress: 60,
      onPress: () => setCurrentPart('part-2'),
    },
    {
      id: 'part-3',
      title: 'حصہ سوم',
      description: 'مرکبات کی تعلیم',
      icon: '3️⃣',
      progress: 45,
      onPress: () => setCurrentPart('part-3'),
    },
    {
      id: 'part-4',
      title: 'حصہ چہارم',
      description: 'جملہ اسمیہ کی تعلیم',
      icon: '4️⃣', 
      progress: 45,
      onPress: () => setCurrentPart('part-4'),
    },
   
  ];

  const handleBackFromPart = () => {
    setCurrentPart(null);
  };

  // Show specific part screen if one is selected
  if (currentPart === 'part-1') {
    return (
      <Part1Screen 
        onBackPress={handleBackFromPart}
        onGoToSettings={onGoToSettings}
        onBottomNavigation={onBottomNavigation}
      />
    );
  }

  if (currentPart === 'part-2') {

    return (
      <Part2Screen 
        onBackPress={handleBackFromPart}
        onGoToSettings={onGoToSettings}
        onBottomNavigation={onBottomNavigation}
      />
    );
  }

  if (currentPart === 'part-3') {
    return (
      <Part3Screen 
        onBackPress={handleBackFromPart}
        onGoToSettings={onGoToSettings}
        onBottomNavigation={onBottomNavigation}
      />
    );
  }

  if (currentPart === 'part-4') {
    return (
      <Part4Screen 
        onBackPress={handleBackFromPart}
        onGoToSettings={onGoToSettings}
        onBottomNavigation={onBottomNavigation}
      />
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <AnimatedHeader 
        title="Quranic Arabic"
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
        

        <View style={styles.lessonsContainer}>
          <Text style={[styles.sectionTitle, { color: currentTheme.text }]}>
            Lessons
          </Text>
          {arabicLessons.map((lesson, index) => (
            <TouchableOpacity 
              key={lesson.id}
              style={[
                styles.lessonCard, 
                { 
                  backgroundColor: currentTheme.card, 
                  borderColor: currentTheme.border,
                  shadowColor: currentTheme.shadow 
                }
              ]}
              onPress={lesson.onPress}
            >
              <View style={styles.lessonLeft}>
                <Text style={styles.lessonIcon}>{lesson.icon}</Text>
                <View style={styles.lessonInfo}>
                  <Text style={[styles.lessonTitle, { color: currentTheme.primary }]}>
                    {lesson.title}
                  </Text>
                  <Text style={[styles.lessonDescription, { color: currentTheme.textSecondary }]}>
                    {lesson.description}
                  </Text>
                </View>
              </View>
              <View style={styles.lessonRight}>
                <Text style={[styles.lessonProgress, { color: currentTheme.text }]}>
                  {lesson.progress}%
                </Text>
                <View style={[styles.smallProgressBar, { backgroundColor: currentTheme.border }]}>
                  <View 
                    style={[
                      styles.smallProgressFill, 
                      { backgroundColor: currentTheme.primary, width: `${lesson.progress}%` }
                    ]} 
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      <BottomNavigation 
        onMenuSelect={onBottomNavigation || (() => {})}
        activeMenu="grammar"
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
  progressSection: {
    padding: THEME_CONFIG.spacing.xl,
  },
  sectionTitle: {
    fontSize: THEME_CONFIG.fontSize.xlarge,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: THEME_CONFIG.spacing.lg,
  },
  overallProgress: {
    padding: THEME_CONFIG.spacing.xl,
    borderRadius: THEME_CONFIG.borderRadius.large,
    borderWidth: 1,
    alignItems: 'center',
  },
  progressTitle: {
    fontSize: THEME_CONFIG.fontSize.large,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    marginBottom: THEME_CONFIG.spacing.sm,
  },
  progressPercentage: {
    fontSize: THEME_CONFIG.fontSize.xxxlarge,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: THEME_CONFIG.spacing.md,
  },
  progressBar: {
    height: 8,
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  lessonsContainer: {
    paddingTop: THEME_CONFIG.spacing.xxxl,
    paddingHorizontal: THEME_CONFIG.spacing.xl,
    paddingBottom: THEME_CONFIG.spacing.xl,
  },
  lessonCard: {
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
  lessonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  lessonIcon: {
    fontSize: 32,
    marginRight: THEME_CONFIG.spacing.md,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: THEME_CONFIG.fontSize.large,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    marginBottom: THEME_CONFIG.spacing.xs / 2,
  },
  lessonDescription: {
    fontSize: THEME_CONFIG.fontSize.small,
    lineHeight: 18,
  },
  lessonRight: {
    alignItems: 'center',
    minWidth: 60,
  },
  lessonProgress: {
    fontSize: THEME_CONFIG.fontSize.medium,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    marginBottom: THEME_CONFIG.spacing.xs,
  },
  smallProgressBar: {
    height: 4,
    width: 50,
    borderRadius: 2,
    overflow: 'hidden',
  },
  smallProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
});

export default ArabicScreen;