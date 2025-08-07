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

interface Lesson7ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width } = Dimensions.get('window');

const Lesson7Screen: React.FC<Lesson7ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

  const examples = [
    {
      nominative: 'زَيْدٌ',
      accusative: 'زَيْدًا',
      genitive: 'زَيْدٍ',
      transliteration: 'Zaidun',
    },
    {
      nominative: 'مُسْلِمٌ',
      accusative: 'مُسْلِمًا',
      genitive: 'مُسْلِمٍ',
      transliteration: 'Muslimun',
    },
    {
      nominative: 'جَنَّةٌ',
      accusative: 'جَنَّةً',
      genitive: 'جَنَّةٍ',
      transliteration: 'Jannatun',
    },
    {
      nominative: 'آيَةٌ',
      accusative: 'آيَةً',
      genitive: 'آيَةٍ',
      transliteration: 'Ayatun',
    },
    {
      nominative: 'سَمَاءٌ',
      accusative: 'سَمَاءً',
      genitive: 'سَمَاءٍ',
      transliteration: "Sama'u",
    },
    {
      nominative: 'مَاءٌ',
      accusative: 'مَاءً',
      genitive: 'مَاءٍ',
      transliteration: "Ma'un",
    },
  ];

  const characteristics = [
    { sign: 'تنوين', count: '3' },
    { sign: 'اعرابی حالت', count: '85 فیصد' },
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
      marginBottom: 32,
    },
    mainTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    ruleText: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 24,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 24,
      paddingHorizontal: 16,
    },
    tableContainer: {
      marginBottom: 24,
    },
    tableTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    table: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 16,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity('amber-600', 0.9),
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    headerCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
      minHeight: 60,
    },
    tableCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cellText: {
      fontSize: 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 4,
    },
    transliterationText: {
      fontSize: 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    numberCell: {
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    characteristicsContainer: {
      marginBottom: 24,
    },
    characteristicsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    characteristicsTable: {
      backgroundColor: getColorWithOpacity('red-500', 0.9),
      borderRadius: 8,
      overflow: 'hidden',
      alignSelf: 'center',
      minWidth: 200,
    },
    characteristicRow: {
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: getColorWithOpacity('red-400', 0.3),
    },
    characteristicCell: {
      flex: 1,
      alignItems: 'center',
    },
    characteristicText: {
      fontSize: 14,
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    notesSection: {
      marginTop: 24,
    },
    notesTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: getThemeColor(colors.primary, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    noteText: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'justify',
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
        <Text style={styles.headerTitle}>سبق ۷ - منصرف اسماء</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>منصرف اسماء</Text>
          <Text style={styles.ruleText}>
            منصرف اسماء جب حالت نصب میں ہو تو ان کے آخر میں دو زبر کے ساتھ ایک الف کا اضافہ ہوتا ہے
          </Text>
        </View>

        {/* Main Table */}
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>منصرف اسماء کی مثالیں</Text>
          
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حالت جر</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حالت نصب</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حالت رفع</Text>
              </View>
              <View style={styles.numberCell}>
                <Text style={styles.numberText}>#</Text>
              </View>
            </View>

            {/* Table Rows */}
            {examples.map((example, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{example.genitive}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{example.accusative}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{example.nominative}</Text>
                  <Text style={styles.transliterationText}>{example.transliteration}</Text>
                </View>
                <View style={styles.numberCell}>
                  <Text style={styles.numberText}>{index + 1}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Characteristics Table */}
        <View style={styles.characteristicsContainer}>
          <Text style={styles.characteristicsTitle}>منصرف اسماء کی خصوصیات</Text>
          
          <View style={styles.characteristicsTable}>
            {characteristics.map((char, index) => (
              <View key={index} style={styles.characteristicRow}>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>{char.sign}</Text>
                </View>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>{char.count}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Notes Section */}
        <View style={styles.notesSection}>
          <Text style={styles.notesTitle}>اہم نوٹ</Text>
          
          <View style={styles.noteCard}>
            <Text style={styles.noteText}>
              جو اسم (ة) پر ختم ہو ، حالت نصب میں الف کا اضافہ نہیں ہو گا۔ (3-4)
            </Text>
          </View>
          
          <View style={styles.noteCard}>
            <Text style={styles.noteText}>
              جو اسم (الف + همزه) پر ختم ہو، حالت نصب میں الف کا اضافہ نہیں ہو گا۔ (5-6)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson7Screen; 