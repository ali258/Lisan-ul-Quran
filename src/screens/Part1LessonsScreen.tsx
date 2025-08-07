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

interface Part1LessonsScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');

const Part1LessonsScreen: React.FC<Part1LessonsScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

  const lessons = [
    {
      id: 'lesson-1',
      title: 'حروف الهجاء',
      subtitle: 'سبق ۱',
      description: 'عربی حروف تہجی کی تعلیم',
      icon: '🔤',
      color: 'primary-600',
    },
    {
      id: 'lesson-2',
      title: 'حرکات و تنوین و سکون',
      subtitle: 'سبق ۲',
      description: 'حرکات، تنوین اور سکون کی تعلیم',
      icon: '📝',
      color: 'primary-500',
    },
    {
      id: 'lesson-3',
      title: 'حروف و حرکات',
      subtitle: 'سبق ۳',
      description: 'حروف اور حرکات کا مجموعہ',
      icon: '📚',
      color: 'primary-400',
    },
    {
      id: 'lesson-4',
      title: 'کلمہ کی اقسام',
      subtitle: 'سبق ۴',
      description: 'کلمہ کی تین اقسام: اسم، فعل، حرف',
      icon: '📖',
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
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      opacity: 0.8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    description: {
      fontSize: 14,
      textAlign: 'center',
      opacity: 0.6,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      marginTop: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    lessonsContainer: {
      marginTop: 20,
    },
    lessonCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 24,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    lessonHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    lessonIcon: {
      fontSize: 32,
      marginRight: 16,
    },
    lessonInfo: {
      flex: 1,
    },
    lessonNumber: {
      fontSize: 14,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      marginBottom: 4,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    lessonTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      marginBottom: 4,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'right',
    },
    lessonDescription: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    lessonButton: {
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 24,
      alignItems: 'center',
      marginTop: 16,
    },
    lessonButtonText: {
      color: getThemeColor(colors.surface, isDarkMode),
      fontSize: 16,
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
        <Text style={styles.headerTitle}>حصہ اول</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>حصہ اول</Text>
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

export default Part1LessonsScreen; 