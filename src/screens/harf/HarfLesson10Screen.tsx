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

interface HarfLesson10ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const HarfLesson10Screen: React.FC<HarfLesson10ScreenProps> = ({ onNavigate, onBack }) => {
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
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
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
    notesSection: {
      marginTop: 32,
      padding: 20,
      backgroundColor: currentTheme.surface,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: currentTheme.primary,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 3,
    },
    notesTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      marginBottom: 12,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    notesText: {
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.textSecondary,
      lineHeight: 22,
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
  });

  const particles = [
    {
      arabic: 'يَا',
      transliteration: 'Ya',
      urduMeaning: 'اے ',
      englishMeaning: 'O!',
      spelling: 'یا (Ya)',
      composition: 'ہر جگہ استعمال ہوا ہے',
    },
    {
      arabic: 'يَا أَيُّهَا',
      transliteration: 'Ya Ayyuha',
      urduMeaning: 'اے ... ',
      englishMeaning: 'O you ...',
      spelling: 'يا + اَيُّهَا (Ya + Ayyuha)',
      composition: 'مردانہ/عام گروہ کے لیے',
    },
    {
      arabic: 'يَا أَيَّتُهَا',
      transliteration: 'Ya Ayyatuha',
      urduMeaning: 'اے ... ',
      englishMeaning: 'O ...',
      spelling: 'يا + أَيَّتُهَا (Ya + Ayyatuha)',
      composition: 'صرف مونث یا مونث جمع کے لیے',
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
        title="حرف ندا"
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
        <Text style={styles.title}> حرف ندا</Text>
        <Text style={styles.titleEnglish}>Vocative Particles</Text>
        <Text style={styles.subtitle}>
          Learn essential Arabic vocative particles and their usage in the Quran
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
              
              <View style={styles.exampleSection}>
                <Text style={styles.exampleTitle}>Spelling (Separate)</Text>
                <Text style={styles.exampleReference}>{particle.spelling}</Text>
              </View>
              <View style={styles.exampleSection}>
                <Text style={styles.exampleTitle}>Usage</Text>
                <Text style={styles.exampleReference}>{particle.composition}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Important Notes */}
        <View style={styles.notesSection}>
          <Text style={styles.notesTitle}>استعمال اور نوٹس</Text>
          <Text style={styles.notesText}>
            اصل اور واحد حَرْفِ ندا جو قرآن میں آیا ہے ، ہر جگہ اسی کا استعمال ہوا ہے۔
          </Text>
          <Text style={styles.notesText}>
            مردانه عام گروه کے لیے جیسے : يَا أَيُّهَا الَّذِينَ آمَنُوا، يَا أَيُّهَا النَّاسُ
          </Text>
          <Text style={styles.notesText}>
            صرف مونث یا مونث جمع کے لیے ، جیسے: يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HarfLesson10Screen; 