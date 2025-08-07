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

interface Lesson2ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');

const Lesson2Screen: React.FC<Lesson2ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

  const diacriticalData = [
    {
      category: 'حرکات',
      subCategories: [
        { name: 'زبر', symbol: 'َ' },
        { name: 'زیر', symbol: 'ِ' },
        { name: 'پیش', symbol: 'ُ' },
      ]
    },
    {
      category: 'تنوین',
      subCategories: [
        { name: 'دوزبر', symbol: 'ً' },
        { name: 'دو زیر', symbol: 'ٍ' },
        { name: 'دوپیش', symbol: 'ٌ' },
      ]
    },
    {
      category: 'سکون',
      subCategories: [
        { name: 'سکون', symbol: 'ْ' },
      ]
    }
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
    diacriticalSection: {
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
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
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
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
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
      backgroundColor: '#60a5fa', // Light blue color for symbols
      borderRadius: 8,
      paddingVertical: 24,
      paddingHorizontal: 28,
      minWidth: 80,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    symbolText: {
      fontSize: 42,
      fontWeight: '900',
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    explanationSection: {
      marginTop: 32,
    },
    explanationTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    explanationContainer: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      padding: 20,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    explanationItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      paddingHorizontal: 12,
    },
    explanationSymbol: {
      fontSize: 36,
      fontWeight: '900',
      color: getThemeColor(colors.primary, isDarkMode),
      marginRight: 16,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    explanationText: {
      fontSize: 16,
      color: getThemeColor(colors.text, isDarkMode),
      flex: 1,
      lineHeight: 24,
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
        <Text style={styles.headerTitle}>حرکات و تنوین و سکون</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>حرکات و تنوین و سکون</Text>
          <Text style={styles.subtitle}>سبق ۲</Text>
        </View>

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

        {/* Explanation Section */}
        <View style={styles.explanationSection}>
          <Text style={styles.explanationTitle}>حرکات کی وضاحت</Text>
          <View style={styles.explanationContainer}>
            <View style={styles.explanationItem}>
              <Text style={styles.explanationSymbol}>َ</Text>
              <Text style={styles.explanationText}>زبر: حرف کے اوپر لگایا جاتا ہے، "ا" کی آواز دیتا ہے</Text>
            </View>
            <View style={styles.explanationItem}>
              <Text style={styles.explanationSymbol}>ِ</Text>
              <Text style={styles.explanationText}>زیر: حرف کے نیچے لگایا جاتا ہے، "ی" کی آواز دیتا ہے</Text>
            </View>
            <View style={styles.explanationItem}>
              <Text style={styles.explanationSymbol}>ُ</Text>
              <Text style={styles.explanationText}>پیش: حرف کے اوپر لگایا جاتا ہے، "و" کی آواز دیتا ہے</Text>
            </View>
            <View style={styles.explanationItem}>
              <Text style={styles.explanationSymbol}>ْ</Text>
              <Text style={styles.explanationText}>سکون: حرف کے اوپر لگایا جاتا ہے، حرف کو بغیر کسی آواز کے پڑھا جاتا ہے</Text>
            </View>
          </View>
        </View>

        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>نوٹ:</Text>
          <Text style={styles.noteText}>
            • حرکات حروف کی آواز کو متعین کرتے ہیں{'\n'}
            • تنوین "ن" کی آواز دیتا ہے{'\n'}
            • سکون حرف کو بغیر کسی آواز کے پڑھنے کا اشارہ ہے{'\n'}
            • یہ اعراب عربی زبان کی صحیح تلفظ کے لیے ضروری ہیں
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson2Screen; 