import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import { getIsmTheme, THEME_CONFIG, getFontWithProperFallback, FONT_CLASSES, getColorWithOpacity } from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

interface Part1Lesson1ScreenProps {
  onBackPress: () => void;
}

const Part1Lesson1Screen: React.FC<Part1Lesson1ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

  const arabicAlphabet = [
    ['خ', 'ح', 'ج', 'ث', 'ت', 'ب', 'ا'],
    ['ص', 'ش', 'س', 'ز', 'ر', 'ذ', 'د'],
    ['ق', 'ف', 'غ', 'ع', 'ظ', 'ط', 'ض'],
    ['ی', 'ه', 'و', 'ن', 'م', 'ل', 'ک']
  ];

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
    contentCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: THEME_CONFIG.borderRadius.large,
      padding: 20,
      marginBottom: 16,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.accent,
    },
    contentText: {
      fontSize: isTablet ? 18 : 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 24,
      textAlign: 'center',
    },
    alphabetSection: {
      marginBottom: 40,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    alphabetContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 24,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    alphabetRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    alphabetLetter: {
      fontSize: 32,
      fontWeight: 'bold',
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      minWidth: 40,
    },
    tableSection: {
      marginTop: 40,
    },
    tableTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    tableHeader: {
      backgroundColor: currentTheme.primary,
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    tableHeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.surface,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    tableCell: {
      flex: 1,
      paddingVertical: 16,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tableCellText: {
      fontSize: 16,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableCellUrdu: {
      fontSize: 14,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteSection: {
      marginTop: 24,
      padding: 16,
      backgroundColor: currentTheme.surface,
      borderRadius: 8,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
    },
    noteTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.primary,
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
   
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="حروف الهجاء"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>حروف الهجاء</Text>
        <Text style={styles.lessonTitleEnglish}>Arabic Alphabet</Text>
        <Text style={styles.lessonSubtitle}>سبق ۱</Text>
        <Text style={styles.lessonSubtitle}> عربی حروف تہجی کی تعلیم - عربی زبان کے بنیادی حروف</Text>
        

        {/* Alphabet Section */}
        <View style={styles.alphabetSection}>
          <Text style={styles.sectionTitle}>عربی حروف تہجی</Text>
          <View style={styles.alphabetContainer}>
            {arabicAlphabet.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.alphabetRow}>
                {row.map((letter, letterIndex) => (
                  <Text key={letterIndex} style={styles.alphabetLetter}>
                    {letter}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Table Section */}
        <View style={styles.tableSection}>
          <Text style={styles.tableTitle}>الف و همزه کا فرق</Text>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>الف و همزه کا فرق</Text>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.tableCellText}>الف</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableCellText}>ا</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.tableCellUrdu}>همزه</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableCellText}>أَ أْ أُ</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>نوٹ:</Text>
          <Text style={styles.noteText}>
            • الف (ا) ایک سیدھا عمودی خط ہے{'\n'}
            • همزه (أ) مختلف حرکات کے ساتھ آتا ہے{'\n'}
            • دونوں کی آواز ایک جیسی ہے لیکن شکل مختلف ہے
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Part1Lesson1Screen; 