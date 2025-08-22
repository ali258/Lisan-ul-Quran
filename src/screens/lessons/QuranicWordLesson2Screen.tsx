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

interface QuranicWordLesson2ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordLesson2Screen: React.FC<QuranicWordLesson2ScreenProps> = ({ onNavigate, onBack }) => {
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
      fontSize: isTablet ? 18 : 14,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
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
  });

  const numberWords = [
    {
      arabic: 'ذُو، ذَا، ذِي',
      urdu: 'مالک/ صاحب (مذکر)',
      english: 'endowed with, owner (mg)',
      group_category: 'اسم صفت  ',
      
    },
    {
      arabic: 'ذَات',
      urdu: 'مالک/ صاحب (مونث)',
      english: 'endowed with, owner (fg)',
      group_category: 'اسم صفت  ',
      
    },
    {
      arabic: 'أُولُوا، أُولِي',
      urdu: 'مالک / لوگ والے',
      english: 'people of, owners of',
      group_category: 'اسم صفت ',
      
    },
    {
      arabic: 'أَهْل',
      urdu: 'خاندان / اہل',
      english: 'family, people of',
      group_category: 'اسم ذات',
      
    },
    {
      arabic: 'اٰل',
      urdu: 'خاندان / پیروکار',
      english: 'family, followers',
      group_category: 'اسم ذات',
      
    },
    {
      arabic: 'سُبْحَانَ',
      urdu: 'پاکی ہو / بے عیب',
      english: 'Glory be to, Free from defects',
      group_category: 'اسم مصدر',
      
    },
    {
      arabic: 'رَيْب',
      urdu: 'شک / شبہ',
      english: 'doubt',
      group_category: 'اسم',
      
    },
    {
      arabic: 'سَوْء / سُوءٍ',
      urdu: 'بُرائی / بُرا',
      english: 'evil',
      group_category: 'اسم',
      
    },
    {
      arabic: 'مِثْل',
      urdu: 'جیسا / مثل',
      english: 'similar, like',
      group_category: 'اسم',
      
    },
    {
      arabic: 'مَثَل، أَمْثَال',
      urdu: 'مثال / نظیر',
      english: 'example, similitude',
      group_category: 'اسم',
      
    },
    {
      arabic: 'جِنٌّ',
      urdu: 'جن',
      english: 'jinn',
      group_category: 'اسم ذات',
      
    },
    {
      arabic: 'جُنُودٌ',
      urdu: 'لشکر، افواج',
      english: 'forces',
      group_category: 'اسم ذات',
      
    },
    {
      arabic: 'مَيِّتٌ، مَوْتَىٰ',
      urdu: 'مردہ، مُردے',
      english: 'dead',
      group_category: 'اسم ذات',
      
    },
    {
      arabic: 'إِنسٌ',
      urdu: 'انسان',
      english: 'mankind',
      group_category: 'اسم ذات',
      
    },
    {
      arabic: 'بَعْضٌ',
      urdu: 'بعض، کچھ',
      english: 'some of',
      group_category: 'اسم نکرہ',
      
    },
    {
      arabic: 'كُلٌّ',
      urdu: 'سب، ہر ایک',
      english: 'everyone',
      group_category: 'اسم نکرہ',
      
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
        <Text style={styles.headerTitle}>کثرت استعمال والے اسماء </Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}> کثرت استعمال والے اسماء</Text>
        <Text style={styles.englishTitle}>Frequently Used Nouns</Text>
        

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Number Words Section */}
        <View style={styles.section}>
          
          
          <View style={styles.wordsGrid}>
            {numberWords.map((word, index) => (
              <View key={index} style={styles.wordCard}>
                <Text style={styles.arabicWord}>{word.arabic}</Text>
                <Text style={styles.urduMeaning}>{word.urdu}</Text>
                <Text style={styles.englishMeaning}>{word.english}</Text>
                
                <View style={styles.exampleSection}>
                  <Text style={styles.exampleTitle}>Group</Text>
                  <Text style={styles.exampleText}>{word.group_category}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordLesson2Screen; 