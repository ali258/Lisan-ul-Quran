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
import { getThemeColor, getColorWithOpacity, getColorFromClass } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface QuranicWordHarfLesson5ScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordHarfLesson5Screen: React.FC<QuranicWordHarfLesson5ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;


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
        borderRadius: 8,
        backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      },
      backButtonText: {
        fontSize: 18,
        color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
        fontWeight: 'bold',
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
        flex: 1,
      },
      scrollView: {
        flex: 1,
      },
      content: {
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 40,
      },
      title: {
        fontSize: isTablet ? 32 : 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
        fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      },
      subtitle: {
        fontSize: isTablet ? 18 : 16,
        textAlign: 'center',
        marginBottom: 32,
        color: getThemeColor(colors.textSecondary, isDarkMode),
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
        color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      sectionSubtitle: {
        fontSize: isTablet ? 16 : 14,
        marginBottom: 20,
        color: getThemeColor(colors.textSecondary, isDarkMode),
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      tableContainer: {
        backgroundColor: getThemeColor(colors.surface, isDarkMode),
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: getThemeColor(colors.border, isDarkMode),
        shadowColor: getThemeColor(colors.shadow, isDarkMode),
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      },
      tableHeader: {
        flexDirection: 'row',
        backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      },
      headerCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderRightColor: getThemeColor(colors.surface, isDarkMode),
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      dataRow: {
        flexDirection: 'row',
        backgroundColor: getThemeColor(colors.surface, isDarkMode),
        borderBottomWidth: 1,
        borderBottomColor: getThemeColor(colors.border, isDarkMode),
      },
      dataCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderRightColor: getThemeColor(colors.border, isDarkMode),
      },
      categoryCell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
        borderRightWidth: 1,
        borderRightColor: getThemeColor(colors.border, isDarkMode),
      },
      arabicText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: getThemeColor(colors.text, isDarkMode),
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      },
      categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: isDarkMode ? getColorFromClass('ism-blue-dark-text') : getColorFromClass('ism-blue-light-text'),
        textAlign: 'center',
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      highlightedCell: {
        backgroundColor: getThemeColor(colors.error, isDarkMode),
      },
      highlightedText: {
        color: getThemeColor(colors.surface, isDarkMode),
      },
      noteSection: {
        backgroundColor: getThemeColor(colors.surface, isDarkMode),
        borderRadius: 16,
        padding: 20,
        marginTop: 24,
        borderWidth: 1,
        borderColor: getThemeColor(colors.border, isDarkMode),
        borderLeftWidth: 4,
        borderLeftColor: isDarkMode ? getColorFromClass('ism-blue-dark') : getColorFromClass('ism-blue-light'),
      },
      noteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: isDarkMode ? getColorFromClass('ism-blue-light-text') : getColorFromClass('ism-blue-dark-text'),
        marginBottom: 12,
        fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      },
      noteText: {
        fontSize: 16,
        color: getThemeColor(colors.text, isDarkMode),
        lineHeight: 24,
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
        <Text style={styles.headerTitle}>اسم موصول</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
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
    </SafeAreaView>
  );
};

export default QuranicWordHarfLesson5Screen; 