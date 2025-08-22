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
      arabic: 'أَنْعَامُ',
      urdu: 'مویشی',
      english: 'Livestock, Cattle',
      frequency: 33,
    },
    {
      arabic: 'جَبَل (جِبَالٌ)',
      urdu: 'پہاڑ',
      english: 'Mountain(s)',
      frequency: 39,
    },
    {
      arabic: 'بَحْرٌ',
      urdu: 'سمندر',
      english: 'Sea, Ocean',
      frequency: 35,
    },
    {
      arabic: 'آيَةٌ (آيَاتٌ)',
      urdu: 'آیت، نشانی',
      english: 'Sign, Verse',
      frequency: 382,
    },
    {
      arabic: 'شَمْسٌ',
      urdu: 'سورج',
      english: 'Sun',
      frequency: 33,
    },
    {
      arabic: 'أَرْضُ',
      urdu: 'زمین',
      english: 'Earth, Land',
      frequency: 461,
    },
    {
      arabic: 'رِيح (رِيَاحٌ)',
      urdu: 'ہوا',
      english: 'Wind(s)',
      frequency: 29,
    },
    {
      arabic: 'لَيْلٌ',
      urdu: 'رات',
      english: 'Night',
      frequency: 80,
    },
    {
      arabic: 'سَبْعٌ',
      urdu: 'سات',
      english: 'Seven',
      frequency: 24,
    },
    {
      arabic: 'سَمَاءُ (سَمَاوَاتُ)',
      urdu: 'آسمان',
      english: 'Sky, Heavens',
      frequency: 310,
    },
    {
      arabic: 'بَيِّنَةٌ (بَيِّنَاتُ)',
      urdu: 'واضح نشانی',
      english: 'Clear proof, Signs',
      frequency: 71,
    },
    {
      arabic: 'قَمَرٌ',
      urdu: 'چاند',
      english: 'Moon',
      frequency: 27,
    },
    {
      arabic: 'نَهَارٌ',
      urdu: 'دن',
      english: 'Day',
      frequency: 57,
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
        <Text style={styles.headerTitle}>اللہ کی نشانیاں</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>اللہ کی نشانیاں</Text>
        <Text style={styles.title}>Allah Signs</Text>
       
        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Basic Words Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Essential Quranic 13 Nouns (Total: 1581 times)</Text>
            
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

export default QuranicWordLesson5Screen; 