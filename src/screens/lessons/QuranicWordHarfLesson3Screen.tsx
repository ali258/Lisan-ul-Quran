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
import { getThemeColor, getColorFromClass } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface QuranicWordHarfLesson3ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordHarfLesson3Screen: React.FC<QuranicWordHarfLesson3ScreenProps> = ({ onNavigate, onBack }) => {
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
      backgroundColor: isDarkMode ? getColorFromClass('markab-purple-dark') : getColorFromClass('markab-purple-light'),
    },
    backButtonText: {
      fontSize: 18,
      color: isDarkMode ? getColorFromClass('markab-purple-dark-text') : getColorFromClass('markab-purple-light-text'),
      fontWeight: 'bold',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('markab-purple-light-text') : getColorFromClass('markab-purple-dark-text'),
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
      marginBottom: 8,
      color: isDarkMode ? getColorFromClass('markab-purple-light-text') : getColorFromClass('markab-purple-dark-text'),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    titleEnglish: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.textSecondary, isDarkMode),
      textAlign: 'center',
      marginBottom: 16,
      fontStyle: 'italic',
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
    sectionTitle2: {
      fontSize: isTablet ? 22 : 18,
      fontWeight: 'bold',
      marginBottom: 16,
      color: isDarkMode ? getColorFromClass('markab-purple-light-text') : getColorFromClass('markab-purple-dark-text'),
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
    tableHeader2: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? getColorFromClass('markab-purple-dark') : getColorFromClass('markab-purple-light'),
    },
    headerCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: getThemeColor(colors.surface, isDarkMode),
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    headerCell2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: getThemeColor(colors.surface, isDarkMode),
    },
    headerText2: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('markab-purple-dark-text') : getColorFromClass('markab-purple-light-text'),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    dataRow: {
      flexDirection: 'row',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    dataRow2: {
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
    arabicText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    urduText: {
      fontSize: 14,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
    },
    englishText: {
      fontSize: 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      textAlign: 'center',
      fontStyle: 'italic',
      lineHeight: 16,
    },
    exampleText: {
      fontSize: 14,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 20,
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
      color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    categoryText2: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? getColorFromClass('markab-purple-dark-text') : getColorFromClass('markab-purple-light-text'),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    categoryCell2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      backgroundColor: isDarkMode ? getColorFromClass('markab-purple-dark') : getColorFromClass('markab-purple-light'),
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
    mergedCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 24, // Double padding for merged cell
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: getThemeColor(colors.border, isDarkMode),
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
    },
  });

  const particles = [
    {
      arabic: 'إِلَّا',
      transliteration: 'Illā',
      urduMeaning: 'سواۓ ',
      englishMeaning: 'except',
      example: 'لَا إِلَهَ إِلَّا اللهُ',
      translation: 'کوئی معبود نہیں سوائے اللہ کے',
    },
    {
      arabic: 'غَيْرَ',
      transliteration: 'Ghayr',
      urduMeaning: 'غير / سوا',
      englishMeaning: 'except / other than',
      example: 'غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ',
      translation: 'سورة الفاتحه',
    },
  ];

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
        <Text style={styles.headerTitle}>حروفِ جر مع الضمائر </Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>حروفِ جر مع الضمائر</Text>
        <Text style={styles.titleEnglish}>Conjunctions with the Particles</Text>
        <Text style={styles.subtitle}>
          Learn essential Arabic Conjunctions with the Particles and their usage in the Quran
        </Text>


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

        {/* Notes Section */}
        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>بِ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>بِ / کے ساتھ</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>بِهِمْ / ان کے ساتھ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>بِهِمَا </Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>بِهِ / اس کے ساتھ</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ان دونوں کے ساتھ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>بِهَا / اس عورت کے ساتھ</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>بِكُمْ / تمہارے ساتھ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>بِكَ / تیرے ساتھ</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>بِنَا / ہمارے ساتھ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>بِىْ / میرے ساتھ</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>فِي+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>فِي / میں</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>فِيهِمْ / ان میں</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>فِيهِمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>فِيهِ / اس میں</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>فِيهِنَّ / ان سب میں</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ان دونوں میں</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>فِيهَا / اس (عورت) میں</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>فِيكُمْ / تم سب میں</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>فِينَا / ہم میں</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>مِنْ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مِنْ / سے</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مِنْهُمْ / ان سے </Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مِنْهُمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مِنْهُ / اس سے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ان دونوں سے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مِنْهَا / اس عورت سے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مِنْكُمْ / تم سب سے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مِنْكُنَّ / تم عورتوں سے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>مِنَّا / ہم سے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مِنِّي / مجھ سے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>عَنْ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>عَنْ / سے</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَنْهُمْ / ان سے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَنْهُمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَنْهُ / اس سے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ان دونوں سے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَنْهَا / اس سے (مؤنث)</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَنْكُمْ / تم سے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَنْكَ / تجھ سے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَنِّي / مجھ سے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>إِلَيْ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>إِلَيْ / کی طرف</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>إِلَيْهِمْ / اُن کی طرف (جمع مذکر)</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>إِلَيْهِ / اُس کی طرف</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>اِلَیْھِنَّ / اُن عورتوں کی طرف</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>إِلَيْهَا / اُس (مونث) کی طرف</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>إِلَيْكُمْ / تمہاری طرف</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>إِلَيْكُمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>إِلَيْكَ / تیری طرف</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}> تم دونوں کی طرف</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>إِلَيْنَا / ہماری طرف</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>إِلَيَّ / میری طرف</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>عَلَيْ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>عَلَيْ / پر</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَلَيْهِمْ / ان پر</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَلَيْهِمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَلَيْهِ / اُس پر</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَلَيْهِنَّ / ان (عورتوں) پر</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ان دونوں پر</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَلَيْهَا / اُس (عورت) پر</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَلَيْكُمْ / تم پر</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَلَيْكَ / آپ پر</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>عَلَيْنَا / ہم پر</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عَلَيَّ / مجھ پر</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>لَ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>لَ / کے لیے</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَهُم / اُن کے لیے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَهُمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَهُ / اُس کے لیے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَهُنَّ / ان عورتوں کے لیے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>ان دونوں کے لیے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَھَا / اس عورت کے لیے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَكُمْ / تم سب کے لیے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَكُمَا</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَكَ / تیرے لیے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>تم دونوں کے لیے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>لَنَا / ہمارے لیے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لِیْ / میرے لیے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>مَعَ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مَعَ / کے ساتھ</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مَعَهُمْ / ان کے ساتھ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مَعَهُ / اس کے ساتھ</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مَعَكُمْ / تمہارے ساتھ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مَعَكَ / تیرے ساتھ </Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>مَعَنَا / ہمارے ساتھ</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>مَعِي / میرے ساتھ</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>عِندَ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>عِندَ / کے پاس</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عِندَهُمْ / ان کے پاس</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عِندَهُ / اس کے پاس</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عِندَهَا / اس عورت کے پاس</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عِندَكُم / تمہارے پاس</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عِندَكَ / تیرے پاس</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>عِندَنَا / ہمارے پاس</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>عِندِي / میرے پاس</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>لَدَىٰ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>لَدَىٰ / کے پاس</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَدَيْهِمْ / ان کے پاس</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَدَيْهِ / اس کے پاس</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>لَدَيْنَا / ہمارے پاس</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَدَيَّ / میرے پاس</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle2}>لَدُنْ+ضمیر: قرآنی مرکبات</Text>
        
        <View style={styles.tableContainer}>
          {/* Main Header Row */}
          <View style={styles.tableHeader2}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>جمع</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>مثنى</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>واحد</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText2}>لَدُنْ /  پاس سے</Text>
            </View>
          </View>

          {/* 3rd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>لَّدُنْهُ /  اس کے پاس سے , اس کی طرف سے</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مذكر</Text>
            </View>
          </View>

          {/* 3rd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>غائب مونث</Text>
            </View>
          </View>

          {/* 2nd Person - Masculine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مذكر</Text>
            </View>
          </View>

          {/* 2nd Person - Feminine */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}>-</Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>حاضر مونث</Text>
            </View>
          </View>

          {/* 1st Person */}
          <View style={styles.dataRow}>
            <View style={styles.dataCell2}>
              <Text style={styles.arabicText}>لَدُنَّا / ہمارے پاس سے , ہماری طرف سے</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.arabicText}></Text>
            </View>
            <View style={styles.categoryCell2}>
              <Text style={styles.categoryText2}>متکلم</Text>
            </View>
          </View>
        </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordHarfLesson3Screen; 