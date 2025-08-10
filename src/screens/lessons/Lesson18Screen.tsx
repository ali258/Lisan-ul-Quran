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
import { getThemeColor } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface Lesson18ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const Lesson18Screen: React.FC<Lesson18ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

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
      fontSize: 24,
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
      fontSize: isTablet ? 48 : 36,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: isTablet ? 24 : 20,
      textAlign: 'center',
      opacity: 0.8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    lessonNumber: {
      fontSize: isTablet ? 20 : 16,
      textAlign: 'center',
      opacity: 0.6,
      color: getThemeColor(colors.primary, isDarkMode),
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    diagramSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    diagramTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 32,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    mainCategoryBox: {
      backgroundColor: getThemeColor('primary-400', isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    mainCategoryText: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
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
      backgroundColor: getThemeColor('primary-600', isDarkMode),
      borderRadius: 12,
      padding: 16,
      width: '100%',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 3,
    },
    chartSubCategoryBox: {
      backgroundColor: getThemeColor('primary-600', isDarkMode),
      borderRadius: 12,
      padding: 16,
      minWidth: isTablet ? 150 : 120,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 3,
    },
    subCategoryTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 12,
    },
    subCategoryDescription: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 12,
    },
    examplesText: {
      fontSize: isTablet ? 14 : 12,
      lineHeight: isTablet ? 20 : 16,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      fontStyle: 'italic',
    },
    highlightedText: {
      color: getThemeColor('primary-400', isDarkMode),
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
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      marginHorizontal: 10,
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
        <Text style={styles.headerTitle}>مرکبات کی اقسام</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonNumber}>Lesson 18</Text>
          <Text style={styles.mainTitle}>مرکبات کی اقسام</Text>
          <Text style={styles.subtitle}>Types of Compounds/Phrases</Text>
        </View>

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
            <View style={[styles.subCategoryBox, { backgroundColor: getThemeColor(colors.surface, isDarkMode), marginBottom: 20 }]}>
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
            <View style={[styles.subCategoryBox, { backgroundColor: getThemeColor(colors.surface, isDarkMode) }]}>
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
          <View style={[styles.subCategoryBox, { backgroundColor: getThemeColor(colors.surface, isDarkMode) }]}>
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
    </SafeAreaView>
  );
};

export default Lesson18Screen; 