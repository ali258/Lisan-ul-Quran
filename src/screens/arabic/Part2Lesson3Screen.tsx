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
import { getThemeColor } from '../harf/harfUtils';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

interface Part2Lesson3ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson3Screen: React.FC<Part2Lesson3ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

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
    { sign: 'اعرابی حالت', count: '3' },
    { sign: 'تعداد', count: '85 فیصد' },
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
    tableContainer: {
      marginBottom: 24,
    },
    tableTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    table: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 16,
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
      minHeight: 60,
    },
    tableCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cellText: {
      fontSize: 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 4,
    },
    transliterationText: {
      fontSize: 12,
      color: currentTheme.textSecondary,
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
      color: currentTheme.text,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    characteristicsTable: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
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
      borderBottomColor: currentTheme.border,
    },
    characteristicCell: {
      flex: 1,
      alignItems: 'center',
    },
    characteristicText: {
      fontSize: 14,
      color: currentTheme.text,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    noteText: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'justify',
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="منصرف اسماء"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>منصرف اسماء</Text>
        <Text style={styles.lessonTitleEnglish}>Fully Declinable Nouns</Text>
        <Text style={styles.lessonSubtitle}> منصرف اسماء جب حالت نصب میں ہو تو ان کے آخر میں دو زبر کے ساتھ ایک الف کا اضافہ ہوتا ہے</Text>
        

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
          <Text style={styles.characteristicsTitle}>منصرف اسماء کی نشاندہی</Text>
          
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
    </View>
  );
};

export default Part2Lesson3Screen; 