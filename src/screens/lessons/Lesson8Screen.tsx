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

interface Lesson8ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width } = Dimensions.get('window');

const Lesson8Screen: React.FC<Lesson8ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

  const examples = [
    {
      nominative: 'إِبْرَاهِيمُ',
      accusative: 'إِبْرَاهِيمَ',
      genitive: 'إِبْرَاهِيمَ',
      transliteration: 'Ibrahim',
    },
    {
      nominative: 'زَيْنَبُ',
      accusative: 'زَيْنَبَ',
      genitive: 'زَيْنَبَ',
      transliteration: 'Zainab',
    },
    {
      nominative: 'أُسَامَةُ',
      accusative: 'أُسَامَةَ',
      genitive: 'أُسَامَةَ',
      transliteration: 'Usama',
    },
    {
      nominative: 'عُثْمَانُ',
      accusative: 'عُثْمَانَ',
      genitive: 'عُثْمَانَ',
      transliteration: 'Usman',
    },
    {
      nominative: 'أَكْبَرُ',
      accusative: 'أَكْبَرَ',
      genitive: 'أَكْبَرَ',
      transliteration: 'Akbar',
    },
  ];

  const characteristics = [
    { sign: 'علامت', count: 'پیش، زبر' },
    { sign: 'اعرابی حالت', count: '2' },
    { sign: 'تعداد', count: '13 فیصد' },
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
    characteristicsContainer: {
      marginBottom: 24,
      alignSelf: 'center',
      minWidth: 200,
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
      marginTop: 24,
    },
    tableTitle: {
      fontSize: 20,
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
      backgroundColor: getColorWithOpacity('amber-600', 0.9),
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
    noteSection: {
      marginTop: 24,
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: getThemeColor(colors.primary, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    noteText: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'justify',
    },
    notesSection: {
      marginTop: 24,
    },
    notesTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
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

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>سبق ۸ - غیر منصرف اسماء</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>غیر منصرف اسماء</Text>
          <Text style={styles.ruleText}>
            غیر منصرف اسماء پر تنوین نہیں آتی اور انکی حالت نصب اور حالت جرّ کی ایک شکل ہوتی ہے۔
          </Text>
        </View>

        {/* Main Table - Second */}
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>غیر منصرف اسماء کی مثالیں</Text>
          
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حالت جر</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حالت نصب</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حالت رفع</Text>
              </View>
              <View style={styles.numberCell}>
                <Text style={styles.numberText}>#</Text>
              </View>
            </View>

            {/* Table Rows */}
            {examples.map((example, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{example.genitive}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{example.accusative}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{example.nominative}</Text>
                  <Text style={styles.transliterationText}>{example.transliteration}</Text>
                </View>
                <View style={styles.numberCell}>
                  <Text style={styles.numberText}>{index + 1}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Identification Table - Third */}
        <View style={styles.characteristicsContainer}>
          <Text style={styles.characteristicsTitle}>غیر منصرف کی نشاندہی</Text>
          
          <View style={styles.characteristicsTable}>
            <View style={styles.characteristicRow}>
              <View style={styles.characteristicCell}>
                <Text style={styles.characteristicText}>علامت</Text>
              </View>
              <View style={styles.characteristicCell}>
                <Text style={styles.characteristicText}>پیش، زبر</Text>
              </View>
            </View>
            <View style={styles.characteristicRow}>
              <View style={styles.characteristicCell}>
                <Text style={styles.characteristicText}>اعرابی حالت</Text>
              </View>
              <View style={styles.characteristicCell}>
                <Text style={styles.characteristicText}>2</Text>
              </View>
            </View>
            <View style={styles.characteristicRow}>
              <View style={styles.characteristicCell}>
                <Text style={styles.characteristicText}>تعداد</Text>
              </View>
              <View style={styles.characteristicCell}>
                <Text style={styles.characteristicText}>13 فیصد</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Notes Section - Bottom */}
        <View style={styles.notesSection}>
          <Text style={styles.notesTitle}>اہم نوٹ</Text>
          
          <View style={styles.noteCard}>
            <Text style={styles.noteText}>
              غیر منصرف اسم حالت جرّ میں زیر قبول نہیں کرتے، لیکن دو صورتیں میں یہ حالت جرّ میں زیر قبول کرتے ہیں۔ وہ ہم آگے پڑھیں گے۔
            </Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson8Screen; 