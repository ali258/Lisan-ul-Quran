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
import { getThemeColor } from '../harf/harfUtils';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

interface Part2Lesson6ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson6Screen: React.FC<Part2Lesson6ScreenProps> = ({ onBackPress }) => {
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
    tableContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
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
      paddingVertical: 16,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: currentTheme.surface,
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.surface,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    dataRow: {
      flexDirection: 'row',
      backgroundColor: currentTheme.surface,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    dataCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    serialCell: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
    },
    arabicText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    urduText: {
      fontSize: 16,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 22,
    },
    englishText: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      textAlign: 'center',
      fontStyle: 'italic',
    },
    serialText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.primary,
      textAlign: 'center',
    },
    noteSection: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 20,
      marginTop: 24,
      borderWidth: 1,
      borderColor: currentTheme.border,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.primary,
      marginBottom: 12,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 16,
      color: currentTheme.text,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="اسم کے چار اہم پہلو"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>اسم کے چار اہم پہلو</Text>
        <Text style={styles.lessonSubtitle}> عربی گرامر میں اسم کی مکمل شناخت کے لیے ضروری ہیں</Text>
        
       

        {/* Main Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>اسم کے چار اہم پہلو کی تفصیل</Text>
          
          <View style={styles.tableContainer}>
            {/* Main Header Row */}
            <View style={styles.tableHeader}>
              
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>اسم کے چار اہم پہلو</Text>
              </View>
            </View>

            {/* Row 1 */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.urduText}>مذکر اور مونث</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.englishText}>Gender</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>جنس</Text>
              </View>
              <View style={styles.serialCell}>
                <Text style={styles.serialText}>1</Text>
              </View>
              
            </View>

            {/* Row 2 */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.urduText}>واحد ، مثنی اور جمع</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.englishText}>Number</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>عدد</Text>
              </View>
              <View style={styles.serialCell}>
                <Text style={styles.serialText}>2</Text>
              </View>
            </View>

            {/* Row 3 */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.urduText}>نکرہ اور معرفہ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.englishText}>Capacity</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>وسعت</Text>
              </View>
              <View style={styles.serialCell}>
                <Text style={styles.serialText}>3</Text>
              </View>
            </View>

            {/* Row 4 */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.urduText}>مرفوع ، منصوب اور مجرور</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.englishText}>Status</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اعراب</Text>
              </View>
              <View style={styles.serialCell}>
                <Text style={styles.serialText}>4</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>یاد رکھیں</Text>
          <Text style={styles.noteText}>
            • جنس: اسم کی جنس سے مراد ہے کہ وہ مذکر ہے یا مؤنث{'\n'}
            • عدد: اسم کی عدد سے مراد ہے کہ وہ واحد، مثنی یا جمع ہے{'\n'}
            • وسعت: اسم کی وسعت سے مراد ہے کہ وہ نکرہ ہے یا معرفہ{'\n'}
            • اعراب: اسم کی اعرابی حالت سے مراد ہے کہ وہ مرفوع، منصوب یا مجرور ہے{'\n'}
            • یہ چاروں پہلو عربی گرامر میں اسم کی مکمل شناخت کے لیے ضروری ہیں
          </Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson6Screen; 