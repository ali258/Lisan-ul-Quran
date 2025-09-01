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

interface Part1Lesson4ScreenProps {
  onBackPress: () => void;
}

const Part1Lesson4Screen: React.FC<Part1Lesson4ScreenProps> = ({ onBackPress }) => {
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
      minHeight: '100%',
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
      marginTop: 20,
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
    graphSection: {
      marginBottom: 40,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    graphContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    mainBox: {
      backgroundColor: '#3b82f6', // Blue color
      borderRadius: 12,
      paddingVertical: 20,
      paddingHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    mainBoxText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    typesRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
      paddingHorizontal: 8,
      flexWrap: 'wrap',
    },
    typeBox: {
      backgroundColor: '#dc2626', // Red color
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 16,
      minWidth: 90,
      maxWidth: 120,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 2,
      marginBottom: 8,
    },
    typeText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    definitionSection: {
      marginTop: 32,
    },
    definitionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    definitionContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      padding: 24,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    definitionItem: {
      marginBottom: 32,
      paddingHorizontal: 16,
    },
    definitionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.primary,
    },
    definitionNumber: {
      fontSize: 20,
      fontWeight: 'bold',
      color: currentTheme.primary,
      marginRight: 16,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      minWidth: 30,
    },
    definitionName: {
      fontSize: 22,
      fontWeight: 'bold',
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      flex: 1,
    },
    definitionText: {
      fontSize: 16,
      color: currentTheme.text,
      lineHeight: 28,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 12,
      textAlign: 'justify',
    },
    exampleText: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      lineHeight: 22,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      fontStyle: 'italic',
      paddingLeft: 16,
      borderLeftWidth: 3,
      borderLeftColor: currentTheme.primary,
    },
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="کلمہ کی اقسام"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitleEnglish}>سبق ۴</Text>
        <Text style={styles.lessonSubtitle}>
        کلمہ کی تین اقسام ہیں: اسم، فعل، حرف
        </Text>

     
        {/* Graph Section */}
        <View style={styles.graphSection}>
          <Text style={styles.sectionTitle}>کلمہ کی اقسام</Text>
          <View style={styles.graphContainer}>
            
            {/* Main Box - کلمہ */}
            <View style={styles.mainBox}>
              <Text style={styles.mainBoxText}>کلمہ</Text>
            </View>

            {/* Types Row - Responsive Layout */}
            {isTablet ? (
              // Tablet layout - horizontal
              <View style={styles.typesRow}>
                <View style={styles.typeBox}>
                  <Text style={styles.typeText}>اسم</Text>
                </View>
                <View style={styles.typeBox}>
                  <Text style={styles.typeText}>فعل</Text>
                </View>
                <View style={styles.typeBox}>
                  <Text style={styles.typeText}>حرف</Text>
                </View>
              </View>
            ) : (
              // Mobile layout - vertical stack
              <View style={{ alignItems: 'center' }}>
                <View style={[styles.typesRow, { flexDirection: 'column', alignItems: 'center' }]}>
                  <View style={styles.typeBox}>
                    <Text style={styles.typeText}>اسم</Text>
                  </View>
                  <View style={styles.typeBox}>
                    <Text style={styles.typeText}>فعل</Text>
                  </View>
                  <View style={styles.typeBox}>
                    <Text style={styles.typeText}>حرف</Text>
                  </View>
                </View>
              </View>
            )}

          </View>
        </View>

        {/* Definitions Section */}
        <View style={styles.definitionSection}>
          <Text style={styles.definitionTitle}>تفصیلی تعریفیں</Text>
          <View style={styles.definitionContainer}>
            
            {/* اسم */}
            <View style={styles.definitionItem}>
              <View style={styles.definitionHeader}>
                <Text style={styles.definitionNumber}>۱</Text>
                <Text style={styles.definitionName}>اسم</Text>
              </View>
              <Text style={styles.definitionText}>
                کسی شخص، چیز، جگہ، صفت یا کام کا نام اسم کہلاتا ہے۔ کام کے نام سے مراد مصدر ہے۔
              </Text>
              <Text style={styles.exampleText}>
                مثلاً: پڑھنا، لکھنا، مارنا، جانا، آنا، کھانا، پینا وغیرہ
              </Text>
            </View>

            {/* فعل */}
            <View style={styles.definitionItem}>
              <View style={styles.definitionHeader}>
                <Text style={styles.definitionNumber}>۲</Text>
                <Text style={styles.definitionName}>فعل</Text>
              </View>
              <Text style={styles.definitionText}>
                وہ کلمہ ہے جس میں کسی کام کا کرنا یا واقع ہونا زمانے کی قید کے ساتھ پایا جائے۔
              </Text>
              <Text style={styles.exampleText}>
                مثلاً: "مارا" ایک فعل ہے جس میں مارنے کا کام زمانہ ماضی میں واقع ہوا ہے، جبکہ "مارنا" ایک اسم ہے جس میں کام کا مفہوم تو موجود ہے لیکن زمانے کی قید نہیں ہے۔
              </Text>
            </View>

            {/* حرف */}
            <View style={styles.definitionItem}>
              <View style={styles.definitionHeader}>
                <Text style={styles.definitionNumber}>۳</Text>
                <Text style={styles.definitionName}>حرف</Text>
              </View>
              <Text style={styles.definitionText}>
                وہ کلمہ ہے جس کے معنی ہوتے تو ہیں لیکن جب تک یہ کسی اسم یا فعل کے ساتھ استعمال نہ ہو اس کا مطلب سمجھ میں نہیں آتا۔
              </Text>
              <Text style={styles.exampleText}>
                مثلاً: "پر" ایک بامعنی لفظ ہے لیکن 100 مرتبہ بھی "پر پر پر" کی رٹ لگائی جائے تو کوئی مطلب سمجھ میں نہیں آتا، جبکہ ایک ہی مرتبہ "کرسی پر" کہنے سے مطلب سمجھ میں آجاتا ہے۔
              </Text>
            </View>

          </View>
        </View>

        {/* Note Section */}
        <View style={styles.contentCard}>
          <Text style={styles.lessonSubtitle}>نوٹ:</Text>
          <Text style={styles.contentText}>
            • کلمہ کی تین اقسام ہیں: اسم، فعل، حرف{'\n'}
            • اسم میں زمانے کی قید نہیں ہوتی{'\n'}
            • فعل میں زمانے کی قید ہوتی ہے{'\n'}
            • حرف کا مطلب تب واضح ہوتا ہے جب یہ اسم یا فعل کے ساتھ استعمال ہو{'\n'}
            • ہر کلمہ ان تین میں سے ایک ہوتا ہے
          </Text>
        </View>

       
        
      </ScrollView>
    </View>
  );
};

export default Part1Lesson4Screen; 