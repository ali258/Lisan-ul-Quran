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
import { QURANIC_WORD_LESSONS, TAILWIND_COLORS, FONT_CLASSES } from '../utils/constants';
import { getThemeColor, getColorWithOpacity } from '../utils/colorUtils';
import { getFontWithProperFallback } from '../utils/fontUtils';

interface QuranicWordIsmScreenProps {
  onNavigate: (screen: 'QuranicWordLesson1' | 'QuranicWordLesson2' | 'QuranicWordLesson3') => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordIsmScreen: React.FC<QuranicWordIsmScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

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
      borderRadius: 8,
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
    },
    backButtonText: {
      fontSize: 18,
      color: getThemeColor(colors.surface, isDarkMode),
      fontWeight: 'bold',
    },
    headerTitle: {
      fontSize: 20,
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
    title: {
      fontSize: isTablet ? 36 : 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.primary, isDarkMode),
    },
    subtitle: {
      fontSize: isTablet ? 20 : 16,
      textAlign: 'center',
      marginBottom: 40,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 24,
    },
    lessonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 16,
    },
    lessonCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 20,
      padding: 20,
      borderWidth: 2,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
      width: isTablet ? '23%' : '48%',
      alignItems: 'center',
      marginBottom: 16,
    },
    lessonCardPressed: {
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderColor: getThemeColor(colors.primary, isDarkMode),
      transform: [{ scale: 0.98 }],
    },
    lessonHeader: {
      alignItems: 'center',
      marginBottom: 16,
    },
    lessonIcon: {
      fontSize: isTablet ? 48 : 36,
      marginBottom: 12,
    },
    lessonInfo: {
      alignItems: 'center',
    },
    lessonTitle: {
      fontSize: isTablet ? 20 : 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      marginBottom: 4,
      textAlign: 'center',
    },
    lessonSubtitle: {
      fontSize: isTablet ? 14 : 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      opacity: 0.8,
      textAlign: 'center',
    },
    lessonDescription: {
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 22,
      marginBottom: 16,
    },
    progressBar: {
      height: 6,
      backgroundColor: getThemeColor(colors.border, isDarkMode),
      borderRadius: 3,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 3,
    },
    progressText: {
      fontSize: 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      marginTop: 8,
      textAlign: 'center',
    },
    decorativeLine: {
      height: 3,
      width: 80,
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 2,
      alignSelf: 'center',
      marginBottom: 32,
    },
  });

  const handleLessonPress = (lesson: any) => {
    onNavigate(lesson.route);
  };

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
        <Text style={styles.headerTitle}>اسم - Nouns</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>📝 اسم - Nouns</Text>
        <Text style={styles.subtitle}>
          Master essential Quranic nouns and understand their meanings
        </Text>

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Lessons */}
        <View style={styles.lessonsContainer}>
          {QURANIC_WORD_LESSONS.map((lesson, index) => (
            <TouchableOpacity
              key={lesson.id}
              style={styles.lessonCard}
              onPress={() => handleLessonPress(lesson)}
              activeOpacity={0.7}
            >
              <View style={styles.lessonHeader}>
                <Text style={styles.lessonIcon}>{lesson.icon}</Text>
                <View style={styles.lessonInfo}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonSubtitle}>{lesson.subtitle}</Text>
                </View>
              </View>

              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '0%' }]} />
              </View>
              <Text style={styles.progressText}>Ready to start</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordIsmScreen; 