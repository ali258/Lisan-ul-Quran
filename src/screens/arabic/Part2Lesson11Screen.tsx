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

interface Part2Lesson11ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson11Screen: React.FC<Part2Lesson11ScreenProps> = ({ onBackPress }) => {
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
    graphRow: { flexDirection: 'row', justifyContent: 'center', gap: 16, marginBottom: 16 },
    graphBox: {
      width: isTablet ? 120 : 100,
      height: isTablet ? 100 : 80,
      borderRadius: 16,
      backgroundColor: currentTheme.primary,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      elevation: 4,
    },
    graphTextEng: {
      color: currentTheme.text,
      fontSize: isTablet ? 26 : 22,
      fontWeight: 'bold',
    },
    graphTextAr: {
      color: currentTheme.text,
      fontSize: isTablet ? 30 : 26,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      fontWeight: 'bold',
    },
    bullet: {
      fontSize: isTablet ? 18 : 16, lineHeight: 28, textAlign: 'right', color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu), marginBottom: 10,
    },
    inlineHighlight: { color: getColorWithOpacity('orange-500', 0.9), fontWeight: 'bold' },
    equation: {
      textAlign: 'center', fontSize: isTablet ? 22 : 20, marginVertical: 12, color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tableContainer: {
      marginTop: 12, borderWidth: 1, borderColor: currentTheme.border, borderRadius: 12,
      overflow: 'hidden'
    },
    tableHeader: { flexDirection: 'row', backgroundColor: currentTheme.primary },
    headerCell: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
    headerText: { color: currentTheme.text, fontWeight: 'bold', fontSize: isTablet ? 18 : 16, fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic) },
    row: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: currentTheme.border },
    cell: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12, backgroundColor: currentTheme.primary },
    cellAlt: { backgroundColor: 'transparent' },
    cellText: { 
      fontSize: isTablet ? 18 : 16, 
      color: currentTheme.text, 
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    noteText: { fontSize: isTablet ? 16 : 14, color: currentTheme.text, fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu), textAlign: 'right', marginTop: 12 },
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
      marginTop: 12,
    },
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="مُعرَّف باللّام"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>مُعرَّف باللّام</Text>
        
        
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
            <View style={styles.cell}>
              <Text style={styles.cellText}>أَكْبَرُ</Text>
              <Text style={styles.cellText}>(بغیر ال)</Text>
            </View>
          </View>

          {/* Row: with ال */}
          <View style={styles.row}>
            <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>الأَكْبَرِ</Text></View>
            <View style={styles.cell}><Text style={styles.cellText}>الأَكْبَرَ</Text></View>
            <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>الأَكْبَرُ</Text></View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>الأَكْبَرُ</Text>
              <Text style={styles.cellText}>(مع ال)</Text>
            </View>
          </View>

          {/* Row: plural diptote without ال */}
          <View style={styles.row}>
            <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>مَساجِدَ</Text></View>
            <View style={styles.cell}><Text style={styles.cellText}>مَساجِدَ</Text></View>
            <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>مَساجِدُ</Text></View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>مَساجِدُ</Text>
              <Text style={styles.cellText}>(بغیر ال)</Text>
            </View>
          </View>

          {/* Row: plural with ال */}
          <View style={styles.row}>
            <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>المَساجِدِ</Text></View>
            <View style={styles.cell}><Text style={styles.cellText}>المَساجِدَ</Text></View>
            <View style={[styles.cell, styles.cellAlt]}><Text style={styles.cellText}>المَساجِدُ</Text></View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>المَساجِدُ</Text>
              <Text style={styles.cellText}>(مع ال)</Text>
            </View>
          </View>
        </View>

        <View style={styles.noteCard}>
        <Text style={styles.noteText}>نوٹ: غیر منصرف اسماء (دُو حرفی یا بنیادی طور پر ممانعت والے) حالتِ جر میں زیر قبول نہیں کرتے؛ لیکن “الـ” لگنے پر وہ زیر قبول کر لیتے ہیں۔</Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson11Screen; 