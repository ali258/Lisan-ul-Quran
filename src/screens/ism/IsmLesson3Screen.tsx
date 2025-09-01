import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  BackHandler,
} from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import { getIsmTheme, THEME_CONFIG, getFontWithProperFallback, FONT_CLASSES, getColorWithOpacity, getFrequencyColor } from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

interface IsmWord {
  arabic: string;
  urdu: string;
  english: string;
  frequency: number;
}

const ismFrequencyData: IsmWord[] = [
  {
    arabic: 'رَبّ',
    urdu: 'پالنے والا، رب',
    english: 'Lord; Sustainer',
    frequency: 971,
  },
  {
    arabic: 'رَحْمٰن',
    urdu: 'بڑا مہربان',
    english: 'Compassionate',
    frequency: 57,
  },
  {
    arabic: 'رَحِيم',
    urdu: 'نہایت مہربان',
    english: 'Merciful, caring and kind',
    frequency: 116,
  },
  {
    arabic: 'سَلاَم',
    urdu: 'سلامتی، امن',
    english: 'Peace',
    frequency: 42,
  },
  {
    arabic: 'سَمِيع',
    urdu: 'سننے والا',
    english: 'One who listens',
    frequency: 47,
  },
  {
    arabic: 'شَكُور',
    urdu: 'شکر گزار',
    english: 'Grateful, appreciative',
    frequency: 10,
  },
  {
    arabic: 'عَزِيْز',
    urdu: 'غالب، زبردست',
    english: 'Mighty',
    frequency: 101,
  },
  {
    arabic: 'عَظِيْم',
    urdu: 'عظیم، بڑا',
    english: 'Supreme',
    frequency: 107,
  },
  {
    arabic: 'غَفُوْر',
    urdu: 'بخشنے والا',
    english: 'Most forgiving',
    frequency: 91,
  },
  {
    arabic: 'قَدِيْر',
    urdu: 'قدرت والا',
    english: 'All-powerful',
    frequency: 45,
  },
  {
    arabic: 'نَذِير، نُذُر',
    urdu: 'ڈرانے والا',
    english: 'Warner',
    frequency: 58,
  },
  {
    arabic: 'نَصِيْر',
    urdu: 'مددگار',
    english: 'Strong helper',
    frequency: 24,
  },
  {
    arabic: 'وَكِيْل',
    urdu: 'کارساز، وکیل',
    english: 'One who takes care (of a thing for sb)',
    frequency: 24,
  },
  {
    arabic: 'أَوَّل / اُوْلٰی',
    urdu: 'پہلا',
    english: 'First',
    frequency: 82,
  },
  {
    arabic: 'آخِر / آخِرَة',
    urdu: 'آخری',
    english: 'Last',
    frequency: 40,
  },
  {
    arabic: 'اٰخَر ، اُخرٰی',
    urdu: 'دوسرا، دیگر',
    english: 'Other',
    frequency: 66,
  },
  {
    arabic: 'أَمِيْن',
    urdu: 'امانت دار',
    english: 'Trustworthy',
    frequency: 14,
  },
  {
    arabic: 'بَصِيْر',
    urdu: 'خوب دیکھنے والا',
    english: 'One who sees clearly',
    frequency: 53,
  },
  {
    arabic: 'بَعِيْد',
    urdu: 'دور',
    english: 'Far',
    frequency: 25,
  },
  {
    arabic: 'تَوَّاب',
    urdu: 'بہت توبہ قبول کرنے والا',
    english: 'Most forgiving, oft-forgiving',
    frequency: 11,
  },
  {
    arabic: 'حَفِيْظ',
    urdu: 'حفاظت کرنے والا',
    english: 'Protector',
    frequency: 26,
  },
  {
    arabic: 'حَكِيْم',
    urdu: 'حکمت والا',
    english: 'Wise',
    frequency: 97,
  },
  {
    arabic: 'حَلِيْم',
    urdu: 'بردبار',
    english: 'Forbearing',
    frequency: 15,
  },
  {
    arabic: 'حَمِيْد',
    urdu: 'تعریف کے لائق، حمد کیا گیا',
    english: 'Praiseworthy',
    frequency: 17,
  },
  {
    arabic: 'حَمِيْم',
    urdu: 'دوست، گرم پانی',
    english: 'Warm (friend); boiling water',
    frequency: 20,
  },
  {
    arabic: 'خَبِيْر',
    urdu: 'جاننے والا، باخبر',
    english: 'Knowing, ever aware',
    frequency: 45,
  },
  {
    arabic: 'شَدِيْد',
    urdu: 'سخت، مضبوط',
    english: 'Severe; strong',
    frequency: 52,
  },
  {
    arabic: 'عَلِيّ',
    urdu: 'بلند، عالی',
    english: 'High, exalted',
    frequency: 11,
  },
  {
    arabic: 'عَلِيْم ، عُلَمَاء',
    urdu: 'علم والا',
    english: 'Knower',
    frequency: 163,
  },
  {
    arabic: 'قَرِيْب',
    urdu: 'قریب',
    english: 'Near',
    frequency: 26,
  },
  {
    arabic: 'كَبِيْر ، کَبِیْرَة',
    urdu: 'بڑا',
    english: 'Big',
    frequency: 47,
  },
  {
    arabic: 'كَثِيْر ، کَثِیْرَة',
    urdu: 'بہت زیادہ',
    english: 'Plenty; much',
    frequency: 74,
  },
  {
    arabic: 'سَرِيْع',
    urdu: 'تیز',
    english: 'Quick; swift; fast',
    frequency: 10,
  },
  {
    arabic: 'قَهَّار',
    urdu: 'سب پر غالب',
    english: 'Prevailing, irresistible',
    frequency: 8,
  },
  {
    arabic: 'غَفَّار',
    urdu: 'بہت بخشنے والا',
    english: 'Oft-forgiving',
    frequency: 4,
  },
  {
    arabic: 'قَلِيْل ، قَلِیْلَة',
    urdu: 'تھوڑا',
    english: 'Little',
    frequency: 71,
  },
  {
    arabic: 'كَرِيْم',
    urdu: 'عزت والا، سخی',
    english: 'Noble; honorable; generous',
    frequency: 27,
  },
  {
    arabic: 'لَطِيْف',
    urdu: 'نرم، باریک بین',
    english: 'Subtle',
    frequency: 7,
  },
  {
    arabic: 'وَهَّاب',
    urdu: 'بہت دینے والا',
    english: 'Bestower',
    frequency: 3,
  },
];

