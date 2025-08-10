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

interface Lesson20ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const Lesson20Screen: React.FC<Lesson20ScreenProps> = ({ onNavigate, onBack }) => {
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
    examplesSection: {
      marginTop: 32,
    },
    examplesTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    exampleCard: {
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
    exampleArabic: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 8,
      lineHeight: isTablet ? 28 : 24,
    },
    exampleUrdu: {
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      fontStyle: 'italic',
      lineHeight: isTablet ? 24 : 20,
    },
    conjunctionHighlight: {
      color: getThemeColor('primary-400', isDarkMode),
      fontWeight: 'bold',
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
        <Text style={styles.headerTitle}>مرکب عطفی</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonNumber}>Lesson 20</Text>
          <Text style={styles.mainTitle}>مرکب عطفی</Text>
          <Text style={styles.subtitle}>Conjunctional Compound</Text>
        </View>

        {/* Definition Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>تعریف</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              جس میں{' '}
              <Text style={styles.highlightedText}>حرف عطف</Text>{' '}
              آتا ہو۔ اس کی بناوٹ اس طرح ہوگی:
            </Text>
          </View>
        </View>

        {/* Formula Section */}
        <View style={styles.formulaSection}>
          <Text style={styles.formulaTitle}>بناوٹ کا فارمولا</Text>
          
          <View style={styles.formulaBox}>
            <Text style={styles.formulaText}>
              اسم + حرف عطف + اسم
            </Text>
          </View>
        </View>

        {/* Examples Section */}
        <View style={styles.examplesSection}>
          <Text style={styles.examplesTitle}>مثلاً</Text>
          
          <View style={styles.exampleCard}>
            <Text style={styles.exampleArabic}>
              السَّمَوتِ{' '}
              <Text style={styles.conjunctionHighlight}>وَ</Text>{' '}
              الْأَرْضِ
            </Text>
            <Text style={styles.exampleUrdu}>
              (آسمان اور زمین)
            </Text>
          </View>

          <View style={styles.exampleCard}>
            <Text style={styles.exampleArabic}>
              الْكِتَابُ{' '}
              <Text style={styles.conjunctionHighlight}>أَوِ</Text>{' '}
              الْقَلَمُ
            </Text>
            <Text style={styles.exampleUrdu}>
              (كتاب يا قلم)
            </Text>
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>خلاصہ</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              <Text style={styles.highlightedText}>مرکب عطفی</Text>{' '}
              میں دو اسماء کے درمیان{' '}
              <Text style={styles.highlightedText}>حرف عطف</Text>{' '}
              آتا ہے۔
            </Text>
            <Text style={styles.paragraph}>
              مشہور حروف عطف: وَ (اور)، أَوِ (یا)، فَ (پھر)، ثُمَّ (پھر)، لَٰكِنَّ (لیکن)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson20Screen; 