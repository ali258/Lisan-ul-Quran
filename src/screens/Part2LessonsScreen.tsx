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
      gradient: ['#3b82f6', '#1d4ed8'],
    },
    {
      id: 'lesson-6',
      title: 'اسم کی مثالیں',
      subtitle: 'سبق ۶',
      description: 'اسم کی مختلف مثالیں اور استعمال',
      icon: '📚',
      color: 'primary-500',
      gradient: ['#8b5cf6', '#7c3aed'],
    },
    {
      id: 'lesson-7',
      title: 'اسم کی شناخت',
      subtitle: 'سبق ۷',
      description: 'اسم کی شناخت کے طریقے',
      icon: '🔍',
      color: 'primary-400',
      gradient: ['#06b6d4', '#0891b2'],
    },
    {
      id: 'lesson-8',
      title: 'اسم کی مشق',
      subtitle: 'سبق ۸',
      description: 'اسم کی عملی مشق اور تمرین',
      icon: '✏️',
      color: 'primary-300',
      gradient: ['#10b981', '#059669'],
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
    lessonCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
    },
    lessonHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    lessonIcon: {
      fontSize: 36,
      marginRight: 20,
    },
    lessonInfo: {
      flex: 1,
    },
    lessonNumber: {
      fontSize: 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      marginBottom: 6,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    lessonTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      marginBottom: 6,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'right',
    },
    lessonDescription: {
      fontSize: 16,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 20,
    },
    lessonButton: {
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      alignItems: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    lessonButtonText: {
      color: getThemeColor(colors.surface, isDarkMode),
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
  });

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
          <Text style={styles.subtitle}>اسم کی تعلیم</Text>
          <Text style={styles.description}>
            اس حصے میں آپ اسم کی مکمل تعریف، اقسام اور مثالیں سیکھیں گے
          </Text>
        </View>

        {/* Lessons */}
        <View style={styles.lessonsContainer}>
          {lessons.map((lesson) => (
            <View key={lesson.id} style={styles.lessonCard}>
              <View style={styles.lessonHeader}>
                <Text style={styles.lessonIcon}>{lesson.icon}</Text>
                <View style={styles.lessonInfo}>
                  <Text style={styles.lessonNumber}>{lesson.subtitle}</Text>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                </View>
              </View>
              <Text style={styles.lessonDescription}>{lesson.description}</Text>
              <TouchableOpacity
                style={styles.lessonButton}
                onPress={() => handleLessonPress(lesson.id)}
              >
                <Text style={styles.lessonButtonText}>شروع کریں</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Part2LessonsScreen; 