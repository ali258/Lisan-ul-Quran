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
import { getThemeColor, getColorWithOpacity } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface Lesson1ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');

const Lesson1Screen: React.FC<Lesson1ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

  const arabicAlphabet = [
    ['خ', 'ح', 'ج', 'ث', 'ت', 'ب', 'ا'],
    ['ص', 'ش', 'س', 'ز', 'ر', 'ذ', 'د'],
    ['ق', 'ف', 'غ', 'ع', 'ظ', 'ط', 'ض'],
    ['ی', 'ه', 'و', 'ن', 'م', 'ل', 'ک']
  ];

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
    },
    backButtonText: {
      fontSize: 24,
      color: getThemeColor(colors.primary, isDarkMode),
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      flex: 1,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 40,
    },
    titleSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    mainTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      opacity: 0.8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.7,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      marginTop: 16,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    alphabetSection: {
      marginBottom: 40,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    alphabetContainer: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 24,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
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
      color: getThemeColor(colors.primary, isDarkMode),
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
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableContainer: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    tableHeader: {
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    tableHeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: getThemeColor(colors.surface, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
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
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableCellUrdu: {
      fontSize: 14,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteSection: {
      marginTop: 24,
      padding: 16,
      backgroundColor: getColorWithOpacity(colors.primary, 0.1),
      borderRadius: 8,
      borderLeftWidth: 4,
      borderLeftColor: getThemeColor(colors.primary, isDarkMode),
    },
    noteTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
  });

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
        <Text style={styles.headerTitle}>حروف الهجاء</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>حروف الهجاء</Text>
          <Text style={styles.subtitle}>سبق ۱</Text>
          <Text style={styles.description}>
            عربی حروف تہجی کی تعلیم - عربی زبان کے بنیادی حروف
          </Text>
        </View>

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
    </SafeAreaView>
  );
};

export default Lesson1Screen; 