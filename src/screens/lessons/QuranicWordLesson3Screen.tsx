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
import { useThemeStore } from '../../store/themeStore';
import { TAILWIND_COLORS, FONT_CLASSES } from '../../utils/constants';
import { getThemeColor } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface QuranicWordLesson3ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordLesson3Screen: React.FC<QuranicWordLesson3ScreenProps> = ({ onNavigate, onBack }) => {
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
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.primary, isDarkMode),
    },
    subtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 32,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 24,
    },
    section: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
    },
    wordCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    arabicWord: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 36,
    },
    urduMeaning: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 8,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 24,
    },
    englishMeaning: {
      fontSize: isTablet ? 16 : 14,
      textAlign: 'center',
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontStyle: 'italic',
      lineHeight: 20,
    },
    decorativeLine: {
      height: 3,
      width: 60,
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 2,
      alignSelf: 'center',
      marginBottom: 24,
    },
  });

  const advancedWords = [
    {
      arabic: 'تَقْوَى',
      urdu: 'تقویٰ',
      english: 'Piety, God-consciousness',
    },
    {
      arabic: 'إِحْسَان',
      urdu: 'احسان',
      english: 'Excellence, Doing good',
    },
    {
      arabic: 'عَدْل',
      urdu: 'عدل',
      english: 'Justice, Fairness',
    },
    {
      arabic: 'حِكْمَة',
      urdu: 'حکمت',
      english: 'Wisdom',
    },
    {
      arabic: 'فَضْل',
      urdu: 'فضل',
      english: 'Grace, Favor',
    },
    {
      arabic: 'رَحْمَة',
      urdu: 'رحمت',
      english: 'Mercy, Compassion',
    },
    {
      arabic: 'مَغْفِرَة',
      urdu: 'مغفرت',
      english: 'Forgiveness',
    },
    {
      arabic: 'تَوْبَة',
      urdu: 'توبہ',
      english: 'Repentance',
    },
    {
      arabic: 'صَبْر',
      urdu: 'صبر',
      english: 'Patience, Perseverance',
    },
    {
      arabic: 'شُكْر',
      urdu: 'شکر',
      english: 'Gratitude, Thankfulness',
    },
    {
      arabic: 'إِيمَان',
      urdu: 'ایمان',
      english: 'Faith, Belief',
    },
    {
      arabic: 'إِسْلَام',
      urdu: 'اسلام',
      english: 'Submission, Peace',
    },
  ];

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
        <Text style={styles.headerTitle}>Lesson 3: Advanced Vocabulary</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>🎯 Advanced Vocabulary</Text>
        <Text style={styles.subtitle}>
          Master sophisticated Quranic terms and deepen your understanding
        </Text>

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Advanced Words Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Spiritual & Moral Concepts</Text>
          
          {advancedWords.map((word, index) => (
            <View key={index} style={styles.wordCard}>
              <Text style={styles.arabicWord}>{word.arabic}</Text>
              <Text style={styles.urduMeaning}>{word.urdu}</Text>
              <Text style={styles.englishMeaning}>{word.english}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordLesson3Screen; 