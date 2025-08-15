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
import { getThemeColor, getColorWithOpacity } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface QuranicWordLesson2ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordLesson2Screen: React.FC<QuranicWordLesson2ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

  // Demonstrative Pronouns Data Structure
  const demonstrativeData = {
    near: {
      masculine: {
        singular: 'هُذَا',
        dual: {
          nominative: 'هُذَانِ',
          accusativeGenitive: 'هُذَيْنِ'
        },
        plural: 'هؤلاء'
      },
      feminine: {
        singular: 'هذِهِ',
        dual: {
          nominative: 'هَاتَانِ',
          accusativeGenitive: 'هاتَيْنِ'
        },
        plural: 'هؤلاء'
      }
    },
    far: {
      masculine: {
        singular: 'ذلِک',
        dual: {
          nominative: 'ذَانِک',
          accusativeGenitive: 'ذَيْنِک'
        },
        plural: 'أُولَئِکَ'
      },
      feminine: {
        singular: 'تِلْکَ',
        dual: {
          nominative: 'تَانِک',
          accusativeGenitive: 'تَيْنِک'
        },
        plural: 'أُولَئِکَ'
      }
    }
  };

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
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
    },
    backButtonText: {
      fontSize: 18,
      color: getThemeColor(colors.surface, isDarkMode),
      fontWeight: 'bold',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      flex: 1,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
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
      color: getThemeColor(colors.primary, isDarkMode),
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
      color: getThemeColor(colors.text, isDarkMode),
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
      backgroundColor: '#059669', // Green color
      flexDirection: 'row',
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    tableHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tableHeaderText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    tableCell: {
      flex: 1,
      paddingVertical: 16,
      paddingHorizontal: 8,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 60,
    },
    tableCellText: {
      fontSize: 14,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
    },
    tableCellArabic: {
      fontSize: 18,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 24,
      fontWeight: 'bold',
    },
    tableCellSmall: {
      fontSize: 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    categoryHeader: {
      backgroundColor: getColorWithOpacity(colors.primary, 0.1),
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    categoryHeaderText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    subCategoryHeader: {
      backgroundColor: getColorWithOpacity(colors.secondary, 0.1),
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    subCategoryHeaderText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: getThemeColor(colors.secondary, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteSection: {
      marginTop: 32,
      padding: 20,
      backgroundColor: getColorWithOpacity(colors.primary, 0.1),
      borderRadius: 12,
      borderLeftWidth: 4,
      borderLeftColor: getThemeColor(colors.primary, isDarkMode),
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#059669',
      marginBottom: 12,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 16,
      color: getThemeColor(colors.text, isDarkMode),
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    // New styles for the redesigned table
    mainTableHeader: {
      flexDirection: 'row',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    emptyHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dualHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    singularHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    subHeaderRow: {
      flexDirection: 'row',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    nominativeHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    accusativeHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryRow: {
      flexDirection: 'row',
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.surface, isDarkMode),
    },
    pluralHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColorWithOpacity(colors.surface, 0.8),
    },
    nearHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
    },
    farHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
    },
    masculineRow: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity(colors.surface, 0.8),
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    pluralCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: '#ffffff',
    },
    masculineHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
    },
    dualCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: '#ffffff',
    },
    feminineRow: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity(colors.surface, 0.6),
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    feminineHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
    },
    singularCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
    },
    arabicText: {
      fontSize: 18,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 24,
      fontWeight: 'bold',
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    dataRow: {
      flexDirection: 'row',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    dataRowLight: {
      flexDirection: 'row',
      backgroundColor: '#d1d1d1',
      borderBottomWidth: 1,
      borderBottomColor: '#ffffff',
    },
    dataRowDark: {
      flexDirection: 'row',
      backgroundColor: '#b0b0b0',
      borderBottomWidth: 1,
      borderBottomColor: '#ffffff',
    },
    categoryCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRightWidth: 1,
      borderRightColor: '#ffffff',
    },
    categoryText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    categoryHeaderCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
    },
    meaningBox: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginTop: 24,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    meaningBoxTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      textAlign: 'center',
      marginBottom: 16,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    meaningRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    meaningItem: {
      alignItems: 'center',
      flex: 1,
    },
    arabicWord: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    meaningText: {
      fontSize: 16,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
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
        <Text style={styles.headerTitle}>اسمائے اشارہ</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* Title Section */}
        <Text style={styles.title}>اسمائے اشارہ</Text>
        <Text style={styles.subtitle}>
          Demonstrative Pronouns - Pointers
        </Text>

        {/* Meaning Box */}
        <View style={styles.meaningBox}>
          <Text style={styles.meaningBoxTitle}>اہم الفاظ کے معانی</Text>
          <View style={styles.meaningRow}>
            <View style={styles.meaningItem}>
              <Text style={styles.arabicWord}>ذلک</Text>
              <Text style={styles.meaningText}>وہ (بعید)</Text>
            </View>
            <View style={styles.meaningItem}>
              <Text style={styles.arabicWord}>هذا</Text>
              <Text style={styles.meaningText}>یہ (قریب)</Text>
            </View>
          </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>اسمائے اشارہ کی مکمل جدول</Text>
          
          <View style={styles.tableContainer}>
            {/* Main Table Header Row */}
            <View style={styles.mainTableHeader}>
              <View style={styles.pluralHeaderCell}>
                <Text style={styles.headerText}>جمع</Text>
              </View>
              <View style={styles.dualHeaderCell}>
                <Text style={styles.headerText}>مثنى</Text>
              </View>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}>واحد</Text>
              </View>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}>اسمائے اشارہ</Text>
              </View>
            </View>

            {/* Dual Case Sub-Headers */}
            <View style={styles.subHeaderRow}>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}></Text>
              </View>
              <View style={styles.nominativeHeaderCell}>
                <Text style={styles.headerText}> رفع</Text>
              </View>
              <View style={styles.accusativeHeaderCell}>
                <Text style={styles.headerText}> نصب اور جرّ</Text>
              </View>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}></Text>
              </View>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}></Text>
              </View>
            </View>

            {/* Near Masculine Row */}
            <View style={styles.dataRow}>
              <View style={styles.pluralCell}>
                <Text style={styles.arabicText}>ھٰؤُلۤاءِ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ھٰذَیْنِ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ھٰذَانِ</Text>
              </View>
              <View style={styles.singularCell}>
                <Text style={styles.arabicText}>ھٰذَا</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>قریب مذكر</Text>
              </View>
            </View>

            {/* Near Feminine Row */}
            <View style={styles.dataRow}>
              <View style={styles.pluralCell}>
                <Text style={styles.arabicText}>ھٰؤُلۤاءِ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ھِاتَیْنِ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ھَاتَانِ</Text>
              </View>
              <View style={styles.singularCell}>
                <Text style={styles.arabicText}>ھٰذِہٖ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>قریب مونث</Text>
              </View>
            </View>

            {/* Far Masculine Row */}
            <View style={styles.dataRow}>
              <View style={styles.pluralCell}>
                <Text style={styles.arabicText}>اُولٰۤئِکَ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ذَیْنِکَ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ذَانِکَ</Text>
              </View>
              <View style={styles.singularCell}>
                <Text style={styles.arabicText}>ذٰلِکَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>بعيد مذكر</Text>
              </View>
            </View>

            {/* Far Feminine Row */}
            <View style={styles.dataRow}>
              <View style={styles.pluralCell}>
                <Text style={styles.arabicText}>اُولٰۤئِکَ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>تَیْنِکَ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>تَانِکَ</Text>
              </View>
              <View style={styles.singularCell}>
                <Text style={styles.arabicText}>تِلْکَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>بعيد مونث</Text>
              </View>
            </View>
          </View>
        </View>

        

        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>یاد رکھیں</Text>
          <Text style={styles.noteText}>
            • قريب کے لیے واحد مذكر میں "هُذَا" اور مونث میں "هذِهِ" استعمال ہوتا ہے۔{'\n'}
            • بعيد کے لیے واحد مذكر میں "ذلِک" اور مونث میں "تِلْکَ" استعمال ہوتا ہے۔{'\n'}
            • جمع کی صورت میں دونوں جنسوں کے لیے ایک ہی لفظ استعمال ہوتا ہے۔{'\n'}
            • مثنى میں حالت رفع اور حالت نصب/جر کے لیے مختلف الفاظ ہیں۔
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordLesson2Screen; 