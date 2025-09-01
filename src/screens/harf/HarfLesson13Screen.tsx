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

interface HarfLesson13ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const HarfLesson13Screen: React.FC<HarfLesson13ScreenProps> = ({ onNavigate, onBack }) => {
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
    translationText: {
      fontSize: isTablet ? 12 : 10,
      color: currentTheme.text,
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    notesSection: {
      backgroundColor: currentTheme.primary,
      borderRadius: 16,
      padding: 20,
      marginTop: 24,
      borderWidth: 2,
      borderColor: currentTheme.primary,
    },
    notesTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 12,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    notesText: {
      fontSize: isTablet ? 14 : 12,
      color: currentTheme.surface,
      lineHeight: 20,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 8,
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
      arabic: 'إِذَا',
      urduMeaning: 'جب (مستقبل)',
      englishMeaning: 'when (future/if)',
      group: 'حرف شرط',
    },
    {
      arabic: 'إِذْ',
      urduMeaning: 'جب (ماضی)',
      englishMeaning: 'when (past)',
      group: 'حرف ظرف زمان',
    },
    {
      arabic: 'أَنْ',
      urduMeaning: 'کہ',
      englishMeaning: 'that (to/for/to do)',
      group: 'حرف مصدرية/نصب',
    },
    {
      arabic: 'إِنْ',
      urduMeaning: 'اگر',
      englishMeaning: 'if',
      group: 'حرف شرط',
    },
    {
      arabic: 'لَئِنْ',
      urduMeaning: 'یقیناً اگر',
      englishMeaning: 'surely if',
      group: 'حرف شرط/تاکید',
    },
    {
      arabic: 'لَوْ',
      urduMeaning: 'کاش، اگر',
      englishMeaning: 'if (past), if only',
      group: 'حرف شرط (ماضی)',
    },
    {
      arabic: 'لَوْلَا',
      urduMeaning: 'کیوں نہیں/اگر نہ ہو',
      englishMeaning: 'why not/if not',
      group: 'حرف شرط',
    },
    {
      arabic: 'اِنْ ... إِلَّا',
      urduMeaning: 'اگر نہیں تو',
      englishMeaning: 'none except / except',
      group: 'حرف حصر',
    },
    {
      arabic: 'مَا ... إِلَّا',
      urduMeaning: 'سوائے ... کے',
      englishMeaning: 'none except...',
      group: 'حرف حصر',
    },
    {
      arabic: 'كَيْ',
      urduMeaning: 'تاکہ',
      englishMeaning: 'so that',
      group: 'حروفِ سبب و علت',
    },
    {
      arabic: 'اَلْ',
      urduMeaning: 'ال (معرفہ بنانے کے لیے)',
      englishMeaning: '"the" (definite article)',
      group: 'حرف تعریف',
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
        title="قرآن کے عام حروف"
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
        <Text style={styles.title}> قرآن کے عام حروف  </Text>
        <Text style={styles.titleEnglish}>Quranic Common Harfs</Text>
        
        {/* Decorative Line */}
        <View style={styles.decorativeLine} />


        {/* Particles */}
        <View style={styles.particlesContainer}>
          {particles.map((particle, index) => (
            <View key={index} style={styles.particleCard}>
              <View style={styles.particleHeader}>
                <View style={styles.particleInfo}>
                  <Text style={styles.particleArabic}>{particle.arabic}</Text>
                  <Text style={styles.particleMeaning}>{particle.urduMeaning}</Text>
                  <Text style={styles.particleMeaning}>{particle.englishMeaning}</Text>
                </View>
              </View>
              
              <View style={styles.exampleSection}>
                <Text style={styles.exampleTitle}>Group</Text>
                <Text style={styles.exampleReference}>{particle.group}</Text>
              </View>
              
            </View>
          ))}
        </View>

        
      </ScrollView>
    </View>
  );
};

export default HarfLesson13Screen; 