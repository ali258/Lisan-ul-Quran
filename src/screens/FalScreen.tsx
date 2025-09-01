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
import { THEME_CONFIG, getFaalTheme } from '../utils/theme';
import AnimatedHeader from '../components/AnimatedHeader';
import { FalLesson1Screen } from './fal';
import { FalLesson2Screen } from './fal';
import { FalLesson3Screen } from './fal';
import { FalLesson4Screen } from './fal';
import { FalLesson5Screen } from './fal';
import { FalLesson6Screen } from './fal';
import { FalLesson7Screen } from './fal';
import { FalLesson8Screen } from './fal';
import { FalLesson9Screen } from './fal';
import { FalLesson10Screen } from './fal';
import { FalLesson11Screen } from './fal';
import { FalLesson12Screen } from './fal';
import { FalLesson13Screen } from './fal';
import { FalLesson14Screen } from './fal';
import { FalLesson15Screen } from './fal';


interface FalScreenProps {
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
  onBackPress?: () => void;
  onLessonOpen?: () => void;
  onLessonClose?: () => void;
}

interface FalLesson {
  id: number;
  title: string;
  urduName: string;
  englishName: string;
  icon: string;
  progress: number;
  status: string;
  difficulty: string;
  duration: string;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const FalScreen: React.FC<FalScreenProps> = ({ 
  onGoToSettings, 
  onBottomNavigation, 
  onBackPress,
  onLessonOpen,
  onLessonClose
}) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getFaalTheme(isDarkMode); // Use dedicated FAAL red theme
  const [currentLesson, setCurrentLesson] = useState<number | null>(null);

