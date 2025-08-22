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
import { getThemeColor, getColorFromClass } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface QuranicWordLesson1ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordLesson1Screen: React.FC<QuranicWordLesson1ScreenProps> = ({ onNavigate, onBack }) => {
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
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
    },
    backButtonText: {
      fontSize: 18,
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      fontWeight: 'bold',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
      flex: 1,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
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
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 32,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    englishTitle: {
      fontSize: isTablet ? 16 : 14,
      textAlign: 'center',
      marginBottom: 32,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 20,
      fontStyle: 'italic',
    },
    section: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      marginBottom: 16,
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
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
      borderColor: getColorFromClass('ism-blue-light'),
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
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
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
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
      width: '100%',
    },
    exampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      marginBottom: 6,
      textAlign: 'center',
    },
    exampleText: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 16,
      marginBottom: 4,
    },
    translationText: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
      opacity: 0.9,
    },
    decorativeLine: {
      height: 3,
      width: 60,
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      borderRadius: 2,
      alignSelf: 'center',
      marginBottom: 24,
    },
    notesSection: {
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      borderRadius: 16,
      padding: 20,
      marginTop: 32,
      marginBottom: 20,
    },
    notesTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      marginBottom: 12,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    notesText: {
      fontSize: isTablet ? 14 : 12,
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      lineHeight: 20,
      textAlign: 'right',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
  });

  const adverbWords = [
    {
      arabic: 'دُونِ',
      urdu: 'سوا، علاوه',
      english: 'besides',
      
    },
    {
      arabic: 'فَوْقَ',
      urdu: 'اوپر',
      english: 'above, over',
      
    },
    {
      arabic: 'تَحْتِ',
      urdu: 'نیچے',
      english: 'under, beneath',
      
    },
    {
      arabic: 'بَیْنَ یَدَیْ / بَیْنَ أَیْدِی',
      urdu: ' کے سامنے',
      english: 'in front of',
      
    },
    {
      arabic: 'أَمَامَ',
      urdu: 'سامنے',
      english: 'In front of',
      
    },
    {
      arabic: 'خَلْفَ',
      urdu: 'پیچھے',
      english: 'behind',
      
    },
    {
      arabic: 'وَرَاءَ',
      urdu: 'پیچھے / بعد میں',
      english: 'behind / after',
      
    },
    {
      arabic: 'يَمِينَ',
      urdu: 'داہنے طرف',
      english: 'right side',
      
    },
    {
      arabic: 'شِمَالِ',
      urdu: 'بائیں طرف',
      english: 'left side',
      
    },
    {
      arabic: 'بَيْنَ',
      urdu: 'درمیان',
      english: 'between',
      
    },
    {
      arabic: 'حَوْلَ',
      urdu: 'اردگرد / چاروں طرف',
      english: 'around',
      
    },
    {
      arabic: 'حَيثُ',
      urdu: 'جہاں',
      english: 'where',
      
    },
    {
      arabic: 'أَيْنَ',
      urdu: 'جہاں',
      english: 'where',
      
    },
    {
      arabic: 'أَيْنَمَا',
      urdu: 'جہاں بھی',
      english: 'wherever',
      
    },
    {
      arabic: 'هُنَالِكَ',
      urdu: 'وہاں',
      english: 'there',
      
    },
    {
      arabic: 'قَبْلَ',
      urdu: 'پہلے',
      english: 'before',
      
    },
    {
      arabic: 'بَعْدَ',
      urdu: 'بعد',
      english: 'after',
      
    },
    {
      arabic: 'حِیْنَ',
      urdu: 'وقت، جب، اُس وقت، لمحہ',
      english: 'Time / moment / at the time',
    },
    {
      arabic: 'يَوْمَئِذٍ',
      urdu: 'اس دن / اس وقت',
      english: 'that day / that time',
    },
    {
      arabic: 'بَعِيدٍ',
      urdu: 'دور',
      english: 'far',
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
        <Text style={styles.headerTitle}>اسم ظرف</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}> اسم ظرف</Text>
        <Text style={styles.englishTitle}>Adverbs of Place/Time</Text>
        

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Adverb Words Section */}
        <View style={styles.section}>
         
          
          <View style={styles.wordsGrid}>
            {adverbWords.map((word, index) => (
              <View key={index} style={styles.wordCard}>
                <Text style={styles.arabicWord}>{word.arabic}</Text>
                <Text style={styles.urduMeaning}>{word.urdu}</Text>
                <Text style={styles.englishMeaning}>{word.english}</Text>
                
                {/* <View style={styles.exampleSection}>
                  <Text style={styles.exampleTitle}>Example</Text>
                  <Text style={styles.exampleText}>{word.example}</Text>
                  <Text style={styles.translationText}>{word.translation}</Text>
                </View> */}
              </View>
            ))}
          </View>
        </View>

        {/* Notes Section */}
        <View style={styles.notesSection}>
          <Text style={styles.notesTitle}>اہم نوٹ:</Text>
          <Text style={styles.notesText}>
            اسم ظرف: وہ اسماء جو جگہ یا وقت کو ظاہر کریں (مثلاً: تحت = نیچ، عند = پاس، بعد = بعد، يومئذ = اُس دن) ۔
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordLesson1Screen; 