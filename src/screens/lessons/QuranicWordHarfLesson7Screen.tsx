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

interface QuranicWordHarfLesson7ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordHarfLesson7Screen: React.FC<QuranicWordHarfLesson7ScreenProps> = ({ onNavigate, onBack }) => {
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
      backgroundColor: isDarkMode ? getColorFromClass('harf-orange-dark') : getColorFromClass('harf-orange-light'),
    },
    backButtonText: {
      fontSize: 18,
      color: isDarkMode ? getColorFromClass('harf-orange-dark-text') : getColorFromClass('harf-orange-light-text'),
      fontWeight: 'bold',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('harf-orange-light-text') : getColorFromClass('harf-orange-dark-text'),
      flex: 1,
    },
    headerTitleContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      flex: 1,
      justifyContent: 'flex-end',
    },
    headerTitleHarf: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getColorFromClass('harf-orange-dark-text'),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    headerTitleConnector: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      marginHorizontal: 4,
    },
    headerTitleIsm: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getColorFromClass('ism-blue-dark-text'),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
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
      color: getThemeColor(colors.text, isDarkMode),
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
      color: getColorFromClass('harf-orange-dark-text'),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    titleConnector: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      marginHorizontal: 4,
    },
    titleIsm: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      color: getColorFromClass('ism-blue-dark-text'),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    titleEnglish: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.textSecondary, isDarkMode),
      textAlign: 'center',
      fontStyle: 'italic',
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
      color: isDarkMode ? getColorFromClass('harf-orange-light-text') : getColorFromClass('harf-orange-dark-text'),
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
      borderColor: isDarkMode ? getColorFromClass('harf-orange-dark') : getColorFromClass('harf-orange-dark'),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    harfCard: {
      width: isTablet ? '48%' : '48%',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: isDarkMode ? getColorFromClass('harf-orange-light') : getColorFromClass('harf-orange-light'),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    ismCard: {
      width: isTablet ? '48%' : '48%',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: isDarkMode ? getColorFromClass('ism-blue-light') : getColorFromClass('ism-blue-light'),
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
    harfArabic: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('harf-orange-light-text') : getColorFromClass('harf-orange-dark-text'),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 32,
      marginBottom: 4,
      textAlign: 'center',
    },
    ismArabic: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
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
    harfExampleSection: {
      backgroundColor: isDarkMode ? getColorFromClass('harf-orange-dark') : getColorFromClass('harf-orange-light'),
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
    },
    ismExampleSection: {
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
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
      color: isDarkMode ? getColorFromClass('harf-orange-dark-text') : getColorFromClass('harf-orange-light-text'),
      marginBottom: 6,
      textAlign: 'center',
    },
    ismExampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
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
      color: isDarkMode ? getColorFromClass('harf-orange-dark-text') : getColorFromClass('harf-orange-light-text'),
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 16,
    },
    ismExampleReference: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
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
      color: isDarkMode ? getColorFromClass('harf-orange-dark-text') : getColorFromClass('harf-orange-light-text'),
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    ismTranslationText: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    decorativeLine: {
      height: 3,
      width: 60,
      backgroundColor: isDarkMode ? getColorFromClass('harf-orange-dark') : getColorFromClass('harf-orange-light'),
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
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleIsm}>اسمائے استفهام</Text>
          <Text style={styles.headerTitleConnector}> و </Text>
          <Text style={styles.headerTitleHarf}>حرف</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
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
    </SafeAreaView>
  );
};

export default QuranicWordHarfLesson7Screen; 