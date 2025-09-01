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

interface Part2Lesson8ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson8Screen: React.FC<Part2Lesson8ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    ruleText: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      lineHeight: 24,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      paddingHorizontal: 16,
    },
    sectionCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    diagramSection: {
      alignItems: 'center',
    },
    hierarchyTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    mainNode: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      marginBottom: 16,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    mainNodeText: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    connectingLine: {
      width: 2,
      height: 20,
      backgroundColor: currentTheme.border,
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
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    genderNodeText: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    masculineNode: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      minWidth: 120,
      minHeight: 60,
    },
    feminineTypeNode: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 10,
      paddingHorizontal: 16,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    feminineTypeText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    table: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: currentTheme.border,
      width: '100%',
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 16,
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
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 2,
    },
    cellSubtext: {
      fontSize: isTablet ? 14 : 12,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    feminineNode: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: currentTheme.shadow,
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
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.text,
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
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 12,
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.text,
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
      color: currentTheme.text,
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
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.text,
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
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.text,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      marginBottom: 4,
      textAlign: 'right',
    },
    definitionText: {
      fontSize: isTablet ? 14 : 12,
      color: currentTheme.textSecondary,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    chartContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 24,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: currentTheme.border,
      width: '100%',
      paddingHorizontal: 16,
    },
    mainCategoryBox: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    mainConnectingLine: {
      width: '80%',
      alignSelf: 'center',
      height: 2,
      backgroundColor: currentTheme.border,
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
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.text,
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
      backgroundColor: currentTheme.border,
    },
    examplesRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%',
      alignSelf: 'center',
      gap: 8,
    },
    exampleBox: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    radialChartContainer: {
      width: '100%',
      paddingHorizontal: 16,
      marginTop: 24,
    },
    centralBox: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: currentTheme.shadow,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    subCategoryGreenBox: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: currentTheme.shadow,
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
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.8),
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 24,
      shadowColor: currentTheme.shadow,
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
    <View style={styles.container}>
      <AnimatedHeader 
        title="جنس"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>جنس</Text>
        <Text style={styles.lessonTitleEnglish}>Gender</Text>
        <Text style={styles.lessonSubtitle}>
              عربی زبان میں استعمال ہونے والا ہر اسم مذکر سمجھا جائے گا جب تک اس کا مونث ہونا ثابت نہ ہو جائے۔
        </Text>

        <View style={styles.contentInner}>
          
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

          <View style={[styles.sectionCard, styles.diagramSection]}>
            <Text style={styles.hierarchyTitle}>مونث کی اقسام</Text>
            
            <View style={styles.mainNode}>
              <Text style={styles.mainNodeText}>مونث</Text>
            </View>
            
            <View style={styles.simpleCardContainer}>
              {/* Gender Types Row */}
              <View style={styles.genderTypesRow}>
                {/* Feminine - With Subtypes */}
                <View style={styles.feminineSection}>
                  <View style={styles.genderCard}>
                    <Text style={styles.genderCardText}>غیر حقیقی مونث</Text>
                  </View>
                  
                 
                </View>
                
                {/* Masculine - Standalone */}
                <View style={styles.masculineSection}>
                  <View style={styles.genderCard}>
                    <Text style={styles.genderCardText}>حقیقی مونث</Text>
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
    </View>
  );
};

export default Part2Lesson8Screen; 