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

const ismAfterlifeData: IsmWord[] = [
  {
    arabic: "الآخِرَةُ",
    urdu: "آخرت",
    english: "the Hereafter",
    frequency: 115
  },
  {
    arabic: "قيامَة",
    urdu: "قیامت",
    english: "resurrection",
    frequency: 70
  },
  {
    arabic: "ساعَة",
    urdu: "قیامت کی گھڑی",
    english: "hour (day of resurrection)",
    frequency: 47
  },
  {
    arabic: "يَوْم، أَيَّام",
    urdu: "دن، ایام",
    english: "day",
    frequency: 405
  },
  {
    arabic: "يَوْمِئِذٍ",
    urdu: "اس دن",
    english: "that day",
    frequency: 65
  },
  {
    arabic: "أَجَل",
    urdu: "مقررہ مدت",
    english: "term",
    frequency: 52
  },
  {
    arabic: "مُسَمًّی",
    urdu: "مقرر",
    english: "fixed",
    frequency: 21
  },
  {
    arabic: "مَصِير",
    urdu: "انجام، منزل",
    english: "destination",
    frequency: 28
  },
  {
    arabic: "مَأوَى",
    urdu: "ٹھکانہ، پناہ",
    english: "refuge, abode",
    frequency: 22
  },
  {
    arabic: "أَجْر، أُجُور",
    urdu: "اجر، انعام",
    english: "compensation, reward",
    frequency: 105
  },
  {
    arabic: "جَزَاء",
    urdu: "جزا",
    english: "reward",
    frequency: 42
  },
  {
    arabic: "عَاقِبَة",
    urdu: "انجام",
    english: "end",
    frequency: 32
  },
  {
    arabic: "عِقَاب",
    urdu: "سزا",
    english: "chastisement (as a result of sin)",
    frequency: 20
  },
  {
    arabic: "صاحِب، أَصْحاب",
    urdu: "ساتھی، رفیق",
    english: "companion, fellow",
    frequency: 94
  },
  {
    arabic: "جَنَّة، جَنَّات",
    urdu: "جنتیں، باغات",
    english: "garden",
    frequency: 147
  },
  {
    arabic: "جَهَنَّم",
    urdu: "جہنم",
    english: "the Hell",
    frequency: 77
  },
  {
    arabic: "جَحِيم",
    urdu: "بھڑکتی آگ",
    english: "hellfire",
    frequency: 26
  },
  {
    arabic: "ثَوَاب",
    urdu: "ثواب",
    english: "reward",
    frequency: 13
  },
  {
    arabic: "عَذَاب",
    urdu: "عذاب، سزا",
    english: "torment, punishment",
    frequency: 322
  },
  {
    arabic: "نَعِيم",
    urdu: "نعمت، خوشی",
    english: "of bliss & delight",
    frequency: 17
  },
  {
    arabic: "سَعِير",
    urdu: "بھڑکنے والی آگ",
    english: "blazing fire",
    frequency: 16
  },
  {
    arabic: "أَلِيم",
    urdu: "دردناک",
    english: "painful",
    frequency: 72
  },
  {
    arabic: "أَبَدًا",
    urdu: "ہمیشہ",
    english: "forever; ever",
    frequency: 28
  },
  {
    arabic: "نَهْر، أَنْهَار",
    urdu: "نہر، نہریں",
    english: "river",
    frequency: 54
  },
  {
    arabic: "نَار",
    urdu: "آگ",
    english: "fire",
    frequency: 145
  },
  {
    arabic: "وَيْل",
    urdu: "تباہی، افسوس",
    english: "woe unto…",
    frequency: 36
  }
];

interface IsmLesson7ScreenProps {
  onBack: () => void;
}

export const IsmLesson7Screen: React.FC<IsmLesson7ScreenProps> = ({ onBack }) => {
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
  const totalWords = ismAfterlifeData.length;
  const totalOccurrences = ismAfterlifeData.reduce((sum, word) => sum + word.frequency, 0);
  const averageFrequency = Math.round(totalOccurrences / totalWords);

  // Use original sequence as provided
  const sortedData = ismAfterlifeData;

  // Group data by categories
  const afterlifeAndTime = sortedData.slice(0, ); // آخرت، قیامت، وقت related
  
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
        title="آخرت و جزا"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>آخرت اور جزا و سزا</Text>
        <Text style={styles.lessonTitleEnglish}>Afterlife & Reward/Punishment</Text>
        <Text style={styles.lessonSubtitle}>
          قرآن کریم میں آخرت، جنت، جہنم اور جزا و سزا کے متعلق اہم الفاظ
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

        {/* Afterlife and Time */}
        <View style={styles.categorySection}>
          
          {afterlifeAndTime.map((word, index) => {
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
            یہ الفاظ آخرت کے بنیادی تصورات کو بیان کرتے ہیں۔ قرآن کریم میں ان کا کثرت سے استعمال ہوا ہے تاکہ انسان کو اس کے انجام کی یاد دہانی کرائی جا سکے۔
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};