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
  getMarkabTheme
} from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';

interface HarfLesson11ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const HarfLesson11Screen: React.FC<HarfLesson11ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getMarkabTheme(isDarkMode); // Use MARKAB purple theme


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
      color: currentTheme.surface,
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
      color: currentTheme.surface,
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
      arabic: 'بِمَا',
      transliteration: 'Bima',
      urduMeaning: 'جس کے ساتھ، کیونکہ',
      englishMeaning: 'With what, because',
      group_category: 'حرفِ جر + ما (مرکب)',
    },
    {
      arabic: 'عَمَّا',
      transliteration: 'Ammma',
      urduMeaning: 'جس کے بارے میں، جس سے دور',
      englishMeaning: 'About what, away from what',
      group_category: 'حرفِ جر + ما (مرکب)',
    },
    {
      arabic: 'فِيمَا',
      transliteration: 'Fima',
      urduMeaning: 'جس میں',
      englishMeaning: 'In what',
      group_category: 'حرفِ جر + ما (مرکب)',
    },
    {
      arabic: 'کَمَا',
      transliteration: 'Kama',
      urduMeaning: 'جیسا کہ، جیسے',
      englishMeaning: 'As, just as',
      group_category: 'حرفِ جر + ما (مرکب)',
    },
    {
      arabic: 'لِمَا',
      transliteration: 'Lima',
      urduMeaning: 'جس کے لیے، جس لیے',
      englishMeaning: 'For what, for that which',
      group_category: 'حرفِ جر + ما (مرکب)',
    },
    {
      arabic: 'مِمَّا',
      transliteration: 'Mimma',
      urduMeaning: 'جس سے، جس میں سے',
      englishMeaning: 'Out of what, from that which',
      group_category: 'حرفِ جر + ما (مرکب)',
    },
    {
      arabic: 'أَمَّا',
      transliteration: 'Amma',
      urduMeaning: 'جہاں تک، تو، پس',
      englishMeaning: 'As to, as for',
      group_category: 'حرفِ شرط/تفصیل + ما (مرکب)',
    },
    {
      arabic: 'إِمَّا',
      transliteration: 'Imma',
      urduMeaning: 'اگر، یا، چاہے... چاہے',
      englishMeaning: 'If, either/or',
      group_category: 'حرفِ شرط + ما (مرکب)',
    },
    {
      arabic: 'أَنَّمَا',
      transliteration: 'Annama',
      urduMeaning: 'کہ وہ، وہ کہ',
      englishMeaning: 'That',
      group_category: 'حرف + ما (مرکب)',
    },
    {
      arabic: 'إِنَّمَا',
      transliteration: 'Innama',
      urduMeaning: 'بے شک، صرف',
      englishMeaning: 'Verily, only',
      group_category: 'حرفِ تاکید + ما (مرکب)',
    },
    {
      arabic: 'كَأَنَّمَا',
      transliteration: 'Kannama',
      urduMeaning: 'گویا کہ، جیسے کہ',
      englishMeaning: 'As if',
      group_category: 'حرفِ تشبیہ + ما (مرکب)',
    },
    {
      arabic: 'كُلَّمَا',
      transliteration: 'Kulama',
      urduMeaning: 'جب بھی، جب کبھی',
      englishMeaning: 'Whenever',
      group_category: 'حرفِ شرط + ما (مرکب)',
    },
    {
      arabic: 'لَمَّا',
      transliteration: 'Lamma',
      urduMeaning: 'جب، ابھی نہیں',
      englishMeaning: 'The time when, not yet',
      group_category: 'حرفِ ظرف + ما (مرکب)',
    },
    {
      arabic: 'مِمَّنْ (مِنْ+مَنْ)',
      transliteration: 'Mimman',
      urduMeaning: 'اس سے جو/ اُن میں سے جو',
      englishMeaning: 'than the one who; from those who',
      group_category: 'مرکب اضافی (اسم موصول + جار)',
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
        title="مرکب ما"
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
        <Text style={styles.title}> مرکب ما</Text>
        <Text style={styles.titleEnglish}>Compound Word with Ma</Text>
       

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
                <Text style={styles.exampleTitle}>Group Category</Text>
                <Text style={styles.exampleReference}>{particle.group_category}</Text>
              </View>
             
            </View>
          ))}
        </View>

        
      </ScrollView>
    </View>
  );
};

export default HarfLesson11Screen; 