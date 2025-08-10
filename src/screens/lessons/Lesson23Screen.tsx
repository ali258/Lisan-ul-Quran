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

interface Lesson23ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const Lesson23Screen: React.FC<Lesson23ScreenProps> = ({ onNavigate, onBack }) => {
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
    contentSection: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    textBlock: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    paragraph: {
      fontSize: isTablet ? 18 : 16,
      lineHeight: isTablet ? 32 : 28,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 16,
    },
    highlightedText: {
      color: getThemeColor('primary-400', isDarkMode),
      fontWeight: 'bold',
    },
    formulaSection: {
      alignItems: 'center',
      marginVertical: 32,
    },
    formulaTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    formulaBox: {
      backgroundColor: getThemeColor('primary-400', isDarkMode),
      borderRadius: 20,
      padding: isTablet ? 32 : 24,
      marginBottom: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 8,
      minWidth: isTablet ? 400 : 300,
    },
    formulaText: {
      fontSize: isTablet ? 32 : 28,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 40 : 36,
    },
    comparisonSection: {
      marginTop: 32,
    },
    comparisonTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    rulesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 20,
      marginTop: 20,
    },
    rulesColumn: {
      flex: 1,
    },
    ruleGroup: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    ruleGroupTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    ruleItem: {
      flexDirection: 'row-reverse',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    bullet: {
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.text, isDarkMode),
      marginLeft: 8,
      marginTop: 2,
    },
    ruleText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      flex: 1,
    },
    rememberNote: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    rememberTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      marginBottom: 12,
      color: getThemeColor('primary-400', isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    rememberText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
    },
    examplesTableContainer: {
      backgroundColor: isDarkMode ? '#1f2937' : getThemeColor('primary-600', isDarkMode),
      borderRadius: 16,
      borderWidth: 1,
      borderColor: isDarkMode ? '#374151' : getThemeColor('primary-700', isDarkMode),
      overflow: 'hidden',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    examplesTableHeader: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? '#111827' : getThemeColor('primary-700', isDarkMode),
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#374151' : getThemeColor('primary-800', isDarkMode),
    },
    examplesHeaderCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: isDarkMode ? '#ffffff' : getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    examplesTableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#374151' : getThemeColor('primary-700', isDarkMode),
      backgroundColor: isDarkMode ? '#1f2937' : getThemeColor('primary-600', isDarkMode),
    },
    urduCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: isDarkMode ? '#ffffff' : getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    arabicCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: isDarkMode ? '#ffffff' : getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
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
        <Text style={styles.headerTitle}>مرکب اضافی</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonNumber}>Lesson 23</Text>
          <Text style={styles.mainTitle}>مرکب اضافی</Text>
          <Text style={styles.subtitle}>Possessive Compound</Text>
        </View>

        {/* Definition Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>تعریف</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              اس میں{' '}
              <Text style={styles.highlightedText}>ایک اسم</Text>{' '}
              کی نسبت دوسری قسم کے اسم کی طرف کی جاتی ہے۔
            </Text>
          </View>
        </View>

        {/* Formula Section */}
        <View style={styles.formulaSection}>
          <Text style={styles.formulaTitle}>بناوٹ کا فارمولا</Text>
          
          <View style={styles.formulaBox}>
            <Text style={styles.formulaText}>
              مضاف + مضاف الیہ
            </Text>
          </View>
        </View>

        {/* Detailed Explanation Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>تفصیلی وضاحت</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              جس اسم کو نسبت دی جائے اسے{' '}
              <Text style={styles.highlightedText}>مضاف</Text>{' '}
              کہتے ہیں اور جس اسم کی طرف نسبت دی جائے وہ{' '}
              <Text style={styles.highlightedText}>مضاف الیہ</Text>{' '}
              کہلاتا ہے۔ مثلاً زید کی{' '}
              <Text style={styles.highlightedText}>کتاب</Text>{' '}
              میں{' '}
              <Text style={styles.highlightedText}>کتاب</Text>{' '}
              مضاف ہے جبکہ{' '}
              <Text style={styles.highlightedText}>زید</Text>{' '}
              مضاف الیہ ہے۔
            </Text>
          </View>
        </View>

        {/* Word Order Comparison Section */}
        <View style={styles.comparisonSection}>
          <Text style={styles.comparisonTitle}>ترتیب کا فرق</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              اردو زبان کے برعکس عربی زبان میں{' '}
              <Text style={styles.highlightedText}>مضاف</Text>{' '}
              پہلے آتا ہے اور{' '}
              <Text style={styles.highlightedText}>مضاف الیہ</Text>{' '}
              بعد میں، لہذا ترجمہ کرتے ہوئے اس فرق کا خیال رکھنا ضروری ہے۔
            </Text>
          </View>
        </View>

        {/* Rules Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>قاعده</Text>
          
          <View style={styles.rulesContainer}>
            {/* Left Section - Remember Notes */}
            <View style={styles.rulesColumn}>
              <View style={styles.rememberNote}>
                <Text style={styles.rememberTitle}>یاد رکھیں</Text>
                <Text style={styles.rememberText}>
                  مثنی اور جمع سالم مذکر کا{' '}
                  <Text style={styles.highlightedText}>نون ہلکا ہو گا</Text>۔
                </Text>
              </View>

              <View style={styles.rememberNote}>
                <Text style={styles.rememberTitle}>یاد رکھیں</Text>
                <Text style={styles.rememberText}>
                  مضاف الیہ میں ہر اسم کے ساتھ{' '}
                  <Text style={styles.highlightedText}>ال آئے گا</Text>{' '}
                  سوائے{' '}
                  <Text style={styles.highlightedText}>اسم علم</Text>{' '}
                  کے۔
                </Text>
              </View>
            </View>
            
            {/* Right Section - Muzaaf Rules */}
            <View style={styles.rulesColumn}>
              <View style={styles.ruleGroup}>
                <Text style={styles.ruleGroupTitle}>مضاف کے قواعد</Text>
                
                <View style={styles.ruleItem}>
                  <Text style={styles.bullet}>ه</Text>
                  <Text style={styles.ruleText}>
                    <Text style={styles.highlightedText}>آل داخل نہیں ہوتا</Text>
                  </Text>
                </View>
                
                <View style={styles.ruleItem}>
                  <Text style={styles.bullet}>ه</Text>
                  <Text style={styles.ruleText}>
                    <Text style={styles.highlightedText}>اعراب ہلکا ہوگا</Text>
                  </Text>
                </View>
              </View>

              <View style={styles.ruleGroup}>
                <Text style={styles.ruleGroupTitle}>مضاف الیہ کے قواعد</Text>
                
                <View style={styles.ruleItem}>
                  <Text style={styles.bullet}>ه</Text>
                  <Text style={styles.ruleText}>
                    <Text style={styles.highlightedText}>حالت جر</Text>
                  </Text>
                </View>
              </View>
            </View>

            
          </View>
        </View>

        {/* Examples Table */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>مثال</Text>
          
          <View style={styles.examplesTableContainer}>
            {/* Header Row */}
            <View style={styles.examplesTableHeader}>
              <Text style={styles.examplesHeaderCell}>اردو</Text>
              <Text style={styles.examplesHeaderCell}>عربی</Text>
              <Text style={styles.examplesHeaderCell}>مضاف الیہ</Text>
              <Text style={styles.examplesHeaderCell}>مضاف</Text>
            </View>

            {/* Row 1 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>الله کی کتاب</Text>
              <Text style={styles.arabicCell}>كِتَابُ اللهِ</Text>
              <Text style={styles.arabicCell}>اَللهُ</Text>
              <Text style={styles.arabicCell}>كِتَابٌ</Text>
            </View>

            {/* Row 2 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>مومن کی معراج</Text>
              <Text style={styles.arabicCell}>مِعْرَاجُ الْمُؤْمِنِ</Text>
              <Text style={styles.arabicCell}>الْمُؤْمِنُ</Text>
              <Text style={styles.arabicCell}>اَلْمِعْرَاجُ</Text>
            </View>

            {/* Row 3 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>نماز کا قائم کرنے والا</Text>
              <Text style={styles.arabicCell}>مُقِيمُ الصَّلٰوةِ</Text>
              <Text style={styles.arabicCell}>اَلْصَّلٰوةُ</Text>
              <Text style={styles.arabicCell}>اَلْمُقِيمُ</Text>
            </View>

            {/* Row 4 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>دین کا ستون</Text>
              <Text style={styles.arabicCell}>عِمَادُ الدِّينِ</Text>
              <Text style={styles.arabicCell}>الدِّينُ</Text>
              <Text style={styles.arabicCell}>اَلْعِمَادُ</Text>
            </View>

            {/* Row 5 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>اللہ کا رسول</Text>
              <Text style={styles.arabicCell}>رَسُولُ اللهِ</Text>
              <Text style={styles.arabicCell}>اَللهُ</Text>
              <Text style={styles.arabicCell}>اَلرَّسُوْلُ</Text>
            </View>

            {/* Row 6 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>جهنم کی آگ</Text>
              <Text style={styles.arabicCell}>نَارُ جَهَنَّمَ</Text>
              <Text style={styles.arabicCell}>جَهَنَّمُ</Text>
              <Text style={styles.arabicCell}>نَارٌ</Text>
            </View>
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>خلاصہ</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              <Text style={styles.highlightedText}>مرکب اضافی</Text>{' '}
              میں مضاف اور مضاف الیہ کے درمیان نسبت کا تعلق ہوتا ہے۔
            </Text>
            <Text style={styles.paragraph}>
              عربی میں ترتیب: مضاف + مضاف الیہ (اردو کے برعکس)
            </Text>
            <Text style={styles.paragraph}>
              مثال: کتاب زید (زید کی کتاب)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson23Screen; 