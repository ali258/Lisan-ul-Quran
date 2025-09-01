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

interface Part2Lesson4ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson4Screen: React.FC<Part2Lesson4ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

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
    tableContainer: {
      marginTop: 24,
    },
    tableTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    table: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 16,
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    tableCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cellText: {
      fontSize: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 2,
    },
    transliterationText: {
      fontSize: 10,
      color: currentTheme.textSecondary,
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
      color: currentTheme.text,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    noteText: {
      fontSize: 14,
      color: currentTheme.textSecondary,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    characteristicsTable: {
      backgroundColor: currentTheme.surface,
      borderRadius: 8,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    characteristicRow: {
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    characteristicCell: {
      flex: 1,
      alignItems: 'center',
    },
    characteristicText: {
      fontSize: 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="غیر منصرف اسماء"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>غیر منصرف اسماء</Text>
        <Text style={styles.lessonTitleEnglish}>Non-Declinable Nouns</Text>
        <Text style={styles.lessonSubtitle}> غیر منصرف اسماء پر تنوین نہیں آتی اور انکی حالت نصب اور حالت جرّ کی ایک شکل ہوتی ہے۔</Text>
        
        

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


        {/* Groups Table - Third */}
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>غیر منصرف اسماء کے چند گروپس</Text>
          
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>مثال</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>اسماء کے چند گروپس</Text>
              </View>
            </View>

            {/* Table Rows */}
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>آدَمُ - اِسْحَقُ - يُوسُفُ - أَيُّوبُ</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>انبیاء کے اکثر نام</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>خَدِيجَةُ - عَائِشَةُ - فَاطِمَةُ - زَيْنَبُ</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>عربي مونث اسمائے اعلام مثلاً</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>أسَامَةُ - طَلْحَةُ - حُذَيْفَةُ - حَمْزَةُ</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>مردوں کے نام جو گول تاء پر ختم ہوں</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>عُثْمَانُ - عَدْنَانُ - سَلْمَانُ</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>مردوں کے نام جو 'ان' پر ختم ہوں</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>جِبْرِيلُ - مِيْكُلُ - هَارُوْتُ - مَارُوْتُ</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>فرشتوں کے نام مثلاً</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>مَكَّةُ - مِصْرُ - بَاكِسْتَانُ</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>شہروں اور ملکوں کے اکثر نام مثلاً</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>أَفْعَلُ جیسے اَكْبَرُ ۔ فُعْلَاءُ جیسے صَفْرَاءُ </Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>عربی زبان میں کچھ ' وزن '</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>فِرْعَوْنُ - هَامُنُ - ابْلِيْسُ - جَهَنَّمُ</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>دیگر اسماء</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Identification Table - Fourth */}
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
              غیر منصرف اسم حالت جرّ میں زیر قبول نہیں کرتے، لیکن دو صورتیں میں یہ حالت جرّ میں زیر قبول کرتے ہیں۔
            </Text>
          </View>
          <View style={styles.noteCard}>
            <Text style={styles.noteText}> غیر منصرف اسماء  حالتِ جر میں زیر قبول نہیں کرتے؛ لیکن “الـ” لگنے پر وہ زیر قبول کر لیتے ہیں۔</Text>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson4Screen; 