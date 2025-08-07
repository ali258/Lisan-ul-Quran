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

interface Lesson4ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');

const Lesson4Screen: React.FC<Lesson4ScreenProps> = ({ onNavigate, onBack }) => {
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
      fontSize: 20,
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
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      opacity: 0.8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.7,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      marginTop: 16,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    graphSection: {
      marginBottom: 40,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    graphContainer: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 32,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    mainBox: {
      backgroundColor: '#3b82f6', // Blue color
      borderRadius: 12,
      paddingVertical: 24,
      paddingHorizontal: 32,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    mainBoxText: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    typesRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 24,
      paddingHorizontal: 16,
    },
    typeBox: {
      backgroundColor: '#dc2626', // Red color
      borderRadius: 12,
      paddingVertical: 20,
      paddingHorizontal: 24,
      minWidth: 110,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 2,
    },
    typeText: {
      fontSize: 20,
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
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    definitionContainer: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      padding: 24,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
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
      borderBottomColor: getColorWithOpacity(colors.primary, 0.2),
    },
    definitionNumber: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      marginRight: 16,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      minWidth: 30,
    },
    definitionName: {
      fontSize: 22,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      flex: 1,
    },
    definitionText: {
      fontSize: 16,
      color: getThemeColor(colors.text, isDarkMode),
      lineHeight: 28,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 12,
      textAlign: 'justify',
    },
    exampleText: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 22,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      fontStyle: 'italic',
      paddingLeft: 16,
      borderLeftWidth: 3,
      borderLeftColor: getThemeColor(colors.primary, isDarkMode),
    },
    noteSection: {
      marginTop: 24,
      padding: 16,
      backgroundColor: getColorWithOpacity(colors.primary, 0.1),
      borderRadius: 8,
      borderLeftWidth: 4,
      borderLeftColor: getThemeColor(colors.primary, isDarkMode),
    },
    noteTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 20,
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
        <Text style={styles.headerTitle}>کلمہ کی اقسام</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>کلمہ کی اقسام</Text>
          <Text style={styles.subtitle}>سبق ۴</Text>
          <Text style={styles.description}>
            کلمہ کی تین اقسام ہیں: اسم، فعل، حرف
          </Text>
        </View>

        {/* Graph Section */}
        <View style={styles.graphSection}>
          <Text style={styles.sectionTitle}>کلمہ کی اقسام</Text>
          <View style={styles.graphContainer}>
            
            {/* Main Box - کلمہ */}
            <View style={styles.mainBox}>
              <Text style={styles.mainBoxText}>کلمہ</Text>
            </View>

            {/* Types Row */}
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
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>نوٹ:</Text>
          <Text style={styles.noteText}>
            • کلمہ کی تین اقسام ہیں: اسم، فعل، حرف{'\n'}
            • اسم میں زمانے کی قید نہیں ہوتی{'\n'}
            • فعل میں زمانے کی قید ہوتی ہے{'\n'}
            • حرف کا مطلب تب واضح ہوتا ہے جب یہ اسم یا فعل کے ساتھ استعمال ہو{'\n'}
            • ہر کلمہ ان تین میں سے ایک ہوتا ہے
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson4Screen; 