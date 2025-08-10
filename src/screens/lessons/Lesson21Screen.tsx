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

interface Lesson21ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const Lesson21Screen: React.FC<Lesson21ScreenProps> = ({ onNavigate, onBack }) => {
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
    lessonNumber: {
      fontSize: isTablet ? 20 : 16,
      textAlign: 'center',
      opacity: 0.6,
      color: getThemeColor(colors.primary, isDarkMode),
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    contentSection: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
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
    formulaSection: {
      alignItems: 'center',
      marginVertical: 32,
    },
    formulaTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    formulaBox: {
      backgroundColor: getThemeColor('primary-400', isDarkMode),
      borderRadius: 20,
      padding: isTablet ? 32 : 24,
      marginBottom: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 8,
      minWidth: isTablet ? 400 : 300,
    },
    formulaText: {
      fontSize: isTablet ? 32 : 28,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 40 : 36,
    },
    comparisonSection: {
      marginTop: 32,
    },
    comparisonTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    rulesSection: {
      marginTop: 32,
    },
    rulesTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: getThemeColor('primary-400', isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    ruleCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    ruleText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 12,
    },
    bulletPoint: {
      flexDirection: 'row-reverse',
      alignItems: 'flex-start',
      marginBottom: 8,
    },
    bullet: {
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.text, isDarkMode),
      marginLeft: 8,
      marginTop: 2,
    },
    bulletText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      flex: 1,
    },
    examplesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 16,
      marginTop: 20,
    },
    tableContainer: {
      flex: 1,
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      borderWidth: 1,
      borderColor: getThemeColor('primary-400', isDarkMode),
      overflow: 'hidden',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 6,
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: getThemeColor('primary-400', isDarkMode),
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor('primary-500', isDarkMode),
    },
    tableHeaderText: {
      flex: 1,
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    arabicText: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    translationText: {
      flex: 1,
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      lineHeight: isTablet ? 24 : 20,
    },
    noteExamplesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 20,
      marginTop: 20,
    },
    noteExampleColumn: {
      flex: 1,
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
        <Text style={styles.headerTitle}>مرکب توصیفی</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonNumber}>Lesson 21</Text>
          <Text style={styles.mainTitle}>مرکب توصیفی</Text>
          <Text style={styles.subtitle}>Adjectival Compound</Text>
        </View>

        {/* Definition Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>تعریف</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              جس میں کسی اسم کی تعریف بیان کی گئی ہو۔ اس کی بناوٹ اس طرح ہوگی:
            </Text>
          </View>
        </View>

        {/* Formula Section */}
        <View style={styles.formulaSection}>
          <Text style={styles.formulaTitle}>بناوٹ کا فارمولا</Text>
          
          <View style={styles.formulaBox}>
            <Text style={styles.formulaText}>
              موصوف + صفت
            </Text>
          </View>
        </View>

        {/* Comparison Section */}
        <View style={styles.comparisonSection}>
          <Text style={styles.comparisonTitle}>ترکیب کا فرق</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              اردو اور انگریزی ترکیب میں{' '}
              <Text style={styles.highlightedText}>صفت</Text>{' '}
              پہلے آتی ہے اور{' '}
              <Text style={styles.highlightedText}>موصوف</Text>{' '}
              بعد میں جبکہ عربی میں ترتیب اس کے برعکس ہے یعنی{' '}
              <Text style={styles.highlightedText}>موصوف</Text>{' '}
              پہلے آتا ہے اور{' '}
              <Text style={styles.highlightedText}>صفت</Text>{' '}
              بعد میں۔
            </Text>
          </View>
        </View>

        {/* Rules Section */}
        <View style={styles.rulesSection}>
          <Text style={styles.rulesTitle}>مرکب توصیفی بنانے کا قاعده:</Text>
          
          <View style={styles.ruleCard}>
            <Text style={styles.ruleText}>
              مرکب توصیفی میں صفت اسم کے چاروں پہلووں کے اعتبار سے موصوف کے تابع ہوتی ہے۔
            </Text>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>ه</Text>
              <Text style={styles.bulletText}>وسعت کے اعتبار سے</Text>
            </View>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>ه</Text>
              <Text style={styles.bulletText}>جنس کے اعتبار سے</Text>
            </View>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>ه</Text>
              <Text style={styles.bulletText}>عدد کے اعتبار سے</Text>
            </View>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>ه</Text>
              <Text style={styles.bulletText}>اعراب کے اعتبار سے</Text>
            </View>
          </View>
        </View>

        {/* Examples Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>مثال</Text>
          
          <View style={styles.examplesContainer}>
            {/* Left Table - Feminine Examples */}
            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>عربی</Text>
                <Text style={styles.tableHeaderText}>ترجمہ</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.arabicText}>الْبِئْتُ الصَّالِحَةُ</Text>
                <Text style={styles.translationText}>نیک لڑکی</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.arabicText}>الْبِئْتَانِ الصَّالِحَتَانِ</Text>
                <Text style={styles.translationText}>دو نیک لڑکیاں</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.arabicText}>الْبَنَاتُ الصَّالِحَاتُ</Text>
                <Text style={styles.translationText}>نیک لڑکیاں</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.arabicText}>الْإِمَامُ الْعَادِلُ</Text>
                <Text style={styles.translationText}>عدل کرنے والا حکمران</Text>
              </View>
            </View>

            {/* Right Table - Masculine Examples */}
            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>عربی</Text>
                <Text style={styles.tableHeaderText}>ترجمہ</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.arabicText}>الْوَلَدُ الصَّالِحُ</Text>
                <Text style={styles.translationText}>نیک لڑکا</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.arabicText}>الْوَلَدَانِ الصَّالِحَانِ</Text>
                <Text style={styles.translationText}>دو نیک لڑکے</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.arabicText}>الْأَوْلَادُ الصَّالِحُوْنَ</Text>
                <Text style={styles.translationText}>نیک لڑکے</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.arabicText}>إِمَامٌ عَادِلٌ</Text>
                <Text style={styles.translationText}>عدل کرنے والا حکمران</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Note Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>نوٹ</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              مرکب توصیفی میں موصوف اگر غیر عاقل کی جمع ہو تو اسکی صفت عام طور پر واحد مونث استعمال ہوتی ہے۔ لیکن جمع مونث اور جمع مکسر بھی آسکتی ہے۔
            </Text>
          </View>

          <View style={styles.noteExamplesContainer}>
            <View style={styles.noteExampleColumn}>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>ه</Text>
                <Text style={styles.bulletText}>أَبْوَابٌ مَفْتُوحَةٌ</Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>ه</Text>
                <Text style={styles.bulletText}>أَيَّامٌ مَعْدُودَةٌ</Text>
              </View>
            </View>
            
            <View style={styles.noteExampleColumn}>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>ه</Text>
                <Text style={styles.bulletText}>صُحْفٌ مَطَهَّرَةٌ</Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>ه</Text>
                <Text style={styles.bulletText}>أَيَّامٌ مَعْدُودَاتٌ</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>خلاصہ</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              <Text style={styles.highlightedText}>مرکب توصیفی</Text>{' '}
              میں صفت موصوف کے چاروں پہلووں (وسعت، جنس، عدد، اعراب) کے اعتبار سے تابع ہوتی ہے۔
            </Text>
            <Text style={styles.paragraph}>
              عربی میں ترتیب: موصوف + صفت (اردو/انگریزی کے برعکس)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson21Screen; 