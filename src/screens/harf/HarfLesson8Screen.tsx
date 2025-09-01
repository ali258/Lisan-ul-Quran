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
  getHarfTheme
} from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';

interface HarfLesson8ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const HarfLesson8Screen: React.FC<HarfLesson8ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getHarfTheme(isDarkMode); // Use HARF orange theme


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
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
      marginBottom: 8,
      color: currentTheme.text,
    },
    titleEnglish: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: currentTheme.textSecondary,
      textAlign: 'center',
      marginBottom: 16,
      fontStyle: 'italic',
    },
    subtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 32,
      color: currentTheme.textSecondary,
      lineHeight: 24,
    },
    lessonGroup: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: currentTheme.text,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 32,
      marginBottom: 4,
      textAlign: 'center',
    },
    particleTransliteration: {
      fontSize: isTablet ? 14 : 12,
      color: currentTheme.textSecondary,
      fontStyle: 'italic',
      marginBottom: 6,
      textAlign: 'center',
    },
    particleMeaning: {
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    exampleSection: {
      backgroundColor: currentTheme.primary,
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
    },
    exampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 6,
      textAlign: 'center',
    },
    exampleReference: {
      fontSize: isTablet ? 12 : 10,
      color: currentTheme.text,
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    decorativeLine: {
      height: 3,
      width: 60,
      backgroundColor: currentTheme.primary,
      borderRadius: 2,
      alignSelf: 'center',
      marginBottom: 24,
    },
  });

  const particles = [
    {
      arabic: 'لَا',
      transliteration: 'La',
      urduMeaning: 'نہیں',
      englishMeaning: 'not',
      explanation: 'General negation',
    },
    {
      arabic: 'كَلَّا',
      transliteration: 'Kalla',
      urduMeaning: 'ہرگز نہیں',
      englishMeaning: 'Certainly not / Never',
      explanation: 'Negative particle',
    },
    {
      arabic: 'لَمْ',
      transliteration: 'Lam / For Past',
      urduMeaning: 'نہیں ',
      englishMeaning: 'did not',
      explanation: 'For Past',
    },
    {
      arabic: 'لَنْ',
      transliteration: 'Lan / For Future',
      urduMeaning: 'ہرگز نہیں / کبھی نہیں ',
      englishMeaning: 'never / will not',
      explanation: 'For Future',
    },
    {
      arabic: 'مَا',
      transliteration: 'Ma',
      urduMeaning: 'نہیں / نہ ',
      englishMeaning: 'not',
      explanation: 'ماضی کی نفی ',
    },
    {
      arabic: 'لَيْسَ / لَیْسَتْ',
      transliteration: 'Laisa / Laisat',
      urduMeaning: 'نہیں ہے ',
      englishMeaning: 'is not',
      explanation: 'Present tense negation',
    },
    {
      arabic: 'بَلَى',
      transliteration: 'bala',
      urduMeaning: 'کیوں نہیں',
      englishMeaning: 'Yes, indeed / Why Not',
      explanation: 'Positive particle',
    },
    {
      arabic: 'غَیْر',
      transliteration: 'ghayr',
      urduMeaning: 'علاوہ / سوائے',
      englishMeaning: 'not / other than',
      explanation: 'Negative particle',
    },
    {
      arabic: 'إِلَّا',
      transliteration: 'Illa',
      urduMeaning: 'مگر / کے علاوہ',
      englishMeaning: 'except / unless',
      explanation: 'Exception particle',
    },
    {
      arabic: 'نَعَمْ',
      transliteration: 'naam',
      urduMeaning: 'ہاں',
      englishMeaning: 'Yes',
      explanation: 'Positive Particle',
    },
    {
      arabic: 'اَلَا',
      transliteration: 'ala',
      urduMeaning: 'خبردار! / ہرگز نہ / نہیں ہوگا',
      englishMeaning: 'Lo! / do not / will not',
      explanation: 'Exception particle',
    },
    {
      arabic: 'اَلَّا (اَنْ + لَا)',
      transliteration: 'Alla',
      urduMeaning: 'سوائے اس کے کہ',
      englishMeaning: 'except that',
      explanation: 'Negative particle',
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
        title="حروف نفی و اثبات"
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
        <Text style={styles.title}> حروف نفی و اثبات</Text>
        <Text style={styles.titleEnglish}>Negative & Positive Particles</Text>
        <Text style={styles.subtitle}>
          Learn essential Arabic negative and positive particles and their usage in the Quran
        </Text>

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        

        {/* Particles */}
        <View style={styles.particlesContainer}>
          {particles.map((particle, index) => (
            <View key={index} style={styles.particleCard}>
              <View style={styles.particleHeader}>
                <View style={styles.particleInfo}>
                  <Text style={styles.particleArabic}>{particle.arabic}</Text>
                  <Text style={styles.particleTransliteration}>{particle.transliteration}</Text>
                  <Text style={styles.particleMeaning}>{particle.urduMeaning}</Text>
                  <Text style={styles.particleMeaning}>{particle.englishMeaning}</Text>
                </View>
              </View>
              
              {/* <View style={styles.exampleSection}>
                <Text style={styles.exampleTitle}>Explanation</Text>
                <Text style={styles.exampleReference}>{particle.explanation}</Text>
              </View> */}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HarfLesson8Screen; 