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

interface Part2Lesson1ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson1Screen: React.FC<Part2Lesson1ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

  const tableData = [
    {
      category: 'شخص',
      examples: 'زَيْدٌ ، مَرْيَمٍ',
      english: 'Person',
    },
    {
      category: 'جگہ',
      examples: 'مَكَّةُ ، مَسْجِد',
      english: 'Place',
    },
    {
      category: 'چیز',
      examples: 'قَلَمٌ',
      english: 'Thing',
    },
    {
      category: 'صفت',
      examples: 'صَالِحٌ',
      english: 'Quality/Adjective',
    },
    {
      category: 'کام کا نام',
      examples: 'ضَرْبٌ',
      english: 'Name of an action (Verbal Noun)',
    },
  ];

  const ismCharacteristicsData = [
    {
      category: 'ال (ال تعریف)',
      rule: 'اگر کسی لفظ کے شروع میں "ال" ہو تو وہ اسم ہوتا ہے۔',
      examples: 'الكتاب (کتاب)، المسجد (مسجد)',
    },
    {
      category: 'تنوین (دو زبر، دو زیر، دو پیش)',
      rule: 'اگر کسی لفظ کے آخر میں تنوین ہو تو وہ اسم ہوتا ہے',
      examples: 'كتابٌ (کتاب)، مسجدٍ (مسجد)',
    },
    {
      category: 'گول ة',
      rule: 'اگر کسی لفظ کے آخر میں گول ة ہو تو وہ اسم ہے۔',
      examples: '',
    },
    {
      category: 'حرف جر',
      rule: 'اگر کسی لفظ کے شروع میں حرف جار ہو تو وہ اسم ہوتا ہے۔',
      examples: 'في المسجدِ (مسجد میں)',
    },
    {
      category: 'نداء (ندائیہ)',
      rule: 'اگر کسی لفظ کے شروع میں "یا" ہو تو وہ اسم ہوتا ہے۔',
      examples: 'يا محمد (اے محمد)',
    },
    {
      category: 'ضمائر (ضمیر)',
      rule: 'ضمائر بھی اسم کی ایک قسم ہیں۔',
      examples: 'هو (وہ)، هي (وہ)',
    },
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
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableSection: {
      marginBottom: 40,
    },
    tableContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    tableHeader: {
      backgroundColor: currentTheme.primary, // Orange color
      flexDirection: 'row',
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    tableHeaderCell: {
      flex: 1,
      alignItems: 'center',
    },
    tableHeaderText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    tableCell: {
      flex: 1,
      paddingVertical: 16,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tableCellText: {
      fontSize: 16,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 24,
    },
    tableCellUrdu: {
      fontSize: 14,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
    },
    // New styles for Ism characteristics table
    ismCharacteristicsSection: {
      marginBottom: 40,
    },
    ismCharacteristicsTable: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    ismTableHeader: {
      backgroundColor: currentTheme.primary, // Green color for distinction
      flexDirection: 'row',
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    ismTableHeaderCell: {
      flex: 1,
      alignItems: 'center',
    },
    ismTableHeaderText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    ismTableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    ismTableCell: {
      flex: 1,
      paddingVertical: 16,
      paddingHorizontal: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ismTableCellText: {
      fontSize: 14,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
    },
    ismTableCellArabic: {
      fontSize: 16,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 24,
    },
    noteSection: {
      marginTop: 32,
      padding: 20,
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
      borderRadius: 12,
      borderLeftWidth: 4,
      borderLeftColor: '#f59e0b',
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#f59e0b',
      marginBottom: 12,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 16,
      color: currentTheme.text,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="اسم کی تعریف"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>اسم کی تعریف</Text>
        <Text style={styles.lessonTitleEnglish}>Definition of a noun</Text>
        <Text style={styles.lessonSubtitle}>Lesson 1</Text>
        <Text style={styles.lessonSubtitle}> اسم ایک نام ہوتا ہے کسی بھی شخص، جگہ، چیز، صفت، کام کا نام یا ضمیر ہوتا ہے۔  </Text>
        


        {/* Definition Section */}
        {/* <View style={styles.definitionSection}>
          <Text style={styles.sectionTitle}>اسم کی تعریف</Text>
          <View style={styles.definitionContainer}>
            <Text style={styles.definitionText}>
              اسم ایک نام ہوتا ہے کسی بھی
            </Text>
          </View>
        </View> */}


        {/* Original Table Section */}
        <View style={styles.tableSection}>
          
          <View style={styles.tableContainer}>
            
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <View style={styles.tableHeaderCell}>
                <Text style={styles.tableHeaderText}>نام</Text>
              </View>
              <View style={styles.tableHeaderCell}>
                <Text style={styles.tableHeaderText}>مثلاً</Text>
              </View>
            </View>

            {/* Table Rows */}
            {tableData.map((row, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellUrdu}>{row.category}</Text>
                  <Text style={styles.tableCellUrdu}>({row.english})</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellText}>{row.examples}</Text>
                </View>
              </View>
            ))}

          </View>
        </View>

        {/* Ism Characteristics Table */}
        <View style={styles.ismCharacteristicsSection}>
          <Text style={styles.sectionTitle}>اسم کی ظاہری علامت</Text>
          <View style={styles.ismCharacteristicsTable}>
            
            {/* Table Header */}
            <View style={styles.ismTableHeader}>
              <View style={styles.ismTableHeaderCell}>
                <Text style={styles.ismTableHeaderText}>مثالیں</Text>
              </View>
              <View style={styles.ismTableHeaderCell}>
                <Text style={styles.ismTableHeaderText}>علامت</Text>
              </View>
              <View style={styles.ismTableHeaderCell}>
                <Text style={styles.ismTableHeaderText}>تفصیل</Text>
              </View>
              <View style={styles.ismTableHeaderCell}>
                <Text style={styles.ismTableHeaderText}>نمبر</Text>
              </View>
            </View>

            {/* Row 1 */}
            <View style={styles.ismTableRow}>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>كَلِمَة</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>ة</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>آخر میں گول (تاء)</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>1</Text>
              </View>
            </View>

            {/* Row 2 */}
            <View style={styles.ismTableRow}>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>سَمَاءٌ - سَمَاءً - سَمَاءٍ</Text>
              </View>
              <View style={styles.ismTableCell}>
              <Text style={styles.ismTableCellArabic}>۔ٌ  ۔ً  ۔ٍ</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>آخر میں تنوین</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>2</Text>
              </View>
            </View>

            {/* Row 3 */}
            <View style={styles.ismTableRow}>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>صَحْرَاء (جنگل)</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>اء</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>آخر میں الف ممدودہ</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>3</Text>
              </View>
            </View>

            {/* Row 4 */}
            <View style={styles.ismTableRow}>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>ذِكْرٰى (نصحیت)</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}> ۔ٰ  ی</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>آخر میں الف مقصورہ</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>4</Text>
              </View>
            </View>

            {/* Row 5 */}
            <View style={styles.ismTableRow}>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>اَلْحَمْد</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>اَلْ</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>شروع میں (ال)</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>5</Text>
              </View>
            </View>

            {/* Row 6 */}
            <View style={styles.ismTableRow}>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>مَسْجِدَانِ ، عَبِدَيْنِ</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}> ۔َ انِ </Text>
                <Text style={styles.ismTableCellArabic}>  ۔َ یْنِ</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>آخر میں مثنی</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>6</Text>
              </View>
            </View>

            {/* Row 7 */}
            <View style={styles.ismTableRow}>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>عَبْدُونَ ، عَبْدِينَ</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}> ۔ُ وْنَ </Text>
                <Text style={styles.ismTableCellArabic}> ۔ِ یْنَ </Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>آخر میں جمع</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>7</Text>
              </View>
            </View>

            {/* Row 8 */}
            <View style={styles.ismTableRow}>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>في المسجد (مسجد میں)</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellArabic}>حرف جر</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>کسی لفظ کے شروع میں حرف جر</Text>
              </View>
              <View style={styles.ismTableCell}>
                <Text style={styles.ismTableCellText}>8</Text>
              </View>
            </View>

          </View>
        </View>

        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>یاد رکھیں</Text>
          <Text style={styles.noteText}>
            جس لفظ کے آخر میں تنوین ہو گی وہ ہمیشہ اسم ہوگا۔
          </Text>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson1Screen; 