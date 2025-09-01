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
import Part2Lesson1Screen from './arabic/Part2Lesson1Screen';
import Part2Lesson2Screen from './arabic/Part2Lesson2Screen';
import Part2Lesson3Screen from './arabic/Part2Lesson3Screen';
import Part2Lesson4Screen from './arabic/Part2Lesson4Screen';
import Part2Lesson5Screen from './arabic/Part2Lesson5Screen';
import Part2Lesson6Screen from './arabic/Part2Lesson6Screen';
import Part2Lesson7Screen from './arabic/Part2Lesson7Screen';
import Part2Lesson8Screen from './arabic/Part2Lesson8Screen';
import Part2Lesson9Screen from './arabic/Part2Lesson9Screen';
import Part2Lesson10Screen from './arabic/Part2Lesson10Screen';
import Part2Lesson11Screen from './arabic/Part2Lesson11Screen';
import Part2Lesson12Screen from './arabic/Part2Lesson12Screen';



const { width } = Dimensions.get('window');
const isTablet = width >= 768;

interface Part2ScreenProps {
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
  onBackPress?: () => void;
}

const Part2Screen: React.FC<Part2ScreenProps> = ({ 
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

  const part2Lessons = [
    {
      id: 'lesson-1',
      title: 'اسم کی تعریف',
      subtitle: 'Lesson 1',
      description: 'اسم کی مکمل تعریف',
      icon: '📝',
      color: 'primary-600',
    },
    {
      id: 'lesson-2',
      title: 'اسم کی اقسام',
      subtitle: 'Lesson 2',
      description: 'اسم کی مختلف اقسام',
      icon: '📚',
      color: 'primary-500',
    },
    {
      id: 'lesson-3',
      title: 'منصرف اسماء',
      subtitle: 'Lesson 3',
      description: 'منصرف اسماء کی شناخت',
      icon: '🔍',
      color: 'primary-400',
    },
    {
      id: 'lesson-4',
      title: 'غیر منصرف اسماء',
      subtitle: 'Lesson 4',
      description: 'غیر منصرف اسماء کی شناخت',
      icon: '✏️',
      color: 'primary-300',
    },
    {
      id: 'lesson-5',
      title: 'مَبْنِي اسماء',
      subtitle: 'Lesson 5',
      description: 'مَبْنِي اسماء کی شناخت',
      icon: '📋',
      color: 'primary-200',
    },
    {
      id: 'lesson-6',
      title: 'اسم کے چار پہلو',
      subtitle: 'Lesson 6',
      description: 'اسم اور اس کے چار اہم پہلو',
      icon: '🎯',
      color: 'primary-100',
    },
    {
      id: 'lesson-7',
      title: 'اعراب',
      subtitle: 'Lesson 7',
      description: 'اعراب کی تعریف اور مثالیں',
      icon: '📝',
      color: 'primary-50',
    },
    {
      id: 'lesson-8',
      title: 'جنس',
      subtitle: 'Lesson 8',
      description: 'جنس کی تعریف اور مثالیں',
      icon: '👥',
      color: 'primary-600',
    },
    {
      id: 'lesson-9',
      title: 'عدد',
      subtitle: 'Lesson 9',
      description: 'عدد کی تعریف اور مثالیں',
      icon: '🔢',
      color: 'primary-500',
    },
    {
      id: 'lesson-10',
      title: 'وسعت',
      subtitle: 'Lesson 10',
      description: 'نکرہ و معرفہ (وسعت) کی وضاحت',
      icon: '📘',
      color: 'primary-400',
    },
    {
      id: 'lesson-11',
      title: 'مُعرّف باللام',
      subtitle: 'Lesson 11',
      description: 'ال کے ساتھ معرفہ—قواعد اور مثالیں',
      icon: '🅰️',
      color: 'primary-300',
    },
    {
      id: 'lesson-12',
      title: 'قمری و شمسی حروف',
      subtitle: 'Lesson 12',
      description: 'قمری اور شمسی حروف کی فہرست اور مثالیں',
      icon: '🌙',
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
      <Part2Lesson1Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-2') {
    return (
      <Part2Lesson2Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-3') {
    return (
      <Part2Lesson3Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-4') {
    return (
      <Part2Lesson4Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-5') {
    return (
      <Part2Lesson5Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-6') {
    return (
      <Part2Lesson6Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-7') {

    return (
      <Part2Lesson7Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-8') {

    return (
      <Part2Lesson8Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-9') {

    return (
      <Part2Lesson9Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-10') {

    return (
      <Part2Lesson10Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-11') {

    return (
      <Part2Lesson11Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }

  if (currentLesson === 'lesson-12') {
    return (
      <Part2Lesson12Screen 
        onBackPress={handleBackFromLesson}
      />
    );
  }


  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="حصہ دوم"
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
          {part2Lessons.map((lesson, index) => (
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
              <Text style={styles.statNumber}>{part2Lessons.length}</Text>
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



export default Part2Screen; 