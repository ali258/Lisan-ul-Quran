import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import { getThemeColor } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';
import { TAILWIND_COLORS, FONT_CLASSES } from '../../utils/constants';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

interface Lesson26ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const Lesson26Screen: React.FC<Lesson26ScreenProps> = ({ onNavigate, onBack }) => {
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
    contentSection: {
      marginBottom: 32,
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
      color: '#00ffff',
      fontWeight: 'bold',
    },
    formulaContainer: {
      alignItems: 'center',
      marginVertical: 30,
      paddingVertical: 20,
    },
    formula: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      color: '#00ffff',
    },
    tableContainer: {
      marginTop: 30,
      borderWidth: 1,
      borderColor: '#ffffff',
      borderRadius: 8,
      overflow: 'hidden',
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
    },
    headerCell: {
      flex: 1,
      padding: 15,
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: '#000000',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      borderRightWidth: 1,
      borderRightColor: '#e0e0e0',
    },
    tableRow: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
    },
    cell: {
      flex: 1,
      padding: 15,
      fontSize: isTablet ? 16 : 14,
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      borderRightWidth: 1,
      borderRightColor: '#ffffff',
    },
    comprehensiveTableContainer: {
      marginTop: 30,
      borderWidth: 1,
      borderColor: '#ffffff',
      borderRadius: 8,
      overflow: 'hidden',
    },
    alternateRow: {
      backgroundColor: '#000000',
    },
    noteRow: {
      backgroundColor: '#1a1a1a',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderTopWidth: 1,
      borderTopColor: '#ffffff',
    },
    noteText: {
      fontSize: isTablet ? 14 : 12,
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      fontStyle: 'italic',
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
        <Text style={styles.headerTitle}>مرکب جاری</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonNumber}>Lesson 26</Text>
          <Text style={styles.mainTitle}>مرکب جاری</Text>
          <Text style={styles.subtitle}>Prepositional Phrase</Text>
        </View>

        {/* Main Content */}
        <View style={styles.contentSection}>
          {/* Explanatory Text */}
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              عربی زبان میں کچھ حروف ایسے ہیں جو اسم کو حالت جرّ میں لے جاتے ہیں انھیں{' '}
              <Text style={styles.highlightedText}>حروف جاره</Text>
              {' '}کہتے ہیں ۔
            </Text>
          </View>

          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              جو اسم حالت جرّ میں ہو اُسے{' '}
              <Text style={styles.highlightedText}>مجرور</Text>
              {' '}کہتے ہیں ۔
            </Text>
          </View>

          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              <Text style={styles.highlightedText}>جار</Text>
              {' '}اور{' '}
              <Text style={styles.highlightedText}>مجرور</Text>
              {' '}مل کر{' '}
              <Text style={styles.highlightedText}>مرکب جاری</Text>
              {' '}بناتے ہیں ۔
            </Text>
          </View>

          {/* Formula */}
          <View style={styles.formulaContainer}>
            <Text style={styles.formula}>
              حرف جار + مجرور
            </Text>
          </View>

          {/* Example Table */}
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>مرکب جاری</Text>
              <Text style={styles.headerCell}>معرف باللام</Text>
              <Text style={styles.headerCell}>لام جاره</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.cell}>لِلهِ</Text>
              <Text style={styles.cell}>اَللهُ</Text>
              <Text style={styles.cell}>ل</Text>
            </View>
          </View>

          {/* Comprehensive Examples Table */}
          <View style={styles.comprehensiveTableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>مثالیں</Text>
              <Text style={styles.headerCell}>ترجمہ</Text>
              <Text style={styles.headerCell}>مرکب جاری</Text>
              <Text style={styles.headerCell}>مجرور</Text>
              <Text style={styles.headerCell}>معنی</Text>
              <Text style={styles.headerCell}>حرف جار</Text>
            </View>
            
            {/* Row 1 - ب */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>بِالْقَلَمِ - بِنَصْرِ اللَّهِ - بِسْمِ اللَّهِ - بِاسْمِ رَبِّكَ</Text>
              <Text style={styles.cell}>حق کے ساتھ</Text>
              <Text style={styles.cell}>بِالْحَقِّ</Text>
              <Text style={styles.cell}>اَلْحَقُّ</Text>
              <Text style={styles.cell}>کے ساتھ</Text>
              <Text style={styles.cell}>ب</Text>
            </View>
           
            {/* Row 2 - ت */}
            <View style={[styles.tableRow, styles.alternateRow]}>
              <Text style={styles.cell}>الله کے ساتھ مخصوص ہے</Text>
              <Text style={styles.cell}>اللہ کی قسم</Text>
              <Text style={styles.cell}>تَاللهِ</Text>
              <Text style={styles.cell}>الله</Text>
              <Text style={styles.cell}>قسم کے لیے</Text>
              <Text style={styles.cell}>ت</Text>
            </View>

            {/* Row 3 - و */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>وَالشَّمْسِ - وَالْقَمَرِ - وَالْعَصْرِ - وَالسَّمَاءِ - وَالْأَرْضِ - وَالْقُرْآنِ الْمَجِيدِ - وَالْقُرْآنِ الْحَكِيمِ</Text>
              <Text style={styles.cell}>اللہ کی قسم</Text>
              <Text style={styles.cell}>وَاللهِ</Text>
              <Text style={styles.cell}>الله</Text>
              <Text style={styles.cell}>قسم کے لیے</Text>
              <Text style={styles.cell}>و</Text>
            </View>

            {/* Row 4 - ک */}
            <View style={[styles.tableRow, styles.alternateRow]}>
              <Text style={styles.cell}>كَالْحِمَارِ - كَالْجِبَالِ - كَالْحِجَارَةِ - كَالْأَنْعَامِ - كَالْفَرَاشِ الْمَبْثُوثِ - كَالْعِهْنِ الْمَنْفُوشِ</Text>
              <Text style={styles.cell}>چاند کی طرح</Text>
              <Text style={styles.cell}>كَالْقَمَرِ</Text>
              <Text style={styles.cell}>الْقَمَرُ</Text>
              <Text style={styles.cell}>کی مانند (Like)</Text>
              <Text style={styles.cell}>ك</Text>
            </View>

            {/* Row 5 - فی */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>فِي الْمَسْجِدِ - فِي الْغُرْفَةِ - فِي الْجَنَّةِ - فِي جَهَنَّمَ - فِي الْقُرْآنِ - فِي لَيْلَةِ الْقَدْرِ - فِي سَبِيْلِ اللَّهِ</Text>
              <Text style={styles.cell}>گھر میں</Text>
              <Text style={styles.cell}>فِي الْبَيْتِ</Text>
              <Text style={styles.cell}>الْبَيْتُ</Text>
              <Text style={styles.cell}>میں (In)</Text>
              <Text style={styles.cell}>فِي</Text>
            </View>

            {/* Row 6 - مِنْ */}
            <View style={[styles.tableRow, styles.alternateRow]}>
              <Text style={styles.cell}>مِنَ الْمَدِينَةِ - مِنْ عِنْدِ اللَّهِ - مِنْ شَرِّ حَاسِدٍ - عَنِ الْفَحْشَاءِ</Text>
              <Text style={styles.cell}>مکہ سے</Text>
              <Text style={styles.cell}>مِنْ مَكَّةَ</Text>
              <Text style={styles.cell}>مَكَّةُ</Text>
              <Text style={styles.cell}>سے (From)</Text>
              <Text style={styles.cell}>مِِنْ ، عَنْ</Text>
            </View>


            {/* Row 8 - إِلَى */}
            <View style={[styles.tableRow, styles.alternateRow]}>
              <Text style={styles.cell}>إِلَى السَّمَاءِ - إِلَى الْأَرْضِ - إِلَى ذِكْرِ اللَّهِ</Text>
              <Text style={styles.cell}>کسی پہاڑ کی طرف</Text>
              <Text style={styles.cell}>إِلَى جَبَلٍ</Text>
              <Text style={styles.cell}>جَبَلٌ</Text>
              <Text style={styles.cell}>تک . کی طرف (To, Towards)</Text>
              <Text style={styles.cell}>إِلَى</Text>
            </View>

            {/* Row 9 - عَلَى */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>عَلَى الْعَرْشِ . عَلَى الْعَالَمِيْنَ . عَلَى قُلُوْبِهِمْ</Text>
              <Text style={styles.cell}>کرسی پر</Text>
              <Text style={styles.cell}>عَلَى الْكُرْسِيِّ</Text>
              <Text style={styles.cell}>الْكُرْسِيُّ</Text>
              <Text style={styles.cell}>پر (On, At)</Text>
              <Text style={styles.cell}>عَلَى</Text>
            </View>

            {/* Row 10 - حَتَّى */}
            <View style={[styles.tableRow, styles.alternateRow]}>
              <Text style={styles.cell}>حَتَّى مَطْلَعِ الْفَجْرِ</Text>
              <Text style={styles.cell}>ایک مقرر وقت تک</Text>
              <Text style={styles.cell}>حَتَّى حِيْنِ</Text>
              <Text style={styles.cell}>حِيْنٌ</Text>
              <Text style={styles.cell}>تک (Till)</Text>
              <Text style={styles.cell}>حَتَّى</Text>
            </View>

            {/* Row 11 - ل */}
            <View style={styles.tableRow}>
              <Text style={styles.cell}>لِوَلَدٍ - لِأَمْرِ اللهِ - لِلْمُتَّقِيْنَ - لِلْكَافِرِيْنَ</Text>
              <Text style={styles.cell}>زید کے لیے</Text>
              <Text style={styles.cell}>لِزَيْدٍ</Text>
              <Text style={styles.cell}>زَيْدٌ</Text>
              <Text style={styles.cell}>کے لیے (For)</Text>
              <Text style={styles.cell}>ل (لام جارہ)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson26Screen; 