import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { THEME_CONFIG, getHarfTheme, getColorWithOpacity } from '../utils/theme';
import AnimatedHeader from '../components/AnimatedHeader';
// Import all Harf lesson screens
import { 
  HarfLesson1Screen,
  HarfLesson2Screen,
  HarfLesson3Screen,
  HarfLesson4Screen,
  HarfLesson5Screen,
  HarfLesson6Screen,
  HarfLesson7Screen,
  HarfLesson8Screen,
  HarfLesson9Screen,
  HarfLesson10Screen,
  HarfLesson11Screen,
  HarfLesson12Screen,
  HarfLesson13Screen
} from './harf';

interface HarfScreenProps {
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
  onBackPress?: () => void;
  onLessonOpen?: () => void;
  onLessonClose?: () => void;
}

const HarfScreen: React.FC<HarfScreenProps> = ({ 
  onGoToSettings, 
  onBottomNavigation, 
  onBackPress,
  onLessonOpen,
  onLessonClose
}) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getHarfTheme(isDarkMode); // Use dedicated HARF orange theme
  const [currentLesson, setCurrentLesson] = useState<number | null>(null);

  // Function to calculate cumulative percentage based on lesson index
  const getCumulativePercentage = (index: number) => {
    const totalQuranWords = 77430;
    const lessonWordCounts = [
      31750, // Lesson 1: 41.1% (31,852 words)
      0,  // Lesson 2: 47.6% (36,852 words)
      0,  // Lesson 3: 52.8% (40,852 words)
      0,  // Lesson 4: 57.3% (44,352 words)
      0,  // Lesson 5: 61.2% (47,352 words)
      0,  // Lesson 6: 64.8% (50,152 words)
      0,  // Lesson 7: 68.0% (52,652 words)
      0,  // Lesson 8: 70.8% (54,852 words)
      0,  // Lesson 9: 73.4% (56,852 words)
      0,  // Lesson 10: 75.7% (58,652 words)
      0,  // Lesson 11: 77.8% (60,252 words)
      0,  // Lesson 12: 79.6% (61,652 words)
      0,  // Lesson 13: 81.2% (62,852 words)
    ];

    let cumulativeWords = 0;
    for (let i = 0; i <= index; i++) {
      cumulativeWords += lessonWordCounts[i];
    }
    
    const percentage = Math.round((cumulativeWords / totalQuranWords) * 100 * 10) / 10;
    return percentage;
  };

  const harfLessons = [
    {
      id: 1,
      title: 'Unit 1',
      urduName: 'اسم ضمائر',
      englishName: 'Personal Pronouns',
      icon: '🔗',
      progress: 50,
      status: 'Ready to start',
    },
    {
      id: 2,
      title: 'Unit 2',
      urduName: 'حروفِ جارہ',
      englishName: 'Prepositions',
      icon: '🔗',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 3,
      title: 'Unit 3',
      urduName: 'حروفِ جر مع الضمائر',
      englishName: 'Conjunctions with the Particles',
      icon: '💪',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 4,
      title: 'Unit 4',
      urduName: 'اسمائے اشارہ',
      englishName: 'Demonstrative Pronouns',
      icon: '🔀',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 5,
      title: 'Unit 5',
      urduName: 'اسم موصول',
      englishName: 'Relative Pronouns',
      icon: '❓',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 6,
      title: 'Unit 6',
      urduName: 'حروف عطف',
      englishName: 'Conjunctions',
      icon: '❌',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 7,
      title: 'Unit 7',
      urduName: 'حروف و اسمائے استفهام',
      englishName: 'Interrogative Particles',
      icon: '🚫',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 8,
      title: 'Unit 8',
      urduName: 'حروف نفی و اثبات',
      englishName: 'Negative & Positive Particles',
      icon: '💪',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 9,
      title: 'Unit 9',
      urduName: 'حروف مشبه بالفعل',
      englishName: 'Particles Resembling Verbs',
      icon: '🤝',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 10,
      title: 'Unit 10',
      urduName: 'حروف ندا',
      englishName: 'Vocative Particles',
      icon: '📢',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 11,
      title: 'Unit 11',
      urduName: 'مرکب ما',
      englishName: 'Compound Word with Ma',
      icon: '🔍',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 12,
      title: 'Unit 12',
      urduName: 'فعل کا ابتدائی حرف',
      englishName: 'Prefix for Verb',
      icon: '🎯',
      progress: 0,
      status: 'Ready to start',
    },
    {
      id: 13,
      title: 'Unit 13',
      urduName: 'قرآن کے عام حروف',
      englishName: 'Quranic Common Harfs',
      icon: '🌟',
      progress: 0,
      status: 'Ready to start',
    },
  ];

  const handleLessonPress = (lessonId: number) => {
    setCurrentLesson(lessonId);
    onLessonOpen?.();
  };

  const handleBackToLessons = () => {
    setCurrentLesson(null);
    onLessonClose?.();
  };

  // Render specific lesson if one is selected
  if (currentLesson) {
    const LessonComponents = {
      1: HarfLesson1Screen,
      2: HarfLesson2Screen,
      3: HarfLesson3Screen,
      4: HarfLesson4Screen,
      5: HarfLesson5Screen,
      6: HarfLesson6Screen,
      7: HarfLesson7Screen,
      8: HarfLesson8Screen,
      9: HarfLesson9Screen,
      10: HarfLesson10Screen,
      11: HarfLesson11Screen,
      12: HarfLesson12Screen,
      13: HarfLesson13Screen,
    };

    const LessonComponent = LessonComponents[currentLesson as keyof typeof LessonComponents];
    
    if (LessonComponent) {
      return (
        <LessonComponent 
          onBack={handleBackToLessons}
          onNavigate={() => {}}
        />
      );
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <AnimatedHeader 
        title="Harf Lessons"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView 
        style={[styles.scrollContainer, { paddingTop: 90 }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={[styles.headerTitle, { color: currentTheme.text }]}>
          Master 41% of Quranic words
          </Text>
         
        </View>

        {/* Lessons Section */}
        <View style={styles.lessonsContainer}>
          <View style={styles.lessonsGrid}>
            {harfLessons.map((lesson, index) => (
              <TouchableOpacity
                key={lesson.id}
                style={[
                  styles.lessonCard,
                  {
                    backgroundColor: currentTheme.card,
                    borderColor: currentTheme.border,
                  }
                ]}
                onPress={() => handleLessonPress(lesson.id)}
                activeOpacity={0.7}
              >
                {/* Top Row - Icon, Title and Progress Circle */}
                <View style={styles.topRow}>
                  <View style={styles.leftSection}>
                    <View style={styles.lessonIconContainer}>
                      <Text style={styles.cardIcon}>{lesson.icon}</Text>
                    </View>
                    <View style={styles.titleSection}>
                      <Text style={[styles.lessonNumber, { color: currentTheme.text }]}>
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
    paddingBottom: 160, // Space for bottom navigation
  },
  headerSection: {
    padding: THEME_CONFIG.spacing.xl,
    marginBottom: THEME_CONFIG.spacing.md,
    marginTop: THEME_CONFIG.spacing.xxl,
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
  },
  lessonsContainer: {
    padding: THEME_CONFIG.spacing.xl,
  },
  lessonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  lessonCard: {
    width: '48%',
    padding: 16,
    marginBottom: 20,
    borderRadius: THEME_CONFIG.borderRadius.large,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: 'rgba(255, 152, 0, 0.1)',
  },
  cardIcon: {
    fontSize: 20,
  },
  titleSection: {
    flex: 1,
  },
  lessonNumber: {
    fontSize: 12,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: 3,
  },
  progressCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleRow: {
    marginBottom: 6,
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
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: THEME_CONFIG.spacing.md,
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
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: THEME_CONFIG.spacing.xs,
  },
  lessonUrduName: {
    fontSize: 11,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    textAlign: 'right',
    lineHeight: 14,
  },
  lessonEnglishName: {
    fontSize: THEME_CONFIG.fontSize.medium,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    marginBottom: THEME_CONFIG.spacing.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HarfScreen;