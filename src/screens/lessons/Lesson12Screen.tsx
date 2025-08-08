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

interface Lesson12ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const Lesson12Screen: React.FC<Lesson12ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const genderExamples = {
    realFeminine: [
      { arabic: 'أم', urdu: 'ماں', english: 'Mother' },
      { arabic: 'بنت', urdu: 'لڑکی', english: 'Daughter/Girl' },
      { arabic: 'أخت', urdu: 'بہن', english: 'Sister' },
      { arabic: 'إمرأة', urdu: 'عورت', english: 'Woman' },
    ],
    unrealFeminine: [
      { arabic: 'مِرْوَحَةٌ', urdu: 'پنکها', english: 'Fan' },
      { arabic: 'شمس', urdu: 'سورج', english: 'Sun' },
      { arabic: 'ذِكْرى', urdu: 'نصحیت', english: 'Reminder/Advice' },
      { arabic: 'صَحْرَاءُ', urdu: 'صحرا', english: 'Desert' },
    ],
  };

  const isTablet = dimensions.width >= 768;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor(colors.background, isDarkMode),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
      justifyContent: 'space-between',
    },
    backButton: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: getColorWithOpacity('blue-600', 0.1),
      marginRight: 16,
    },
    backButtonText: {
      fontSize: 24,
      color: getThemeColor(colors.text, isDarkMode),
    },
    headerTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      textAlign: 'right',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      flex: 1,
      marginRight: 16,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      padding: 24,
    },
    contentInner: {
      maxWidth: 800,
      alignSelf: 'center',
      width: '100%',
    },
    titleSection: {
      alignItems: 'center',
      marginBottom: 32,
    },
    mainTitle: {
      fontSize: isTablet ? 36 : 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    ruleText: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      lineHeight: 24,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      paddingHorizontal: 16,
    },
    sectionCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    diagramSection: {
      alignItems: 'center',
    },
    hierarchyTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    mainNode: {
      backgroundColor: getColorWithOpacity('blue-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      marginBottom: 16,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    mainNodeText: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    connectingLine: {
      width: 2,
      height: 20,
      backgroundColor: getThemeColor(colors.border, isDarkMode),
      marginBottom: 16,
    },
    genderNodes: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 16,
      alignItems: 'flex-start',
    },
    genderNode: {
      backgroundColor: getColorWithOpacity('red-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    genderNodeText: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    masculineNode: {
      backgroundColor: getColorWithOpacity('red-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      minWidth: 120,
      minHeight: 60,
    },
    feminineTypeNode: {
      backgroundColor: getColorWithOpacity('green-600', 0.9),
      borderRadius: 12,
      paddingVertical: 10,
      paddingHorizontal: 16,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    feminineTypeText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableSection: {
      marginTop: 24,
      width: '100%',
    },
    tableTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    table: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      width: '100%',
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity('orange-600', 0.9),
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    headerCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 16,
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
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 2,
    },
    cellSubtext: {
      fontSize: isTablet ? 14 : 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    feminineNode: {
      backgroundColor: getColorWithOpacity('red-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      minWidth: 120,
      minHeight: 60,
    },
    feminineTypes: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      gap: 16,
      marginTop: 16,
    },
    simpleChartContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      marginTop: 24,
    },
    genderTypesRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      alignItems: 'flex-start',
      gap: 8,
    },
    feminineSubtypesRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      alignItems: 'center',
      marginTop: 12,
      gap: 4,
    },
    simpleCardContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      marginTop: 24,
    },
    genderCard: {
      backgroundColor: getColorWithOpacity('red-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: 120,
      height: 50,
    },
    genderCardText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    level2Row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      gap: 16,
    },
    subtypeCard: {
      backgroundColor: getColorWithOpacity('green-600', 0.9),
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 12,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: 100,
      height: 40,
    },
    subtypeCardText: {
      fontSize: isTablet ? 12 : 10,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    masculineSection: {
      flex: 1,
      alignItems: 'center',
      maxWidth: '40%',
    },
    feminineSection: {
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      maxWidth: '40%',
    },
    detailsSection: {
      marginTop: 24,
    },
    detailsTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      gap: 16,
    },
    boxesContainer: {
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: 20,
    },
    mainRedBox: {
      backgroundColor: getColorWithOpacity('red-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: 120,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainBoxText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    subtypesBoxesRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 12,
      gap: 16,
    },
    subtypePurpleBox: {
      backgroundColor: getColorWithOpacity('purple-600', 0.9),
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: 120,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    subtypeBoxText: {
      fontSize: isTablet ? 14 : 12,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    definitionsContainer: {
      width: '100%',
      paddingHorizontal: 16,
    },
    definitionItem: {
      marginBottom: 12,
      width: '100%',
    },
    definitionTerm: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      marginBottom: 4,
      textAlign: 'right',
    },
    definitionText: {
      fontSize: isTablet ? 14 : 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      lineHeight: 20,
    },
    chartSection: {
      width: '100%',
      marginTop: 24,
    },
    chartTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    chartContainer: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      width: '100%',
      paddingHorizontal: 16,
    },
    mainCategoryBox: {
      backgroundColor: getColorWithOpacity('purple-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: '90%',
      alignSelf: 'center',
      alignItems: 'center',
    },
    mainCategoryText: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    mainConnectingLine: {
      width: '80%',
      alignSelf: 'center',
      height: 2,
      backgroundColor: getThemeColor(colors.border, isDarkMode),
      marginVertical: 20,
    },
    subCategoriesRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%',
      alignSelf: 'center',
      marginBottom: 20,
      gap: 8,
    },
    subCategoryBox: {
      backgroundColor: getColorWithOpacity('blue-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: isTablet ? 100 : 80,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    subCategoryText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    exampleConnectingLines: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%',
      alignSelf: 'center',
      marginBottom: 20,
      gap: 8,
    },
    exampleConnectingLine: {
      width: 2,
      height: 20,
      backgroundColor: getThemeColor(colors.border, isDarkMode),
    },
    examplesRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%',
      alignSelf: 'center',
      gap: 8,
    },
    exampleBox: {
      backgroundColor: getColorWithOpacity('red-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: isTablet ? 100 : 80,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    exampleText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    radialChartContainer: {
      width: '100%',
      paddingHorizontal: 16,
      marginTop: 24,
    },
    centralBox: {
      backgroundColor: getColorWithOpacity('purple-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: '90%',
      alignSelf: 'center',
      alignItems: 'center',
    },
    centralBoxText: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    subCategoryGreenBox: {
      backgroundColor: getColorWithOpacity('green-600', 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: isTablet ? 140 : 120,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    subCategoryBlackBox: {
      backgroundColor: getColorWithOpacity('black', 0.8),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: isTablet ? 140 : 120,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
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
        <Text style={styles.headerTitle}>سبق ۱۲ - جنس</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.contentInner}>
          <View style={styles.titleSection}>
            <Text style={styles.mainTitle}>جنس</Text>
            <Text style={styles.ruleText}>
              عربی زبان میں استعمال ہونے والا ہر اسم مذکر سمجھا جائے گا جب تک اس کا مونث ہونا ثابت نہ ہو جائے۔
            </Text>
          </View>

          <View style={[styles.sectionCard, styles.diagramSection]}>
            <Text style={styles.hierarchyTitle}>جنس کی اقسام</Text>
            
            <View style={styles.mainNode}>
              <Text style={styles.mainNodeText}>جنس</Text>
            </View>
            
            <View style={styles.simpleCardContainer}>
              {/* Gender Types Row */}
              <View style={styles.genderTypesRow}>
                {/* Feminine - With Subtypes */}
                <View style={styles.feminineSection}>
                  <View style={styles.genderCard}>
                    <Text style={styles.genderCardText}>مونث</Text>
                  </View>
                  
                  {/* Feminine Subtypes */}
                  <View style={styles.feminineSubtypesRow}>
                    <View style={styles.subtypeCard}>
                      <Text style={styles.subtypeCardText}>غیر حقیقی مونث</Text>
                    </View>
                    <View style={styles.subtypeCard}>
                      <Text style={styles.subtypeCardText}>حقیقی مونث</Text>
                    </View>
                  </View>
                </View>
                
                {/* Masculine - Standalone */}
                <View style={styles.masculineSection}>
                  <View style={styles.genderCard}>
                    <Text style={styles.genderCardText}>مذكر</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.sectionCard, styles.tableSection]}>
            <Text style={styles.tableTitle}>مونث کی مثالیں</Text>
            
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <View style={styles.headerCell}>
                  <Text style={styles.headerText}>غیر حقیقی مونث</Text>
                </View>
                <View style={styles.headerCell}>
                  <Text style={styles.headerText}>حقیقی مونث</Text>
                </View>
              </View>

              {genderExamples.realFeminine.map((example, index) => (
                <View
                  key={index}
                  style={[
                    styles.tableRow,
                    { backgroundColor: getColorWithOpacity(index % 2 === 0 ? 'orange-100' : 'orange-200', 0.25) },
                  ]}
                >
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>{genderExamples.unrealFeminine[index]?.arabic || ''}</Text>
                    <Text style={styles.cellSubtext}>({genderExamples.unrealFeminine[index]?.urdu || ''})</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>{example.arabic}</Text>
                    <Text style={styles.cellSubtext}>({example.urdu})</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          
          {/* Unreal Feminine Details Section */}
          <View style={[styles.sectionCard, styles.detailsSection]}>
            <Text style={styles.detailsTitle}>غیر حقیقی مونث</Text>
            
            {/* Top - Definitions */}
            <View style={styles.definitionsContainer}>
              <View style={styles.definitionItem}>
                <Text style={styles.definitionTerm}>علامتی مونث:</Text>
                <Text style={styles.definitionText}>وہ مونث جس میں مونث کی علامت پائی جائے</Text>
              </View>
              
              <View style={styles.definitionItem}>
                <Text style={styles.definitionTerm}>سماعی مونث:</Text>
                <Text style={styles.definitionText}>وہ مونث جسے اہل زبان مونث بولتے ہوں</Text>
              </View>
            </View>
            
            {/* Bottom - Chart/Boxes */}
            <View style={styles.boxesContainer}>
              <View style={styles.mainRedBox}>
                <Text style={styles.mainBoxText}>غیر حقیقی مونث</Text>
              </View>
              
              <View style={styles.subtypesBoxesRow}>
                <View style={styles.subtypePurpleBox}>
                  <Text style={styles.subtypeBoxText}>سماعی مونث</Text>
                </View>
                <View style={styles.subtypePurpleBox}>
                  <Text style={styles.subtypeBoxText}>علامتی مونث</Text>
                </View>
              </View>
            </View>
          </View>

          {/* علامتی مونث Chart Section */}
          <View style={[styles.sectionCard, styles.chartSection]}>
            
            
            {/* Hierarchical Chart */}
            <View style={styles.chartContainer}>
              {/* Main Category */}
              <View style={styles.mainCategoryBox}>
                <Text style={styles.mainCategoryText}>علامتی مونث</Text>
              </View>
              
              {/* Connecting Line */}
              <View style={styles.mainConnectingLine} />
              
              {/* Sub Categories Row */}
              <View style={styles.subCategoriesRow}>
                <View style={styles.subCategoryBox}>
                  <Text style={styles.subCategoryText}>الف مقصورة</Text>
                </View>
                <View style={styles.subCategoryBox}>
                  <Text style={styles.subCategoryText}>الف ممدودة</Text>
                </View>
                <View style={styles.subCategoryBox}>
                  <Text style={styles.subCategoryText}>گول ة</Text>
                </View>
              </View>
              
              {/* Connecting Lines to Examples */}
              <View style={styles.exampleConnectingLines}>
                <View style={styles.exampleConnectingLine} />
                <View style={styles.exampleConnectingLine} />
                <View style={styles.exampleConnectingLine} />
              </View>
              
              {/* Examples Row */}
              <View style={styles.examplesRow}>
                <View style={styles.exampleBox}>
                  <Text style={styles.exampleText}> ٰ ی</Text>
                </View>
                <View style={styles.exampleBox}>
                  <Text style={styles.exampleText}> َاءُ</Text>
                </View>
                <View style={styles.exampleBox}>
                  <Text style={styles.exampleText}>ة</Text>
                </View>
              </View>
            </View>
            
            {/* Examples Table */}
            <View style={styles.tableSection}>
              <Text style={styles.tableTitle}>علامتی مونث</Text>
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <View style={styles.headerCell}>
                    <Text style={styles.headerText}>مثلاً</Text>
                  </View>
                  <View style={styles.headerCell}>
                    <Text style={styles.headerText}>علامتی مونث</Text>
                  </View>
                </View>
                
                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>غُرْفَة (كمره)</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>گول ة</Text>
                  </View>
                </View>
                
                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>صَفْرَاءُ (زرد رنگ)</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>الف ممدوده ( َاءُ)</Text>
                  </View>
                </View>
                
                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>ذِكْرٰى (نصحیت)</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>الف مقصوره ( ٰ ی)</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
         
         {/* سماعی مونث Chart Section */}
         <View style={[styles.sectionCard, styles.chartSection]}>
           
           {/* Radial Chart */}
           <View style={styles.radialChartContainer}>
             {/* Central Box */}
             <View style={styles.centralBox}>
               <Text style={styles.centralBoxText}>سماعی مونث</Text>
             </View>
             
             {/* Connecting Line */}
             <View style={styles.mainConnectingLine} />
             
             {/* First Row of Sub-categories */}
             <View style={styles.subCategoriesRow}>
               <View style={styles.subCategoryGreenBox}>
                 <Text style={styles.subCategoryText}>آگ کے نام</Text>
               </View>
               <View style={styles.subCategoryGreenBox}>
                 <Text style={styles.subCategoryText}>ہواؤں کے نام</Text>
               </View>
             </View>
             
             {/* Second Row of Sub-categories */}
             <View style={styles.subCategoriesRow}>
               <View style={styles.subCategoryGreenBox}>
                 <Text style={styles.subCategoryText}>شراب کے نام</Text>
               </View>
               <View style={styles.subCategoryGreenBox}>
                 <Text style={styles.subCategoryText}>شہروں اور ملکوں کے نام</Text>
               </View>
              </View>
             
             {/* Third Row of Sub-categories */}
             <View style={styles.subCategoriesRow}>
               <View style={styles.subCategoryGreenBox}>
                 <Text style={styles.subCategoryText}>جفت اعضاء</Text>
               </View>
               <View style={styles.subCategoryGreenBox}>
                 <Text style={styles.subCategoryText}>متفرق اسماء</Text>
               </View>
              </View>
            </View>
           
           {/* Examples Table */}
           <View style={styles.tableSection}>
             
             <View style={styles.table}>
               <View style={styles.tableHeader}>
                 <View style={styles.headerCell}>
                   <Text style={styles.headerText}>مثلاً</Text>
                 </View>
                 <View style={styles.headerCell}>
                   <Text style={styles.headerText}>سماعی مونث</Text>
                 </View>
               </View>
               
               <View style={styles.tableRow}>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>نَارٌ - جَحِيْمٌ - سَعِيْرٌ</Text>
                 </View>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>آگ کے نام</Text>
                 </View>
               </View>
               
               <View style={styles.tableRow}>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>رِيْحٌ - صَرْصَرٌ - بَادٌ</Text>
                 </View>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>ہواؤں کے نام</Text>
                 </View>
               </View>
               
               <View style={styles.tableRow}>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>خَمْرٌ - خَرْطُوْمٌ</Text>
                 </View>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>شراب کے نام</Text>
                 </View>
               </View>
               
               <View style={styles.tableRow}>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>يَدٌ - أُذُنٌ - عَيْنٌ</Text>
                 </View>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>جفت اعضاء</Text>
                 </View>
               </View>
               
               <View style={styles.tableRow}>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>سَمَاءٌ - أَرْضُ - شَمْسٌ - نَفْسٌ - دَارٌ - حَرْبٌ</Text>
                 </View>
                 <View style={styles.tableCell}>
                   <Text style={styles.cellText}>متفرق اسماء</Text>
                 </View>
               </View>
             </View>
           </View>
         </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson12Screen; 