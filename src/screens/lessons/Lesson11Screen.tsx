import React, { useState, useEffect } from 'react';
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

interface Lesson11ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const Lesson11Screen: React.FC<Lesson11ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);



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
        { case: 'جر', symbol: 'ـٍ' },
        { case: 'نصب', symbol: 'ـً' },
        { case: 'رفع', symbol: 'ـٌ' },
      ],
    },
    {
      title: 'غیر منصرف',
      subtitle: '4-5 مثال دیکھیں',
      cases: [
        { case: 'جر', symbol: 'ـَ' },
        { case: 'نصب', symbol: 'ـَ' },
        { case: 'رفع', symbol: 'ـُ' },
      ],
    },
    {
      title: 'مبنى',
      subtitle: '6-7 مثال دیکھیں',
      cases: [
        { case: 'جر', symbol: 'ـ' },
        { case: 'نصب', symbol: 'ـ' },
        { case: 'رفع', symbol: 'ـ' },
      ],
    },
  ];

  const isTablet = dimensions.width >= 768;

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
      alignItems: 'center',
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
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    definitionText: {
      fontSize: isTablet ? 18 : 15,
      textAlign: 'center',
      lineHeight: 24,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 24,
      paddingHorizontal: 16,
    },
    highlightedText: {
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
    },
    definitionContainer: {
      alignItems: 'center',
    },
    sectionCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    diagramSection: {
      alignItems: 'center',
    },
    hierarchyTitle: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    mainNode: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 8,
      padding: 14,
      marginBottom: 14,
      minWidth: 120,
      borderWidth: 2,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    mainNodeText: {
      fontSize: isTablet ? 20 : 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    connectingLine: {
      width: 2,
      height: 24,
      backgroundColor: getThemeColor(colors.border, isDarkMode),
      marginBottom: 10,
    },
    caseNode: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      minWidth: 120,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    caseNodeText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
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
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    table: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 4,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      width: '100%',
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity('orange-600', 0.9),
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
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
      backgroundColor: getColorWithOpacity('orange-100', 0.25),
    },
    tableCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 4,
    },
    cellText: {
      fontSize: isTablet ? 18 : 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 2,
    },
    transliterationText: {
      fontSize: 10,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    numberCell: {
      width: 56,
      alignItems: 'center',
      justifyContent: 'center',
      borderLeftWidth: 1,
      borderLeftColor: getThemeColor(colors.border, isDarkMode),
    },
    numberText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
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
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: getThemeColor(colors.primary, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    noteText: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
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
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    nounTypesGrid: {
      flexDirection: 'column',
      gap: 8,
    },
    nounTypeCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 12,
      width: '100%',
      alignItems: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    nounTypeHeader: {
      alignItems: 'center',
      marginBottom: 8,
    },
    nounTypeTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    nounTypeSubtitle: {
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
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
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    symbolContainer: {
      backgroundColor: getColorWithOpacity('gray-800', 0.8),
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      minWidth: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    symbolText: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={getThemeColor(colors.surface, isDarkMode)}
      />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>سبق ۱۱ - اعراب</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.contentInner}>
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>اعراب</Text>
          <Text style={styles.definitionText}>
            اعراب کے لفظی معنی ہیں ' کسی (چیز) کی عربی بنانا ، معنی میں تبدیلی کے بغیر کسی اسم کی حالت یا شکل کی تبدیلی اعراب کی تبدیلی کہلاتی ہے۔
          </Text>
        </View>

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
    </SafeAreaView>
  );
};

export default Lesson11Screen; 