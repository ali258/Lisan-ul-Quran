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

interface QuranicWordLesson8ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordLesson8Screen: React.FC<QuranicWordLesson8ScreenProps> = ({ onNavigate, onBack }) => {
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
      fontSize: isTablet ? 18 : 14,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 22,
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

  const numberWords = [
    {
      arabic: 'وَاحِدٌ / وَاحِدَةً',
      urdu: 'ایک',
      english: 'One',
      example: 'وَاحِدٌ مِنْكُمْ',
      translation: 'تم میں سے ایک',
    },
    {
      arabic: 'اثْنَانِ / اثْنَيْنِ / اثْنَتَيْنِ',
      urdu: 'دو',
      english: 'Two',
      example: 'اثْنَانِ مِنَ الْأَصْحَابِ',
      translation: 'دو صحابی',
    },
    {
      arabic: 'ثَلاثَةٌ / ثَلاثُوْنَ / ثَلاثُ / ثُلُثَ',
      urdu: 'تین',
      english: 'Three',
      example: 'ثَلاثَةُ أَيَّامٍ',
      translation: 'تین دن',
    },
    {
      arabic: 'أَرْبَعَةٌ / أَرْبَعُ / رُبْعَ',
      urdu: 'چار',
      english: 'Four',
      example: 'أَرْبَعَةُ أَشْهُرٍ',
      translation: 'چار مہینے',
    },
    {
      arabic: 'خَمْسَةٌ ',
      urdu: 'پانچ',
      english: 'Five',
      example: 'خَمْسَةُ أَصْحَابٍ',
      translation: 'پانچ صحابی',
    },
    {
      arabic: 'سِتَّةٌ / سِتِّينَ',
      urdu: 'چھ',
      english: 'Six',
      example: 'سِتَّةُ أَيَّامٍ',
      translation: 'چھ دن',
    },
    {
      arabic: 'سَبْعَةٌ / سَبْعِينَ / سَبْعٌ',
      urdu: 'سات',
      english: 'Seven',
      example: 'سَبْعُ سَمَاوَاتٍ',
      translation: 'سات آسمان',
    },
    {
      arabic: 'ثَمَانِيَةٌ / ثَمَانِيْنَ / ثَمَانِيَ',
      urdu: 'آٹھ',
      english: 'Eight',
      example: 'ثَمَانِيَةُ أَزْوَاجٍ',
      translation: 'آٹھ بیویاں',
    },
    {
      arabic: 'تِسْعَةٌ / تِسْعٌ',
      urdu: 'نو',
      english: 'Nine',
      example: 'تِسْعُ آيَاتٍ',
      translation: 'نو آیات',
    },
    {
      arabic: 'عَشَرَةٌ',
      urdu: 'دس',
      english: 'Ten',
      example: 'عَشَرَةُ أَيَّامٍ',
      translation: 'دس دن',
    },
    {
      arabic: 'أَحَدَ عَشَرَ',
      urdu: 'گیاره',
      english: 'Eleven',
      example: 'أَحَدَ عَشَرَ كَوْكَبًا',
      translation: 'گیاره ستارے',
    },
    {
      arabic: 'اثْنَا عَشَرَ / اِثْنَى عَشَرَ / اِثْنَتَا عَشَرَ / اِثْنَتَيْ عَشَرَةَ / اثْنَتَا عَشْرَةَ',
      urdu: 'باره',
      english: 'Twelve',
      example: 'اثْنَا عَشَرَ نَقِيبًا',
      translation: 'باره نقیب',
    },
    {
      arabic: 'تِسْعَةَ عَشَرَ',
      urdu: 'انیس',
      english: 'Nineteen',
      example: 'تِسْعَةَ عَشَرَ مَلَكًا',
      translation: 'انیس فرشتے',
    },
    {
      arabic: 'عِشْرُونَ',
      urdu: 'بیس',
      english: 'Twenty',
      example: 'عِشْرُونَ أَلْفًا',
      translation: 'بیس ہزار',
    },
    {
      arabic: 'ثَلاثُونَ / ثَلاثِينَ',
      urdu: 'تیس',
      english: 'Thirty',
      example: 'ثَلاثُونَ يَوْمًا',
      translation: 'تیس دن',
    },
    {
      arabic: 'أَرْبَعِينَ',
      urdu: 'چالیس',
      english: 'Forty',
      example: 'أَرْبَعِينَ لَيْلَةً',
      translation: 'چالیس راتیں',
    },
    {
      arabic: 'خَمْسِينَ',
      urdu: 'پچاس',
      english: 'Fifty',
      example: 'خَمْسِينَ صَلَاةً',
      translation: 'پچاس نمازیں',
    },
    {
      arabic: 'سِتِّينَ',
      urdu: 'ساٹھ',
      english: 'Sixty',
      example: 'سِتِّينَ عَامًا',
      translation: 'ساٹھ سال',
    },
    {
      arabic: 'سَبْعِينَ',
      urdu: 'ستر',
      english: 'Seventy',
      example: 'سَبْعِينَ لُغَةً',
      translation: 'ستر زبانیں',
    },
    {
      arabic: 'ثَمَانِينَ',
      urdu: 'اسی',
      english: 'Eighty',
      example: 'ثَمَانِينَ عَامًا',
      translation: 'اسی سال',
    },
    {
      arabic: 'تِسْعٌ وَتِسْعُوْنَ',
      urdu: 'ننانوے',
      english: 'Ninety-nine',
      example: 'تِسْعٌ وَتِسْعُوْنَ اسْمًا',
      translation: 'ننانوے نام',
    },
    {
      arabic: 'مِائَةٌ ',
      urdu: 'سو',
      english: 'Hundred',
      example: 'مِائَةُ أَلْفٍ',
      translation: 'سو ہزار',
    },
    {
      arabic: 'مِائَتَيْنِ',
      urdu: 'دو سو',
      english: 'Two hundred',
      example: 'مِائَتَيْنِ دِرْهَمٍ',
      translation: 'دو سو درہم',
    },
    {
      arabic: 'أَلْفُ',
      urdu: 'ہزار',
      english: 'Thousand',
      example: 'أَلْفُ سَنَةٍ',
      translation: 'ہزار سال',
    },
    {
      arabic: 'الْفَيْنِ',
      urdu: 'دوہزار',
      english: 'Two Thousand',
      example: 'الْفَيْنِ مِيلٍ',
      translation: 'دوہزار میل',
    },
    {
      arabic: 'مَرَّةً / مَرَّتَيْنِ / كَرَّتَيْنِ',
      urdu: 'ایک بار، دو بار',
      english: 'Once, Twice',
      example: 'مَرَّتَيْنِ فِي الْيَوْمِ',
      translation: 'دن میں دو بار',
    },
    {
      arabic: 'مِثْلَيْهِمْ',
      urdu: 'دوگنا',
      english: 'Twice, double',
      example: 'مِثْلَيْهِمْ مِنَ الْأَجْرِ',
      translation: 'دوگنا اجر',
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
        <Text style={styles.headerTitle}>اسم Lesson 8</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>🔢 عدد - Numbers</Text>
        <Text style={styles.subtitle}>
          Learn essential Arabic numbers and their different grammatical forms
        </Text>

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Number Words Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>عدد - Numbers</Text>
          
          <View style={styles.wordsGrid}>
            {numberWords.map((word, index) => (
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

export default QuranicWordLesson8Screen; 