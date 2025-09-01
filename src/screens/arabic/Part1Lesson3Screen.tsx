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

interface Part1Lesson3ScreenProps {
  onBackPress: () => void;
}

const Part1Lesson3Screen: React.FC<Part1Lesson3ScreenProps> = ({ onBackPress }) => {
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
      minHeight: '100%',
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
      marginTop: 20,
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
    formationSection: {
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
    formationContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    inputRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      paddingHorizontal: 4,
      flexWrap: 'wrap',
    },
    inputBox: {
      backgroundColor: '#3b82f6', // Blue color
      borderRadius: 12,
      paddingVertical: 10,
      paddingHorizontal: 10,
      minWidth: 70,
      maxWidth: 90,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    inputText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    plusSign: {
      fontSize: 20,
      fontWeight: 'bold',
      color: currentTheme.primary,
      marginHorizontal: 8,
    },
    arrowSign: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.primary,
      marginVertical: 8,
    },
    resultBox: {
      backgroundColor: '#10b981', // Green color
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 12,
      minWidth: 80,
      maxWidth: 100,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    resultText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    classificationSection: {
      marginTop: 32,
    },
    classificationContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 24,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
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
      shadowColor: currentTheme.shadow,
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
      shadowColor: currentTheme.shadow,
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
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    exampleContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      padding: 20,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.primary,
      marginRight: 16,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    exampleText: {
      fontSize: 16,
      color: currentTheme.text,
      flex: 1,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteSection: {
      marginTop: 24,
      padding: 16,
      backgroundColor: currentTheme.surface,
      borderRadius: 8,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
    },
    noteTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.primary,
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    explanationItem: {
      marginBottom: 16,
      paddingHorizontal: 12,
    },
    explanationText: {
      fontSize: 16,
      color: currentTheme.text,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="حروف و حرکات"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>حروف و حرکات</Text>
        <Text style={styles.lessonTitleEnglish}>سبق ۳</Text>
        <Text style={styles.lessonSubtitle}>
        حروف اور حرکات کے ملنے سے الفاظ وجود میں آتے ہیں
        </Text>

        

       

        {/* Main Content Section */}
        <View style={styles.formationSection}>
          <Text style={styles.sectionTitle}>لفظ کی تشکیل</Text>
          <View style={styles.formationContainer}>
            
            {/* Responsive Diagram - Different layout for mobile */}
            {isTablet ? (
              // Tablet layout - horizontal
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
            ) : (
              // Mobile layout - vertical stack
              <View style={{ alignItems: 'center' }}>
                <View style={[styles.inputRow, { flexDirection: 'column', alignItems: 'center' }]}>
                  <View style={[styles.inputRow, { marginBottom: 12 }]}>
                    <View style={styles.inputBox}>
                      <Text style={styles.inputText}>حروف</Text>
                    </View>
                    <Text style={styles.plusSign}>+</Text>
                    <View style={styles.inputBox}>
                      <Text style={styles.inputText}>حرکات</Text>
                    </View>
                  </View>
                  <Text style={styles.arrowSign}>↓</Text>
                  <View style={[styles.resultBox, { marginTop: 12 }]}>
                    <Text style={styles.resultText}>لفظ</Text>
                  </View>
                </View>
              </View>
            )}

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
        <View style={styles.contentCard}>
          <Text style={styles.lessonSubtitle}>خلاصہ:</Text>
          <Text style={styles.contentText}>
            • حروف اور حرکات کے ملنے سے الفاظ وجود میں آتے ہیں{'\n'}
            • حروف عربی زبان کے بنیادی اجزاء ہیں{'\n'}
            • حرکات حروف کی آواز کو متعین کرتے ہیں{'\n'}
            • حروف اور حرکات مل کر لفظ بناتے ہیں{'\n'}
            • ہر لفظ میں کم از کم دو حروف ہوتے ہیں{'\n'}
            • حرکات کے بغیر حروف کی آواز واضح نہیں ہوتی
          </Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Part1Lesson3Screen; 