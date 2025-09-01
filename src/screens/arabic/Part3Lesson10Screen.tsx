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

interface Part3Lesson10ScreenProps {
  onBackPress: () => void;
}

const Part3Lesson10Screen: React.FC<Part3Lesson10ScreenProps> = ({ onBackPress }) => {
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
    contentSection: {
      marginBottom: 32,
    },
    textBlock: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    paragraph: {
      fontSize: isTablet ? 18 : 16,
      lineHeight: isTablet ? 32 : 28,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 16,
    },
    highlightedText: {
      color: currentTheme.primary,
      fontWeight: 'bold',
    },
    formulaContainer: {
      alignItems: 'center',
      marginVertical: 30,
      paddingVertical: 20,
    },
    formula: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      color: currentTheme.primary,
    },
    tableContainer: {
      marginTop: 30,
      borderWidth: 1,
      borderColor: currentTheme.border,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: currentTheme.surface,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
    },
    headerCell: {
      flex: 1,
      padding: isTablet ? 20 : 12,
      fontSize: isTablet ? 16 : 12,
      fontWeight: 'bold',
      color: currentTheme.surface,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    // Responsive column styles
    headerCellWide: {
      flex: 2, // Double width for last column
      padding: isTablet ? 20 : 12,
      fontSize: isTablet ? 16 : 12,
      fontWeight: 'bold',
      color: currentTheme.surface,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    headerCellMedium: {
      flex: 1.5, // Medium width for some columns
      padding: isTablet ? 20 : 12,
      fontSize: isTablet ? 16 : 12,
      fontWeight: 'bold',
      color: currentTheme.surface,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    tableRow: {
      flexDirection: 'row',
      backgroundColor: currentTheme.surface,
    },
    cell: {
      flex: 1,
      padding: isTablet ? 20 : 12,
      fontSize: isTablet ? 16 : 12,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    // Responsive cell styles
    cellWide: {
      flex: 2, // Double width for last column
      padding: isTablet ? 20 : 12,
      fontSize: isTablet ? 16 : 12,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    cellMedium: {
      flex: 1.5, // Medium width for some columns
      padding: isTablet ? 20 : 12,
      fontSize: isTablet ? 16 : 12,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    comprehensiveTableContainer: {
      marginTop: 30,
      borderWidth: 1,
      borderColor: currentTheme.border,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: currentTheme.surface,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },

    // Removed alternateRow styling - all rows will have the same color
    noteRow: {
      backgroundColor: currentTheme.accent,
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderTopWidth: 1,
      borderTopColor: currentTheme.border,
    },
    noteText: {
      fontSize: isTablet ? 14 : 12,
      color: currentTheme.surface,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      fontStyle: 'italic',
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="مرکب جاری"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>مرکب جاری</Text>
        <Text style={styles.lessonTitleEnglish}>Prepositional Phrase</Text>
        

        {/* Main Content */}
        <View style={styles.contentSection}>
          {/* Explanatory Text */}
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              عربی زبان میں کچھ حروف ایسے ہیں جو اسم کو حالت جرّ میں لے جاتے ہیں انھیں{' '}
              <Text style={styles.highlightedText}>حروف جاره</Text>
              {' '}کہتے ہیں ۔
            </Text>
          </View>

          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              جو اسم حالت جرّ میں ہو اُسے{' '}
              <Text style={styles.highlightedText}>مجرور</Text>
              {' '}کہتے ہیں ۔
            </Text>
          </View>

          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              <Text style={styles.highlightedText}>جار</Text>
              {' '}اور{' '}
              <Text style={styles.highlightedText}>مجرور</Text>
              {' '}مل کر{' '}
              <Text style={styles.highlightedText}>مرکب جاری</Text>
              {' '}بناتے ہیں ۔
            </Text>
          </View>

          {/* Formula */}
          <View style={styles.formulaContainer}>
            <Text style={styles.formula}>
              حرف جار + مجرور
            </Text>
          </View>

          {/* Example Table */}
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>مرکب جاری</Text>
              <Text style={styles.headerCell}>معرف باللام</Text>
              <Text style={styles.headerCell}>لام جاره</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.cell}>لِلّٰهِ</Text>
              <Text style={styles.cell}>اَللّٰهُ</Text>
              <Text style={styles.cell}>ل</Text>
            </View>
          </View>

          {/* Comprehensive Examples Table */}
          <View style={styles.comprehensiveTableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>ترجمہ</Text>
              <Text style={styles.headerCell}>مرکب جاری</Text>
              <Text style={styles.headerCell}>مجرور</Text>
              <Text style={styles.headerCell}>معنی</Text>
              <Text style={styles.headerCell}>حرف جار</Text>
            </View>
            
            {/* Row 1 - ب */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>حق کے ساتھ</Text>
              <Text style={styles.cell}>بِالْحَقِّ</Text>
              <Text style={styles.cell}>الْحَقُّ</Text>
              <Text style={styles.cell}>کے ساتھ</Text>
              <Text style={styles.cell}>ب</Text>
            </View>
           
            {/* Row 2 - ت */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>اللہ کی قسم</Text>
              <Text style={styles.cell}>تَاللّٰهِ</Text>
              <Text style={styles.cell}>اللّٰه</Text>
              <Text style={styles.cell}>قسم کے لیے</Text>
              <Text style={styles.cell}>ت</Text>
            </View>

            {/* Row 3 - و */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>اللہ کی قسم</Text>
              <Text style={styles.cell}>وَاللّٰهِ</Text>
              <Text style={styles.cell}>اللّٰه</Text>
              <Text style={styles.cell}>قسم کے لیے</Text>
              <Text style={styles.cell}>و</Text>
            </View>

            {/* Row 4 - ک */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>چاند کی طرح</Text>
              <Text style={styles.cell}>كَالْقَمَرِ</Text>
              <Text style={styles.cell}>الْقَمَرُ</Text>
              <Text style={styles.cell}>کی مانند</Text>
              <Text style={styles.cell}>ك</Text>
            </View>

            {/* Row 5 - فی */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>گھر میں</Text>
              <Text style={styles.cell}>فِي الْبَيْتِ</Text>
              <Text style={styles.cell}>الْبَيْتُ</Text>
              <Text style={styles.cell}>میں</Text>
              <Text style={styles.cell}>فِي</Text>
            </View>

            {/* Row 6 - مِنْ */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>مکہ سے</Text>
              <Text style={styles.cell}>مِنْ مَكَّةَ</Text>
              <Text style={styles.cell}>مَكَّةُ</Text>
              <Text style={styles.cell}>سے </Text>
              <Text style={styles.cell}>مِنْ ، عَنْ</Text>
            </View>


            {/* Row 8 - إِلَى */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>کسی پہاڑ کی طرف</Text>
              <Text style={styles.cell}>إِلَى جَبَلٍ</Text>
              <Text style={styles.cell}>جَبَلٌ</Text>
              <Text style={styles.cell}> کی طرف</Text>
              <Text style={styles.cell}>إِلَى</Text>
            </View>

            {/* Row 9 - عَلَى */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>کرسی پر</Text>
              <Text style={styles.cell}>عَلَى الْكُرْسِيِّ</Text>
              <Text style={styles.cell}>الْكُرْسِيُّ</Text>
              <Text style={styles.cell}>پر </Text>
              <Text style={styles.cell}>عَلَى</Text>
            </View>

            {/* Row 10 - حَتَّى */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>ایک مقرر وقت تک</Text>
              <Text style={styles.cell}>حَتَّى حِيْنِ</Text>
              <Text style={styles.cell}>حِيْنٌ</Text>
              <Text style={styles.cell}>تک </Text>
              <Text style={styles.cell}>حَتَّى</Text>
            </View>

            {/* Row 11 - ل */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>زید کے لیے</Text>
              <Text style={styles.cell}>لِزَيْدٍ</Text>
              <Text style={styles.cell}>زَيْدٌ</Text>
              <Text style={styles.cell}>کے لیے </Text>
              <Text style={styles.cell}>ل (لام جارہ)</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentCard}>
            <Text style={styles.contentText}> ت اللّٰہ کے ساتھ مخصوص ہے </Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Part3Lesson10Screen; 