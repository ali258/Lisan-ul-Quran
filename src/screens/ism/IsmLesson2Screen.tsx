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
import { getIsmTheme, THEME_CONFIG, getFontWithProperFallback, FONT_CLASSES, getColorWithOpacity } from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

interface IsmWord {
  arabic: string;
  urdu: string;
  english: string;
  group_category: string;
}

const ismData: IsmWord[] = [
  {
    arabic: 'ذُو، ذَا، ذِي',
    urdu: 'مالک/ صاحب (مذکر)',
    english: 'endowed with, owner (mg)',
    group_category: 'اسم صفت',
  },
  {
    arabic: 'ذَات',
    urdu: 'مالک/ صاحب (مونث)',
    english: 'endowed with, owner (fg)',
    group_category: 'اسم صفت',
  },
  {
    arabic: 'أُولُوا، أُولِي',
    urdu: 'مالک / لوگ والے',
    english: 'people of, owners of',
    group_category: 'اسم صفت',
  },
  {
    arabic: 'أَهْل',
    urdu: 'خاندان / اہل',
    english: 'family, people of',
    group_category: 'اسم ذات',
  },
  {
    arabic: 'اٰل',
    urdu: 'خاندان / پیروکار',
    english: 'family, followers',
    group_category: 'اسم ذات',
  },
  {
    arabic: 'سُبْحَانَ',
    urdu: 'پاکی ہو / بے عیب',
    english: 'Glory be to, Free from defects',
    group_category: 'اسم مصدر',
  },
  {
    arabic: 'رَيْب',
    urdu: 'شک / شبہ',
    english: 'doubt',
    group_category: 'اسم',
  },
  {
    arabic: 'سَوْء / سُوءٍ',
    urdu: 'بُرائی / بُرا',
    english: 'evil',
    group_category: 'اسم',
  },
  {
    arabic: 'مِثْل',
    urdu: 'جیسا / مثل',
    english: 'similar, like',
    group_category: 'اسم',
  },
  {
    arabic: 'مَثَل، أَمْثَال',
    urdu: 'مثال / نظیر',
    english: 'example, similitude',
    group_category: 'اسم',
  },
  {
    arabic: 'جِنٌّ',
    urdu: 'جن',
    english: 'jinn',
    group_category: 'اسم ذات',
  },
  {
    arabic: 'جُنُودٌ',
    urdu: 'لشکر، افواج',
    english: 'forces',
    group_category: 'اسم ذات',
  },
  {
    arabic: 'مَيِّتٌ، مَوْتَىٰ',
    urdu: 'مردہ، مُردے',
    english: 'dead',
    group_category: 'اسم ذات',
  },
  {
    arabic: 'إِنسٌ',
    urdu: 'انسان',
    english: 'mankind',
    group_category: 'اسم ذات',
  },
  {
    arabic: 'بَعْضٌ',
    urdu: 'بعض، کچھ',
    english: 'some of',
    group_category: 'اسم نکرہ',
  },
  {
    arabic: 'كُلٌّ',
    urdu: 'سب، ہر ایک',
    english: 'everyone',
    group_category: 'اسم نکرہ',
  },
];

interface IsmLesson2ScreenProps {
  onBack: () => void;
}

export const IsmLesson2Screen: React.FC<IsmLesson2ScreenProps> = ({ onBack }) => {
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
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
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
    wordCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: THEME_CONFIG.borderRadius.large,
      marginBottom: 12,
      padding: 16,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderLeftWidth: 3,
      borderLeftColor: currentTheme.accent,
    },
    textRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8,
    },
    leftColumn: {
      flex: 1,
      justifyContent: 'center',
    },
    rightColumn: {
      flex: 1,
      alignItems: 'flex-end',
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 6,
    },
    arabicText: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      textAlign: 'right',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    urduText: {
      fontSize: isTablet ? 16 : 14,
      textAlign: 'left',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    englishText: {
      fontSize: isTablet ? 14 : 12,
      textAlign: 'left',
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.english),
      fontStyle: 'italic',
      flex: 1,
    },
    categoryBadge: {
      backgroundColor: getColorWithOpacity(currentTheme.accent, 0.2),
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: THEME_CONFIG.borderRadius.small,
      alignSelf: 'flex-end',
    },
    categoryBadgeText: {
      fontSize: isTablet ? 12 : 10,
      color: currentTheme.accent,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      fontWeight: '600',
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
      borderRadius: THEME_CONFIG.borderRadius.medium,
      padding: 16,
      marginBottom: 24,
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: isTablet ? 24 : 20,
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
    noteCard: {
      backgroundColor: getColorWithOpacity(currentTheme.accent, 0.1),
      borderRadius: THEME_CONFIG.borderRadius.medium,
      padding: 16,
      marginTop: 32,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.accent,
    },
    noteTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: currentTheme.accent,
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

  // Group words by category
  const groupedWords = ismData.reduce((acc, word) => {
    const category = word.group_category.trim();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(word);
    return acc;
  }, {} as Record<string, IsmWord[]>);

  // Calculate statistics
  const totalWords = ismData.length;
  const totalCategories = Object.keys(groupedWords).length;

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
        title="اسماء کی اقسام"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>اسماء کی مختلف اقسام</Text>
        <Text style={styles.lessonSubtitle}>
          اس درس میں آپ اسماء کی مختلف اقسام اور ان کے استعمال کے بارے میں سیکھیں گے
        </Text>

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{totalWords}</Text>
            <Text style={styles.statLabel}>کل الفاظ</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{totalCategories}</Text>
            <Text style={styles.statLabel}>اقسام</Text>
          </View>
        </View>

        {/* Words grouped by category */}
        {Object.entries(groupedWords).map(([category, words]) => (
          <View key={category} style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryTitle}>{category}</Text>
            </View>
            
            {words.map((word, index) => (
              <View key={`${category}-${index}`} style={styles.wordCard}>
                {/* Main content row */}
                <View style={styles.textRow}>
                  {/* Left side - Urdu */}
                  <View style={styles.leftColumn}>
                    <Text style={styles.urduText}>{word.urdu}</Text>
                  </View>
                  
                  {/* Right side - Arabic */}
                  <View style={styles.rightColumn}>
                    <Text style={styles.arabicText}>{word.arabic}</Text>
                  </View>
                </View>
                
                {/* Second row - English left, Category right */}
                <View style={styles.bottomRow}>
                  <Text style={styles.englishText}>{word.english}</Text>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryBadgeText}>{word.group_category}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}

        {/* Note Section */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>یاد رکھیں</Text>
          <Text style={styles.noteText}>
            ہر اسم کی اپنی خصوصیت اور استعمال ہے۔ ان اقسام کو یاد رکھنا قرآن کریم کی بہتر سمجھ کے لیے ضروری ہے۔
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};