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
import Part1Lesson1Screen from './arabic/Part1Lesson1Screen';
import Part1Lesson2Screen from './arabic/Part1Lesson2Screen';
import Part1Lesson3Screen from './arabic/Part1Lesson3Screen';
import Part1Lesson4Screen from './arabic/Part1Lesson4Screen';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

interface Part1ScreenProps {
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
  onBackPress?: () => void;
}

const Part1Screen: React.FC<Part1ScreenProps> = ({ 
  onGoToSettings, 
  onBottomNavigation, 
  onBackPress 
}) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
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
      color: currentTheme.text,
    },
    headerSubtitle: {
      fontSize: THEME_CONFIG.fontSize.medium,
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: THEME_CONFIG.spacing.lg,
      color: currentTheme.textSecondary,
    },
    decorativeLine: {
      width: 60,
      height: 4,
      borderRadius: 2,
      backgroundColor: currentTheme.primary,
    },
    lessonsContainer: {
      paddingHorizontal: THEME_CONFIG.spacing.md,
      paddingTop: THEME_CONFIG.spacing.xxxl,
    },
    lessonCard: {
      marginBottom: 20,
      borderRadius: THEME_CONFIG.borderRadius.large,
      padding: 20,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
      borderLeftWidth: 4,
      backgroundColor: currentTheme.surface,
      borderLeftColor: currentTheme.accent,
      shadowColor: currentTheme.shadow,
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    lessonIconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
    },
    titleSection: {
      flex: 1,
    },
    progressCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: currentTheme.primary,
    },
    progressText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.primary,
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
    lessonDescription: {
      fontSize: 14,
      fontStyle: 'italic',
      flex: 1,
      marginRight: 12,
      color: currentTheme.textSecondary,
    },
    cardIcon: {
      fontSize: 24,
      color: currentTheme.primary,
    },
    lessonNumber: {
      fontSize: THEME_CONFIG.fontSize.medium,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      marginBottom: 4,
      color: currentTheme.primary,
    },
    lessonUrduName: {
      fontSize: THEME_CONFIG.fontSize.small + 1,
      fontWeight: THEME_CONFIG.fontWeight.semibold,
      textAlign: 'left',
      lineHeight: 18,
      color: currentTheme.text,
    },
    statusBadge: {
      paddingHorizontal: THEME_CONFIG.spacing.sm,
      paddingVertical: 4,
      borderRadius: THEME_CONFIG.borderRadius.small,
      minWidth: 50,
      alignItems: 'center',
      backgroundColor: getColorWithOpacity(currentTheme.accent, 0.2),
    },
    statusText: {
      fontSize: THEME_CONFIG.fontSize.small - 1,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      color: currentTheme.primary,
    },
    statsSection: {
      margin: THEME_CONFIG.spacing.lg,
      padding: THEME_CONFIG.spacing.xl,
      borderRadius: THEME_CONFIG.borderRadius.large,
      borderWidth: 1,
      backgroundColor: currentTheme.surface,
      borderColor: currentTheme.border,
    },
    statsTitle: {
      fontSize: THEME_CONFIG.fontSize.large,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      textAlign: 'center',
      marginBottom: THEME_CONFIG.spacing.lg,
      color: currentTheme.text,
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
      color: currentTheme.primary,
    },
    statLabel: {
      fontSize: THEME_CONFIG.fontSize.small,
      textAlign: 'center',
      color: currentTheme.textSecondary,
    },
    
    lessonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: THEME_CONFIG.spacing.xl,
    },
    lessonTitle: {
      fontSize: THEME_CONFIG.fontSize.xxlarge,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      textAlign: 'center',
      marginBottom: THEME_CONFIG.spacing.md,
      color: currentTheme.text,
    },
    lessonSubtitle: {
      fontSize: THEME_CONFIG.fontSize.large,
      textAlign: 'center',
      marginBottom: THEME_CONFIG.spacing.xl,
      color: currentTheme.textSecondary,
    },
    
  });

  const part1Lessons = [
    {
        id: 'lesson-1',
        title: 'حروف الهجاء',
        subtitle: 'Lesson 1',
        description: 'عربی حروف کی تعلیم',
        icon: '🔤',
        color: 'primary-500',
      },
      {
        id: 'lesson-2',
        title: 'حرکات و تنوین و سکون',
        subtitle: 'Lesson 2',
        description: 'حرکات کی تعلیم',
        icon: '⚡',
        color: 'primary-400',
      },
      {
        id: 'lesson-3',
        title: 'حروف و حرکات',
        subtitle: 'Lesson 3',
        description: 'لفظ کی تشکیل',
        icon: '🔗',
        color: 'primary-300',
      },
      {
        id: 'lesson-4',
        title: 'کلمہ کی اقسام',
        subtitle: 'Lesson 4',
        description: 'کلمہ کی مختلف اقسام',
        icon: '📝',
        color: 'primary-200',
      },
    
  ];

  const handleLessonPress = (lessonId: string) => {
    setCurrentLesson(lessonId);
  };

  const handleBackFromLesson = () => {
    setCurrentLesson(null);
  };

  // Show specific lesson screen if one is selected
  if (currentLesson === 'lesson-1') {
    return (
      <Part1Lesson1Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-2') {
    return (
      <Part1Lesson2Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-3') {
    return (
      <Part1Lesson3Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-4') {
    return (
      <Part1Lesson4Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="حصہ اول"
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
        {/* <View style={styles.headerSection}>
          <View style={styles.iconContainer}>
            <Text style={styles.mainIcon}>📖</Text>
          </View>
          <Text style={styles.headerTitle}>
          حصہ اول کا تعارف
          </Text>
          <Text style={styles.headerSubtitle}>
          یہ حصہ عربی گرامر کی بنیادی تعلیم پر مشتمل ہے۔ حروف، حرکات، کلمہ کی اقسام اور جملہ کی ساخت سیکھیں۔
          </Text>
          <View style={styles.decorativeLine} />
        </View> */}

       

        {/* Beautiful Lessons List */}
        <View style={styles.lessonsContainer}>
          {part1Lessons.map((lesson, index) => (
            <TouchableOpacity
              key={lesson.id}
              style={styles.lessonCard}
              onPress={() => handleLessonPress(lesson.id)}
              activeOpacity={0.8}
            >
              {/* Top Row - Icon and Title */}
              <View style={styles.topRow}>
                <View style={styles.leftSection}>
                  <View style={styles.lessonIconContainer}>
                    <Text style={styles.cardIcon}>{lesson.icon}</Text>
                  </View>
                  <View style={styles.titleSection}>
                    <Text style={styles.lessonNumber}>
                      {lesson.subtitle}
                    </Text>
                    <Text style={styles.lessonUrduName} numberOfLines={1}>
                      {lesson.title}
                    </Text>
                  </View>
                </View>
                
                {/* Progress Circle */}
                <View style={styles.progressCircle}>
                  <Text style={styles.progressText}>
                    {index + 1}
                  </Text>
                </View>
              </View>

              {/* Bottom Row - Description */}
              {/* <View style={styles.bottomRow}>
                <Text style={styles.lessonDescription} numberOfLines={2}>
                  {lesson.description}
                </Text>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>
                    START
                  </Text>
                </View>
              </View> */}
            </TouchableOpacity>
          ))}
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.statsTitle}>Learning Progress</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{part1Lessons.length}</Text>
              <Text style={styles.statLabel}>Total Lessons</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0%</Text>
              <Text style={styles.statLabel}>Progress</Text>
            </View>
          </View>
        </View>

        
      </ScrollView>
    </View>
  );
};



export default Part1Screen; 