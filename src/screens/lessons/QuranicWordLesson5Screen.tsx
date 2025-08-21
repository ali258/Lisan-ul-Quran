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

interface QuranicWordLesson5ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordLesson5Screen: React.FC<QuranicWordLesson5ScreenProps> = ({ onNavigate, onBack }) => {
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
    wordsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    wordCard: {
      width: isTablet ? '31%' : '48%',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 20,
      padding: 16,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: getThemeColor(colors.primary, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
      alignItems: 'center',
    },
    arabicWord: {
      fontSize: isTablet ? 20 : 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 24,
    },
    urduMeaning: {
      fontSize: isTablet ? 14 : 12,
      textAlign: 'center',
      marginBottom: 6,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 18,
    },
    englishMeaning: {
      fontSize: isTablet ? 12 : 10,
      textAlign: 'center',
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontStyle: 'italic',
      lineHeight: 16,
      marginBottom: 6,
    },
    exampleSection: {
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
      width: '100%',
    },
    exampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: getThemeColor(colors.surface, isDarkMode),
      marginBottom: 6,
      textAlign: 'center',
    },
    exampleText: {
      fontSize: isTablet ? 12 : 10,
      color: getThemeColor(colors.surface, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 16,
      marginBottom: 4,
    },
    translationText: {
      fontSize: isTablet ? 12 : 10,
      color: getThemeColor(colors.surface, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
      opacity: 0.9,
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

  const interrogativeWords = [
    {
      arabic: 'مَا',
      urdu: 'کیا',
      english: 'What',
      example: 'مَا هَذَا؟',
      translation: 'یہ کیا ہے؟',
    },
    {
      arabic: 'مَن',
      urdu: 'کون',
      english: 'Who',
      example: 'مَن أَنتَ؟',
      translation: 'تم کون ہو؟',
    },
    {
      arabic: 'كَيْفَ',
      urdu: 'کیسا',
      english: 'How',
      example: 'كَيْفَ حَالُكَ؟',
      translation: 'تمہارا حال کیسا ہے؟',
    },
    {
      arabic: 'أَيْنَ',
      urdu: 'کہاں',
      english: 'Where',
      example: 'أَيْنَ أَخُوكَ؟',
      translation: 'تمہارا بھائی کہاں ہے؟',
    },
    {
      arabic: 'مَتَى',
      urdu: 'کب',
      english: 'When',
      example: 'مَتَى يَأْتِي؟',
      translation: 'وہ کب آئے گا؟',
    },
    {
      arabic: 'أَنَّى',
      urdu: 'کہاں سے/کیسے',
      english: 'Where from/How',
      example: 'أَنَّى لَكُمْ هَذَا؟',
      translation: 'یہ تمہیں کہاں سے ملا؟',
    },
    {
      arabic: 'أَيَّانَ',
      urdu: 'کب',
      english: 'When',
      example: 'أَيَّانَ يَوْمُ الدِّينِ؟',
      translation: 'جزا کا دن کب ہوگا؟',
    },
    {
      arabic: 'أَيُّ',
      urdu: 'کون سا',
      english: 'Which',
      example: 'أَيُّ شَيْءٍ؟',
      translation: 'کون سی چیز؟',
    },
    {
      arabic: 'كَمْ',
      urdu: 'کتنے/کتنی',
      english: 'How many/How much',
      example: 'كَمْ عُمْرُكَ؟',
      translation: 'تمہاری عمر کتنی ہے؟',
    },
    {
        arabic: 'مَاذَا',
        urdu: 'کیا/کیا چیز',
        english: 'What/What thing',
        example: 'مَاذَا يُنفِقُونَ',
        translation: '(البقرۃ: 219)',
    },
    {
        arabic: 'لِمَ / لِمَاذَا',
        urdu: 'کیوں',
        english: 'Why',
        example: 'لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ',
        translation: '(الصف: 2)',
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
        <Text style={styles.headerTitle}>اسم Lesson 5</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>❓ اسم استفهام - Interrogative Nouns</Text>
        <Text style={styles.subtitle}>
          Learn essential Arabic interrogative words and their usage in questions
        </Text>

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Interrogative Words Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>حروف استفهام - Question Words</Text>
          
          <View style={styles.wordsGrid}>
            {interrogativeWords.map((word, index) => (
              <View key={index} style={styles.wordCard}>
                <Text style={styles.arabicWord}>{word.arabic}</Text>
                <Text style={styles.urduMeaning}>{word.urdu}</Text>
                <Text style={styles.englishMeaning}>{word.english}</Text>
                
                <View style={styles.exampleSection}>
                  <Text style={styles.exampleTitle}>Example</Text>
                  <Text style={styles.exampleText}>{word.example}</Text>
                  <Text style={styles.translationText}>{word.translation}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordLesson5Screen; 