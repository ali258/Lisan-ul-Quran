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

interface Lesson5ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');

const Lesson5Screen: React.FC<Lesson5ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

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
      fontSize: 36,
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
    definitionSection: {
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
    definitionContainer: {
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
    definitionText: {
      fontSize: 18,
      color: getThemeColor(colors.text, isDarkMode),
      lineHeight: 28,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      marginBottom: 20,
    },
    tableSection: {
      marginBottom: 40,
    },
    tableContainer: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    tableHeader: {
      backgroundColor: '#f59e0b', // Orange color
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
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
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
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 24,
    },
    tableCellUrdu: {
      fontSize: 14,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
    },
    // New styles for Ism characteristics table
    ismCharacteristicsSection: {
      marginBottom: 40,
    },
    ismCharacteristicsTable: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    ismTableHeader: {
      backgroundColor: '#059669', // Green color for distinction
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
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
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
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
    },
    ismTableCellArabic: {
      fontSize: 16,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 24,
    },
    noteSection: {
      marginTop: 32,
      padding: 20,
      backgroundColor: getColorWithOpacity(colors.primary, 0.1),
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
        <Text style={styles.headerTitle}>اسم کی تعریف</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>اسم</Text>
          <Text style={styles.subtitle}>سبق ۵</Text>
        </View>

        {/* Definition Section */}
        <View style={styles.definitionSection}>
          <Text style={styles.sectionTitle}>اسم کی تعریف</Text>
          <View style={styles.definitionContainer}>
            <Text style={styles.definitionText}>
              اسم ایک نام ہوتا ہے کسی بھی
            </Text>
          </View>
        </View>


        {/* Original Table Section */}
        <View style={styles.tableSection}>
          <Text style={styles.sectionTitle}>اسم کی اقسام</Text>
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
                <Text style={styles.ismTableCellArabic}> ۔َ انِ - ۔َ یْنِ </Text>
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
                <Text style={styles.ismTableCellArabic}> ۔ُ وْنَ - ۔ِ یْنَ </Text>
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
    </SafeAreaView>
  );
};

export default Lesson5Screen; 