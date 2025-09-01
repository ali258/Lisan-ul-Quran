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
        "arabic": "أُمَّة، أُمَم",
        "urdu": "قوم، جماعت، امت",
        "english": "community",
        "frequency": 64
      },
      {
        "arabic": "قَوْم",
        "urdu": "قوم، لوگ",
        "english": "people",
        "frequency": 283
      },
      {
        "arabic": "إِنْسَان",
        "urdu": "انسان، بشر",
        "english": "man",
        "frequency": 65
      },
      {
        "arabic": "نَاس",
        "urdu": "لوگ، انسان",
        "english": "men, people",
        "frequency": 241
      },
      {
        "arabic": "بَشَر",
        "urdu": "انسان",
        "english": "human",
        "frequency": 37
      },
      {
        "arabic": "ذَكَر، ذُكُور، ذُكْرَان",
        "urdu": "مرد، نر، مذکر",
        "english": "male",
        "frequency": 18
      },
      {
        "arabic": "أُنثٰى، إِنَاث",
        "urdu": "عورت، مادہ، مونث",
        "english": "female",
        "frequency": 30
      },
      {
        "arabic": "عَبْد، عِبَاد",
        "urdu": "غلام، بندہ",
        "english": "slave",
        "frequency": 126
      },
      {
        "arabic": "عَدُوّ، أَعْدَاء",
        "urdu": "دشمن",
        "english": "enemy",
        "frequency": 50
      },
      {
        "arabic": "كُفَّار",
        "urdu": "کافر، منکر، نہ ماننے والے",
        "english": "disbelievers",
        "frequency": 21
      },
      {
        "arabic": "مُجْرِم، مُجْرِمُون، مُجْرِمِينَ",
        "urdu": "مجرم، گنہگار",
        "english": "criminal",
        "frequency": 52
      },
      {
        "arabic": "مَلَأ",
        "urdu": "سردار، رؤساء، لیڈر",
        "english": "chiefs, leaders",
        "frequency": 30
      },
      {
        "arabic": "وَلِيّ، أَوْلِيَاء",
        "urdu": "دوست، محافظ، سرپرست",
        "english": "protecting friend; guardian",
        "frequency": 86
      }
];

interface IsmLesson15ScreenProps {
  onBack: () => void;
}

export const IsmLesson15Screen: React.FC<IsmLesson15ScreenProps> = ({ onBack }) => {
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
        title="انسان، لوگ اور اقسام"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>انسان، لوگ اور اقسام</Text>
        <Text style={styles.lessonTitleEnglish}>People and Their Types</Text>
        <Text style={styles.lessonSubtitle}>
        قرآن کریم میں انسانوں، قوموں اور ان کی مختلف اقسام کے بارے میں اہم الفاظ
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
            یہ الفاظ قرآن کریم میں مختلف قوموں، انسانوں اور معاشرتی طبقات کو بیان کرتے ہیں۔ قرآن میں مرد، عورت، دوست، دشمن، کافر اور مجرم جیسے الفاظ انسان کی معاشرتی حیثیت اور ذمہ داریوں کو سمجھنے کے لیے آتے ہیں۔
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};