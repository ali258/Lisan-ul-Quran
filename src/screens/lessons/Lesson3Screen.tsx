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

interface Lesson3ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');

const Lesson3Screen: React.FC<Lesson3ScreenProps> = ({ onNavigate, onBack }) => {
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
    formationSection: {
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
    formationContainer: {
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
    inputRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 20,
    },
    inputBox: {
      backgroundColor: '#3b82f6', // Blue color
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
    inputText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    plusSign: {
      fontSize: 24,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      marginHorizontal: 16,
    },
    arrowSign: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      marginVertical: 8,
    },
    resultBox: {
      backgroundColor: '#10b981', // Green color
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      minWidth: 120,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    resultText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    classificationSection: {
      marginTop: 32,
    },
    classificationContainer: {
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
    wordBox: {
      backgroundColor: '#f59e0b', // Orange color
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      minWidth: 120,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    wordText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    typesRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    typeBox: {
      backgroundColor: '#8b5cf6', // Purple color
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 16,
      minWidth: 100,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 2,
    },
    typeText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    meaningfulTypeBox: {
      backgroundColor: '#06b6d4', // Cyan color
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      minWidth: 100,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 2,
    },
    meaningfulTypeText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    exampleSection: {
      marginTop: 32,
    },
    exampleTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    exampleContainer: {
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
    exampleItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      paddingHorizontal: 12,
    },
    exampleSymbol: {
      fontSize: 24,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      marginRight: 16,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    exampleText: {
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
    explanationItem: {
      marginBottom: 16,
      paddingHorizontal: 12,
    },
    explanationText: {
      fontSize: 16,
      color: getThemeColor(colors.text, isDarkMode),
      lineHeight: 24,
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
        <Text style={styles.headerTitle}>حروف و حرکات</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>حروف و حرکات</Text>
          <Text style={styles.subtitle}>سبق ۳</Text>
          <Text style={styles.description}>
            حروف اور حرکات کے ملنے سے الفاظ وجود میں آتے ہیں
          </Text>
        </View>

        {/* Main Content Section */}
        <View style={styles.formationSection}>
          <Text style={styles.sectionTitle}>لفظ کی تشکیل</Text>
          <View style={styles.formationContainer}>
            
            {/* Simple One Line Diagram */}
            <View style={styles.inputRow}>
              <View style={styles.inputBox}>
                <Text style={styles.inputText}>حروف</Text>
              </View>
              <Text style={styles.plusSign}>+</Text>
              <View style={styles.inputBox}>
                <Text style={styles.inputText}>حرکات</Text>
              </View>
              <Text style={styles.arrowSign}>→</Text>
              <View style={styles.resultBox}>
                <Text style={styles.resultText}>لفظ</Text>
              </View>
            </View>

          </View>
        </View>

        {/* Explanation Section */}
        <View style={styles.exampleSection}>
          <Text style={styles.exampleTitle}>وضاحت</Text>
          <View style={styles.exampleContainer}>
            <View style={styles.explanationItem}>
              <Text style={styles.explanationText}>
                حروف اور حرکات کے ملنے سے الفاظ وجود میں آتے ہیں۔
              </Text>
            </View>
            <View style={styles.explanationItem}>
              <Text style={styles.explanationText}>
                جو بے معنی بھی ہو سکتے ہیں اور با معنی بھی۔
              </Text>
            </View>
            <View style={styles.explanationItem}>
              <Text style={styles.explanationText}>
                ہر با معنی لفظ کلمہ کہلاتا ہے۔
              </Text>
            </View>
          </View>
        </View>

        {/* Example Section */}
        <View style={styles.exampleSection}>
          <Text style={styles.exampleTitle}>مثلاً</Text>
          <View style={styles.exampleContainer}>
            <View style={styles.exampleItem}>
              <Text style={styles.exampleSymbol}>ک + ت + ب</Text>
              <Text style={styles.exampleText}>حروف: ک، ت، ب</Text>
            </View>
            <View style={styles.exampleItem}>
              <Text style={styles.exampleSymbol}>کَ + تَ + بَ</Text>
              <Text style={styles.exampleText}>حرکات: زبر، زبر، زبر</Text>
            </View>
            <View style={styles.exampleItem}>
              <Text style={styles.exampleSymbol}>کَتَبَ</Text>
              <Text style={styles.exampleText}>کلمہ: کَتَبَ (لکھا)</Text>
            </View>
            <View style={styles.exampleItem}>
              <Text style={styles.exampleSymbol}>ب + ا + ت</Text>
              <Text style={styles.exampleText}>حروف: ب، ا، ت</Text>
            </View>
            <View style={styles.exampleItem}>
              <Text style={styles.exampleSymbol}>بَ + ا + تَ</Text>
              <Text style={styles.exampleText}>حرکات: زبر، سکون، زبر</Text>
            </View>
            <View style={styles.exampleItem}>
              <Text style={styles.exampleSymbol}>بَاتَ</Text>
              <Text style={styles.exampleText}>کلمہ: بَاتَ (رات)</Text>
            </View>
          </View>
        </View>

        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>خلاصہ:</Text>
          <Text style={styles.noteText}>
            • حروف اور حرکات کے ملنے سے الفاظ وجود میں آتے ہیں{'\n'}
            • حروف عربی زبان کے بنیادی اجزاء ہیں{'\n'}
            • حرکات حروف کی آواز کو متعین کرتے ہیں{'\n'}
            • حروف اور حرکات مل کر لفظ بناتے ہیں{'\n'}
            • ہر لفظ میں کم از کم دو حروف ہوتے ہیں{'\n'}
            • حرکات کے بغیر حروف کی آواز واضح نہیں ہوتی
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson3Screen; 