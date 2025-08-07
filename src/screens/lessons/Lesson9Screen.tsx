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

interface Lesson9ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width } = Dimensions.get('window');

const Lesson9Screen: React.FC<Lesson9ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

  const examples = [
    {
      nominative: 'هذا',
      accusative: 'هذا',
      genitive: 'هذا',
      transliteration: 'hādhā',
    },
    {
      nominative: 'ذلک',
      accusative: 'ذلک',
      genitive: 'ذلک',
      transliteration: 'dhālika',
    },
    {
      nominative: 'الَّذِي',
      accusative: 'الَّذِي',
      genitive: 'الَّذِي',
      transliteration: 'alladhī',
    },
  ];

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
      marginBottom: 32,
    },
    mainTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    ruleText: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 24,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 24,
      paddingHorizontal: 16,
    },
    bottomSection: {
      flexDirection: width >= 768 ? 'row' : 'column',
      gap: 24,
    },
    characteristicsContainer: {
      flex: 1,
      marginBottom: width >= 768 ? 0 : 24,
    },
    characteristicsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    characteristicsTable: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 8,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    characteristicRow: {
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    characteristicCell: {
      flex: 1,
      alignItems: 'center',
    },
    characteristicText: {
      fontSize: 14,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableContainer: {
      flex: 1,
    },
    tableTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    table: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 16,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity('orange-500', 0.9),
      paddingVertical: 12,
      paddingHorizontal: 8,
    },
    headerCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
    },
    tableCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cellText: {
      fontSize: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 2,
    },
    transliterationText: {
      fontSize: 10,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
    },
    numberCell: {
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={getThemeColor(colors.surface, isDarkMode)}
      />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>سبق ۹ - مَبْنِي اسماء</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>مَبْنِي اسماء</Text>
          <Text style={styles.ruleText}>
            یہ باقی رہنے والے 2 فیصد اسماء ہیں جو تینوں اعرابی حالتوں میں ایک ہی شکل اختیار کیے رہتے ہیں۔
          </Text>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.characteristicsContainer}>
            <Text style={styles.characteristicsTitle}>مبنی اسماء کی نشانی</Text>
            
            <View style={styles.characteristicsTable}>
              <View style={styles.characteristicRow}>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>علامت</Text>
                </View>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>کوئی خاص نہیں</Text>
                </View>
              </View>
              <View style={styles.characteristicRow}>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>اعرابی حالت</Text>
                </View>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>1</Text>
                </View>
              </View>
              <View style={styles.characteristicRow}>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>تعداد</Text>
                </View>
                <View style={styles.characteristicCell}>
                  <Text style={styles.characteristicText}>2 فیصد</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.tableContainer}>
            <Text style={styles.tableTitle}>مبنی اسماء کی مثالیں</Text>
            
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <View style={styles.headerCell}>
                  <Text style={styles.headerText}>حالت رفع</Text>
                </View>
                <View style={styles.headerCell}>
                  <Text style={styles.headerText}>حالت نصب</Text>
                </View>
                <View style={styles.headerCell}>
                  <Text style={styles.headerText}>حالت جر</Text>
                </View>
                <View style={styles.numberCell}>
                  <Text style={styles.numberText}>#</Text>
                </View>
              </View>

              {examples.map((example, index) => (
                <View key={index} style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>{example.nominative}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>{example.accusative}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>{example.genitive}</Text>
                    <Text style={styles.transliterationText}>{example.transliteration}</Text>
                  </View>
                  <View style={styles.numberCell}>
                    <Text style={styles.numberText}>{index + 1}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson9Screen; 