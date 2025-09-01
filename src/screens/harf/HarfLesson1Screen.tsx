import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import { 
  getCurrentTheme, 
  THEME_CONFIG,  
  getColorWithOpacity, 
  getFontWithProperFallback, 
  FONT_CLASSES,
  getIsmTheme
} from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';

interface HarfLesson1ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const HarfLesson1Screen: React.FC<HarfLesson1ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode); // Use ISM blue theme

  // Handle mobile back button
  useEffect(() => {
    const backAction = () => {
      if (onBack) {
        onBack();
        return true; // Prevent defaulat behavior
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [onBack]);

  // Colors object for backward compatibility
  const colors = currentTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },

    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 120, // Increased bottom padding to prevent content cutoff
    },
    title: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 32,
      color: colors.textSecondary,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    section: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      marginBottom: 16,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    sectionSubtitle: {
      fontSize: isTablet ? 16 : 14,
      marginBottom: 20,
      color: colors.textSecondary,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    tableContainer: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
    },
    headerCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: colors.surface,
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    categoryRow: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
    },
    categoryCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      backgroundColor: currentTheme.primary,
      borderRightWidth: 1,
      borderRightColor: colors.border,
    },
    categoryText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    subCategoryRow: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
    },
    subCategoryCell: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: colors.surface,
      backgroundColor: currentTheme.primary,
    },
    subCategoryText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    dataRow: {
      flexDirection: 'row',
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    dataCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: colors.border,
    },
    dataCell2: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: colors.border,
    },
    arabicText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    noteSection: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 20,
      marginTop: 24,
      borderWidth: 1,
      borderColor: colors.border,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 12,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    typesSection: {
      marginBottom: 32,
    },
    typesTitle: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      marginBottom: 20,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    typesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 16,
    },
    typeCard: {
      flex: 1,
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      alignItems: 'center',
    },
    typeTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    typeSubtitle: {
      fontSize: 14,
      color: colors.textSecondary,
      textAlign: 'center',
      marginBottom: 12,
      fontStyle: 'italic',
    },
    typeDescription: {
      fontSize: 16,
      color: colors.text,
      textAlign: 'center',
      lineHeight: 22,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    attachedPronounsSection: {
      marginBottom: 32,
    },
    attachedPronounsHeader: {
      backgroundColor: currentTheme.primary,
      borderRadius: 20,
      padding: 24,
      alignItems: 'center',
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 8,
      marginBottom: 24,
    },
    attachedPronounsTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    attachedPronounsSubtitle: {
      fontSize: isTablet ? 18 : 16,
      color: currentTheme.text,
      textAlign: 'center',
      marginBottom: 16,
      opacity: 0.9,
      fontStyle: 'italic',
    },
    attachedPronounsDivider: {
      width: 80,
      height: 3,
      backgroundColor: colors.surface,
      borderRadius: 2,
      opacity: 0.7,
    },
    explanationBox: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: currentTheme.primary,
      borderLeftWidth: 6,
      borderLeftColor: currentTheme.primary,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    explanationTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 12,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    explanationText: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
      marginBottom: 12,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    explanationExample: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
      padding: 8,
      borderRadius: 8,
    },
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="اسم ضمائر"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />

      <ScrollView
        style={[styles.scrollView, { paddingTop: 90 }]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>اسم ضمائر</Text>
        <Text style={styles.subtitle}>
          Pronouns - Personal Pronouns in Arabic
        </Text>

        {/* Types of Pronouns Section */}
        <View style={styles.typesSection}>
          <Text style={styles.typesTitle}>ضمائر کی دو اقسام</Text>
          <View style={styles.typesContainer}>
            <View style={styles.typeCard}>
              <Text style={styles.typeTitle}>مُنْفَصِلٌ</Text>
              <Text style={styles.typeSubtitle}>Detached Pronouns</Text>
              <Text style={styles.typeDescription}>
                یہ آزاد ضمائر ہیں جو کسی لفظ سے جڑے نہیں ہوتے
              </Text>
            </View>
            <View style={styles.typeCard}>
              <Text style={styles.typeTitle}>مُتَّصِلٌ</Text>
              <Text style={styles.typeSubtitle}>Attached Pronouns</Text>
              <Text style={styles.typeDescription}>
                یہ جڑے ہوئے ضمائر ہیں جو کسی لفظ کے ساتھ جڑے ہوتے ہیں
              </Text>
            </View>
          </View>
        </View>

        {/* Attached Pronouns Section */}
        <View style={styles.attachedPronounsSection}>
          <View style={styles.attachedPronounsHeader}>
            <Text style={styles.attachedPronounsTitle}>ضمائر مُتَّصِلٌ</Text>
            <Text style={styles.attachedPronounsSubtitle}>Attached Pronouns</Text>
            <View style={styles.attachedPronounsDivider} />
          </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ضمائر مُتَّصِلٌ مرفوع ماضی</Text>
          
          <View style={styles.tableContainer}>
            {/* Main Header Row */}
            <View style={styles.tableHeader}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>جمع</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>مثنى</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>واحد</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}></Text>
              </View>
            </View>

            {/* 3rd Person - Masculine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>وْ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>ا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>هُوَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>غائب مذكر</Text>
              </View>
            </View>

            {/* 3rd Person - Feminine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>نَ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>ا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>هِيَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>غائب مونث</Text>
              </View>
            </View>

            {/* 2nd Person - Masculine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>تُمْ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>تُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>تَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>حاضر مذكر</Text>
              </View>
            </View>

            {/* 2nd Person - Feminine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>تُنَّ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>تُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>تِ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>حاضر مونث</Text>
              </View>
            </View>

            {/* 1st Person */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell2}>
                <Text style={styles.arabicText}>نَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>تُ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>متکلم</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>ضمائر مُتَّصِلٌ مرفوع مضارع</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}></Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>وْ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>هُوَ</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>نَ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>هِيَ</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>وْ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>اَنْتَ</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>نَ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>یْ</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>نَحْنُ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>اَنَا</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>ضمائر مُتَّصِلٌ منصوب و مجرور</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}></Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ھُمْ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ھُمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ہُ</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ھُنَّ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ھُمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ھَا</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>کُمْ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>کُمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>کَ</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>کُنَّ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>کُمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>کِ</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>نَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>یَ</Text>
            </View>
            <View style={styles.categoryCell}>
              <Text style={styles.categoryText}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Attached Pronouns Section */}
        <View style={styles.attachedPronounsSection}>
          <View style={styles.attachedPronounsHeader}>
            <Text style={styles.attachedPronounsTitle}>ضمائر مُنْفَصِلٌ</Text>
            <Text style={styles.attachedPronounsSubtitle}>Detached Pronouns</Text>
            <View style={styles.attachedPronounsDivider} />
          </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ضمائر مُنْفَصِلٌ مرفوع</Text>
          
          <View style={styles.tableContainer}>
            {/* Main Header Row */}
            <View style={styles.tableHeader}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>جمع</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>مثنى</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>واحد</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}></Text>
              </View>
            </View>

            {/* 3rd Person - Masculine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>هُمْ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>هُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>هُوَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>غائب مذكر</Text>
              </View>
            </View>

            {/* 3rd Person - Feminine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>هُنَّ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>هُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>هِيَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>غائب مونث</Text>
              </View>
            </View>

            {/* 2nd Person - Masculine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>أَنْتُمْ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>أَنْتُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>أَنْتَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>حاضر مذكر</Text>
              </View>
            </View>

            {/* 2nd Person - Feminine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>أَنْتُنَّ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>أَنْتُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>أَنْتِ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>حاضر مونث</Text>
              </View>
            </View>

            {/* 1st Person */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell2}>
                <Text style={styles.arabicText}>نَحْنُ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>أَنَا</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>متکلم</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ضمائر مُنْفَصِلٌ منصوب</Text>
          
          <View style={styles.tableContainer}>
            {/* Main Header Row */}
            <View style={styles.tableHeader}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>جمع</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>مثنى</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>واحد</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}></Text>
              </View>
            </View>

            {/* 3rd Person - Masculine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاهُمْ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاھُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاہُ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>غائب مذكر</Text>
              </View>
            </View>

            {/* 3rd Person - Feminine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاھُنَّ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاھُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاھَا</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>غائب مونث</Text>
              </View>
            </View>

            {/* 2nd Person - Masculine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاکُمْ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاکُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاکَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>حاضر مذكر</Text>
              </View>
            </View>

            {/* 2nd Person - Feminine */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاکُنَّ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاکُمَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّاکِ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>حاضر مونث</Text>
              </View>
            </View>

            {/* 1st Person */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell2}>
                <Text style={styles.arabicText}>اِیَّانَا</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اِیَّایَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>متکلم</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Grammar Rule Section */}
        <View style={styles.explanationBox}>
          <Text style={styles.explanationTitle}>قاعدہ</Text>
          <Text style={styles.explanationText}>
            ضمائر مُتَّصِلٌ منصوب و مجرور کے شروع میں "اِيَّا" لگا دینے سے ضمائر مُنْفَصِلٌ منصوب بن جاتے ہیں
          </Text>
          <Text style={styles.explanationExample}>
            مثال: إِيَّا + کَ  = إِيَّاکَ
          </Text>
        </View>

        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>یاد رکھیں</Text>
          <Text style={styles.noteText}>
            • غائب (3rd Person): وہ، ان کے لیے استعمال ہوتا ہے{'\n'}
            • حاضر (2nd Person): تم، آپ کے لیے استعمال ہوتا ہے{'\n'}
            • متکلم (1st Person): میں، ہم کے لیے استعمال ہوتا ہے{'\n'}
            • مثنى میں 1st Person کا کوئی مخصوص ضمیر نہیں ہے{'\n'}
            • مذكر اور مونث کے لیے مختلف ضمائر ہیں{'\n'}
            • جمع میں مذكر اور مونث کے لیے الگ الگ ضمائر ہیں
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HarfLesson1Screen; 