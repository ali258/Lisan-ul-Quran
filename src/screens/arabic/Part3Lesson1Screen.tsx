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

interface Part3Lesson1ScreenProps {
  onBackPress: () => void;
}

const Part3Lesson1Screen: React.FC<Part3Lesson1ScreenProps> = ({ onBackPress }) => {
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
    contentSection: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
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
    visualSection: {
      alignItems: 'center',
      marginTop: 32,
    },
    visualTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      marginBottom: 24,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    boxesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 4,
    },
    box: {
      width: isTablet ? 100 : 80,
      height: isTablet ? 70 : 60,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    boxText: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    arrow: {
      fontSize: isTablet ? 22 : 18,
      color: currentTheme.primary,
      marginHorizontal: 6,
    },
    plusSign: {
      fontSize: isTablet ? 18 : 14,
      color: currentTheme.primary,
      marginHorizontal: 6,
    },
    mobileBoxesContainer: {
      width: '100%',
      alignItems: 'center',
    },
    mobileRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 12,
      gap: 4,
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="مرکبات"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>مرکبات</Text>
        <Text style={styles.lessonTitleEnglish}>Compounds</Text>
        

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
          
          {isTablet ? (
            // Tablet layout - horizontal
            <View style={styles.boxesContainer}>
              <View style={[styles.box, { backgroundColor: currentTheme.primary }]}>
                <Text style={styles.boxText}>مفرد</Text>
              </View>
              
              <Text style={styles.plusSign}>+</Text>
              
              <View style={[styles.box, { backgroundColor: currentTheme.primary }]}>
                <Text style={styles.boxText}>مفرد</Text>
              </View>
              
              <Text style={styles.arrow}>→</Text>
              
              <View style={[styles.box, { backgroundColor: currentTheme.primary }]}>
                <Text style={styles.boxText}>مرکب</Text>
              </View>
            </View>
          ) : (
            // Mobile layout - vertical stack
            <View style={styles.mobileBoxesContainer}>
              <View style={styles.mobileRow}>
                <View style={[styles.box, { backgroundColor: currentTheme.primary }]}>
                  <Text style={styles.boxText}>مفرد</Text>
                </View>
                
                <Text style={styles.plusSign}>+</Text>
                
                <View style={[styles.box, { backgroundColor: currentTheme.primary }]}>
                  <Text style={styles.boxText}>مفرد</Text>
                </View>
              </View>
              
              <Text style={styles.arrow}>↓</Text>
              
              <View style={[styles.box, { backgroundColor: currentTheme.primary }]}>
                <Text style={styles.boxText}>مرکب</Text>
              </View>
            </View>
          )}
        </View>

        
      </ScrollView>
    </View>
  );
};

export default Part3Lesson1Screen; 