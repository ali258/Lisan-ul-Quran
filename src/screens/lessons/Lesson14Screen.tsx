import React, { useEffect, useState } from 'react';
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

interface Lesson14ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const Lesson14Screen: React.FC<Lesson14ScreenProps> = ({ onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const isTablet = dimensions.width >= 768;

  useEffect(() => {
    const sub = Dimensions.addEventListener('change', ({ window }) => setDimensions(window));
    return () => sub?.remove();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor(colors.background, isDarkMode),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderBottomWidth: 1,
      borderBottomColor: getThemeColor(colors.border, isDarkMode),
      justifyContent: 'space-between',
    },
    backButton: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: getColorWithOpacity('blue-600', 0.1),
      marginRight: 16,
    },
    backButtonText: {
      fontSize: 24,
      color: getThemeColor(colors.text, isDarkMode),
    },
    headerTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      textAlign: 'right',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      flex: 1,
      marginRight: 16,
    },
    scrollView: { flex: 1 },
    content: { padding: 24 },
    contentInner: { maxWidth: 900, alignSelf: 'center', width: '100%' },
    sectionCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    mainTitle: {
      fontSize: isTablet ? 32 : 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    explanationText: {
      fontSize: isTablet ? 18 : 16,
      lineHeight: 28,
      textAlign: 'right',
      marginBottom: 8,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    highlight: {
      color: getColorWithOpacity('orange-500', 0.9),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      fontWeight: 'bold',
    },
    diagramContainer: {
      alignItems: 'center',
      width: '100%',
      marginTop: 12,
    },
    mainBox: {
      backgroundColor: getColorWithOpacity('red-600', 0.9),
      borderRadius: 12,
      paddingVertical: 18,
      paddingHorizontal: 28,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
    },
    mainBoxText: {
      fontSize: isTablet ? 24 : 20,
      color: '#ffffff',
      fontWeight: 'bold',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 16,
      width: '100%',
    },
    subBox: {
      backgroundColor: getColorWithOpacity('secondary', 0.12),
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 22,
      minWidth: 130,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: getThemeColor(colors.secondary, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    subText: {
      fontSize: isTablet ? 20 : 18,
      color: getThemeColor(colors.text, isDarkMode),
      fontWeight: 'bold',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    notes: {
      marginTop: 16,
      gap: 8,
    },
    infoTable: {
      width: '100%',
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      borderRadius: 12,
      overflow: 'hidden',
    },
    infoHeaderRow: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity('orange-500', 0.9),
    },
    infoHeaderCell: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderLeftWidth: 1,
      borderLeftColor: getThemeColor(colors.border, isDarkMode),
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoHeaderText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    infoRow: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderTopColor: getThemeColor(colors.border, isDarkMode),
    },
    infoCell: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderLeftWidth: 1,
      borderLeftColor: getThemeColor(colors.border, isDarkMode),
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoCellText: {
      color: getThemeColor(colors.text, isDarkMode),
      fontSize: isTablet ? 16 : 14,
      textAlign: 'center',
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
  });

  const circleStyles = circleStylesFactory(isDarkMode, colors);

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
        <Text style={styles.headerTitle}>سبق ۱۴ - وسعت</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.contentInner}>
          <View style={styles.sectionCard}>
            <Text style={styles.mainTitle}>وسعت</Text>
            <Text style={styles.explanationText}>
              وسعت کے اعتبار سے اسم دو طرح کا ہوتا ہے: {' '}
              <Text style={styles.highlight}>نکرہ</Text>{' '} اور {' '}
              <Text style={styles.highlight}>معرفہ</Text>۔
            </Text>

            <View style={styles.diagramContainer}>
              <View style={styles.mainBox}>
                <Text style={styles.mainBoxText}>وسعت</Text>
              </View>
              <View style={styles.subRow}>
                <View style={styles.subBox}>
                  <Text style={styles.subText}>نکرہ</Text>
                </View>
                <View style={styles.subBox}>
                  <Text style={styles.subText}>معرفہ</Text>
                </View>
              </View>

              <View style={styles.notes}>
                <Text style={styles.explanationText}>نکرہ کا دائرہ بہت وسیع ہے جبکہ معرفہ کا دائرہ محدود ہے۔</Text>
                <Text style={styles.explanationText}>عربی زبان میں استعمال ہونے والا ہر اسم "نکرہ" شمار ہوگا جب تک اس کا معرفہ ہونا ثابت نہ ہو۔</Text>
              </View>
            </View>
          </View>

          {/* معرفہ کی 7 صورتیں */}
          <View style={styles.sectionCard}>
            <Text style={styles.mainTitle}>معرفہ کی ۷ صورتیں</Text>
            <Text style={styles.explanationText}>عربی میں اسم درج ذیل 7 صورتوں میں <Text style={styles.highlight}>معرفہ</Text> ہو سکتا ہے۔</Text>

            <View style={{ alignItems: 'center', width: '100%', marginTop: 8 }}>
              {/* Row 1 */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
                <View style={[circleStyles.node, { backgroundColor: getColorWithOpacity('success', 0.15), borderColor: getThemeColor(colors.success, isDarkMode) }]}>
                  <Text style={circleStyles.nodeText}>اسم علم</Text>
                </View>
                <View style={[circleStyles.node, { backgroundColor: getColorWithOpacity('primary', 0.12), borderColor: getThemeColor(colors.primary, isDarkMode) }]}>
                  <Text style={circleStyles.nodeText}>اسم ضمیر</Text>
                </View>
                <View style={[circleStyles.node, { backgroundColor: getColorWithOpacity('accent', 0.12), borderColor: getThemeColor(colors.accent, isDarkMode) }]}>
                  <Text style={circleStyles.nodeText}>اسم اشارہ</Text>
                </View>
              </View>

              {/* Row 2 with center */}
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 16 }}>
                <View style={[circleStyles.node, { backgroundColor: getColorWithOpacity('secondary', 0.12), borderColor: getThemeColor(colors.secondary, isDarkMode) }]}>
                  <Text style={circleStyles.nodeText}>معرّف باللام</Text>
                </View>

                <View style={circleStyles.centerNode}>
                  <Text style={circleStyles.centerText}>معرفہ</Text>
                </View>

                <View style={[circleStyles.node, { backgroundColor: getColorWithOpacity('primary', 0.12), borderColor: getThemeColor(colors.primary, isDarkMode) }]}>
                  <Text style={circleStyles.nodeText}>اسم موصول</Text>
                </View>
              </View>

              {/* Row 3 */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 16 }}>
                <View style={[circleStyles.node, { backgroundColor: getColorWithOpacity('success', 0.12), borderColor: getThemeColor(colors.success, isDarkMode) }]}>
                  <Text style={circleStyles.nodeText}>مضاف الی المعرفہ</Text>
                </View>
                <View style={[circleStyles.node, { backgroundColor: getColorWithOpacity('accent', 0.12), borderColor: getThemeColor(colors.accent, isDarkMode) }]}>
                  <Text style={circleStyles.nodeText}>مُنادی</Text>
                </View>
              </View>
            </View>
          </View>

          {/* معرفہ کی اقسام - Table */}
          <View style={styles.sectionCard}>
            <Text style={styles.mainTitle}>معرفہ کی اقسام</Text>
            <View style={styles.infoTable}>
              {/* Header */}
              <View style={styles.infoHeaderRow}>
                <View style={[styles.infoHeaderCell, { flex: 1.8 }]}>
                  <Text style={styles.infoHeaderText}>تعریف</Text>
                </View>
                <View style={[styles.infoHeaderCell, { flex: 1.4 }]}>
                  <Text style={styles.infoHeaderText}>مثال</Text>
                </View>
                <View style={[styles.infoHeaderCell, { flex: 1.1 }]}>
                  <Text style={styles.infoHeaderText}>معرفہ کی اقسام</Text>
                </View>
              </View>

              {/* Rows */}
              {[
                {
                  type: 'اسم اعلام',
                  def: 'کسی خاص شخص، چیز یا جگہ کا نام',
                  ex: 'زَیْدٌ، فَاطِمَۃُ، مَکَّۃُ، جَہَنَّمُ',
                },
                {
                  type: 'اسماءِ ضمائر',
                  def: 'وہ الفاظ جو کسی اسم کی جگہ استعمال ہوتے ہیں',
                  ex: 'هُوَ، هِيَ (وہ)، أَنْتَ (تو)، أَنَا، نَحْنُ (ہم)',
                },
                {
                  type: 'اسماءِ اشارہ',
                  def: 'عربی زبان میں کسی چیز کی طرف اشارہ کرنا',
                  ex: 'هٰذَا (یہ)، هٰذِهِ (یہ)',
                },
                {
                  type: 'اسماءِ موصولہ',
                  def: 'اردو کے \"جو\"، \"جس\" وغیرہ جیسے الفاظ',
                  ex: 'الَّذِي، الَّتِي',
                },
                {
                  type: 'مُعرَّف باللام',
                  def: 'وہ اسم جس پر “ال” داخل ہو معرف باللام کہلاتا ہے',
                  ex: 'الْكِتَابُ',
                },
              ].map((row, idx) => (
                <View
                  key={row.type}
                  style={[
                    styles.infoRow,
                    { backgroundColor: idx % 2 === 0 ? getColorWithOpacity('orange-100', 0.18) : 'transparent' },
                  ]}
                >
                  <View style={[styles.infoCell, { flex: 1.8 }]}>
                    <Text style={styles.infoCellText}>{row.def}</Text>
                  </View>
                  <View style={[styles.infoCell, { flex: 1.4 }]}>
                    <Text style={styles.infoCellText}>{row.ex}</Text>
                  </View>
                  <View style={[styles.infoCell, { flex: 1.1 }]}>
                    <Text style={styles.infoCellText}>{row.type}</Text>
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

const circleStylesFactory = (isDarkMode: boolean, colors: typeof TAILWIND_COLORS.light | typeof TAILWIND_COLORS.dark) => {
  const { width } = Dimensions.get('window');
  const isTablet = width >= 768;
  const size = isTablet ? 120 : 96;
  const centerSize = isTablet ? 140 : 112;

  return StyleSheet.create({
    node: {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 4,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
    },
    nodeText: {
      color: getThemeColor(colors.text, isDarkMode),
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: isTablet ? 18 : 16,
      lineHeight: isTablet ? 26 : 22,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    centerNode: {
      width: centerSize,
      height: centerSize,
      borderRadius: centerSize / 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColorWithOpacity('error', 0.9),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    },
    centerText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: isTablet ? 22 : 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
  });
};

export default Lesson14Screen;