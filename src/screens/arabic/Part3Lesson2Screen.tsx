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

interface Part3Lesson2ScreenProps {
  onBackPress: () => void;
}

const Part3Lesson2Screen: React.FC<Part3Lesson2ScreenProps> = ({ onBackPress }) => {
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
    diagramSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    diagramTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 32,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    mainCategoryBox: {
      backgroundColor: currentTheme.primary,
      borderRadius: 16,
      padding: 20,
      marginBottom: 24,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    mainCategoryText: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    subCategoriesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      width: '100%',
      flexWrap: 'wrap',
      gap: 20,
    },
    chartSubCategoriesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      width: '80%',
      maxWidth: 400,
      alignSelf: 'center',
      gap: 20,
    },
    definitionsContainer: {
      width: '100%',
      gap: 20,
    },
    subCategoryBox: {
      backgroundColor: currentTheme.primary,
      borderRadius: 12,
      padding: 16,
      width: '100%',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 3,
    },
    chartSubCategoryBox: {
      backgroundColor: currentTheme.primary,
      borderRadius: 12,
      padding: 16,
      minWidth: isTablet ? 150 : 120,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 3,
    },
    subCategoryTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 12,
    },
    subCategoryDescription: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 12,
    },
    examplesText: {
      fontSize: isTablet ? 14 : 12,
      lineHeight: isTablet ? 20 : 16,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      fontStyle: 'italic',
    },
    highlightedText: {
      color: currentTheme.primary,
      fontWeight: 'bold',
    },
    connectingLines: {
      position: 'absolute',
      top: 60,
      left: 0,
      right: 0,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: -1,
    },
    line: {
      width: 2,
      height: 20,
      backgroundColor: currentTheme.primary,
      marginHorizontal: 10,
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="مرکبات کی اقسام"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>مرکبات کی اقسام</Text>
        <Text style={styles.lessonTitleEnglish}>Types of Compounds/Phrases</Text>
       

        {/* Chart Section */}
        <View style={styles.diagramSection}>
          <Text style={styles.diagramTitle}>چارٹ</Text>
          
          {/* Main Category */}
          <View style={styles.mainCategoryBox}>
            <Text style={styles.mainCategoryText}>مرکب</Text>
          </View>

          {/* Sub Categories - Chart Only */}
          <View style={styles.chartSubCategoriesContainer}>
            {/* مرکب ناقص */}
            <View style={styles.chartSubCategoryBox}>
              <Text style={styles.subCategoryTitle}>مرکب ناقص</Text>
            </View>

            {/* مرکب تام */}
            <View style={styles.chartSubCategoryBox}>
              <Text style={styles.subCategoryTitle}>مرکب تام</Text>
            </View>
          </View>
        </View>

        {/* Definitions Section */}
        <View style={styles.diagramSection}>
          <Text style={styles.diagramTitle}>تعریفیں</Text>
          
          <View style={styles.definitionsContainer}>
            {/* مرکب ناقص Definition */}
            <View style={[styles.subCategoryBox, { backgroundColor: currentTheme.surface, marginBottom: 20 }]}>
              <Text style={styles.subCategoryTitle}>مرکب ناقص</Text>
              <Text style={styles.subCategoryDescription}>
                ایسا{' '}
                <Text style={styles.highlightedText}>مرکب</Text>{' '}
                جس میں کوئی بات ادھوری ہو،{' '}
                <Text style={styles.highlightedText}>مکمل</Text>{' '}
                نہ ہو۔
              </Text>
              <Text style={styles.examplesText}>
                مثلاً{' '}
                <Text style={styles.highlightedText}>اچھا لڑکا</Text>{' '}
                ،{' '}
                <Text style={styles.highlightedText}>لڑکے کی کتاب</Text>{' '}
                ،{' '}
                <Text style={styles.highlightedText}>یہ کتاب</Text>{' '}
                اور{' '}
                <Text style={styles.highlightedText}>کتاب میں</Text>{' '}
                وغیرہ
              </Text>
            </View>

            {/* مرکب تام Definition */}
            <View style={[styles.subCategoryBox, { backgroundColor: currentTheme.surface }]}>
              <Text style={styles.subCategoryTitle}>مرکب تام</Text>
              <Text style={styles.subCategoryDescription}>
                اس{' '}
                <Text style={styles.highlightedText}>مرکب</Text>{' '}
                کو{' '}
                <Text style={styles.highlightedText}>جملہ</Text>{' '}
                بھی کہا جاتا ہے۔ اس میں بات{' '}
                <Text style={styles.highlightedText}>مکمل</Text>{' '}
                ہوتی ہے
              </Text>
              <Text style={styles.examplesText}>
                مثلاً{' '}
                <Text style={styles.highlightedText}>لڑکا نیک ہے</Text>{' '}
                اور{' '}
                <Text style={styles.highlightedText}>یہ کتاب ہے</Text>{' '}
                ۔
              </Text>
            </View>
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.diagramSection}>
          <Text style={styles.diagramTitle}>خلاصہ</Text>
          <View style={[styles.subCategoryBox, { backgroundColor: currentTheme.surface }]}>
            <Text style={styles.subCategoryDescription}>
              <Text style={styles.highlightedText}>مرکب</Text>{' '}
              کی دو اہم اقسام ہیں:
            </Text>
            <Text style={styles.examplesText}>
              1. <Text style={styles.highlightedText}>مرکب ناقص</Text> - جو ادھورا ہوتا ہے
            </Text>
            <Text style={styles.examplesText}>
              2. <Text style={styles.highlightedText}>مرکب تام</Text> - جو مکمل جملہ ہوتا ہے
            </Text>
          </View>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default Part3Lesson2Screen; 