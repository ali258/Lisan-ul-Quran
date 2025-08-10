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

interface Lesson22ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const Lesson22Screen: React.FC<Lesson22ScreenProps> = ({ onNavigate, onBack }) => {
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
    rulesSection: {
      marginTop: 32,
    },
    rulesTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: getThemeColor('primary-400', isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    ruleCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    ruleText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 12,
    },
    bulletPoint: {
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
    bulletText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      flex: 1,
    },
    tableContainer: {
      backgroundColor: isDarkMode ? '#1f2937' : '#f59e0b',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: isDarkMode ? '#374151' : '#d97706',
      overflow: 'hidden',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? '#111827' : '#ea580c',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#374151' : '#d97706',
    },
    headerCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: isDarkMode ? '#ffffff' : '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    subHeaderRow: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? '#1f2937' : '#f97316',
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#374151' : '#d97706',
    },
    subHeaderCell: {
      flex: 1,
      fontSize: isTablet ? 14 : 12,
      fontWeight: 'bold',
      color: isDarkMode ? '#ffffff' : '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#374151' : '#d97706',
      backgroundColor: isDarkMode ? '#1f2937' : '#f59e0b',
    },
    rowHeader: {
      flex: 1,
      fontSize: isTablet ? 14 : 12,
      fontWeight: 'bold',
      color: isDarkMode ? '#ffffff' : '#000000',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    arabicCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: isDarkMode ? '#ffffff' : '#000000',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    dualCasesContainer: {
      flex: 2,
      flexDirection: 'row',
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
        <Text style={styles.headerTitle}>مرکب اشاری</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonNumber}>Lesson 22</Text>
          <Text style={styles.mainTitle}>مرکب اشاری</Text>
          <Text style={styles.subtitle}>Demonstrative Compound</Text>
        </View>

        {/* Definition Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>تعریف</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              جس میں اسمِ اشارہ استعمال ہوتا ہے۔ اس کی بناوٹ اس طرح ہوگی:
            </Text>
          </View>
        </View>

        {/* Formula Section */}
        <View style={styles.formulaSection}>
          <Text style={styles.formulaTitle}>بناوٹ کا فارمولا</Text>
          
          <View style={styles.formulaBox}>
            <Text style={styles.formulaText}>
              اسم اشاره + مشارٌ علیہ
            </Text>
          </View>
        </View>

        {/* Rules Section */}
        <View style={styles.rulesSection}>
          <Text style={styles.rulesTitle}>قواعد و اصول</Text>
          
          <View style={styles.ruleCard}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>ه</Text>
              <Text style={styles.bulletText}>تمام اسمائے اشارہ معرفہ ہیں۔</Text>
            </View>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>ه</Text>
              <Text style={styles.bulletText}>واحد اور جمع کے اسمائے اشارہ مبنی ہیں۔</Text>
            </View>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>ه</Text>
              <Text style={styles.bulletText}>
                مرکب اشاری میں اردو کی طرح عربی میں بھی اشارہ پہلے آتا ہے اور مشار الیہ بعد میں۔
              </Text>
            </View>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>ه</Text>
              <Text style={styles.bulletText}>
                مرکب اشاری میں بھی مرکب توصیفی کی طرح مطابقت ضروری ہے البتہ اسم اشارہ مشار الیہ کے مطابق استعمال ہوتا ہے۔
              </Text>
            </View>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>ه</Text>
              <Text style={styles.bulletText}>
                غير عاقل کی جمع کے لیے اشارہ واحد مؤنث استعمال ہوتا ہے۔
              </Text>
            </View>
          </View>
        </View>

        {/* Demonstrative Pronouns Table */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>اسمائے اشارہ</Text>
          
          <View style={styles.tableContainer}>
            {/* Header Row */}
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>جمع</Text>
              <Text style={styles.headerCell}>مثنى</Text>
              <Text style={styles.headerCell}>واحد</Text>
              <Text style={styles.headerCell}>قریب/بعید</Text>
            </View>
            
            {/* Sub-header for Dual Cases */}
            <View style={styles.subHeaderRow}>
              <Text style={styles.subHeaderCell}></Text>
              <View style={styles.dualCasesContainer}>
                <Text style={styles.subHeaderCell}>حالت نصب اور جرّ</Text>
                <Text style={styles.subHeaderCell}>حالت رفع</Text>
              </View>
              <Text style={styles.subHeaderCell}></Text>
              <Text style={styles.subHeaderCell}></Text>
            </View>

            {/* Near Demonstratives - Masculine */}
            <View style={styles.tableRow}>
              <Text style={styles.arabicCell}>هٰؤُلٓاءِ</Text>
              <View style={styles.dualCasesContainer}>
                <Text style={styles.arabicCell}>هٰذَيْنِ</Text>
                <Text style={styles.arabicCell}>هٰذَانِ</Text>
              </View>
              <Text style={styles.arabicCell}>هٰذَا</Text>
              <Text style={styles.rowHeader}>قریب مذكر</Text>
            </View>

            {/* Near Demonstratives - Feminine */}
            <View style={styles.tableRow}>
              <Text style={styles.arabicCell}>هٰؤُلٓاءِ</Text>
              <View style={styles.dualCasesContainer}>
                <Text style={styles.arabicCell}>هَاتَيْنِ</Text>
                <Text style={styles.arabicCell}>هَاتَانِ</Text>
              </View>
              <Text style={styles.arabicCell}>هٰذِهٖ</Text>
              <Text style={styles.rowHeader}>قریب مونث</Text>
            </View>

            {/* Far Demonstratives - Masculine */}
            <View style={styles.tableRow}>
            <Text style={styles.arabicCell}>اُولٰٓئِکَ</Text>
              <View style={styles.dualCasesContainer}>
                <Text style={styles.arabicCell}>ذَيْنِکَ</Text>
                <Text style={styles.arabicCell}>ذَانِکَ</Text>
              </View>
              <Text style={styles.arabicCell}>ذٰلِکَ</Text>
              <Text style={styles.rowHeader}>بعيد مذكر</Text>
            </View>

            {/* Far Demonstratives - Feminine */}
            <View style={styles.tableRow}>
              <Text style={styles.arabicCell}>اُولٰٓئِکَ</Text>
              <View style={styles.dualCasesContainer}>
                <Text style={styles.arabicCell}>تَيْنِکَ</Text>
                <Text style={styles.arabicCell}>تَانِکَ</Text>
              </View>
              <Text style={styles.arabicCell}>تِلْکَ</Text>
              <Text style={styles.rowHeader}>بعيد مونث</Text>
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
              <Text style={styles.examplesHeaderCell}>مشار الیہ</Text>
              <Text style={styles.examplesHeaderCell}>اسم اشاره</Text>
            </View>

            {/* Row 1 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>یہ لڑکا</Text>
              <Text style={styles.arabicCell}>هٰذَا الْوَلَدُ</Text>
              <Text style={styles.arabicCell}>اَلْوَلَدُ</Text>
              <Text style={styles.arabicCell}>هٰذَا</Text>
            </View>

            {/* Row 2 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>وہ لڑکی</Text>
              <Text style={styles.arabicCell}>تِلْكَ الْبِنْتُ</Text>
              <Text style={styles.arabicCell}>اَلْبِنْتُ</Text>
              <Text style={styles.arabicCell}>تِلْكَ</Text>
            </View>

            {/* Row 3 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>یہ دو قلم</Text>
              <Text style={styles.arabicCell}>هٰذَيْنِ الْقَلَمَيْنِ</Text>
              <Text style={styles.arabicCell}>الْقَلَمَيْنِ</Text>
              <Text style={styles.arabicCell}>هٰذَيْنِ</Text>
            </View>

            {/* Row 4 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>وہ دو معلم</Text>
              <Text style={styles.arabicCell}>تَانِكَ الْمُعَلِّمَتَانِ</Text>
              <Text style={styles.arabicCell}>اَلْمُعَلِّمَتَانِ</Text>
              <Text style={styles.arabicCell}>تَانِک</Text>
            </View>

            {/* Row 5 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>یہ لڑکے</Text>
              <Text style={styles.arabicCell}>هٰؤُلَاءِ الْأَوْلَادُ</Text>
              <Text style={styles.arabicCell}>الْأَوْلَادُ</Text>
              <Text style={styles.arabicCell}>هٰؤُلَاءِ</Text>
            </View>

            {/* Row 6 */}
            <View style={styles.examplesTableRow}>
              <Text style={styles.urduCell}>وہ رسل</Text>
              <Text style={styles.arabicCell}>أُولَئِكَ الرُّسُلُ</Text>
              <Text style={styles.arabicCell}>اَلرُّسُلُ</Text>
              <Text style={styles.arabicCell}>أُولَئِكَ</Text>
            </View>
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>خلاصہ</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              <Text style={styles.highlightedText}>مرکب اشاری</Text>{' '}
              میں اسم اشارہ اور مشار الیہ کے درمیان مطابقت ضروری ہے۔
            </Text>
            <Text style={styles.paragraph}>
              عربی میں ترتیب: اسم اشارہ + مشار الیہ (اردو کی طرح)
            </Text>
            <Text style={styles.paragraph}>
              تمام اسمائے اشارہ معرفہ اور مبنی ہیں۔
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson22Screen; 