interface IsmLesson3ScreenProps {
  onBack: () => void;
}

export const IsmLesson3Screen: React.FC<IsmLesson3ScreenProps> = ({ onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    scrollContent: {
      paddingTop: 120,
      paddingHorizontal: 16,
      paddingBottom: 50,
    },
    lessonTitle: {
      fontSize: isTablet ? 30 : 26,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    lessonTitleEnglish: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: 8,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.english),
      fontStyle: 'italic',
    },
    lessonSubtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 24,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 24,
      paddingHorizontal: 16,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
      borderRadius: THEME_CONFIG.borderRadius.large,
      padding: 20,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: getColorWithOpacity(currentTheme.primary, 0.2),
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.english),
    },
    statLabel: {
      fontSize: isTablet ? 14 : 12,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      marginTop: 4,
    },
    wordCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: THEME_CONFIG.borderRadius.large,
      marginBottom: 16,
      padding: 20,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.accent,
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    leftColumn: {
      flex: 1,
      paddingRight: 16,
    },
    rightColumn: {
      alignItems: 'flex-end',
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -10,
    },
    arabicText: {
      fontSize: isTablet ? 26 : 22,
      fontWeight: 'bold',
      textAlign: 'right',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      marginBottom: 8,
    },
    urduText: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'left',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 24,
    },
    englishText: {
      fontSize: isTablet ? 16 : 14,
      textAlign: 'left',
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.english),
      fontStyle: 'italic',
      lineHeight: 20,
      flex: 1,
      paddingRight: 12,
    },

    frequencyCircle: {
      width: isTablet ? 50 : 40,
      height: isTablet ? 50 : 40,
      borderRadius: isTablet ? 25 : 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    frequencyNumber: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#FFFFFF',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.english),
    },

    legendContainer: {
      backgroundColor: getColorWithOpacity(currentTheme.surface, 0.8),
      borderRadius: THEME_CONFIG.borderRadius.medium,
      padding: 16,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: getColorWithOpacity(currentTheme.border, 0.3),
    },
    legendTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      marginBottom: 12,
    },
    legendRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
      minWidth: '45%',
    },
    legendColor: {
      width: 16,
      height: 16,
      borderRadius: 8,
      marginRight: 8,
    },
    legendText: {
      fontSize: isTablet ? 14 : 12,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteCard: {
      backgroundColor: getColorWithOpacity('#FFD93D', 0.1),
      borderRadius: THEME_CONFIG.borderRadius.medium,
      padding: 16,
      marginTop: 32,
      borderLeftWidth: 4,
      borderLeftColor: '#FFD93D',
    },
    noteTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: '#E17055',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 8,
    },
    noteText: {
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 22,
    },
  });

  // Calculate statistics
  const totalWords = ismFrequencyData.length;
  const totalOccurrences = ismFrequencyData.reduce((sum, word) => sum + word.frequency, 0);
  const averageFrequency = Math.round(totalOccurrences / totalWords);

  // Use original sequence as provided
  const sortedData = ismFrequencyData;


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
        title="صفات"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>صفات </Text>
        <Text style={styles.lessonTitleEnglish}>Some Attributes (Allah & Others)</Text>

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{totalWords}</Text>
            <Text style={styles.statLabel}>کل اسماء</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{totalOccurrences}</Text>
            <Text style={styles.statLabel}>کل تکرار</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{averageFrequency}</Text>
            <Text style={styles.statLabel}>اوسط تکرار</Text>
          </View>
        </View>

        {/* Frequency Legend */}
        <View style={styles.legendContainer}>
          <Text style={styles.legendTitle}>تکرار کی درجہ بندی</Text>
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#FF6B6B' }]} />
              <Text style={styles.legendText}>عالی (100+)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#4ECDC4' }]} />
              <Text style={styles.legendText}>کثیر (50+)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#45B7D1' }]} />
              <Text style={styles.legendText}>متوسط (25+)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#96CEB4' }]} />
              <Text style={styles.legendText}>کم (10+)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#FFEAA7' }]} />
              <Text style={styles.legendText}>نادر (10 سے کم)</Text>
            </View>
          </View>
        </View>

        {/* Words with frequency visualization */}
        {sortedData.map((word, index) => {
          const frequencyColor = getFrequencyColor(word.frequency);
          
          return (
            <View key={index} style={styles.wordCard}>
              {/* Top row - Main content */}
              <View style={styles.topRow}>
                {/* Left side - Urdu */}
                <View style={styles.leftColumn}>
                  <Text style={styles.urduText}>{word.urdu}</Text>
                </View>
                
                {/* Right side - Arabic */}
                <View style={styles.rightColumn}>
                  <Text style={styles.arabicText}>{word.arabic}</Text>
                </View>
              </View>
              
              {/* Bottom row - English left, Frequency circle right */}
              <View style={styles.bottomRow}>
                <Text style={styles.englishText}>{word.english}</Text>
                <View style={[styles.frequencyCircle, { backgroundColor: frequencyColor }]}>
                  <Text style={styles.frequencyNumber}>{word.frequency}</Text>
                </View>
              </View>
            </View>
          );
        })}

        {/* Note Section */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>خصوصی نوٹ</Text>
          <Text style={styles.noteText}>
            یہ اعداد و شمار قرآن کریم میں ان اسماء کی تکرار کو ظاہر کرتے ہیں۔ زیادہ تکرار کا مطلب یہ نہیں کہ وہ نام زیادہ اہم ہے، بلکہ اللہ تعالیٰ کے تمام نام یکساں عظمت رکھتے ہیں۔
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};