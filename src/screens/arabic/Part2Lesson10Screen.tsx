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
import { getThemeColor } from '../../../Lisan-ul-Quran/src/utils/colorUtils';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

interface Part2Lesson10ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson10Screen: React.FC<Part2Lesson10ScreenProps> = ({ onBackPress }) => {
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
    sectionCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    mainTitle: {
      fontSize: isTablet ? 32 : 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    explanationText: {
      fontSize: isTablet ? 18 : 16,
      lineHeight: 28,
      textAlign: 'right',
      marginBottom: 8,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    highlight: {
      color: getColorWithOpacity(currentTheme.primary, 0.9),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      fontWeight: 'bold',
    },
    diagramContainer: {
      alignItems: 'center',
      width: '100%',
      marginTop: 12,
    },
    mainBox: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 18,
      paddingHorizontal: 28,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
    },
    mainBoxText: {
      fontSize: isTablet ? 24 : 20,
      color: currentTheme.text,
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
      backgroundColor: getColorWithOpacity(currentTheme.secondary, 0.12),
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 22,
      minWidth: 130,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: currentTheme.secondary,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    subText: {
      fontSize: isTablet ? 20 : 18,
      color: currentTheme.text,
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
      borderColor: currentTheme.border,
      borderRadius: 12,
      overflow: 'hidden',
    },
    infoHeaderRow: {
      flexDirection: 'row',
      backgroundColor: currentTheme.primary,
      borderBottomWidth: 2,
      borderBottomColor: currentTheme.border,
    },
    infoHeaderCell: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderLeftWidth: 1,
      borderLeftColor: currentTheme.border,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoHeaderText: {
      color: currentTheme.text,
      fontWeight: 'bold',
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    infoRow: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderTopColor: currentTheme.border,
    },
    infoCell: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderLeftWidth: 1,
      borderLeftColor: currentTheme.border,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoCellText: {
      color: currentTheme.text,
      fontSize: isTablet ? 16 : 14,
      textAlign: 'center',
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    circleNode: {
      width: 80,
      height: 80,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      marginHorizontal: 8,
    },
    circleNodeText: {
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    centerNode: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: currentTheme.primary,
    },
    centerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    circleContainer: {
      alignItems: 'center',
      width: '100%',
      marginTop: 8,
    },
    circleRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 16,
      marginBottom: 16,
    },
    circleRowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      marginBottom: 16,
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="وسعت"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>وسعت</Text>
        <Text style={styles.lessonTitleEnglish}>Status</Text>
        
        <View style={styles.sectionCard}>
            
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

            <View style={styles.circleContainer}>
              {/* Row 1 */}
              <View style={styles.circleRow}>
                <View style={[styles.circleNode, { backgroundColor: getColorWithOpacity(currentTheme.primary, 0.15), borderColor: currentTheme.primary }]}>
                  <Text style={styles.circleNodeText}>اسم علم</Text>
                </View>
                <View style={[styles.circleNode, { backgroundColor: getColorWithOpacity(currentTheme.accent, 0.12), borderColor: currentTheme.accent }]}>
                  <Text style={styles.circleNodeText}>اسم ضمیر</Text>
                </View>
                <View style={[styles.circleNode, { backgroundColor: getColorWithOpacity(currentTheme.secondary, 0.12), borderColor: currentTheme.secondary }]}>
                  <Text style={styles.circleNodeText}>اسم اشارہ</Text>
                </View>
              </View>

              {/* Row 2 with center */}
              <View style={styles.circleRowCenter}>
                <View style={[styles.circleNode, { backgroundColor: getColorWithOpacity(currentTheme.primary, 0.12), borderColor: currentTheme.primary }]}>
                  <Text style={styles.circleNodeText}>معرّف باللام</Text>
                </View>

                <View style={styles.centerNode}>
                  <Text style={styles.centerText}>معرفہ</Text>
                </View>

                <View style={[styles.circleNode, { backgroundColor: getColorWithOpacity(currentTheme.accent, 0.12), borderColor: currentTheme.accent }]}>
                  <Text style={styles.circleNodeText}>اسم موصول</Text>
                </View>
              </View>

              {/* Row 3 */}
              <View style={styles.circleRow}>
                <View style={[styles.circleNode, { backgroundColor: getColorWithOpacity(currentTheme.primary, 0.12), borderColor: currentTheme.primary }]}>
                  <Text style={styles.circleNodeText}>مضاف الی المعرفہ</Text>
                </View>
                <View style={[styles.circleNode, { backgroundColor: getColorWithOpacity(currentTheme.secondary, 0.12), borderColor: currentTheme.secondary }]}>
                  <Text style={styles.circleNodeText}>مُنادی</Text>
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
                <View style={[styles.infoHeaderCell, { flex: 2 }]}>
                  <Text style={styles.infoHeaderText}>تعریف</Text>
                </View>
                <View style={[styles.infoHeaderCell, { flex: 1.5 }]}>
                  <Text style={styles.infoHeaderText}>مثال</Text>
                </View>
                <View style={[styles.infoHeaderCell, { flex: 1.2 }]}>
                  <Text style={styles.infoHeaderText}>معرفہ کی اقسام</Text>
                </View>
              </View>

              {/* Rows */}
              {[
                {
                  type: 'اسم اعلام',
                  def: 'کسی خاص شخص، چیز یا جگہ کا نام',
                  ex: 'زَیْدٌ، فَاطِمَۃُ، مَکَّۃُ، جَہَنَّمُ',
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
                  def: 'اردو کے "جو"، "جس" وغیرہ جیسے الفاظ',
                  ex: 'الَّذِي، الَّتِي',
                },
                {
                  type: 'مُعرَّف باللام',
                  def: 'وہ اسم جس پر "ال" داخل ہو معرف باللام کہلاتا ہے',
                  ex: 'الْكِتَابُ',
                },
              ].map((row, idx) => (
                <View
                  key={row.type}
                  style={styles.infoRow}
                >
                  <View style={[styles.infoCell, { flex: 2 }]}>
                    <Text style={styles.infoCellText}>{row.def}</Text>
                  </View>
                  <View style={[styles.infoCell, { flex: 1.5 }]}>
                    <Text style={styles.infoCellText}>{row.ex}</Text>
                  </View>
                  <View style={[styles.infoCell, { flex: 1.2 }]}>
                    <Text style={styles.infoCellText}>{row.type}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson10Screen; 