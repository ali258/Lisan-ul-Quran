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

const ismComparativeData: IsmWord[] = [
  {
    arabic: 'أَشَدُّ',
    urdu: 'سب سے زیادہ سخت / شدید',
    english: 'Most severe',
    frequency: 31,
  },
  {
    arabic: 'أَعْلَى',
    urdu: 'سب سے بلند / برتر',
    english: 'Higher, superior',
    frequency: 11,
  },
  {
    arabic: 'أَعْلَمُ',
    urdu: 'سب سے زیادہ جاننے والا',
    english: 'Better-knowing, most informed',
    frequency: 49,
  },
  {
    arabic: 'أَقْرَبُ',
    urdu: 'سب سے قریب / قریب تر',
    english: 'Nearer, nearest',
    frequency: 19,
  },
  {
    arabic: 'أَكْبَرُ',
    urdu: 'سب سے بڑا / بڑا',
    english: 'Bigger, biggest',
    frequency: 24,
  },
  {
    arabic: 'أَكْثَرُ',
    urdu: 'سب سے زیادہ',
    english: 'More; most',
    frequency: 80,
  },
  {
    arabic: 'أَحْسَنُ',
    urdu: 'سب سے بہتر / اچھا',
    english: 'Better, best',
    frequency: 36,
  },
  {
    arabic: 'أَحَقُّ',
    urdu: 'سب سے زیادہ حقدار / زیادہ حق والا',
    english: 'More entitled; most worthy',
    frequency: 10,
  },
  {
    arabic: 'أَدْنَى',
    urdu: 'سب سے قریب / سب سے نیچے',
    english: 'Nearer; lowest',
    frequency: 12,
  },
  {
    arabic: 'أَظْلَمُ',
    urdu: 'سب سے زیادہ ظالم / زیادہ ناانصاف',
    english: 'More unjust; most unjust',
    frequency: 16,
  },
  {
    arabic: 'أَهْدَى',
    urdu: 'سب سے زیادہ ہدایت یافتہ',
    english: 'Better guided',
    frequency: 7,
  },
  {
    arabic: 'أَوْلَى',
    urdu: 'سب سے زیادہ قریب / زیادہ حق دار، افسوس',
    english: 'Nearer, closest; woe',
    frequency: 11,
  },
  {
    arabic: 'أَحَبُّ',
    urdu: 'سب سے زیادہ محبوب',
    english: 'More beloved',
    frequency: 3,
  },
];

interface IsmLesson4ScreenProps {
  onBack: () => void;
}

export const IsmLesson4Screen: React.FC<IsmLesson4ScreenProps> = ({ onBack }) => {
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
  const totalWords = ismComparativeData.length;
  const totalOccurrences = ismComparativeData.reduce((sum, word) => sum + word.frequency, 0);
  const averageFrequency = Math.round(totalOccurrences / totalWords);

  // Use original sequence as provided
  const sortedData = ismComparativeData;

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
        title="اسم تفضیل"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>اسم تفضیل</Text>
        <Text style={styles.lessonTitleEnglish}>Superlative Nouns</Text>
        <Text style={styles.lessonSubtitle}>
          قرآن کریم میں موجود تقابلی اور تفضیلی صیغے اور ان کی تکرار کی تعدد
        </Text>

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{totalWords}</Text>
            <Text style={styles.statLabel}>کل الفاظ</Text>
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
            یہ اسم تفضیل کے صیغے ہیں جو تقابل اور برتری کے لیے استعمال ہوتے ہیں۔ قرآن کریم میں ان کا استعمال اللہ کی صفات اور دیگر موازنوں کے لیے ہوتا ہے۔
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};