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

interface Part3Lesson6ScreenProps {
  onBackPress: () => void;
}

const Part3Lesson6Screen: React.FC<Part3Lesson6ScreenProps> = ({ onBackPress }) => {
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
    formulaSection: {
      alignItems: 'center',
      marginVertical: 32,
    },
    formulaTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    formulaBox: {
      backgroundColor: currentTheme.primary,
      borderRadius: 20,
      padding: isTablet ? 32 : 24,
      marginBottom: 24,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 8,
      minWidth: isTablet ? 400 : 300,
    },
    formulaText: {
      fontSize: isTablet ? 32 : 28,
      fontWeight: 'bold',
      color: currentTheme.text,
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
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    ruleCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    ruleText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: currentTheme.text,
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
      color: currentTheme.text,
      marginLeft: 8,
      marginTop: 2,
    },
    bulletText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      flex: 1,
    },
    tableContainer: {
      backgroundColor: currentTheme.surface,
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
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    headerCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    subHeaderRow: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    subHeaderCell: {
      flex: 1,
      fontSize: isTablet ? 14 : 12,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
      backgroundColor: currentTheme.surface,
    },
    rowHeader: {
      flex: 1,
      fontSize: isTablet ? 14 : 12,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    arabicCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    dualCasesContainer: {
      flex: 2,
      flexDirection: 'row',
    },
    examplesTableContainer: {
      backgroundColor: currentTheme.surface,
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
    examplesTableHeader: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    examplesHeaderCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    examplesTableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
      backgroundColor: currentTheme.surface,
    },
    urduCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="مرکب اشاری"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>مرکب اشاری</Text>
        <Text style={styles.lessonTitleEnglish}>Demonstrative Compound</Text>

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
    </View>
  );
};

export default Part3Lesson6Screen; 