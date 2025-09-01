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




interface HarfLesson5ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const HarfLesson5Screen: React.FC<HarfLesson5ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode); // Use ISM blue theme

  // Handle mobile back button
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
      sectionSubtitle: {
        fontSize: isTablet ? 16 : 14,
        marginBottom: 20,
        color: colors.textSecondary,
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
        flexDirection: 'row',
        backgroundColor: currentTheme.primary,
      },
      headerCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderRightColor: colors.surface,
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
      dataCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderRightColor: colors.border,
      },
      categoryCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: currentTheme.primary,
        borderRightWidth: 1,
        borderRightColor: colors.border,
      },
      arabicText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      },
      categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: currentTheme.text,
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      highlightedCell: {
        backgroundColor: colors.accent,
      },
      highlightedText: {
        color: colors.surface,
      },
      noteSection: {
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 20,
        marginTop: 24,
        borderWidth: 1,
        borderColor: colors.border,
        borderLeftWidth: 4,
        borderLeftColor: currentTheme.primary,
      },
      noteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
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
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="اسم موصول"
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
        <Text style={styles.title}>اسم موصول</Text>
        <Text style={styles.subtitle}>
          Relative Pronouns - Connecting Words in Arabic
        </Text>

        {/* Main Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>اسم موصول کی مکمل جدول</Text>
          <Text style={styles.sectionSubtitle}>Relative Pronouns Table</Text>
          
          <View style={styles.tableContainer}>
            {/* Main Header Row */}
            <View style={styles.tableHeader}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>جمع</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>مثنى</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>واحد</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>  جو، جس نے  </Text>
              </View>
            </View>

            {/* Masculine Row */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اَلَّذِينَ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اَللَّذَانِ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اَلَّذِیْ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>مذكر</Text>
              </View>
            </View>

            {/* Feminine Row */}
            <View style={styles.dataRow}>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اَللَّاتِي - اَللَّائِیْ</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>-</Text>
              </View>
              <View style={styles.dataCell}>
                <Text style={styles.arabicText}>اَلَّتِیْ</Text>
              </View>
              <View style={styles.categoryCell}>
                <Text style={styles.categoryText}>مونث</Text>
              </View>
            </View>
          </View>
        </View>

       

        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>یاد رکھیں</Text>
          <Text style={styles.noteText}>
            • اسم موصول وہ الفاظ ہیں جو دو جملوں کو جوڑتے ہیں{'\n'}
            • الَّذِي مذكر واحد کے لیے استعمال ہوتا ہے{'\n'}
            • الَّتِي مونث واحد کے لیے استعمال ہوتا ہے{'\n'}
            • مثنى میں اللَّذَانِ (مذكر) اور اللَّتَانِ (مونث) ہیں{'\n'}
            • جمع میں الَّذِينَ (مذكر) اور اللَّاتِي/اللَّائِي (مونث) ہیں{'\n'}
           
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HarfLesson5Screen; 