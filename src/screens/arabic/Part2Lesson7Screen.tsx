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

interface Part2Lesson7ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson7Screen: React.FC<Part2Lesson7ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

  const grammaticalCases = [
    { arabic: 'حالت رفع', urdu: 'حالت رفع', english: 'Nominative Case' },
    { arabic: 'حالت نصب', urdu: 'حالت نصب', english: 'Accusative Case' },
    { arabic: 'حالت جر', urdu: 'حالت جر', english: 'Genitive Case' },
  ];

  const examples = [
    {
      nominative: 'مُسْلِمٌ',
      accusative: 'مُسْلِمًا',
      genitive: 'مُسْلِمٍ',
      
    },
    {
      nominative: 'جَنَّةٌ',
      accusative: 'جَنَّةً',
      genitive: 'جَنَّةٍ',
    },
    {
      nominative: 'سَمَاءٌ',
      accusative: 'سَمَاءً',
      genitive: 'سَمَاءٍ',
    },
    {
      nominative: 'إِبْرَاهِيمُ',
      accusative: 'إِبْرَاهِيمَ',
      genitive: 'إِبْرَاهِيمَ',
    },
    {
      nominative: 'زَيْنَبُ',
      accusative: 'زَيْنَبَ',
      genitive: 'زَيْنَبَ',
    },
    {
      nominative: 'هذَا',
      accusative: 'هذَا',
      genitive: 'هُذَا',
    },
    {
      nominative: 'الَّذِي',
      accusative: 'الَّذِي',
      genitive: 'الَّذِي',
    },
  ];

  const nounTypes = [
    {
      title: 'منصرف',
      subtitle: '1-3 مثال دیکھیں',
      cases: [
        { case: 'جر', symbol: ' \u064D ' },
        { case: 'نصب', symbol: ' \u064B ' },
        { case: 'رفع', symbol: ' \u064C ' },
      ],
    },
    {
      title: 'غیر منصرف',
      subtitle: '4-5 مثال دیکھیں',
      cases: [
        { case: 'جر', symbol: ' \u064E ' },
        { case: 'نصب', symbol: ' \u064E ' },
        { case: 'رفع', symbol: ' \u064F ' },
      ],
    },
    {
      title: 'مبنى',
      subtitle: '6-7 مثال دیکھیں',
      cases: [
        { case: 'جر', symbol: ' \u2212 ' },
        { case: 'نصب', symbol: ' \u2212 ' },
        { case: 'رفع', symbol: ' \u2212 ' },
      ],
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
    contentInner: {
      width: '100%',
      maxWidth: 900,
    },
    titleSection: {
      alignItems: 'center',
      marginBottom: 24,
    },
    mainTitle: {
      fontSize: isTablet ? 36 : 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    definitionText: {
      fontSize: isTablet ? 18 : 15,
      textAlign: 'center',
      lineHeight: 24,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 24,
      paddingHorizontal: 16,
    },
    highlightedText: {
      fontWeight: 'bold',
      color: currentTheme.primary,
    },
    definitionContainer: {
      alignItems: 'center',
    },
    sectionCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 20,
      marginBottom: 24,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    diagramSection: {
      alignItems: 'center',
    },
    hierarchyTitle: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    mainNode: {
      backgroundColor: currentTheme.surface,
      borderRadius: 8,
      padding: 14,
      marginBottom: 14,
      minWidth: 120,
      borderWidth: 2,
      borderColor: currentTheme.border,
    },
    mainNodeText: {
      fontSize: isTablet ? 20 : 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    connectingLine: {
      width: 2,
      height: 24,
      backgroundColor: currentTheme.border,
      marginBottom: 10,
    },
    caseNode: {
      backgroundColor: currentTheme.surface,
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      minWidth: 120,
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    caseNodeText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableContainer: {
      marginTop: 8,
      alignSelf: 'stretch',
    },
    tableTitle: {
      fontSize: isTablet ? 20 : 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    table: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 4,
      borderWidth: 1,
      borderColor: currentTheme.border,
      width: '100%',
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      paddingVertical: 10,
      paddingHorizontal: 8,
    },
    headerCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: isTablet ? 16 : 14,
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
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.25),
    },
    tableCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 4,
    },
    cellText: {
      fontSize: isTablet ? 18 : 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 2,
    },
    transliterationText: {
      fontSize: 10,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    numberCell: {
      width: 56,
      alignItems: 'center',
      justifyContent: 'center',
      borderLeftWidth: 1,
      borderLeftColor: currentTheme.border,
    },
    numberText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteSection: {
      marginTop: 24,
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    noteText: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'justify',
    },
    nounTypesSection: {
      marginTop: 16,
    },
    sectionTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    nounTypesGrid: {
      flexDirection: 'column',
      gap: 8,
    },
    nounTypeCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 12,
      width: '100%',
      alignItems: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    nounTypeHeader: {
      alignItems: 'center',
      marginBottom: 8,
    },
    nounTypeTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    nounTypeSubtitle: {
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    casesGrid: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: 8,
    },
    caseItem: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    caseHeader: {
      alignItems: 'center',
      marginBottom: 8,
    },
    caseText: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    symbolContainer: {
      backgroundColor: getColorWithOpacity('gray-800', 0.8),
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: currentTheme.border,
      minWidth: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    symbolText: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },

  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="اعراب"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>اعراب</Text>
        <Text style={styles.lessonTitleEnglish}>Arabic Alphabet</Text>
        <Text style={styles.lessonSubtitle}>
            اعراب کے لفظی معنی ہیں ' کسی (چیز) کی عربی بنانا ، معنی میں تبدیلی کے بغیر کسی اسم کی حالت یا شکل کی تبدیلی اعراب کی تبدیلی کہلاتی ہے۔
        </Text>
          
        <View style={styles.contentInner}>
       
        <View style={[styles.sectionCard, styles.diagramSection]}>
          <Text style={styles.hierarchyTitle}>اعراب کی اقسام</Text>
          
          <View style={styles.mainNode}>
            <Text style={styles.mainNodeText}>اعراب</Text>
          </View>
          
          <View style={styles.connectingLine} />
          
          {grammaticalCases.map((grammaticalCase, index) => (
            <View key={index} style={styles.caseNode}>
              <Text style={styles.caseNodeText}>{grammaticalCase.arabic}</Text>
            </View>
          ))}
        </View>

        {/* Examples Table */}
        <View style={[styles.sectionCard, styles.tableContainer]}>
          <Text style={styles.tableTitle}>اعراب کی مثالیں</Text>
          
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حالت جر</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حالت نصب</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حالت رفع</Text>
              </View>
              <View style={styles.numberCell}>
                <Text style={styles.numberText}>#</Text>
              </View>
            </View>

            {/* Table Rows */}
            {examples.map((example, index) => (
              <View
                key={index}
                style={[
                  styles.tableRow,
                  { backgroundColor: getColorWithOpacity(index % 2 === 0 ? 'orange-100' : 'orange-200', 0.25) },
                ]}
              >
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{example.genitive}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{example.accusative}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{example.nominative}</Text>
                </View>
                <View style={styles.numberCell}>
                  <Text style={styles.numberText}>{index + 1}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        
        {/* Noun Types Section */}
        <View style={[styles.sectionCard, styles.nounTypesSection]}>
          <Text style={styles.sectionTitle}>اسم کی اقسام اور اعراب</Text>
          <View style={styles.definitionContainer}>
            <Text style={styles.definitionText}>
              <Text style={styles.highlightedText}>اعراب</Text> کے معنی{' '}
              <Text style={styles.highlightedText}>زیر زیر اور پیش</Text> نہیں ہیں۔ عربی زبان میں استعمال ہونے والے{' '}
              <Text style={styles.highlightedText}>اسماء</Text> تین قسم کے ہیں جو مختلف اعرابی حالتوں میں شکل تبدیل کرتے ہیں۔
            </Text>
          </View>
          
          <View style={styles.nounTypesGrid}>
            {nounTypes.map((nounType, index) => (
              <View key={index} style={styles.nounTypeCard}>
                <View style={styles.nounTypeHeader}>
                  <Text style={styles.nounTypeTitle}>{nounType.title}</Text>
                  <Text style={styles.nounTypeSubtitle}>{nounType.subtitle}</Text>
                </View>
                
                <View style={styles.casesGrid}>
                  {nounType.cases.map((grammaticalCase, caseIndex) => (
                    <View key={caseIndex} style={styles.caseItem}>
                      <View style={styles.caseHeader}>
                        <Text style={styles.caseText}>{grammaticalCase.case}</Text>
                      </View>
                      <View style={styles.symbolContainer}>
                        <Text style={styles.symbolText}>{grammaticalCase.symbol}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
        
        </View>
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>اہم نوٹ</Text>
          
          <View style={styles.noteCard}>
            <Text style={styles.noteText}>
              اعراب عربی گرامر کا ایک اہم پہلو ہے۔ یہ اسم کی حالت کو ظاہر کرتا ہے کہ وہ فاعل ہے، مفعول ہے، یا مضاف الیہ ہے۔ بعض اسماء اپنی شکل نہیں بدلتے جیسے "هذَا" اور "الَّذِي"۔
            </Text>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson7Screen; 