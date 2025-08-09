import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import { TAILWIND_COLORS, FONT_CLASSES } from '../../utils/constants';
import { getThemeColor, getColorWithOpacity } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface Lesson16ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const Lesson16Screen: React.FC<Lesson16ScreenProps> = ({ onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const isTablet = dimensions.width >= 768;

  useEffect(() => {
    const sub = Dimensions.addEventListener('change', ({ window }) => setDimensions(window));
    return () => sub?.remove();
  }, []);

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: getThemeColor(colors.background, isDarkMode) },
    header: {
      flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12,
      backgroundColor: getThemeColor(colors.surface, isDarkMode), borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode), justifyContent: 'space-between'
    },
    backButton: { padding: 8, borderRadius: 8, backgroundColor: getColorWithOpacity('blue-600', 0.1), marginRight: 16 },
    backButtonText: { fontSize: 24, color: getThemeColor(colors.text, isDarkMode) },
    headerTitle: {
      fontSize: isTablet ? 24 : 20, fontWeight: 'bold', textAlign: 'right', color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic), flex: 1, marginRight: 16,
    },
    scrollView: { flex: 1 }, content: { padding: 24 }, contentInner: { maxWidth: 1000, alignSelf: 'center', width: '100%' },
    sectionCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode), borderRadius: 16, padding: 24, marginBottom: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode), shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1,
      shadowRadius: 8, elevation: 3, borderWidth: 1, borderColor: getThemeColor(colors.border, isDarkMode),
    },
    mainTitle: {
      fontSize: isTablet ? 32 : 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode), fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subTitle: {
      fontSize: isTablet ? 22 : 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 8,
      color: getThemeColor(colors.text, isDarkMode), fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    bullet: {
      fontSize: isTablet ? 18 : 16, lineHeight: 28, textAlign: 'right', color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu), marginBottom: 10,
    },
    letterLine: {
      textAlign: 'center', fontSize: isTablet ? 22 : 20, color: getThemeColor(colors.text, isDarkMode),
      letterSpacing: 1, marginVertical: 8, fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic)
    },
    tableContainer: { marginTop: 14 },
    tableTitle: { fontSize: isTablet ? 22 : 20, fontWeight: 'bold', marginBottom: 8, textAlign: 'center', color: getThemeColor(colors.text, isDarkMode), fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic) },
    tableBox: { borderWidth: 1, borderColor: getThemeColor(colors.border, isDarkMode), borderRadius: 12, overflow: 'hidden' },
    tHeader: { backgroundColor: getColorWithOpacity('orange-500', 0.9), paddingVertical: 12, alignItems: 'center' },
    tHeaderText: { color: '#fff', fontWeight: 'bold', fontSize: isTablet ? 18 : 16, fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic) },
    tRow: { flexDirection: 'row' },
    tCell: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRightWidth: 1, borderRightColor: getThemeColor(colors.border, isDarkMode), backgroundColor: getColorWithOpacity('orange-100', 0.14) },
    tCellAlt: { backgroundColor: 'transparent' },
    tCellText: { fontSize: isTablet ? 18 : 16, color: getThemeColor(colors.text, isDarkMode), fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic) },
  });

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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={getThemeColor(colors.surface, isDarkMode)} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>سبق ۱۶ - قمری و شمسی حروف</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.contentInner}>
          <View style={styles.sectionCard}>
            <Text style={styles.mainTitle}>قمری و شمسی حروف</Text>

            <Text style={styles.mainTitle}>قمری حروف</Text>
            <Text style={styles.bullet}>جن حروف کے ساتھ <Text style={{fontWeight:'bold'}}>"ال"</Text> آتا ہے اور <Text style={{fontWeight:'bold'}}>لام (ل)</Text> پڑھا جاتا ہے۔</Text>
            <Text style={styles.letterLine}>{qamari}</Text>
            <View style={{marginTop: 10, padding: 12, borderRadius: 12, backgroundColor: getColorWithOpacity('orange-100', 0.12), borderWidth: 1, borderColor: getThemeColor(colors.border, isDarkMode)}}>
              <Text style={{textAlign: 'center', fontSize: isTablet ? 18 : 16, color: getThemeColor(colors.text, isDarkMode), fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu)}}>
                “حق کا خوف عجب غم ہے.”
              </Text>
              <Text style={{textAlign: 'center', marginTop: 4, fontSize: isTablet ? 14 : 13, color: getThemeColor(colors.textSecondary, isDarkMode), fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu)}}>
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson16Screen;