  const falLessons = [
    {
      id: 1,
      title: 'Lesson 1',
      urduName: 'فعل ثلاثی مُجَرَّد ',
      englishName: 'فَعَلَ ، یَفْعَلُ',
      icon: '📖',
      progress: 0,
    },
    {
      id: 2,
      title: 'Lesson 2',
      urduName: 'فعل ثلاثی مُجَرَّد ',
      englishName: 'فَعَلَ ، یَفْعُلُ',
      icon: '⏰',
      progress: 0,
    },
    {
      id: 3,
      title: 'Lesson 3',
      urduName: 'فعل ثلاثی مُجَرَّد ',
      englishName: 'فَعَلَ ، یَفْعِلُ',
      icon: '🔮',
      progress: 0,
    },
    {
      id: 4,
      title: 'Lesson 4',
      urduName: 'فعل ثلاثی مُجَرَّد ',
      englishName: 'فَعِلَ ، یَفْعَلُ',
      icon: '⚡',
      progress: 0,
     
    },
    {
      id: 5,
      title: 'Lesson 5',
      urduName: 'فعل ثلاثی مُجَرَّد ',
      englishName: 'مِثال',
      icon: '🚫',
      progress: 0,
     
    },
    {
      id: 6,
      title: 'Lesson 6',
      urduName: 'فعل ثلاثی مُجَرَّد ',
      englishName: 'أَجوَف',
      icon: '🔄',
      progress: 0,
     
    },
    {
      id: 7,
      title: 'Lesson 7',
      urduName: 'فعل ثلاثی مُجَرَّد ',
      englishName: 'ناقص',
      icon: '🎯',
      progress: 0,
     
    },
    {
      id: 8,
      title: 'Lesson 8',
      urduName: 'فعل ثلاثی مُجَرَّد ',
      englishName: 'مضاعف',
      icon: '🛡️',
      progress: 0,
     
    },
    {
      id: 9,
      title: 'Lesson 9',
      urduName: 'فعل ثلاثی مُجَرَّد ',
      englishName: 'مہموز',
      icon: '🔤',
      progress: 0,
     
    },
    {
      id: 10,
      title: 'Lesson 10',
      urduName: 'فعل رباعی',
      englishName: 'Four-Letter Root Verbs',
      icon: '📚',
      progress: 0,
     
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

  // Helper function for colors with opacity
const getColorWithOpacity = (color: string, opacity: number) => {
    const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
    return `${color}${alpha}`;
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContainer: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: 120,
    },
    heroSection: {
      padding: THEME_CONFIG.spacing.xl,
      alignItems: 'center',
      marginBottom: THEME_CONFIG.spacing.lg,
    },
    heroIconContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: THEME_CONFIG.spacing.md,
    },
    heroIcon: {
      fontSize: 40,
    },
    heroTitle: {
      fontSize: isTablet ? 32 : 28,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      textAlign: 'center',
      marginBottom: THEME_CONFIG.spacing.sm,
    },
    heroSubtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: THEME_CONFIG.spacing.lg,
      paddingHorizontal: THEME_CONFIG.spacing.md,
    },
    heroStats: {
      flexDirection: 'row',
      padding: THEME_CONFIG.spacing.lg,
      borderRadius: THEME_CONFIG.borderRadius.large,
      width: '100%',
      justifyContent: 'space-around',
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      marginBottom: 4,
    },
    statLabel: {
      fontSize: isTablet ? 14 : 12,
      textAlign: 'center',
    },
    statDivider: {
      width: 1,
      backgroundColor: 'rgba(0,0,0,0.1)',
      marginHorizontal: THEME_CONFIG.spacing.md,
    },
    lessonsContainer: {
      paddingHorizontal: THEME_CONFIG.spacing.md,
    },
    sectionTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      textAlign: 'center',
      marginBottom: THEME_CONFIG.spacing.xl,
    },
    lessonsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    lessonCard: {
      width: '48%',
      marginBottom: THEME_CONFIG.spacing.lg,
      borderRadius: THEME_CONFIG.borderRadius.large,
      padding: THEME_CONFIG.spacing.lg,
      borderWidth: 2,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 8,
      minHeight: 200,
    },
    lessonHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: THEME_CONFIG.spacing.md,
      padding: THEME_CONFIG.spacing.md,
      borderRadius: THEME_CONFIG.borderRadius.medium,
      marginHorizontal: -THEME_CONFIG.spacing.lg,
      marginTop: -THEME_CONFIG.spacing.lg,
    },
    lessonIconContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lessonIcon: {
      fontSize: 24,
    },
    lessonNumberContainer: {
      width: 35,
      height: 35,
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    lessonNumber: {
      fontSize: 14,
      fontWeight: THEME_CONFIG.fontWeight.bold,
    },
    lessonContent: {
      marginBottom: THEME_CONFIG.spacing.md,
      flex: 1,
      justifyContent: 'center',
    },
    lessonTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      marginBottom: 6,
      textAlign: 'center',
    },
    lessonUrduName: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      marginBottom: 4,
      textAlign: 'center',
    },
    lessonEnglishName: {
      fontSize: isTablet ? 14 : 12,
      fontStyle: 'italic',
      textAlign: 'center',
      marginBottom: 8,
    },
    lessonFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: THEME_CONFIG.spacing.sm,
    },
    difficultyBadge: {
      paddingHorizontal: THEME_CONFIG.spacing.sm,
      paddingVertical: 4,
      borderRadius: THEME_CONFIG.borderRadius.small,
    },
    difficultyText: {
      fontSize: 10,
      fontWeight: THEME_CONFIG.fontWeight.bold,
    },
    lessonMeta: {
      alignItems: 'flex-end',
    },
    durationText: {
      fontSize: 10,
      marginBottom: 2,
    },
    statusText: {
      fontSize: 10,
      fontWeight: THEME_CONFIG.fontWeight.bold,
    },
    progressBar: {
      height: 4,
      borderRadius: 2,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      borderRadius: 2,
    },
    infoSection: {
      margin: THEME_CONFIG.spacing.lg,
      padding: THEME_CONFIG.spacing.xl,
      borderRadius: THEME_CONFIG.borderRadius.large,
    },
    infoTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      textAlign: 'center',
      marginBottom: THEME_CONFIG.spacing.md,
    },
    infoText: {
      fontSize: isTablet ? 16 : 14,
      textAlign: 'center',
      lineHeight: 22,
    },
    lessonPlaceholder: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: THEME_CONFIG.spacing.xl,
    },
    lessonPlaceholderText: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: THEME_CONFIG.fontWeight.bold,
      textAlign: 'center',
      marginBottom: THEME_CONFIG.spacing.md,
    },
    lessonPlaceholderSubtext: {
      fontSize: isTablet ? 16 : 14,
      textAlign: 'center',
    },
  });

  // Show specific lesson screen if one is selected
  if (currentLesson === 1) {
    return (
      <FalLesson1Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 2) {
    return (
      <FalLesson2Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 3) {
    return (
      <FalLesson3Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  
  if (currentLesson === 4) {
    return (
      <FalLesson4Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 5) {
    return (
      <FalLesson5Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 6) {
    return (
      <FalLesson6Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 7) {
    return (
      <FalLesson7Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 8) {
    return (
      <FalLesson8Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 9) {
    return (
      <FalLesson9Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 10) {
    return (
      <FalLesson10Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 11) {
    return (
      <FalLesson11Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 12) {
    return (
      <FalLesson12Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 13) {
    return (
      <FalLesson13Screen 
        onBack={handleBackToLessons}
      />
    );
  }

  if (currentLesson === 14) {
    return (
      <FalLesson14Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  

  if (currentLesson === 15) {
    return (
      <FalLesson15Screen 
        onBack={handleBackToLessons}
      />
    );
  }
  
  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <AnimatedHeader 
        title="Fal Learning Path"
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
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={[styles.heroIconContainer, { backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1) }]}>
            <Text style={styles.heroIcon}>📝</Text>
          </View>
          <Text style={[styles.heroTitle, { color: currentTheme.text }]}>
            Fal Learning Journey
          </Text>
          <Text style={[styles.heroSubtitle, { color: currentTheme.textSecondary }]}>
            Master Arabic verbs and their conjugations through interactive lessons
          </Text>
          <View style={[styles.heroStats, { backgroundColor: getColorWithOpacity(currentTheme.primary, 0.05) }]}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: currentTheme.primary }]}>10</Text>
              <Text style={[styles.statLabel, { color: currentTheme.textSecondary }]}>Lessons</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: currentTheme.primary }]}>0%</Text>
              <Text style={[styles.statLabel, { color: currentTheme.textSecondary }]}>Progress</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: currentTheme.primary }]}>4</Text>
              <Text style={[styles.statLabel, { color: currentTheme.textSecondary }]}>Levels</Text>
            </View>
          </View>
        </View>

        {/* Lessons Grid */}
        <View style={styles.lessonsContainer}>
          <Text style={[styles.sectionTitle, { color: currentTheme.text }]}>
            Choose Your Lesson
          </Text>
          
          <View style={styles.lessonsGrid}>
            {falLessons.map((lesson) => (
              <TouchableOpacity
                key={lesson.id}
                style={[
                  styles.lessonCard,
                  {
                    backgroundColor: currentTheme.surface,
                    borderColor: getColorWithOpacity(currentTheme.primary, 0.2),
                    shadowColor: currentTheme.shadow,
                  }
                ]}
                onPress={() => handleLessonPress(lesson.id)}
                activeOpacity={0.8}
              >
                {/* Lesson Header */}
                <View style={styles.lessonHeader}>
                  <View style={[styles.lessonIconContainer, { backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1) }]}>
                    <Text style={styles.lessonIcon}>{lesson.icon}</Text>
                  </View>
                  <View style={styles.lessonNumberContainer}>
                    <Text style={[styles.lessonNumber, { color: currentTheme.primary }]}>
                      {lesson.id.toString().padStart(2, '0')}
                    </Text>
                  </View>
                </View>

                {/* Lesson Content */}
                <View style={styles.lessonContent}>
                  <Text style={[styles.lessonTitle, { color: currentTheme.text }]}>
                    {lesson.title}
                  </Text>
                  <Text style={[styles.lessonUrduName, { color: currentTheme.primary }]}>
                    {lesson.urduName}
                  </Text>
                  <Text style={[styles.lessonEnglishName, { color: currentTheme.textSecondary }]}>
                    {lesson.englishName}
                  </Text>
                </View>

               

                {/* Progress Bar */}
                <View style={[styles.progressBar, { backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1) }]}>
                  <View 
                    style={[
                      styles.progressFill, 
                      { 
                        width: `${lesson.progress}%`,
                        backgroundColor: currentTheme.primary
                      }
                    ]} 
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Learning Path Info */}
        <View style={[styles.infoSection, { backgroundColor: getColorWithOpacity(currentTheme.primary, 0.05) }]}>
          <Text style={[styles.infoTitle, { color: currentTheme.text }]}>
            Learning Path Overview
          </Text>
          <Text style={[styles.infoText, { color: currentTheme.textSecondary }]}>
            Start with basic verb forms and progress through advanced conjugations. 
            Each lesson builds upon the previous one, ensuring a solid foundation in Arabic verb morphology.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};





export default FalScreen; 