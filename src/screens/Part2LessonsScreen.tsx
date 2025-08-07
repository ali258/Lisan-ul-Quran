import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { TAILWIND_COLORS, FONT_CLASSES } from '../utils/constants';
import { getThemeColor } from '../utils/colorUtils';
import { getFontWithProperFallback } from '../utils/fontUtils';

interface Part2LessonsScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768; // Tablet breakpoint
const lessonsPerRow = isTablet ? 3 : 2;
const cardWidth = (width - 72 - (lessonsPerRow - 1) * 20) / lessonsPerRow; // Account for spacing between cards

const Part2LessonsScreen: React.FC<Part2LessonsScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

  const lessons = [
    {
      id: 'lesson-5',
      title: 'اسم کی تعریف',
      subtitle: 'سبق ۵',
      description: 'اسم کی مکمل تعریف',
      icon: '📝',
      color: 'primary-600',
    },
    {
      id: 'lesson-6',
      title: 'اسم کی مثالیں',
      subtitle: 'سبق ۶',
      description: 'اسم کی مختلف مثالیں',
      icon: '📚',
      color: 'primary-500',
    },
    {
      id: 'lesson-7',
      title: 'اسم کی شناخت',
      subtitle: 'سبق ۷',
      description: 'اسم کی شناخت کے طریقے',
      icon: '🔍',
      color: 'primary-400',
    },
    {
      id: 'lesson-8',
      title: 'اسم کی مشق',
      subtitle: 'سبق ۸',
      description: 'اسم کی عملی مشق',
      icon: '✏️',
      color: 'primary-300',
    },
  ];

  const handleLessonPress = (lessonId: string) => {
    onNavigate(lessonId);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor(colors.background, isDarkMode),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 20,
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    backButton: {
      padding: 8,
      marginRight: 16,
    },
    backButtonText: {
      fontSize: 24,
      color: getThemeColor(colors.primary, isDarkMode),
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      flex: 1,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 40,
    },
    titleSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    mainTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: 20,
      textAlign: 'center',
      opacity: 0.8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.7,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      marginTop: 16,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    lessonsContainer: {
      marginTop: 20,
    },
    lessonsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    lessonCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      width: cardWidth,
      borderWidth: 2,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
      alignItems: 'center',
    },
    lessonIcon: {
      fontSize: 32,
      marginBottom: 12,
    },
    lessonNumber: {
      fontSize: 14,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    lessonTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: 24,
    },
    lessonDescription: {
      fontSize: 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 16,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      marginBottom: 0,
    },
  });

  // Group lessons into rows based on lessonsPerRow
  const lessonRows = [];
  for (let i = 0; i < lessons.length; i += lessonsPerRow) {
    lessonRows.push(lessons.slice(i, i + lessonsPerRow));
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={getThemeColor(colors.surface, isDarkMode)}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>حصہ دوم</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>حصہ دوم</Text>
        </View>

        {/* Lessons in responsive layout */}
        <View style={styles.lessonsContainer}>
          {lessonRows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.lessonsRow}>
              {row.map((lesson) => (
                <TouchableOpacity
                  key={lesson.id}
                  style={styles.lessonCard}
                  onPress={() => handleLessonPress(lesson.id)}
                >
                  <Text style={styles.lessonIcon}>{lesson.icon}</Text>
                  <Text style={styles.lessonNumber}>{lesson.subtitle}</Text>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonDescription}>{lesson.description}</Text>
                </TouchableOpacity>
              ))}
              {/* Add empty views if row is not full */}
              {row.length < lessonsPerRow && 
                Array.from({ length: lessonsPerRow - row.length }).map((_, index) => (
                  <View key={`empty-${index}`} style={{ width: cardWidth }} />
                ))
              }
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Part2LessonsScreen; 