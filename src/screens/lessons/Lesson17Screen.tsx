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

interface Lesson17ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const Lesson17Screen: React.FC<Lesson17ScreenProps> = ({ onBack }) => {
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
    visualSection: {
      alignItems: 'center',
      marginTop: 32,
    },
    visualTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 24,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    boxesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
    },
    box: {
      width: isTablet ? 120 : 100,
      height: isTablet ? 80 : 70,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    boxText: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    arrow: {
      fontSize: isTablet ? 24 : 20,
      color: getThemeColor(colors.primary, isDarkMode),
      marginHorizontal: 8,
    },
    plusSign: {
      fontSize: isTablet ? 20 : 16,
      color: getThemeColor(colors.primary, isDarkMode),
      marginHorizontal: 8,
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
        <Text style={styles.headerTitle}>مرکبات</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonNumber}>Lesson 17</Text>
          <Text style={styles.mainTitle}>مرکبات</Text>
          <Text style={styles.subtitle}>Compounds</Text>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>تعریف مفرد</Text>
          
          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              کوئی بھی لفظ خواہ{' '}
              <Text style={styles.highlightedText}>اسم</Text>{' '}
              ہو،{' '}
              <Text style={styles.highlightedText}>فعل</Text>{' '}
              ہو یا{' '}
              <Text style={styles.highlightedText}>حرف</Text>{' '}
              ہو جب تن تنہا جملے سے ہٹ کر استعمال ہو رہا ہو تو عربی گرامر کی اصطلاح میں اس لفظ کو{' '}
              <Text style={styles.highlightedText}>'مفرد'</Text>{' '}
              کہتے ہیں ۔
            </Text>
          </View>

          <View style={styles.textBlock}>
            <Text style={styles.paragraph}>
              <Text style={styles.highlightedText}>مفرد</Text>{' '}
              جب{' '}
              <Text style={styles.highlightedText}>مفرد</Text>{' '}
              سے ملتا ہے تو{' '}
              <Text style={styles.highlightedText}>مرکب</Text>{' '}
              بنتا ہے یعنی:
            </Text>
          </View>
        </View>

        {/* Visual Representation */}
        <View style={styles.visualSection}>
          <Text style={styles.visualTitle}>تصویری نمائش</Text>
          
          <View style={styles.boxesContainer}>
            <View style={[styles.box, { backgroundColor: getThemeColor('primary-400', isDarkMode) }]}>
              <Text style={styles.boxText}>مرکب</Text>
            </View>
            
            <Text style={styles.arrow}>←</Text>
            
            <View style={[styles.box, { backgroundColor: getThemeColor('primary-600', isDarkMode) }]}>
              <Text style={styles.boxText}>مفرد</Text>
            </View>
            
            <Text style={styles.plusSign}>+</Text>
            
            <View style={[styles.box, { backgroundColor: getThemeColor('primary-600', isDarkMode) }]}>
              <Text style={styles.boxText}>مفرد</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson17Screen; 