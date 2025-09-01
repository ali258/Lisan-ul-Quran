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
  THEME_CONFIG,   
  getColorWithOpacity, 
  getFontWithProperFallback, 
  FONT_CLASSES,
  getIsmTheme
} from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';

interface IsmLesson1ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const IsmLesson1Screen: React.FC<IsmLesson1ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode); // Use ISM blue theme

  // Colors object for backward compatibility
  const colors = currentTheme;

  // ISM Zarf (Adverbs of Place/Time) Data
  const ismZarfData = [
    {
      arabic: 'دُونِ',
      urdu: 'سوا، علاوه',
      english: 'besides',
    },
    {
      arabic: 'فَوْقَ',
      urdu: 'اوپر',
      english: 'above, over',
    },
    {
      arabic: 'تَحْتِ',
      urdu: 'نیچے',
      english: 'under, beneath',
    },
    {
      arabic: 'بَیْنَ یَدَیْ / بَیْنَ أَیْدِی',
      urdu: ' کے سامنے',
      english: 'in front of',
    },
    {
      arabic: 'أَمَامَ',
      urdu: 'سامنے',
      english: 'In front of',
    },
    {
      arabic: 'خَلْفَ',
      urdu: 'پیچھے',
      english: 'behind',
    },
    {
      arabic: 'وَرَاءَ',
      urdu: 'پیچھے / بعد میں',
      english: 'behind / after',
    },
    {
      arabic: 'يَمِينَ',
      urdu: 'داہنے طرف',
      english: 'right side',
    },
    {
      arabic: 'شِمَالِ',
      urdu: 'بائیں طرف',
      english: 'left side',
    },
    {
      arabic: 'بَيْنَ',
      urdu: 'درمیان',
      english: 'between',
    },
    {
      arabic: 'حَوْلَ',
      urdu: 'اردگرد / چاروں طرف',
      english: 'around',
    },
    {
      arabic: 'حَيثُ',
      urdu: 'جہاں',
      english: 'where',
    },
    {
      arabic: 'أَيْنَ',
      urdu: 'جہاں',
      english: 'where',
    },
    {
      arabic: 'أَيْنَمَا',
      urdu: 'جہاں بھی',
      english: 'wherever',
    },
    {
      arabic: 'هُنَالِكَ',
      urdu: 'وہاں',
      english: 'there',
    },
    {
      arabic: 'قَبْلَ',
      urdu: 'پہلے',
      english: 'before',
    },
    {
      arabic: 'بَعْدَ',
      urdu: 'بعد',
      english: 'after',
    },
    {
      arabic: 'حِیْنَ',
      urdu: ' جب، اُس وقت، لمحہ',
      english: 'Time / moment / at the time',
    },
    {
      arabic: 'يَوْمَئِذٍ',
      urdu: 'اس دن / اس وقت',
      english: 'that day / that time',
    },
    {
      arabic: 'بَعِيدٍ',
      urdu: 'دور',
      english: 'far',
    },
  ];

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
      paddingBottom: 120, // Sufficient bottom padding
    },
    title: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: colors.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    subtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 32,
      color: colors.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.english),
      lineHeight: 24,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 32,
      color: colors.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 24,
      paddingHorizontal: 16,
    },
    wordCard: {
      backgroundColor: colors.surface,
      borderRadius: THEME_CONFIG.borderRadius.large,
      marginBottom: 16,
      padding: 20,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderLeftWidth: 4,
      borderLeftColor: colors.primary,
    },
    textRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    arabicText: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      textAlign: 'right',
      color: colors.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      flex: 1,
    },
    urduText: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'left',
      color: colors.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      flex: 1,
    },
    englishText: {
      fontSize: isTablet ? 16 : 14,
      textAlign: 'left',
      color: colors.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.english),
      fontStyle: 'italic',
    },
    sectionHeader: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 10,
      color: colors.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteCard: {
      backgroundColor: getColorWithOpacity(colors.primary, 0.1),
      borderRadius: THEME_CONFIG.borderRadius.medium,
      padding: 16,
      marginTop: 32,
      borderLeftWidth: 4,
      borderLeftColor: colors.primary,
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: colors.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
  });

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
        title="اسم ظرف"
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
        <Text style={styles.title}>اسم ظرف</Text>
        <Text style={styles.subtitle}>
          Adverbs of Place and Time
        </Text>
        
        <Text style={styles.description}>
          اسم ظرف وہ اسم ہے جو جگہ اور وقت کو ظاہر کرتا ہے۔ یہ مکان اور زمان کی تفصیلات فراہم کرتا ہے۔
        </Text>

        {/* ISM Zarf Words Section */}
        <Text style={styles.sectionHeader}>اسم ظرف کے الفاظ</Text>
        
        {ismZarfData.map((word, index) => (
          <View key={index} style={styles.wordCard}>
            {/* Arabic and Urdu in same row */}
            <View style={styles.textRow}>
              <Text style={styles.urduText}>{word.urdu}</Text>
              <Text style={styles.arabicText}>{word.arabic}</Text>
            </View>
            {/* English below */}
            <Text style={styles.englishText}>{word.english}</Text>
          </View>
        ))}

        {/* Note Section */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>یاد رکھیں</Text>
          <Text style={styles.noteText}>
            • اسم ظرف مکان اور زمان کی تفصیلات بیان کرتا ہے{'\n'}
            • یہ سوالات "کہاں؟" اور "کب؟" کا جواب دیتا ہے{'\n'}
            • قرآن مجید میں یہ الفاظ بکثرت استعمال ہوتے ہیں{'\n'}
            • ہر لفظ کا صحیح استعمال سیاق و سباق پر منحصر ہے
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default IsmLesson1Screen;