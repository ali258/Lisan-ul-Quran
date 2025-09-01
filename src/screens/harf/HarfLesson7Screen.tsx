import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import { 
  getCurrentTheme, 
  THEME_CONFIG,  
  getColorWithOpacity, 
  getFontWithProperFallback, 
  FONT_CLASSES,
  getIsmTheme,
  getHarfTheme
} from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';

interface HarfLesson7ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const HarfLesson7Screen: React.FC<HarfLesson7ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode); // Use ISM blue theme as main theme
  const harfTheme = getHarfTheme(isDarkMode); // Get HARF theme for first 2 words

  // Colors object for backward compatibility
  const colors = currentTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 120,
    },
    title: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: colors.text,
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: 16,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
    },
    titleIcon: {
      fontSize: isTablet ? 32 : 24,
      marginRight: 8,
    },
    titleHarf: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      color: harfTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    titleConnector: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      color: colors.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      marginHorizontal: 4,
    },
    titleIsm: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    titleEnglish: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: colors.textSecondary,
      textAlign: 'center',
      fontStyle: 'italic',
    },
    subtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 32,
      color: colors.textSecondary,
      lineHeight: 24,
    },
    lessonGroup: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: harfTheme.text,
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
      backgroundColor: colors.surface,
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: harfTheme.primary,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    harfCard: {
      width: isTablet ? '48%' : '48%',
      backgroundColor: harfTheme.surface,
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: harfTheme.primary,
      shadowColor: harfTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    ismCard: {
      width: isTablet ? '48%' : '48%',
      backgroundColor: currentTheme.surface,
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: currentTheme.primary,
      shadowColor: currentTheme.shadow,
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
      color: colors.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 32,
      marginBottom: 4,
      textAlign: 'center',
    },
    harfArabic: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: harfTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 32,
      marginBottom: 4,
      textAlign: 'center',
    },
    ismArabic: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 32,
      marginBottom: 4,
      textAlign: 'center',
    },
    particleTransliteration: {
      fontSize: isTablet ? 14 : 12,
      color: colors.textSecondary,
      fontStyle: 'italic',
      marginBottom: 6,
      textAlign: 'center',
    },
    particleMeaning: {
      fontSize: isTablet ? 16 : 14,
      color: colors.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    exampleSection: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
    },
    harfExampleSection: {
      backgroundColor: harfTheme.primary,
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
    },
    ismExampleSection: {
      backgroundColor: currentTheme.primary,
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
    },
    exampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: isDarkMode ? '#ffffff' : '#000000',
      marginBottom: 6,
      textAlign: 'center',
    },
    harfExampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: harfTheme.surface,
      marginBottom: 6,
      textAlign: 'center',
    },
    ismExampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: currentTheme.surface,
      marginBottom: 6,
      textAlign: 'center',
    },
    exampleReference: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? '#ffffff' : '#000000',
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 16,
    },
    harfExampleReference: {
      fontSize: isTablet ? 12 : 10,
      color: harfTheme.surface,
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 16,
    },
    ismExampleReference: {
      fontSize: isTablet ? 12 : 10,
      color: currentTheme.surface,
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 16,
    },
    translationText: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? '#ffffff' : '#000000',
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    harfTranslationText: {
      fontSize: isTablet ? 12 : 10,
      color: harfTheme.surface,
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    ismTranslationText: {
      fontSize: isTablet ? 12 : 10,
      color: currentTheme.surface,
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    decorativeLine: {
      height: 3,
      width: 60,
      backgroundColor: harfTheme.primary,
      borderRadius: 2,
      alignSelf: 'center',
      marginBottom: 24,
    },
  });

  const particles = [
    {
      arabic: 'هَلْ',
      transliteration: 'Hal',
      urdu: 'کیا (Kya)',
      english: 'Yes/No Question',
      example: 'هَلْ أَنْتَ مُسْلِمٌ؟',
      translation: 'کیا تم مسلمان ہو؟',
    },
    {
      arabic: 'أَ',
      transliteration: 'A',
      urdu: 'کیا (Kya)',
      english: 'Interrogative prefix',
      example: 'أَزَيْدٌ صَالِحٌ؟',
      translation: 'کیا زید صالح ہے؟ ',
    },
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
    {
      arabic: 'لِمَنْ',
      urdu: 'کس کے لیے',
      english: 'For whom',
      example: 'لِمَنِ الْمُلْكُ الْيَوْمَ',
      translation: '(القرآن 40:16)',
    },
  ];

  useEffect(() => {
    const backAction = () => {
      if (onBack) {
        onBack();
        return true; // Prevent default behavior
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [onBack]);

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="حرف و اسمائے استفهام "
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />

      <ScrollView
        style={[styles.scrollView, { paddingTop: 90 }]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.titleIsm}>اسمائے استفهام</Text>
            <Text style={styles.titleConnector}> و </Text>
            <Text style={styles.titleHarf}>حرف</Text>
            {/* <Text style={styles.titleIcon}>🔤</Text> */}
          </View>
          <Text style={styles.titleEnglish}>Interrogative Particles</Text>
        </View>
        <Text style={styles.subtitle}>
          Learn essential Arabic interrogative particles and their usage in the Quran
        </Text>

        


        {/* Particles */}
        <View style={styles.particlesContainer}>
          {particles.map((particle, index) => {
            const isHarf = index < 2; // First 2 items are Harf (هَلْ and أَ)
            const cardStyle = isHarf ? styles.harfCard : styles.ismCard;
            const arabicStyle = isHarf ? styles.harfArabic : styles.ismArabic;
            const exampleStyle = isHarf ? styles.harfExampleSection : styles.ismExampleSection;
            const exampleTitleStyle = isHarf ? styles.harfExampleTitle : styles.ismExampleTitle;
            const exampleReferenceStyle = isHarf ? styles.harfExampleReference : styles.ismExampleReference;
            const translationTextStyle = isHarf ? styles.harfTranslationText : styles.ismTranslationText;
            
            return (
              <View key={index} style={cardStyle}>
                <View style={styles.particleHeader}>
                  <View style={styles.particleInfo}>
                    <Text style={arabicStyle}>{particle.arabic}</Text>
                    <Text style={styles.particleTransliteration}>{particle.transliteration}</Text>
                    <Text style={styles.particleMeaning}>{particle.urdu}</Text>
                    <Text style={styles.particleMeaning}>{particle.english}</Text>
                  </View>
                </View>
                
                <View style={exampleStyle}>
                  <Text style={exampleTitleStyle}>Example</Text>
                  <Text style={exampleReferenceStyle}>{particle.example}</Text>
                </View>
                <View style={exampleStyle}>
                  <Text style={exampleTitleStyle}>Translation</Text>
                  <Text style={translationTextStyle}>{particle.translation}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HarfLesson7Screen; 