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
import { getThemeColor, getColorWithOpacity, getColorFromClass } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface QuranicWordHarfLesson1ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordHarfLesson1Screen: React.FC<QuranicWordHarfLesson1ScreenProps> = ({ onNavigate, onBack }) => {
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
      borderRadius: 8,
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
    },
    backButtonText: {
      fontSize: 18,
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      fontWeight: 'bold',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 40,
    },
    title: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 32,
      color: getThemeColor(colors.textSecondary, isDarkMode),
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
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    sectionSubtitle: {
      fontSize: isTablet ? 16 : 14,
      marginBottom: 20,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
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
      flexDirection: 'row',
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
    },
    headerCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: getThemeColor(colors.surface, isDarkMode),
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? getThemeColor('ism-blue-dark-text', isDarkMode) : getThemeColor('ism-blue-light-text', isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    categoryRow: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
    },
    categoryCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      borderRightWidth: 1,
      borderRightColor: getThemeColor(colors.border, isDarkMode),
    },
    categoryText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? getThemeColor('ism-blue-dark-text', isDarkMode) : getThemeColor('ism-blue-light-text', isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    subCategoryRow: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
    },
    subCategoryCell: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: getThemeColor(colors.surface, isDarkMode),
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
    },
    subCategoryText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: isDarkMode ? getThemeColor('ism-blue-dark-text', isDarkMode) : getThemeColor('ism-blue-light-text', isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    dataRow: {
      flexDirection: 'row',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    dataCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: getThemeColor(colors.border, isDarkMode),
    },
    dataCell2: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: getThemeColor(colors.border, isDarkMode),
    },
    arabicText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    noteSection: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginTop: 24,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      borderLeftWidth: 4,
      borderLeftColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
      marginBottom: 12,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 16,
      color: getThemeColor(colors.text, isDarkMode),
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
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
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
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      alignItems: 'center',
    },
    typeTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
      textAlign: 'center',
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    typeSubtitle: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      textAlign: 'center',
      marginBottom: 12,
      fontStyle: 'italic',
    },
    typeDescription: {
      fontSize: 16,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      lineHeight: 22,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    attachedPronounsSection: {
      marginBottom: 32,
    },
    attachedPronounsHeader: {
      backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      borderRadius: 20,
      padding: 24,
      alignItems: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 8,
      marginBottom: 24,
    },
    attachedPronounsTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      textAlign: 'center',
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    attachedPronounsSubtitle: {
      fontSize: isTablet ? 18 : 16,
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      textAlign: 'center',
      marginBottom: 16,
      opacity: 0.9,
      fontStyle: 'italic',
    },
    attachedPronounsDivider: {
      width: 80,
      height: 3,
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 2,
      opacity: 0.7,
    },
    explanationBox: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      borderLeftWidth: 6,
      borderLeftColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    explanationTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
      marginBottom: 12,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    explanationText: {
      fontSize: 16,
      color: getThemeColor(colors.text, isDarkMode),
      lineHeight: 24,
      marginBottom: 12,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    explanationExample: {
      fontSize: 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      backgroundColor: getColorWithOpacity(isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'), 0.1),
      padding: 8,
      borderRadius: 8,
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
        <Text style={styles.headerTitle}>اسم ضمائر</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
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
    </SafeAreaView>
  );
};

export default QuranicWordHarfLesson1Screen; 