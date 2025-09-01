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

const ismProphetsData: IsmWord[] = [
  {
    arabic: 'رَسُوْل، رُسُل',
    urdu: 'رسول، رسول (جمع)',
    english: 'Messenger',
    frequency: 332,
  },
  {
    arabic: 'نَبِيّ ، نَبِيُّونَ، نَبِيِّينَ، أَنْبِيَاء',
    urdu: 'نبی، نبیوں (جمع)، انبیاء',
    english: 'Prophet, Prophets',
    frequency: 75,
  },
  {
    arabic: 'آدَم، نُوْح، إِبْرَاهِيم',
    urdu: 'آدم، نوح، ابراہیم',
    english: 'Adam, Nuh (Noah), Ibrahim (Abraham)',
    frequency: 137,
  },
  {
    arabic: 'لُوط، إِسْمَاعِيل، إِسْحَاق',
    urdu: 'لوط، اسماعیل، اسحاق',
    english: 'Lut (Lot), Ismail (Ishmael), Ishaq (Isaac)',
    frequency: 56,
  },
  {
    arabic: 'يَعْقُوب (إِسْرَائِيل)، يُوسُف',
    urdu: 'یعقوب (اسرائیل)، یوسف',
    english: 'Yaqub (Israel), Yusuf (Joseph)',
    frequency: 86,
  },
  {
    arabic: 'هُود، شُعَيْب، صَالِح',
    urdu: 'ہود، شعیب، صالح',
    english: 'Hud, Shuaib, Salih',
    frequency: 30,
  },
  {
    arabic: 'مُوسَى، عِيسَى ابْنُ مَرْيَم',
    urdu: 'موسی، عیسی ابن مریم',
    english: 'Musa (Moses), Isa ibn Maryam (Jesus son of Maryam)',
    frequency: 195,
  },
  {
    arabic: 'هَارُون، دَاوُد، سُلَيْمَان',
    urdu: 'ہارون، داؤد، سلیمان',
    english: 'Harun (Aaron), Dawud (David), Sulaiman (Solomon)',
    frequency: 53,
  },
  {
    arabic: 'عَاد',
    urdu: 'عاد کی قوم',
    english: 'People of Hud',
    frequency: 19,
  },
  {
    arabic: 'ثَمُود',
    urdu: 'ثمود کی قوم',
    english: 'People of Salih',
    frequency: 26,
  },
  {
    arabic: 'فِرْعَوْن، هَامَان، قَارُون',
    urdu: 'فرعون، ہامان، قارون',
    english: 'Pharaoh, Haman, Qarun',
    frequency: 74,
  },
  {
    arabic: 'شَيْطَان، شَيَاطِين',
    urdu: 'شیطان، شیاطین',
    english: 'Satan',
    frequency: 88,
  },
];

interface IsmLesson6ScreenProps {
  onBack: () => void;
}

export const IsmLesson6Screen: React.FC<IsmLesson6ScreenProps> = ({ onBack }) => {
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
  const totalWords = ismProphetsData.length;
  const totalOccurrences = ismProphetsData.reduce((sum, word) => sum + word.frequency, 0);
  const averageFrequency = Math.round(totalOccurrences / totalWords);

  // Use original sequence as provided
  const sortedData = ismProphetsData;

  // Group data by categories
  const prophetsAndMessengers = sortedData.slice(0, 12); // رسول، نبی، أنبیاء
 
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
        title="انبیاء و شخصیات"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>انبیاء کرام اور تاریخی شخصیات</Text>
        <Text style={styles.lessonTitleEnglish}>Prophets and Historical Figures</Text>
        <Text style={styles.lessonSubtitle}>
          قرآن کریم میں مذکور انبیاء کرام، اقوام اور تاریخی شخصیات کے نام
        </Text>

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>31</Text>
            <Text style={styles.statLabel}>کل اسماء</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>16</Text>
            <Text style={styles.statLabel}>انبیاء کرام</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{totalOccurrences}</Text>
            <Text style={styles.statLabel}>کل تکرار </Text>
          </View>
        </View>

        {/* Prophets and Messengers */}
        <View style={styles.categorySection}>
          
          {prophetsAndMessengers.map((word, index) => {
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
            یہ تمام نام قرآن کریم میں مذکور ہیں۔ انبیاء کرام اللہ کے پیغامبر تھے، جبکہ کچھ تاریخی شخصیات اور اقوام کا ذکر عبرت کے لیے کیا گیا ہے۔
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};