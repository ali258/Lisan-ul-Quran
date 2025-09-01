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

interface Part2Lesson5ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson5Screen: React.FC<Part2Lesson5ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

  const examples = [
    {
      nominative: 'هذا',
      accusative: 'هذا',
      genitive: 'هذا',
      transliteration: 'hādhā',
    },
    {
      nominative: 'ذلک',
      accusative: 'ذلک',
      genitive: 'ذلک',
      transliteration: 'dhālika',
    },
    {
      nominative: 'الَّذِي',
      accusative: 'الَّذِي',
      genitive: 'الَّذِي',
      transliteration: 'alladhī',
    },
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
    bottomSection: {
      flexDirection: width >= 768 ? 'row' : 'column',
      gap: 24,
    },
    characteristicsContainer: {
      flex: 1,
      marginBottom: width >= 768 ? 0 : 24,
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
      backgroundColor: currentTheme.surface,
      borderRadius: 8,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: currentTheme.border,
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
    tableContainer: {
      flex: 1,
    },
    tableTitle: {
      fontSize: 18,
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
      paddingVertical: 12,
      paddingHorizontal: 8,
    },
    headerCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    tableCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cellText: {
      fontSize: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 2,
    },
    transliterationText: {
      fontSize: 10,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    numberCell: {
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="مبنی اسماء"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>مبنی اسماء</Text>
        <Text style={styles.lessonTitleEnglish}>Derived Nouns</Text>
        <Text style={styles.lessonSubtitle}> یہ باقی رہنے والے 2 فیصد اسماء ہیں جو تینوں اعرابی حالتوں میں ایک ہی شکل اختیار کیے رہتے ہیں۔</Text>
        
       
        <View style={styles.bottomSection}>
          <View style={styles.characteristicsContainer}>
            <Text style={styles.characteristicsTitle}>مبنی اسماء کی نشانی</Text>
            
            <View style={styles.characteristicsTable}>
              <View style={styles.characteristicRow}>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>علامت</Text>
                </View>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>کوئی خاص نہیں</Text>
                </View>
              </View>
              <View style={styles.characteristicRow}>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>اعرابی حالت</Text>
                </View>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>1</Text>
                </View>
              </View>
              <View style={styles.characteristicRow}>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>تعداد</Text>
                </View>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>2 فیصد</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.tableContainer}>
            <Text style={styles.tableTitle}>مبنی اسماء کی مثالیں</Text>
            
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <View style={styles.headerCell}>
                  <Text style={styles.headerText}>حالت رفع</Text>
                </View>
                <View style={styles.headerCell}>
                  <Text style={styles.headerText}>حالت نصب</Text>
                </View>
                <View style={styles.headerCell}>
                  <Text style={styles.headerText}>حالت جر</Text>
                </View>
                <View style={styles.numberCell}>
                  <Text style={styles.numberText}>#</Text>
                </View>
              </View>

              {examples.map((example, index) => (
                <View key={index} style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>{example.nominative}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>{example.accusative}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>{example.genitive}</Text>
                    <Text style={styles.transliterationText}>{example.transliteration}</Text>
                  </View>
                  <View style={styles.numberCell}>
                    <Text style={styles.numberText}>{index + 1}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson5Screen; 