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

interface Part3Lesson9ScreenProps {
  onBackPress: () => void;
}

const Part3Lesson9Screen: React.FC<Part3Lesson9ScreenProps> = ({ onBackPress }) => {
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
    sectionTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
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
    exampleSection: {
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
    exampleTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    exampleText: {
      fontSize: isTablet ? 18 : 16,
      lineHeight: isTablet ? 28 : 24,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      marginBottom: 20,
    },
    breakdownContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    breakdownItem: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 8,
    },
    breakdownLabel: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 8,
    },
    breakdownWord: {
      fontSize: isTablet ? 18 : 16,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      fontWeight: 'bold',
    },
    finalCompound: {
      backgroundColor: currentTheme.primary,
      borderRadius: 12,
      padding: 20,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    finalCompoundText: {
      fontSize: isTablet ? 20 : 18,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      fontWeight: 'bold',
    },
    examplesTableContainer: {
      backgroundColor: currentTheme.primary,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: currentTheme.border,
      overflow: 'hidden',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    examplesTableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
      backgroundColor: currentTheme.surface,
    },
    highlightedRow: {
      backgroundColor: currentTheme.primary,
    },
    urduCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    arabicCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="پیچیده مرکب اضافی"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>پیچیده مرکب اضافی</Text>
        <Text style={styles.lessonTitleEnglish}>Complex Possessive Compound</Text>
        

        {/* Definition Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>تعریف</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              ایسا مرکب اضافی جس میں{' '}
              <Text style={styles.highlightedText}>ایک سے زیادہ مضاف</Text>{' '}
              یا{' '}
              <Text style={styles.highlightedText}>مضاف الیہ</Text>{' '}
              ہوں۔
            </Text>
          </View>
        </View>

        {/* Example Section */}
        <View style={styles.contentSection}>
          
          <View style={styles.exampleSection}>
            <Text style={styles.exampleTitle}>مثال</Text>
            <Text style={styles.exampleText}>
              حامد کے گھر کا دروازه
            </Text>

            {/* Breakdown */}
            <View style={styles.breakdownContainer}>
              <View style={styles.breakdownItem}>
                <Text style={styles.breakdownLabel}>مضاف</Text>
                <Text style={styles.breakdownWord}>بَابٌ</Text>
              </View>
              <View style={styles.breakdownItem}>
                <Text style={styles.breakdownLabel}>مضاف الیہ - مضاف</Text>
                <Text style={styles.breakdownWord}>بَيْتٌ</Text>
              </View>
              <View style={styles.breakdownItem}>
                <Text style={styles.breakdownLabel}>مضاف الیہ</Text>
                <Text style={styles.breakdownWord}>حَامِدٌ</Text>
              </View>
            </View>

            {/* Final Compound */}
            <View style={styles.finalCompound}>
              <Text style={styles.finalCompoundText}>
                بَابُ بَيْتِ حَامِدٍ
              </Text>
            </View>
          </View>
        </View>

        {/* Examples Table */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>مثالیں</Text>
          
          <View style={styles.examplesTableContainer}>
            {/* Row 1 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>اللّٰه کے رسول کے اصحابی</Text>
              <Text style={styles.arabicCell}>أَصْحَابُ رَسُوْلِ اللّٰهِ</Text>
            </View>

            {/* Row 2 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>موت کی یاد کی کثرت</Text>
              <Text style={styles.arabicCell}>كَثْرَةُ ذِكْرِ الْمَوْتِ</Text>
            </View>

            {/* Row 3 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>ابو لهب کے دونوں ہاتھ</Text>
              <Text style={styles.arabicCell}>يَدَا أَبِي لَهَبٍ</Text>
            </View>

            {/* Row 4 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>آدم کے بیٹے کے دونوں پاؤں</Text>
              <Text style={styles.arabicCell}>قَدَمَا اِبْنِ اٰدَمَ</Text>
            </View>
          </View>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default Part3Lesson9Screen; 