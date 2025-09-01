import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { THEME_CONFIG, getIsmTheme, getColorWithOpacity } from '../utils/theme';
import AnimatedHeader from '../components/AnimatedHeader';
// Import ISM lesson screens
import IsmLesson1Screen from './ism/IsmLesson1Screen';
import { IsmLesson2Screen } from './ism/IsmLesson2Screen';
import { IsmLesson3Screen } from './ism/IsmLesson3Screen';
import { IsmLesson4Screen } from './ism/IsmLesson4Screen';
import { IsmLesson5Screen } from './ism/IsmLesson5Screen';
import { IsmLesson6Screen } from './ism/IsmLesson6Screen';
import { IsmLesson7Screen } from './ism/IsmLesson7Screen';
import { IsmLesson8Screen } from './ism/IsmLesson8Screen';
import { IsmLesson9Screen } from './ism/IsmLesson9Screen';
import { IsmLesson10Screen } from './ism/IsmLesson10Screen';
import { IsmLesson11Screen } from './ism/IsmLesson11Screen';
import { IsmLesson12Screen } from './ism/IsmLesson12Screen';
import { IsmLesson13Screen } from './ism/IsmLesson13Screen';
import { IsmLesson14Screen } from './ism/IsmLesson14Screen';
import { IsmLesson15Screen } from './ism/IsmLesson15Screen';
import { IsmLesson16Screen } from './ism/IsmLesson16Screen';
import { IsmLesson17Screen } from './ism/IsmLesson17Screen';

