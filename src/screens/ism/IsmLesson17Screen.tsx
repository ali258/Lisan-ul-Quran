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

const ismBodyData: IsmWord[] = [
    {
        arabic: 'وَاحِدٌ / وَاحِدَةً',
        urdu: 'ایک',
        english: 'One',
        "frequency": 1
      },
      {
        arabic: 'اثْنَانِ / اثْنَيْنِ / اثْنَتَيْنِ',
        urdu: 'دو',
        english: 'Two',
        "frequency": 1
      },
      {
        arabic: 'ثَلاثَةٌ / ثَلاثُوْنَ / ثَلاثُ / ثُلُثَ',
        urdu: 'تین',
        english: 'Three',
        "frequency": 1
      },
      {
        arabic: 'أَرْبَعَةٌ / أَرْبَعُ / رُبْعَ',
        urdu: 'چار',
        english: 'Four',
        "frequency": 1
      },
      {
        arabic: 'خَمْسَةٌ ',
        urdu: 'پانچ',
        english: 'Five',
        "frequency": 1
      },
      {
        arabic: 'سِتَّةٌ / سِتِّينَ',
        urdu: 'چھ',
        english: 'Six',
        "frequency": 1
      },
      {
        arabic: 'سَبْعَةٌ / سَبْعِينَ / سَبْعٌ',
        urdu: 'سات',
        english: 'Seven',
        "frequency": 1
      },
      {
        arabic: 'ثَمَانِيَةٌ / ثَمَانِيْنَ / ثَمَانِيَ',
        urdu: 'آٹھ',
        english: 'Eight',
        "frequency": 1
      },
      {
        arabic: 'تِسْعَةٌ / تِسْعٌ',
        urdu: 'نو',
        english: 'Nine',
        "frequency": 1
      },
      {
        arabic: 'عَشَرَةٌ',
        urdu: 'دس',
        english: 'Ten',
        "frequency": 1
      },
      {
        arabic: 'أَحَدَ عَشَرَ',
        urdu: 'گیاره',
        english: 'Eleven',
        "frequency": 1
      },
      {
        arabic: 'اثْنَا عَشَرَ / اِثْنَى عَشَرَ / اِثْنَتَا عَشَرَ / اِثْنَتَيْ عَشَرَةَ / اثْنَتَا عَشْرَةَ',
        urdu: 'باره',
        english: 'Twelve',
        "frequency": 1
      },
      {
        arabic: 'تِسْعَةَ عَشَرَ',
        urdu: 'انیس',
        english: 'Nineteen',
        "frequency": 1
      },
      {
        arabic: 'عِشْرُونَ',
        urdu: 'بیس',
        english: 'Twenty',
        "frequency": 1
      },
      {
        arabic: 'ثَلاثُونَ / ثَلاثِينَ',
        urdu: 'تیس',
        english: 'Thirty',
        "frequency": 1
      },
      {
        arabic: 'أَرْبَعِينَ',
        urdu: 'چالیس',
        english: 'Forty',
        "frequency": 1
      },
      {
        arabic: 'خَمْسِينَ',
        urdu: 'پچاس',
        english: 'Fifty',
        "frequency": 1
      },
      {
        arabic: 'سِتِّينَ',
        urdu: 'ساٹھ',
        english: 'Sixty',
        "frequency": 1
      },
      {
        arabic: 'سَبْعِينَ',
        urdu: 'ستر',
        english: 'Seventy',
        "frequency": 1
      },
      {
        arabic: 'ثَمَانِينَ',
        urdu: 'اسی',
        english: 'Eighty',
        "frequency": 1
      },
      {
        arabic: 'تِسْعٌ وَتِسْعُوْنَ',
        urdu: 'ننانوے',
        english: 'Ninety-nine',
        "frequency": 1
      },
      {
        arabic: 'مِائَةٌ ',
        urdu: 'سو',
        english: 'Hundred',
        "frequency": 1
      },
      {
        arabic: 'مِائَتَيْنِ',
        urdu: 'دو سو',
        english: 'Two hundred',
        "frequency": 1
      },
      {
        arabic: 'أَلْفُ',
        urdu: 'ہزار',
        english: 'Thousand',
        "frequency": 1
      },
      {
        arabic: 'الْفَيْنِ',
        urdu: 'دوہزار',
        english: 'Two Thousand',
        "frequency": 1
      },
      {
        arabic: 'مَرَّةً / مَرَّتَيْنِ / كَرَّتَيْنِ',
        urdu: 'ایک بار، دو بار',
        english: 'Once, Twice',
        "frequency": 1
      },
      {
        arabic: 'مِثْلَيْهِمْ',
        urdu: 'دوگنا',
        english: 'Twice, double',
        "frequency": 1
      },
  
];

interface IsmLesson17ScreenProps {
  onBack: () => void;
}

export const IsmLesson17Screen: React.FC<IsmLesson17ScreenProps> = ({ onBack }) => {
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
    categorySection: {
      marginBottom: 32,
    },
    categoryHeader: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.15),
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: THEME_CONFIG.borderRadius.medium,
      marginBottom: 16,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
    },
    categoryTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: currentTheme.primary,
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
  const totalWords = ismBodyData.length;
  const totalOccurrences = ismBodyData.reduce((sum, word) => sum + word.frequency, 0);
  const averageFrequency = Math.round(totalOccurrences / totalWords);

  // Use original sequence as provided
  const sortedData = ismBodyData;

  // Group data by categories
  const sensoryOrgans = sortedData.slice(0, ); 

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
        title="عدد"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>عدد</Text>
        <Text style={styles.lessonTitleEnglish}>Numbers</Text>
        <Text style={styles.lessonSubtitle}>
        قرآن مجید میں عدد کے بارے میں اہم الفاظ
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

        {/* Sensory Organs */}
        <View style={styles.categorySection}>
         
          {sensoryOrgans.map((word, index) => {
            const frequencyColor = getFrequencyColor(word.frequency);
            return (
              <View key={index} style={styles.wordCard}>
                <View style={styles.topRow}>
                  <View style={styles.leftColumn}>
                    <Text style={styles.urduText}>{word.urdu}</Text>
                  </View>
                  <View style={styles.rightColumn}>
                    <Text style={styles.arabicText}>{word.arabic}</Text>
                  </View>
                </View>
                <View style={styles.bottomRow}>
                  <Text style={styles.englishText}>{word.english}</Text>
                  <View style={[styles.frequencyCircle, { backgroundColor: frequencyColor }]}>
                    <Text style={styles.frequencyNumber}>{word.frequency}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>


        {/* Note Section */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>خصوصی نوٹ</Text>
          <Text style={styles.noteText}>
          یہ وہ اہم الفاظ ہیں جو قرآن مجید میں عدد کے بارے میں استعمال ہوتے ہیں۔
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};