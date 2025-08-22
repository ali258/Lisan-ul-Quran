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
    frequencyBadge: {
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      borderRadius: 10,
      paddingHorizontal: 8,
      paddingVertical: 3,
      alignSelf: 'center',
    },
    frequencyText: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      fontWeight: 'bold',
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

  const basicWords = [
    {
      arabic: 'رَبّ',
      urdu: 'پالنے والا، رب',
      english: 'Lord; Sustainer',
      frequency: 971,
    },
    {
      arabic: 'رَحْمٰن',
      urdu: 'بڑا مہربان',
      english: 'Compassionate',
      frequency: 57,
    },
    {
      arabic: 'رَحِيم',
      urdu: 'نہایت مہربان',
      english: 'Merciful, caring and kind',
      frequency: 116,
    },
    {
      arabic: 'سَلاَم',
      urdu: 'سلامتی، امن',
      english: 'Peace',
      frequency: 42,
    },
    {
      arabic: 'سَمِيع',
      urdu: 'سننے والا',
      english: 'One who listens',
      frequency: 47,
    },
    {
      arabic: 'شَكُور',
      urdu: 'شکر گزار',
      english: 'Grateful, appreciative',
      frequency: 10,
    },
    {
      arabic: 'عَزِيْز',
      urdu: 'غالب، زبردست',
      english: 'Mighty',
      frequency: 101,
    },
    {
      arabic: 'عَظِيْم',
      urdu: 'عظیم، بڑا',
      english: 'Supreme',
      frequency: 107,
    },
    {
      arabic: 'غَفُوْر',
      urdu: 'بخشنے والا',
      english: 'Most forgiving',
      frequency: 91,
    },
    {
      arabic: 'قَدِيْر',
      urdu: 'قدرت والا',
      english: 'All-powerful',
      frequency: 45,
    },
    {
      arabic: 'نَذِير، نُذُر',
      urdu: 'ڈرانے والا',
      english: 'Warner',
      frequency: 58,
    },
    {
      arabic: 'نَصِيْر',
      urdu: 'مددگار',
      english: 'Strong helper',
      frequency: 24,
    },
    {
      arabic: 'وَكِيْل',
      urdu: 'کارساز، وکیل',
      english: 'One who takes care (of a thing for sb)',
      frequency: 24,
    },
    {
      arabic: 'أَوَّل / اُوْلٰی ',
      urdu: 'پہلا',
      english: 'First',
      frequency: 82,
    },
    {
      arabic: 'آخِر / آخِرَة',
      urdu: 'آخری',
      english: 'Last',
      frequency: 40,
    },
    {
      arabic: 'اٰخَر ، اُخرٰی',
      urdu: 'دوسرا  ، دیگر',
      english: 'Other',
      frequency: 66,
    },
    {
      arabic: 'أَمِيْن',
      urdu: 'امانت دار',
      english: 'Trustworthy',
      frequency: 14,
    },
    {
      arabic: 'بَصِيْر',
      urdu: 'خوب دیکھنے والا',
      english: 'One who sees clearly',
      frequency: 53,
    },
    {
      arabic: 'بَعِيْد',
      urdu: 'دور',
      english: 'Far',
      frequency: 25,
    },
    {
      arabic: 'تَوَّاب',
      urdu: 'بہت توبہ قبول کرنے والا',
      english: 'Most forgiving, oft-forgiving',
      frequency: 11,
    },
    {
      arabic: 'حَفِيْظ',
      urdu: 'حفاظت کرنے والا',
      english: 'Protector',
      frequency: 26,
    },
    {
      arabic: 'حَكِيْم',
      urdu: 'حکمت والا',
      english: 'Wise',
      frequency: 97,
    },
    {
      arabic: 'حَلِيْم',
      urdu: 'بردبار',
      english: 'Forbearing',
      frequency: 15,
    },
    {
      arabic: 'حَمِيْد',
      urdu: 'تعریف کے لائق، حمد کیا گیا',
      english: 'Praiseworthy',
      frequency: 17,
    },
    {
      arabic: 'حَمِيْم',
      urdu: 'دوست، گرم پانی',
      english: 'Warm (friend); boiling water',
      frequency: 20,
    },
    {
      arabic: 'خَبِيْر',
      urdu: 'جاننے والا، باخبر',
      english: 'Knowing, ever aware',
      frequency: 45,
    },
    {
      arabic: 'شَدِيْد',
      urdu: 'سخت، مضبوط',
      english: 'Severe; strong',
      frequency: 52,
    },
    {
      arabic: 'عَلِيّ',
      urdu: 'بلند، عالی',
      english: 'High, exalted',
      frequency: 11,
    },
    {
      arabic: 'عَلِيْم ، عُلَمَاء',
      urdu: 'علم والا',
      english: 'Knower',
      frequency: 163,
    },
    {
      arabic: 'قَرِيْب',
      urdu: 'قریب',
      english: 'Near',
      frequency: 26,
    },
    {
      arabic: ' كَبِيْر ، کَبِیْرَة',
      urdu: 'بڑا',
      english: 'Big',
      frequency: 47,
    },
    {
      arabic: 'كَثِيْر ، کَثِیْرَة',
      urdu: 'بہت زیادہ',
      english: 'Plenty; much',
      frequency: 74,
    },
    {
      arabic: 'سَرِيْع',
      urdu: 'تیز',
      english: 'Quick; swift; fast',
      frequency: 10,
    },
    {
      arabic: 'قَهَّار',
      urdu: 'سب پر غالب',
      english: 'Prevailing, irresistible',
      frequency: 8,
    },
    {
      arabic: 'غَفَّار',
      urdu: 'بہت بخشنے والا',
      english: 'Oft-forgiving',
      frequency: 4,
    },
    {
      arabic: 'قَلِيْل ، قَلِیْلَة',
      urdu: 'تھوڑا',
      english: 'Little',
      frequency: 71,
    },
    {
      arabic: 'كَرِيْم',
      urdu: 'عزت والا، سخی',
      english: 'Noble; honorable; generous',
      frequency: 27,
    },
    {
      arabic: 'لَطِيْف',
      urdu: 'نرم، باریک بین',
      english: 'Subtle',
      frequency: 7,
    },
    {
      arabic: 'وَهَّاب',
      urdu: 'بہت دینے والا',
      english: 'Bestower',
      frequency: 3,
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
        <Text style={styles.headerTitle}>بعض صفات (اللہ اور دوسروں کی)</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>بعض صفات (اللہ اور دوسروں کی)</Text>
        <Text style={styles.title}>Some Attributes (of Allah and others)</Text>
       
        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Basic Words Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Essential Quranic 39 Nouns (Total: 2707 times)</Text>
          
          <View style={styles.wordsGrid}>
            {basicWords.map((word, index) => (
              <View key={index} style={styles.wordCard}>
                <Text style={styles.arabicWord}>{word.arabic}</Text>
                <Text style={styles.urduMeaning}>{word.urdu}</Text>
                <Text style={styles.englishMeaning}>{word.english}</Text>
                <View style={styles.frequencyBadge}>
                  <Text style={styles.frequencyText}>{word.frequency} times</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordLesson3Screen; 