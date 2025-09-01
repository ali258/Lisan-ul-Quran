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

interface Part1Lesson2ScreenProps {
  onBackPress: () => void;
}

const Part1Lesson2Screen: React.FC<Part1Lesson2ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

  const diacriticalData = [
    {
      category: 'حرکات',
      subCategories: [
        { name: 'زبر', symbol: ' \u064E ' },
        { name: 'زیر', symbol: ' \u0650 ' },
        { name: 'پیش', symbol: ' \u064F ' },
      ]
    },
    {
      category: 'تنوین',
      subCategories: [
        { name: 'دوزبر', symbol: ' \u064B ' },
        { name: 'دو زیر', symbol: ' \u064D ' },
        { name: 'دوپیش', symbol: ' \u064C ' },
      ]
    },
    {
      category: 'سکون',
      subCategories: [
        { name: 'سکون', symbol: ' \u0652 ' },
      ]
    }
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
    diacriticalSection: {
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
    categoryContainer: {
      marginBottom: 32,
    },
    categoryRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 16,
    },
    categoryBox: {
      backgroundColor: '#dc2626', // Red color for main categories
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      minWidth: 100,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    categoryText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subCategoryRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 16,
    },
    subCategoryBox: {
      backgroundColor: '#9333ea', // Purple color for sub-categories
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 16,
      minWidth: 80,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 2,
    },
    subCategoryText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    symbolRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 24,
    },
    symbolBox: {
      backgroundColor: currentTheme.surface, // Light blue color for symbols
      borderRadius: 8,
      paddingVertical: 24,
      paddingHorizontal: 28,
      minWidth: 80,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    symbolText: {
      fontSize: 42,
      fontWeight: '900',
      color: currentTheme.primary,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    
    noteTitle: {
      textAlign: 'right',
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.primary,
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
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
      textAlign: 'right',
    },
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="حرکات و تنوین و سکون"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitleEnglish}>سبق ۲</Text>
       

        {/* Diacritical Marks Section */}
        <View style={styles.diacriticalSection}>
          <Text style={styles.sectionTitle}>عربی اعراب کی اقسام</Text>
          
          {diacriticalData.map((category, categoryIndex) => (
            <View key={categoryIndex} style={styles.categoryContainer}>
              {/* Main Category Row */}
              <View style={styles.categoryRow}>
                <View style={styles.categoryBox}>
                  <Text style={styles.categoryText}>{category.category}</Text>
                </View>
              </View>

              {/* Sub Categories Row */}
              <View style={styles.subCategoryRow}>
                {category.subCategories.map((subCategory, subIndex) => (
                  <View key={subIndex} style={styles.subCategoryBox}>
                    <Text style={styles.subCategoryText}>{subCategory.name}</Text>
                  </View>
                ))}
              </View>

              {/* Symbols Row */}
              <View style={styles.symbolRow}>
                {category.subCategories.map((subCategory, subIndex) => (
                  <View key={subIndex} style={styles.symbolBox}>
                    <Text style={styles.symbolText}>{subCategory.symbol}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>


        {/* Note Section */}
        <View style={styles.contentCard}>
          <Text style={styles.noteTitle}>نوٹ:</Text>
          <Text style={styles.contentText}>
            • حرکات حروف کی آواز کو متعین کرتے ہیں{'\n'}
            • تنوین "ن" کی آواز دیتا ہے{'\n'}
            • سکون حرف کو بغیر کسی آواز کے پڑھنے کا اشارہ ہے{'\n'}
            • یہ اعراب عربی زبان کی صحیح تلفظ کے لیے ضروری ہیں
          </Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default Part1Lesson2Screen; 