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

interface QuranicWordHarfLesson11ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordHarfLesson11Screen: React.FC<QuranicWordHarfLesson11ScreenProps> = ({ onNavigate, onBack }) => {
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
      backgroundColor: isDarkMode ? getColorFromClass('markab-purple-dark') : getColorFromClass('markab-purple-light'),
    },
    backButtonText: {
      fontSize: 18,
      color: isDarkMode ? getColorFromClass('markab-purple-dark-text') : getColorFromClass('markab-purple-light-text'),
      fontWeight: 'bold',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('markab-purple-light-text') : getColorFromClass('markab-purple-dark-text'),
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
      marginBottom: 8,
      color: isDarkMode ? getColorFromClass('markab-purple-light-text') : getColorFromClass('markab-purple-dark-text'),
    },
    titleEnglish: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.textSecondary, isDarkMode),
      textAlign: 'center',
      marginBottom: 16,
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
      borderColor: getColorFromClass('markab-purple-light'),
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
      color: isDarkMode ? getColorFromClass('markab-purple-light-text') : getColorFromClass('markab-purple-dark-text'),
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
      backgroundColor: isDarkMode ? getColorFromClass('markab-purple-dark') : getColorFromClass('markab-purple-light'),
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
    },
    exampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('markab-purple-dark-text') : getColorFromClass('markab-purple-light-text'),
      marginBottom: 6,
      textAlign: 'center',
    },
    exampleReference: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? getColorFromClass('markab-purple-dark-text') : getColorFromClass('markab-purple-light-text'),
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 16,
    },
    translationText: {
      fontSize: isTablet ? 12 : 10,
      color: getThemeColor(colors.surface, isDarkMode),
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    notesSection: {
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginTop: 24,
      borderWidth: 2,
      borderColor: getThemeColor(colors.primary, isDarkMode),
    },
    notesTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.surface, isDarkMode),
      marginBottom: 12,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    notesText: {
      fontSize: isTablet ? 14 : 12,
      color: getThemeColor(colors.surface, isDarkMode),
      lineHeight: 20,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 8,
    },
    decorativeLine: {
      height: 3,
      width: 60,
      backgroundColor: isDarkMode ? getColorFromClass('markab-purple-dark') : getColorFromClass('markab-purple-light'),
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
        <Text style={styles.headerTitle}>مرکب ما</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
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
    </SafeAreaView>
  );
};

export default QuranicWordHarfLesson11Screen; 