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

interface QuranicWordHarfLesson8ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordHarfLesson8Screen: React.FC<QuranicWordHarfLesson8ScreenProps> = ({ onNavigate, onBack }) => {
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
    lessonGroup: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 32,
    },
    particlesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    particleCard: {
      width: isTablet ? '48%' : '48%',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: getThemeColor(colors.primary, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    particleHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    particleInfo: {
      flex: 1,
    },
    particleArabic: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 32,
      marginBottom: 4,
      textAlign: 'center',
    },
    particleTransliteration: {
      fontSize: isTablet ? 14 : 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontStyle: 'italic',
      marginBottom: 6,
      textAlign: 'center',
    },
    particleMeaning: {
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    exampleSection: {
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
    },
    exampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: getThemeColor(colors.surface, isDarkMode),
      marginBottom: 6,
      textAlign: 'center',
    },
    exampleReference: {
      fontSize: isTablet ? 12 : 10,
      color: getThemeColor(colors.surface, isDarkMode),
      opacity: 0.8,
      textAlign: 'center',
      fontStyle: 'italic',
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

  const particles = [
    {
      arabic: 'إِلَى',
      transliteration: 'ila',
      urduMeaning: 'تک',
      englishMeaning: 'to',
      reference: '',
    },
    {
      arabic: 'بِ',
      transliteration: 'bi (ba\' al-qasam)',
      urduMeaning: 'قسم',
      englishMeaning: 'by',
      reference: 'التوبة 9:56',
    },
    {
      arabic: 'بِ',
      transliteration: 'bi',
      urduMeaning: 'سے / ساتھ',
      englishMeaning: 'by, with',
      reference: '',
    },
    {
      arabic: 'تَ',
      transliteration: 'ta (ta\' al-qasam)',
      urduMeaning: 'قسم',
      englishMeaning: 'by',
      reference: 'يوسف 12:73',
    },
    {
      arabic: 'حَاشَا',
      transliteration: 'hasha',
      urduMeaning: 'سوائے',
      englishMeaning: 'except',
      reference: '',
    },
    {
      arabic: 'حَتَّى',
      transliteration: 'hatta',
      urduMeaning: 'تک',
      englishMeaning: 'until',
      reference: '',
    },
    {
      arabic: 'خَلَا',
      transliteration: 'khala',
      urduMeaning: 'سوائے',
      englishMeaning: 'except',
      reference: '',
    },
    {
      arabic: 'رُبَّ',
      transliteration: 'rubba',
      urduMeaning: 'بسا اوقات',
      englishMeaning: 'many a',
      reference: '',
    },
    {
      arabic: 'عَدَا',
      transliteration: 'ada',
      urduMeaning: 'سوائے',
      englishMeaning: 'except',
      reference: '',
    },
    {
      arabic: 'عَلَى',
      transliteration: 'ala',
      urduMeaning: 'پر',
      englishMeaning: 'on',
      reference: '',
    },
    {
      arabic: 'عَنْ',
      transliteration: 'an',
      urduMeaning: 'سے (بارے میں)',
      englishMeaning: 'about',
      reference: '',
    },
    {
      arabic: 'فِي',
      transliteration: 'fi',
      urduMeaning: 'میں',
      englishMeaning: 'in',
      reference: '',
    },
    {
      arabic: 'كَ',
      transliteration: 'ka',
      urduMeaning: 'جیسا',
      englishMeaning: 'like',
      reference: '',
    },
    {
      arabic: 'لِ',
      transliteration: 'li',
      urduMeaning: 'کے لیے',
      englishMeaning: 'for',
      reference: '',
    },
    {
      arabic: 'مُذْ',
      transliteration: 'mudh',
      urduMeaning: 'سے',
      englishMeaning: 'since',
      reference: '',
    },
    {
      arabic: 'مُنْذُ',
      transliteration: 'mundhu',
      urduMeaning: 'سے',
      englishMeaning: 'since',
      reference: '',
    },
    {
      arabic: 'مِنْ',
      transliteration: 'min',
      urduMeaning: 'سے',
      englishMeaning: 'from',
      reference: '',
    },
    {
      arabic: 'وَ',
      transliteration: 'wa (waw al-qasam)',
      urduMeaning: 'قسم',
      englishMeaning: 'by',
      reference: 'الذاريات 51:1',
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
        <Text style={styles.headerTitle}>Harf Lesson 8</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>🔤 حرف - Particles</Text>
        <Text style={styles.subtitle}>
          Learn essential Arabic particles and their usage in the Quran
        </Text>

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Lesson Group */}
        <Text style={styles.lessonGroup}>
          حروف الجر
        </Text>
        <Text style={styles.subtitle}>
          Prepositions
        </Text>

        {/* Particles */}
        <View style={styles.particlesContainer}>
          {particles.map((particle, index) => (
            <View key={index} style={styles.particleCard}>
              <View style={styles.particleHeader}>
                <View style={styles.particleInfo}>
                  <Text style={styles.particleArabic}>{particle.arabic}</Text>
                  <Text style={styles.particleTransliteration}>{particle.transliteration}</Text>
                  <Text style={styles.particleMeaning}>{particle.urduMeaning}</Text>
                </View>
              </View>
              
              {particle.reference && (
                <View style={styles.exampleSection}>
                  <Text style={styles.exampleTitle}>Quranic Reference</Text>
                  <Text style={styles.exampleReference}>{particle.reference}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordHarfLesson8Screen; 