import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import { 
  getCurrentTheme, 
  THEME_CONFIG,  
  getColorWithOpacity, 
  getFontWithProperFallback, 
  FONT_CLASSES,
  getIsmTheme
} from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';




interface HarfLesson4ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const HarfLesson4Screen: React.FC<HarfLesson4ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode); // Use ISM blue theme

  // Colors object for backward compatibility
  const colors = currentTheme;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
      },
      scrollView: {
        flex: 1,
      },
      content: {
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 120,
      },
      title: {
        fontSize: isTablet ? 32 : 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: currentTheme.text,
        fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      },
      subtitle: {
        fontSize: isTablet ? 18 : 16,
        textAlign: 'center',
        marginBottom: 32,
        color: colors.textSecondary,
        lineHeight: 24,
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      section: {
        marginBottom: 32,
      },
      sectionTitle: {
        fontSize: isTablet ? 22 : 18,
        fontWeight: 'bold',
        marginBottom: 16,
        color: currentTheme.text,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      tableContainer: {
        backgroundColor: colors.surface,
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      },
      tableHeader: {
        backgroundColor: currentTheme.primary,
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 12,
      },
      tableHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      tableHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: currentTheme.text,
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
        textAlign: 'center',
      },
      tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      },
      tableCell: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 60,
      },
      tableCellText: {
        fontSize: 14,
        color: colors.text,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
        lineHeight: 20,
      },
      tableCellArabic: {
        fontSize: 18,
        color: colors.text,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
        lineHeight: 24,
        fontWeight: 'bold',
      },
      tableCellSmall: {
        fontSize: 12,
        color: colors.textSecondary,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
        lineHeight: 16,
      },
      categoryHeader: {
        backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      },
      categoryHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: currentTheme.text,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      subCategoryHeader: {
        backgroundColor: getColorWithOpacity(colors.secondary, 0.1),
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      },
      subCategoryHeaderText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.secondary,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      noteSection: {
        marginTop: 32,
        padding: 20,
        backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
        borderRadius: 12,
        borderLeftWidth: 4,
        borderLeftColor: currentTheme.primary,
      },
      noteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: currentTheme.text,
        marginBottom: 12,
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      noteText: {
        fontSize: 16,
        color: colors.text,
        lineHeight: 24,
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      // New styles for the redesigned table
      mainTableHeader: {
        flexDirection: 'row',
        backgroundColor: currentTheme.primary,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      },
      emptyHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      dualHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      singularHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      subHeaderRow: {
        flexDirection: 'row',
        backgroundColor: colors.surface,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      },
      nominativeHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      accusativeHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      categoryRow: {
        flexDirection: 'row',
        backgroundColor: currentTheme.primary,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.surface,
      },
      pluralHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: getColorWithOpacity(colors.surface, 0.8),
      },
      nearHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
      },
      farHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
      },
      masculineRow: {
        flexDirection: 'row',
        backgroundColor: getColorWithOpacity(colors.surface, 0.8),
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      },
      pluralCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderRightColor: '#ffffff',
      },
      masculineHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
      },
      dualCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderRightColor: '#ffffff',
      },
      feminineRow: {
        flexDirection: 'row',
        backgroundColor: getColorWithOpacity(colors.surface, 0.6),
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      },
      feminineHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
      },
      singularCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
      },
      arabicText: {
        fontSize: 18,
        color: colors.text,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
        lineHeight: 24,
        fontWeight: 'bold',
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: currentTheme.text,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      dataRow: {
        flexDirection: 'row',
        backgroundColor: colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      },
      dataRowLight: {
        flexDirection: 'row',
        backgroundColor: currentTheme.primary,
        borderBottomWidth: 1,
        borderBottomColor: currentTheme.primary,
      },
      dataRowDark: {
        flexDirection: 'row',
        backgroundColor: currentTheme.primary,
        borderBottomWidth: 1,
        borderBottomColor: currentTheme.primary,
      },
      categoryCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: currentTheme.primary,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRightWidth: 1,
        borderRightColor: currentTheme.primary,
      },
      categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: currentTheme.text,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      categoryHeaderCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
      },
      meaningBox: {
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 20,
        marginTop: 24,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      },
      meaningBoxTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginBottom: 16,
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      meaningRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      meaningItem: {
        alignItems: 'center',
        flex: 1,
      },
      arabicWord: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginBottom: 8,
        fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      },
      meaningText: {
        fontSize: 16,
        color: colors.textSecondary,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
  });

  useEffect(() => {
    const backAction = () => {
      if (onBack) {
        onBack();
        return true; // Prevent default behavior
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [onBack]);

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="اسمائے اشارہ"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />

      <ScrollView
        style={[styles.scrollView, { paddingTop: 90 }]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* Title Section */}
        <Text style={styles.title}>اسمائے اشارہ</Text>
        <Text style={styles.subtitle}>
          Demonstrative Pronouns - Pointers
        </Text>

        {/* Meaning Box */}
        <View style={styles.meaningBox}>
          <Text style={styles.meaningBoxTitle}>اہم الفاظ کے معانی</Text>
          <View style={styles.meaningRow}>
            <View style={styles.meaningItem}>
              <Text style={styles.arabicWord}>ذلک</Text>
              <Text style={styles.meaningText}>وہ (بعید)</Text>
            </View>
            <View style={styles.meaningItem}>
              <Text style={styles.arabicWord}>هذا</Text>
              <Text style={styles.meaningText}>یہ (قریب)</Text>
            </View>
          </View>
        </View>

        {/* Main Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>اسمائے اشارہ کی مکمل جدول</Text>
          
          <View style={styles.tableContainer}>
            {/* Main Table Header Row */}
            <View style={styles.mainTableHeader}>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}>جمع</Text>
              </View>
              <View style={styles.dualHeaderCell}>
                <Text style={styles.headerText}>مثنى</Text>
              </View>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}>واحد</Text>
              </View>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}>اسمائے اشارہ</Text>
              </View>
            </View>

            {/* Dual Case Sub-Headers */}
            <View style={styles.mainTableHeader}>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}></Text>
              </View>
              <View style={styles.nominativeHeaderCell}>
                <Text style={styles.headerText}> نصب اور جرّ</Text>
              </View>
              <View style={styles.accusativeHeaderCell}>
                <Text style={styles.headerText}> رفع</Text>
              </View>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}></Text>
              </View>
              <View style={styles.singularHeaderCell}>
                <Text style={styles.headerText}></Text>
              </View>
            </View>

            {/* Near Masculine Row */}
            <View style={styles.dataRow}>
              <View style={styles.pluralCell}>
                <Text style={styles.arabicText}>ھٰؤُلۤاءِ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ھٰذَیْنِ</Text>
                <Text style={styles.noteText}>(NQ)</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ھٰذَانِ</Text>
              </View>
              <View style={styles.singularCell}>
                <Text style={styles.arabicText}>ھٰذَا</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>قریب مذكر</Text>
              </View>
            </View>

            {/* Near Feminine Row */}
            <View style={styles.dataRow}>
              <View style={styles.pluralCell}>
                <Text style={styles.arabicText}>ھٰؤُلۤاءِ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ھَاتَیْنِ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ھَاتَانِ</Text>
                <Text style={styles.noteText}>(NQ)</Text>
              </View>
              <View style={styles.singularCell}>
                <Text style={styles.arabicText}>ھٰذِہٖ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>قریب مونث</Text>
              </View>
            </View>

            {/* Far Masculine Row */}
            <View style={styles.dataRow}>
              <View style={styles.pluralCell}>
                <Text style={styles.arabicText}>اُولٰۤئِکَ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ذَیْنِکَ</Text>
                <Text style={styles.noteText}>(NQ)</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>ذَانِکَ</Text>
                <Text style={styles.noteText}>(NQ)</Text>
              </View>
              <View style={styles.singularCell}>
                <Text style={styles.arabicText}>ذٰلِکَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>بعيد مذكر</Text>
              </View>
            </View>

            {/* Far Feminine Row */}
            <View style={styles.dataRow}>
              <View style={styles.pluralCell}>
                <Text style={styles.arabicText}>اُولٰۤئِکَ</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>تَیْنِکَ</Text>
                <Text style={styles.noteText}>(NQ)</Text>
              </View>
              <View style={styles.dualCell}>
                <Text style={styles.arabicText}>تَانِکَ</Text>
                <Text style={styles.noteText}>(NQ)</Text>
              </View>
              <View style={styles.singularCell}>
                <Text style={styles.arabicText}>تِلْکَ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>بعيد مونث</Text>
              </View>
            </View>
          </View>
        </View>

        

        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>یاد رکھیں</Text>
          <Text style={styles.noteText}>
              NQ (stands for Not in Quran)  
          </Text>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default HarfLesson4Screen; 