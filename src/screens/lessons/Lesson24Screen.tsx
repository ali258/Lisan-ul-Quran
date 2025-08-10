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
import { getThemeColor } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

interface Lesson24ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const Lesson24Screen: React.FC<Lesson24ScreenProps> = ({ onNavigate, onBack }) => {
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
    },
    backButtonText: {
      fontSize: 24,
      color: getThemeColor(colors.primary, isDarkMode),
    },
    headerTitle: {
      fontSize: 24,
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
    contentSection: {
      marginBottom: 32,
    },
    titleSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    lessonNumber: {
      fontSize: isTablet ? 20 : 16,
      textAlign: 'center',
      opacity: 0.6,
      color: getThemeColor(colors.primary, isDarkMode),
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    mainTitle: {
      fontSize: isTablet ? 48 : 36,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: isTablet ? 24 : 20,
      textAlign: 'center',
      opacity: 0.8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    textBlock: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    paragraph: {
      fontSize: isTablet ? 18 : 16,
      lineHeight: isTablet ? 32 : 28,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 16,
    },
    highlightedText: {
      color: getThemeColor('primary-400', isDarkMode),
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    examplesContainer: {
      backgroundColor: getThemeColor('primary-700', isDarkMode),
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: getThemeColor('primary-800', isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    exampleItem: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      marginBottom: 12,
    },
    bullet: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: isDarkMode ? '#ffffff' : getThemeColor(colors.text, isDarkMode),
      marginRight: 12,
      marginTop: 8,
    },
    exampleText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: isDarkMode ? '#ffffff' : getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      flex: 1,
    },
    noteContainer: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    noteTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      marginBottom: 12,
      color: getThemeColor('primary-400', isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    noteText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
    },
    pronounsTableContainer: {
      backgroundColor: isDarkMode ? '#1a1a1a' : '#f97316',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: isDarkMode ? '#404040' : '#ea580c',
      overflow: 'hidden',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    pronounsTableHeader: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? '#8b4513' : '#fb923c',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#a0522d' : '#f97316',
    },
    pronounsHeaderCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    pronounsTableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#404040' : '#ea580c',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#f97316',
    },
    feminineRow: {
      backgroundColor: '#f97316',
    },
    pronounsCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    pronounsRowHeader: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    pronounsRowTitle: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'right',
      marginBottom: 4,
    },
    pronounsRowSubtitle: {
      fontSize: isTablet ? 12 : 10,
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      opacity: 0.8,
    },
    comprehensiveTableContainer: {
      backgroundColor: '#1e40af',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#1e3a8a',
      overflow: 'hidden',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    comprehensiveTableHeader: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? '#1e40af' : '#2563eb',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#1e3a8a' : '#1d4ed8',
    },
    comprehensiveHeaderCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    personSection: {
      borderBottomWidth: 1,
      borderBottomColor: '#1e3a8a',
    },
    personHeader: {
      backgroundColor: '#1e40af',
      paddingVertical: 8,
      paddingHorizontal: 12,
      alignItems: 'flex-end',
    },
    personTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'right',
      marginBottom: 4,
    },
    personSubtitle: {
      fontSize: isTablet ? 12 : 10,
      color: '#87ceeb',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
    },
    comprehensiveTableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#1e3a8a',
      backgroundColor: '#1e40af',
    },
    genderLabel: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'right',
    },
    comprehensiveCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={getThemeColor(colors.background, isDarkMode)}
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>
            ← 
          </Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          مرکب اضافی میں ضمائر کا استعمال
        </Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonNumber}>Lesson 24</Text>
          <Text style={styles.mainTitle}>مرکب اضافی میں ضمائر کا استعمال</Text>
          <Text style={styles.subtitle}>Use of Pronouns in Possessive Compounds</Text>
        </View>

        {/* Main Explanation */}
        <View style={styles.contentSection}>
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              <Text style={styles.highlightedText}>مرکب اضافی</Text>{' '}
              میں ضمائر بھی استعمال ہوتے ہیں ۔
            </Text>
            <Text style={styles.paragraph}>
              مثلاً : زید کی کتاب میں اسم کی جگہ اگر میں ضمیر استعمال کروں تو مرکب بنے گا ۔
            </Text>
          </View>
        </View>

        {/* Examples Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>
            مثالیں
          </Text>
          
          <View style={styles.textBlock}>
            <View style={styles.exampleItem}>
              <View style={styles.bullet} />
              <Text style={styles.exampleText}>
                تمہاری کتاب
              </Text>
            </View>
            
            <View style={styles.exampleItem}>
              <View style={styles.bullet} />
              <Text style={styles.exampleText}>
                اس کی کتاب
              </Text>
            </View>
            
            <View style={styles.exampleItem}>
              <View style={styles.bullet} />
              <Text style={styles.exampleText}>
                میری کتاب
              </Text>
            </View>
          </View>
        </View>

        {/* Important Note */}
        <View style={styles.contentSection}>
          <View style={styles.noteContainer}>
            <Text style={styles.noteTitle}>
              یاد رکھیں
            </Text>
            <Text style={styles.noteText}>
              <Text style={styles.highlightedText}>مرکب اضافی</Text>{' '}
              میں ضمائر ہمیشہ مضاف الیہ کی جگہ استعمال ہوتے ہیں لہذا ہمیں حالت جرّ والے ضمائر کی ضرورت ہو گی جو کے درج ذیل ہیں ۔
            </Text>
          </View>
        </View>

        {/* Pronouns Table */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>حالت نصب اور جرّ میں</Text>
          
          <View style={styles.pronounsTableContainer}>
            {/* Header Row */}
            <View style={styles.pronounsTableHeader}>
              <Text style={styles.pronounsHeaderCell}>جمع</Text>
              <Text style={styles.pronounsHeaderCell}>مثنى</Text>
              <Text style={styles.pronounsHeaderCell}>واحد</Text>
              <Text style={styles.pronounsHeaderCell}>ضمائر</Text>
            </View>

            {/* 3rd Person - Masculine */}
            <View style={styles.pronounsTableRow}>
              <Text style={styles.pronounsCell}>ـ ہُمْ</Text>
              <Text style={styles.pronounsCell}>ـ ہُمَا</Text>
              <Text style={styles.pronounsCell}>ـ ہُ</Text>
              <View style={styles.pronounsRowHeader}>
                <Text style={styles.pronounsRowTitle}>مذکر</Text>
                <Text style={styles.pronounsRowSubtitle}>غائب (3rd Person)</Text>
              </View>
            </View>

            {/* 3rd Person - Feminine */}
            <View style={[styles.pronounsTableRow, styles.feminineRow]}>
              <Text style={styles.pronounsCell}>ـ ہُنَّ</Text>
              <Text style={styles.pronounsCell}>ـ ہُمَا</Text>
              <Text style={styles.pronounsCell}>ـ ہَا</Text>
              <View style={styles.pronounsRowHeader}>
                <Text style={styles.pronounsRowTitle}>مونث</Text>
                <Text style={styles.pronounsRowSubtitle}>غائب (3rd Person)</Text>
              </View>
            </View>

            {/* 2nd Person - Masculine */}
            <View style={styles.pronounsTableRow}>
              <Text style={styles.pronounsCell}>ـ کُمْ</Text>
              <Text style={styles.pronounsCell}>ـ کُمَا</Text>
              <Text style={styles.pronounsCell}>ـ کَ</Text>
              <View style={styles.pronounsRowHeader}>
                <Text style={styles.pronounsRowTitle}>مذکر</Text>
                <Text style={styles.pronounsRowSubtitle}>حاضر (2nd Person)</Text>
              </View>
            </View>

            {/* 2nd Person - Feminine */}
            <View style={[styles.pronounsTableRow, styles.feminineRow]}>
              <Text style={styles.pronounsCell}>ـ کُنَّ</Text>
              <Text style={styles.pronounsCell}>ـ کُمَا</Text>
              <Text style={styles.pronounsCell}>ـ کِ</Text>
              <View style={styles.pronounsRowHeader}>
                <Text style={styles.pronounsRowTitle}>مونث</Text>
                <Text style={styles.pronounsRowSubtitle}>حاضر (2nd Person)</Text>
              </View>
            </View>

            {/* 1st Person */}
            <View style={styles.pronounsTableRow}>
              <Text style={styles.pronounsCell}>ـ نَا</Text>
              <Text style={styles.pronounsCell}></Text>
              <Text style={styles.pronounsCell}>ـ ی</Text>
              <View style={styles.pronounsRowHeader}>
                <Text style={styles.pronounsRowTitle}>مذکر / مونث</Text>
                <Text style={styles.pronounsRowSubtitle}>متکلم (1st Person)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Comprehensive Examples Table */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>مثال</Text>
          
          <View style={styles.comprehensiveTableContainer}>
            {/* 3rd Person Section */}
            <View style={styles.personSection}>
              <View style={styles.personHeader}>
                <Text style={styles.personTitle}>غائب</Text>
                <Text style={styles.personSubtitle}>3rd Person</Text>
              </View>
              
              {/* 3rd Person - Masculine */}
              <View style={styles.comprehensiveTableRow}>
                <Text style={styles.comprehensiveCell}>كِتَابُهُمْ</Text>
                <Text style={styles.comprehensiveCell}>كِتَابُهُمَا</Text>
                <Text style={styles.comprehensiveCell}>كِتَابُهُ</Text>
                <Text style={styles.genderLabel}>مذکر</Text>
              </View>

              {/* 3rd Person - Feminine */}
              <View style={[styles.comprehensiveTableRow, styles.feminineRow]}>
                <Text style={styles.comprehensiveCell}>كِتَابُهُنَّ</Text>
                <Text style={styles.comprehensiveCell}>كِتَابُهُمَا</Text>
                <Text style={styles.comprehensiveCell}>كِتَابُهَا</Text>
                <Text style={styles.genderLabel}>مونث</Text>
              </View>
            </View>

            {/* 2nd Person Section */}
            <View style={styles.personSection}>
              <View style={styles.personHeader}>
                <Text style={styles.personTitle}>حاضر</Text>
                <Text style={styles.personSubtitle}>2nd Person</Text>
              </View>
              
              {/* 2nd Person - Masculine */}
              <View style={styles.comprehensiveTableRow}>
                <Text style={styles.comprehensiveCell}>كِتَابُكُمْ</Text>
                <Text style={styles.comprehensiveCell}>كِتَابُكُمَا</Text>
                <Text style={styles.comprehensiveCell}>كِتَابُكَ</Text>
                <Text style={styles.genderLabel}>مذکر</Text>
              </View>

              {/* 2nd Person - Feminine */}
              <View style={[styles.comprehensiveTableRow, styles.feminineRow]}>
                <Text style={styles.comprehensiveCell}>كِتَابُكُنَّ</Text>
                <Text style={styles.comprehensiveCell}>كِتَابُكُمَا</Text>
                <Text style={styles.comprehensiveCell}>كِتَابُكِ</Text>
                <Text style={styles.genderLabel}>مونث</Text>
              </View>
            </View>

            {/* 1st Person Section */}
            <View style={styles.personSection}>
              <View style={styles.personHeader}>
                <Text style={styles.personTitle}>متکلم</Text>
                <Text style={styles.personSubtitle}>1st Person</Text>
              </View>
              
              {/* 1st Person - Masculine */}
              <View style={styles.comprehensiveTableRow}>
                <Text style={styles.comprehensiveCell}>كِتَابُنَا</Text>
                <Text style={styles.comprehensiveCell}></Text>
                <Text style={styles.comprehensiveCell}>كِتَابِي</Text>
                <Text style={styles.genderLabel}>مونث / مذکر</Text>
              </View>

              
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson24Screen; 