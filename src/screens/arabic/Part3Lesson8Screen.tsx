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

interface Part3Lesson8ScreenProps {
  onBackPress: () => void;
}

const Part3Lesson8Screen: React.FC<Part3Lesson8ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

  

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
      marginTop: 10,
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
      color: currentTheme.primary,
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    mainTitle: {
      fontSize: isTablet ? 48 : 36,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: isTablet ? 24 : 20,
      textAlign: 'center',
      opacity: 0.8,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    textBlock: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 24,
      marginBottom: 24, 
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    paragraph: {
      fontSize: isTablet ? 18 : 16,
      lineHeight: isTablet ? 32 : 28,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 16,
    },
    highlightedText: {
      color: currentTheme.primary,
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    examplesContainer: {
      backgroundColor: currentTheme.primary,
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
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
      backgroundColor: currentTheme.text,
      marginRight: 12,
      marginTop: 8,
    },
    exampleText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      flex: 1,
    },
    noteContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 20,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    noteTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      marginBottom: 12,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    noteText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
    },
    pronounsTableContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: currentTheme.border,
      overflow: 'hidden',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    pronounsTableHeader: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    pronounsHeaderCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    pronounsTableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
      backgroundColor: currentTheme.surface,
    },
    feminineRow: {
      backgroundColor: currentTheme.primary,
    },
    pronounsCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'right',
      marginBottom: 4,
    },
    pronounsRowSubtitle: {
      fontSize: isTablet ? 12 : 10,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      opacity: 0.8,
    },
    comprehensiveTableContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: currentTheme.border,
      overflow: 'hidden',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    comprehensiveTableHeader: {
      flexDirection: 'row',
      backgroundColor: currentTheme.surface,
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    comprehensiveHeaderCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    personSection: {
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    personHeader: {
      backgroundColor: currentTheme.primary,
      paddingVertical: 8,
      paddingHorizontal: 12,
      alignItems: 'flex-end',
    },
    personTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'right',
      marginBottom: 4,
    },
    personSubtitle: {
      fontSize: isTablet ? 12 : 10,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
    },
    comprehensiveTableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
      backgroundColor: currentTheme.surface,
    },
    genderLabel: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'right',
    },
    comprehensiveCell: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="مرکب اضافی + ضمائر"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>مرکب اضافی میں ضمائر کا استعمال</Text>
        <Text style={styles.lessonTitleEnglish}>Use of Pronouns in Possessive Compounds</Text>
        

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
              
              <Text style={styles.exampleText}>
                تمہاری کتاب
              </Text>
              <Text style={styles.exampleText}>
                اس کی کتاب
              </Text>
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
            <View style={styles.pronounsTableRow}>
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
            <View style={styles.pronounsTableRow}>
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
              <View style={styles.comprehensiveTableRow}>
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
              <View style={styles.comprehensiveTableRow}>
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
    </View>
  );
};

export default Part3Lesson8Screen; 