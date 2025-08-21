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
      borderColor: isDarkMode ? getColorFromClass('harf-orange-light') : getColorFromClass('harf-orange-light'),
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
      backgroundColor: isDarkMode ? getColorFromClass('harf-orange-light') : getColorFromClass('harf-orange-dark'),
      borderRadius: 12,
      padding: 12,
      marginTop: 8,
    },
    exampleTitle: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('harf-orange-light-text') : getColorFromClass('harf-orange-dark-text'),
      marginBottom: 6,
      textAlign: 'center',
    },
    exampleReference: {
      fontSize: isTablet ? 12 : 10,
      color: isDarkMode ? getColorFromClass('harf-orange-light-text') : getColorFromClass('harf-orange-dark-text'),
      opacity: 0.9,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    decorativeLine: {
      height: 3,
      width: 60,
      backgroundColor: isDarkMode ? getColorFromClass('harf-orange-light') : getColorFromClass('harf-orange-light'),
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
        <Text style={styles.headerTitle}>حروف نفی و اثبات</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
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
    </SafeAreaView>
  );
};

export default QuranicWordHarfLesson8Screen; 