interface IsmScreenProps {
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
  onBackPress?: () => void;
  onLessonOpen?: () => void;
  onLessonClose?: () => void;
}

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const IsmScreen: React.FC<IsmScreenProps> = ({ 
  onGoToSettings, 
  onBottomNavigation, 
  onBackPress,
  onLessonOpen,
  onLessonClose
}) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode); // Use dedicated ISM blue theme
  const [currentLesson, setCurrentLesson] = useState<number | null>(null);

  // Function to calculate cumulative percentage based on lesson index
  const getCumulativePercentage = (index: number) => {
    const totalQuranWords = 77430;
    const lessonWordCounts = [
      31852, // Lesson 1: 41% (31,750 words)
      0,  // Lesson 2: 47% (36,750 words)
      2707,  // Lesson 3: 52% (40,750 words)
      309,  // Lesson 4: 57% (44,250 words)
      1581,  // Lesson 5: 61% (47,250 words)
      1171,  // Lesson 6: 65% (50,050 words)
      2071,  // Lesson 7: 68% (52,550 words)
      899,  // Lesson 8: 71% (54,750 words)
      884,  // Lesson 9: 74% (56,750 words)
      584,  // Lesson 10: 76% (58,550 words)
      543,  // Lesson 11: 78% (60,150 words)
      635,  // Lesson 12: 80% (61,550 words)
      875,  // Lesson 13: 82% (62,750 words)
      817,  // Lesson 14: 83% (63,750 words)
      1103,   // Lesson 15: 84% (64,550 words)
      381,   // Lesson 16: 85% (65,150 words)
      20,   // Lesson 17: 86% (65,550 words)
    ];

    let cumulativeWords = 0;
    for (let i = 0; i <= index; i++) {
      cumulativeWords += lessonWordCounts[i];
    }
    
    const percentage = Math.round((cumulativeWords / totalQuranWords) * 100);
    return percentage;
  };

  const ismLessons = [
    {
      id: 1,
      title: 'Lesson 1',
      urduName: 'اسم ظرف',
      englishName: 'Adverb of Place/Time',
      icon: '📍',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-50',
    },
    {
      id: 2,
      title: 'Lesson 2',
      urduName: 'کثرت استعمال والے اسماء',
      englishName: 'Frequently Used Nouns',
      icon: '📚',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-500',
    },
    {
      id: 3,
      title: 'Lesson 3',
      urduName: 'بعض صفات (اللہ اور دوسروں کی)',
      englishName: 'Some Attributes (Allah & Others)',
      icon: '🎯',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-400',
    },
    {
      id: 4,
      title: 'Lesson 4',
      urduName: 'اسمِ تفضیل',
      englishName: 'Superlative Nouns',
      icon: '🔗',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-300',
    },
    {
      id: 5,
      title: 'Lesson 5',
      urduName: 'اللہ کی نشانیاں',
      englishName: 'Signs of Allah',
      icon: '❓',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-200',
    },
    {
      id: 6,
      title: 'Lesson 6',
      urduName: "انبیاء و شخصیات",
      englishName: 'Conditional Nouns',
      icon: '🔀',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-100',
    },
    {
      id: 7,
      title: 'Lesson 7',
      urduName: "آخرت و جزا",
      englishName: 'Rewards and Punishments',
      icon: '📝',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-600',
    },
    {
      id: 8,
      title: 'Lesson 8',
      urduName: 'دینی تصورات',
      englishName: 'Religious Concepts',
      icon: '📚',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-25',
    },
    {
      id: 9,
      title: 'Lesson 9',
      urduName: 'ایمانی تصورات',
      englishName: 'Faith Concepts',
      icon: '🕌',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-700',
    },
    {
      id: 10,
      title: 'Lesson 10',
      urduName: 'اخلاقی تصورات',
      englishName: 'Moral Concepts',
      icon: '⚖️',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-800',
    },
    {
      id: 11,
      title: 'Lesson 11',
      urduName: 'نعمات و برکات',
      englishName: 'Blessings & Divine Grace',
      icon: '🌟',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-900',
    },
    {
      id: 12,
      title: 'Lesson 12',
      urduName: 'خاندانی رشتے',
      englishName: 'Family Relationships',
      icon: '👪',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-950',
    },
    {
      id: 13,
      title: 'Lesson 13',
      urduName: 'جسمانی اعضاء اور روح',
      englishName: 'Body Parts & Soul',
      icon: '🧘',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-950',
    },
    {
      id: 14,
      title: 'Lesson 14',
      urduName: 'دنیا، مکانات اور مقامات',
      englishName: 'World, Places & Abodes',
      icon: '🌍',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-950',
    },
    {
      id: 15,
      title: 'Lesson 15',
      urduName: 'انسان، لوگ اور اقسام',
      englishName: 'People and Their Types',
      icon: '👥',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-950',
    },
    {
      id: 16,
      title: 'Lesson 16',
      urduName: 'متفرق اہم الفاظ',
      englishName: 'Miscellaneous Key Words',
      icon: '🔍',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-950',
    },
    {
      id: 17,
      title: 'Lesson 17',
      urduName: 'عدد',
      englishName: 'Numbers',
      icon: '🔢',
      progress: 0,
      status: 'Ready to start',
      color: 'primary-950',
    },
  ];

  const handleLessonPress = (lessonId: number) => {
    setCurrentLesson(lessonId);
    onLessonOpen?.();
  };

  const handleBackFromLesson = () => {
    console.log('handleBackFromLesson called in IsmScreen');
    setCurrentLesson(null);
    onLessonClose?.();
  };

  const handleBackToLessons = () => {
    setCurrentLesson(null);
    onLessonClose?.();
  };

  // Show specific lesson screen if one is selected
  if (currentLesson === 1) {
    return (
      <IsmLesson1Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 2) {
    return (
      <IsmLesson2Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 3) {
    return (
      <IsmLesson3Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 4) {
    return (
      <IsmLesson4Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 5) {
    return (
      <IsmLesson5Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 6) {
    return (
      <IsmLesson6Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 7) {
    return (
      <IsmLesson7Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 8) {
    return (
      <IsmLesson8Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 9) {
    return (
      <IsmLesson9Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 10) {
    return (
      <IsmLesson10Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 11) {
    return (
      <IsmLesson11Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 12) {
    return (
      <IsmLesson12Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 13) {
    return (
      <IsmLesson13Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  if (currentLesson === 14) {
    return (
      <IsmLesson14Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  if (currentLesson === 15) {
    return (
      <IsmLesson15Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  if (currentLesson === 16) {
    return (
      <IsmLesson16Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  if (currentLesson === 17) {
    return (
      <IsmLesson17Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <AnimatedHeader 
        title="Ism Lessons"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
         
          <Text style={[styles.headerTitle, { color: currentTheme.text }]}>
            Master 60% of Quranic words
          </Text>
          
        </View>

        {/* Beautiful Lessons List */}
        <View style={styles.lessonsContainer}>
          <View style={styles.lessonsGrid}>
            {ismLessons.map((lesson, index) => (
              <TouchableOpacity
                key={lesson.id}
                style={[
                  styles.lessonCard,
                  {
                    backgroundColor: currentTheme.surface,
                    borderLeftColor: currentTheme.accent,
                    shadowColor: currentTheme.shadow,
                  }
                ]}
                onPress={() => handleLessonPress(lesson.id)}
                activeOpacity={0.8}
              >
                              {/* Top Row - Icon, Title and Progress Circle */}
              <View style={styles.topRow}>
                <View style={styles.leftSection}>
                  <View style={[styles.lessonIconContainer, { backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1) }]}>
                    <Text style={styles.cardIcon}>{lesson.icon}</Text>
                  </View>
                  <View style={styles.titleSection}>
                    <Text style={[styles.lessonNumber, { color: currentTheme.primary }]}>
                      {lesson.title}
                    </Text>
                  </View>
                </View>
                
                {/* Progress Circle */}
                <View style={[styles.progressCircle, { borderColor: currentTheme.primary }]}>
                  <Text style={[styles.progressText, { color: currentTheme.primary }]}>
                    {getCumulativePercentage(index)}
                  </Text>
                </View>
              </View>

              {/* Middle Row - Urdu Name */}
              <View style={styles.middleRow}>
                <Text style={[styles.lessonUrduName, { color: currentTheme.text }]} numberOfLines={1}>
                  {lesson.urduName}
                </Text>
              </View>

                {/* Bottom Row - Description */}
                <View style={styles.bottomRow}>
                  <Text style={[styles.lessonDescription, { color: currentTheme.textSecondary }]} numberOfLines={2}>
                    {lesson.englishName}
                  </Text>
                  <View style={[styles.statusBadge, { backgroundColor: getColorWithOpacity(currentTheme.accent, 0.2) }]}>
                    <Text style={[styles.statusText, { color: currentTheme.accent }]}>
                      START
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Stats Section */}
        <View style={[styles.statsSection, { backgroundColor: currentTheme.card, borderColor: currentTheme.border }]}>
          <Text style={[styles.statsTitle, { color: currentTheme.text }]}>Quranic Word Coverage</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: currentTheme.primary }]}>17</Text>
              <Text style={[styles.statLabel, { color: currentTheme.textSecondary }]}>Total Lessons</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: currentTheme.primary }]}>0</Text>
              <Text style={[styles.statLabel, { color: currentTheme.textSecondary }]}>Completed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: currentTheme.primary }]}>20%</Text>
              <Text style={[styles.statLabel, { color: currentTheme.textSecondary }]}>Quran Coverage</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 90, // Space for header
    paddingBottom: THEME_CONFIG.spacing.xxl, // Bottom padding
  },
  headerSection: {
    padding: THEME_CONFIG.spacing.xl,
    alignItems: 'center',
    marginBottom: THEME_CONFIG.spacing.lg,
    marginTop: THEME_CONFIG.spacing.xxl,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(36, 108, 246, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: THEME_CONFIG.spacing.md,
  },
  mainIcon: {
    fontSize: 40,
  },
  headerTitle: {
    fontSize: THEME_CONFIG.fontSize.xxlarge,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    textAlign: 'center',
    marginBottom: THEME_CONFIG.spacing.sm,
  },
  headerSubtitle: {
    fontSize: THEME_CONFIG.fontSize.medium,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: THEME_CONFIG.spacing.lg,
  },
  decorativeLine: {
    width: 60,
    height: 4,
    borderRadius: 2,
  },
  lessonsContainer: {
    paddingHorizontal: THEME_CONFIG.spacing.md,
    paddingTop: THEME_CONFIG.spacing.md,
  },
  lessonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  lessonCard: {
    width: '48%',
    marginBottom: 20,
    borderRadius: THEME_CONFIG.borderRadius.large,
    padding: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  middleRow: {
    marginBottom: 6,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  lessonIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  titleSection: {
    flex: 1,
  },
  progressCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  lessonDescription: {
    fontSize: 10,
    fontStyle: 'italic',
    flex: 1,
    marginRight: 8,
    lineHeight: 12,
  },
  cardIcon: {
    fontSize: 20,
  },
  lessonNumber: {
    fontSize: 12,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: 3,
  },
  lessonUrduName: {
    fontSize: 11,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    textAlign: 'right',
    lineHeight: 14,
  },

  statusBadge: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: THEME_CONFIG.borderRadius.small,
    minWidth: 40,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 9,
    fontWeight: THEME_CONFIG.fontWeight.bold,
  },
  statsSection: {
    margin: THEME_CONFIG.spacing.lg,
    padding: THEME_CONFIG.spacing.xl,
    borderRadius: THEME_CONFIG.borderRadius.large,
    borderWidth: 1,
  },
  statsTitle: {
    fontSize: THEME_CONFIG.fontSize.large,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    textAlign: 'center',
    marginBottom: THEME_CONFIG.spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: THEME_CONFIG.fontSize.xxlarge,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: THEME_CONFIG.spacing.xs,
  },
  statLabel: {
    fontSize: THEME_CONFIG.fontSize.small,
    textAlign: 'center',
  },
});

export default IsmScreen;