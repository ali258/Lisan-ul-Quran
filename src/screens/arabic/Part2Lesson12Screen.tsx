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

interface Part2Lesson12ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson12Screen: React.FC<Part2Lesson12ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

  const qamari = 'ا ب ج ح خ ع غ ف ق ك م و ه ي';
  const shamsi = 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن';

  const qamariExamples = [
    ['الأوَّل', 'البَارِئ', 'الجَبَّار', 'الحَكَم'],
    ['الخَبِير', 'العَدل', 'الغَفَّار', 'الفَتَّاح'],
    ['المَلِك', 'الكَبِير', 'القَهَّار', 'الوَهَّاب'],
    ['الجَلِيل', 'اليَوم', 'الهَادِي', 'الأخِر'],
  ];

  const shamsiExamples = [
    ['التِّين', 'الثَّاقِب', 'الدَّار', 'الذِّكْر'],
    ['الرَّحْمَن', 'الزَّيْتُون', 'السَّلَام', 'الشَّكُور'],
    ['الصَّمَد', 'الضَّار', 'الطَّيِّب', 'الظَّاهِر'],
    ['الرَّزَّاق', 'النُّور', 'اللَّطِيف', 'النَّافِع'],
  ];

  const renderGrid = (rows: string[][]) => (
    <View style={styles.tableBox}>
      {rows.map((r, ri) => (
        <View style={styles.tRow} key={`r-${ri}`}>
          {r.map((c, ci) => (
            <View key={`c-${ri}-${ci}`} style={[styles.tCell, ri % 2 === 0 ? null : styles.tCellAlt]}>
              <Text style={styles.tCellText}>{c}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );

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
    mainTitle: {
      fontSize: isTablet ? 32 : 28, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      marginBottom: 16,
      marginTop: 16,
      color: currentTheme.text, 
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subTitle: {
      fontSize: isTablet ? 22 : 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 8,
      color: currentTheme.text, fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    bullet: {
      fontSize: isTablet ? 18 : 16, lineHeight: 28, textAlign: 'right', color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu), marginBottom: 10,
    },
    letterLine: {
      textAlign: 'center', fontSize: isTablet ? 22 : 20, color: currentTheme.text,
      letterSpacing: 1, marginVertical: 8, fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic)
    },
    tableContainer: { marginTop: 14 },
    tableTitle: { fontSize: isTablet ? 22 : 20, fontWeight: 'bold', marginBottom: 8, textAlign: 'center', color: currentTheme.text, fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic) },
    tableBox: { borderWidth: 1, borderColor: currentTheme.border, borderRadius: 12, overflow: 'hidden' },
    tHeader: { backgroundColor: currentTheme.primary, paddingVertical: 12, alignItems: 'center' },
    tHeaderText: { color: currentTheme.text, fontWeight: 'bold', fontSize: isTablet ? 18 : 16, fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic) },
    tRow: { flexDirection: 'row' },
    tCell: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRightWidth: 1, borderRightColor: currentTheme.border, backgroundColor: getColorWithOpacity(currentTheme.primary, 0.14) },
    tCellAlt: { backgroundColor: 'transparent' },
    tCellText: { fontSize: isTablet ? 18 : 16, color: currentTheme.text, fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic) },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="قمری و شمسی حروف"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>قمری و شمسی حروف</Text>
        

            <Text style={styles.mainTitle}>قمری حروف</Text>
            <Text style={styles.bullet}>جن حروف کے ساتھ <Text style={{fontWeight:'bold'}}>"ال"</Text> آتا ہے اور <Text style={{fontWeight:'bold'}}>لام (ل)</Text> پڑھا جاتا ہے۔</Text>
            <Text style={styles.letterLine}>{qamari}</Text>
            <View style={{marginTop: 10, padding: 12, borderRadius: 12, backgroundColor: getColorWithOpacity(currentTheme.primary, 0.12), borderWidth: 1, borderColor: currentTheme.border}}>
              <Text style={{textAlign: 'center', fontSize: isTablet ? 18 : 16, color: currentTheme.text, fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu)}}>
                “حق کا خوف عجب غم ہے.”
              </Text>
              <Text style={{textAlign: 'center', marginTop: 4, fontSize: isTablet ? 14 : 13, color: currentTheme.textSecondary, fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu)}}>
                (اس جملے میں آنے والے تمام الفاظ قمری حروف ہیں)
              </Text>
            </View>

            <View style={styles.tableContainer}>
              <Text style={styles.tableTitle}>قمری حروف - مثالیں</Text>
              {renderGrid(qamariExamples)}
            </View>

            <Text style={styles.mainTitle}>شمسی حروف</Text>
            <Text style={styles.bullet}>جن حروف کے ساتھ <Text style={{fontWeight:'bold'}}>"ال"</Text> آتا ہے اور <Text style={{fontWeight:'bold'}}>لام (ل)</Text> نہیں پڑھا جاتا۔</Text>
            <Text style={styles.letterLine}>{shamsi}</Text>

            
            <View style={styles.tableContainer}>
              <Text style={styles.tableTitle}>شمسی حروف - مثالیں</Text>
              {renderGrid(shamsiExamples)}
            </View>
        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson12Screen; 