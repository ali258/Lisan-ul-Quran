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

interface QuranicWordHarfLesson13ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordHarfLesson13Screen: React.FC<QuranicWordHarfLesson13ScreenProps> = ({ onNavigate, onBack }) => {
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
      color: isDarkMode ? getColorFromClass('harf-orange-light-text') : getColorFromClass('harf-orange-dark-text'),
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
      borderColor: getColorFromClass('harf-orange-light'),
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
      color: isDarkMode ? getColorFromClass('harf-orange-light-text') : getColorFromClass('harf-orange-dark-text'),
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
      backgroundColor: isDarkMode ? getColorFromClass('harf-orange-dark') : getColorFromClass('harf-orange-light'),
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
    },
    exampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('harf-orange-dark-text') : getColorFromClass('harf-orange-light-text'),
      marginBottom: 6,
      textAlign: 'center',
    },
    exampleReference: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? getColorFromClass('harf-orange-dark-text') : getColorFromClass('harf-orange-light-text'),
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 16,
    },
    translationText: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? getColorFromClass('harf-orange-dark-text') : getColorFromClass('harf-orange-light-text'),
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
      borderColor: isDarkMode ? getColorFromClass('harf-orange-light') : getColorFromClass('harf-orange-dark'),
    },
    notesTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('harf-orange-light-text') : getColorFromClass('harf-orange-dark-text'),
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
      backgroundColor: isDarkMode ? getColorFromClass('harf-orange-dark') : getColorFromClass('harf-orange-light'),
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
        <Text style={styles.headerTitle}>قرآن کے عام حروف </Text>
      </View>

      <ScrollView
        style={styles.scrollView}
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
    </SafeAreaView>
  );
};

export default QuranicWordHarfLesson13Screen; 