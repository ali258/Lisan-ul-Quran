import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import { TAILWIND_COLORS, FONT_CLASSES } from '../../utils/constants';
import { getThemeColor, getColorWithOpacity } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface Lesson15ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const Lesson15Screen: React.FC<Lesson15ScreenProps> = ({ onBack }) => {
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
    scrollView: { flex: 1 }, content: { padding: 24 }, contentInner: { maxWidth: 900, alignSelf: 'center', width: '100%' },
    sectionCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode), borderRadius: 16, padding: 24, marginBottom: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode), shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1,
      shadowRadius: 8, elevation: 3, borderWidth: 1, borderColor: getThemeColor(colors.border, isDarkMode),
    },
    mainTitle: {
      fontSize: isTablet ? 32 : 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode), fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    bullet: {
      fontSize: isTablet ? 18 : 16, lineHeight: 28, textAlign: 'right', color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu), marginBottom: 10,
    },
    inlineHighlight: { color: getColorWithOpacity('orange-500', 0.9), fontWeight: 'bold' },
    equation: {
      textAlign: 'center', fontSize: isTablet ? 22 : 20, marginVertical: 12, color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableContainer: {
      marginTop: 12, borderWidth: 1, borderColor: getThemeColor(colors.border, isDarkMode), borderRadius: 12,
      overflow: 'hidden'
    },
    tableHeader: { flexDirection: 'row', backgroundColor: getColorWithOpacity('orange-500', 0.9) },
    headerCell: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
    headerText: { color: '#fff', fontWeight: 'bold', fontSize: isTablet ? 18 : 16, fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic) },
    row: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: getThemeColor(colors.border, isDarkMode) },
    cell: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12, backgroundColor: getColorWithOpacity('orange-100', 0.16) },
    cellAlt: { backgroundColor: 'transparent' },
    cellText: { fontSize: isTablet ? 18 : 16, color: getThemeColor(colors.text, isDarkMode), fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic) },
    noteText: { fontSize: isTablet ? 16 : 14, color: getThemeColor(colors.text, isDarkMode), fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu), textAlign: 'right', marginTop: 12 },
    graphRow: { flexDirection: 'row', justifyContent: 'center', gap: 16, marginBottom: 16 },
    graphBox: {
      width: isTablet ? 120 : 100,
      height: isTablet ? 100 : 80,
      borderRadius: 16,
      backgroundColor: getColorWithOpacity('red-600', 0.9),
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      elevation: 4,
    },
    graphTextEng: {
      color: '#ffffff',
      fontSize: isTablet ? 26 : 22,
      fontWeight: 'bold',
    },
    graphTextAr: {
      color: '#ffffff',
      fontSize: isTablet ? 30 : 26,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      fontWeight: 'bold',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={getThemeColor(colors.surface, isDarkMode)} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>سبق ۱۵ - معرّف باللام</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.contentInner}>
          <View style={styles.sectionCard}>
            <Text style={styles.mainTitle}>مُعرَّف باللّام</Text>
            {/* Graph: The ↔ ال */}
            <View style={styles.graphRow}>
              <View style={styles.graphBox}>
                <Text style={styles.graphTextEng}>The</Text>
              </View>
              <View style={styles.graphBox}>
                <Text style={styles.graphTextAr}>ال</Text>
              </View>
            </View>
            <Text style={styles.bullet}>جب اسم پر <Text style={styles.inlineHighlight}>تنوین</Text> ہو تو <Text style={styles.inlineHighlight}>"ال"</Text> کے داخل ہونے سے اس اسم کی تنوین ختم ہو جاتی ہے۔ یعنی <Text style={styles.inlineHighlight}>"ال"</Text> اور تنوین دونوں کسی اسم پر اکٹھے نہیں آسکتے۔</Text>
            <Text style={styles.bullet}><Text style={styles.inlineHighlight}>"ال"</Text> میں ہمزہ (ا) کو <Text style={styles.inlineHighlight}>ہمزۂ الوصل</Text> کہتے ہیں، جسے جملے کے شروع میں پڑھا جاتا ہے اور درمیانِ کلام میں نہیں پڑھا جاتا، صرف لکھا رہتا ہے۔</Text>
            <Text style={styles.bullet}>جبکہ لام (لْ) کو <Text style={styles.inlineHighlight}>لامِ تعریف</Text> کہا جاتا ہے۔</Text>
            <Text style={styles.bullet}>غیر منصرف اسماء پر حالتِ جر میں <Text style={styles.inlineHighlight}>زیر</Text> نہیں آتی؛ لیکن جب ان پر <Text style={styles.inlineHighlight}>"ال"</Text> داخل ہوتا ہے تو وہ حالتِ جر میں <Text style={styles.inlineHighlight}>زیر</Text> قبول کر لیتے ہیں۔</Text>

            <Text style={styles.equation}>ذٰلِكَ + الْكِتَابُ = ذٰلِكَ الْكِتَابُ</Text>

            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <View style={styles.headerCell}><Text style={styles.headerText}>حالت جر</Text></View>
                <View style={styles.headerCell}><Text style={styles.headerText}>حالت نصب</Text></View>
                <View style={styles.headerCell}><Text style={styles.headerText}>حالت رفع</Text></View>
                <View style={styles.headerCell}><Text style={styles.headerText}>مثال</Text></View>
              </View>

              {/* Row: diptote without ال */}
              <View style={styles.row}>
                <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>أَكْبَرَ</Text></View>
                <View style={[styles.cell]}><Text style={styles.cellText}>أَكْبَرَ</Text></View>
                <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>أَكْبَرُ</Text></View>
                <View style={styles.cell}><Text style={styles.cellText}>أَكْبَرُ (بغیر ال)</Text></View>
              </View>

              {/* Row: with ال */}
              <View style={styles.row}>
                <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>الأَكْبَرِ</Text></View>
                <View style={styles.cell}><Text style={styles.cellText}>الأَكْبَرَ</Text></View>
                <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>الأَكْبَرُ</Text></View>
                <View style={styles.cell}><Text style={styles.cellText}>الأَكْبَرُ (مع ال)</Text></View>
              </View>

              {/* Row: plural diptote without ال */}
              <View style={styles.row}>
                <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>مَساجِدَ</Text></View>
                <View style={styles.cell}><Text style={styles.cellText}>مَساجِدَ</Text></View>
                <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>مَساجِدُ</Text></View>
                <View style={styles.cell}><Text style={styles.cellText}>مَساجِدُ (بغیر ال)</Text></View>
              </View>

              {/* Row: plural with ال */}
              <View style={styles.row}>
                <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>المَساجِدِ</Text></View>
                <View style={styles.cell}><Text style={styles.cellText}>المَساجِدَ</Text></View>
                <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>المَساجِدُ</Text></View>
                <View style={styles.cell}><Text style={styles.cellText}>المَساجِدُ (مع ال)</Text></View>
              </View>
            </View>

            <Text style={styles.noteText}>نوٹ: غیر منصرف اسماء (دُو حرفی یا بنیادی طور پر ممانعت والے) حالتِ جر میں زیر قبول نہیں کرتے؛ لیکن “الـ” لگنے پر وہ زیر قبول کر لیتے ہیں۔</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson15Screen;