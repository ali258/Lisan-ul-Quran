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
import { getThemeColor } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface Lesson19ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const Lesson19Screen: React.FC<Lesson19ScreenProps> = ({ onNavigate, onBack }) => {
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
    },
    backButtonText: {
      fontSize: 24,
      color: getThemeColor(colors.primary, isDarkMode),
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      flex: 1,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 40,
    },
    titleSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    mainTitle: {
      fontSize: isTablet ? 48 : 36,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: isTablet ? 24 : 20,
      textAlign: 'center',
      opacity: 0.8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    lessonNumber: {
      fontSize: isTablet ? 20 : 16,
      textAlign: 'center',
      opacity: 0.6,
      color: getThemeColor(colors.primary, isDarkMode),
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    diagramSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    diagramTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    centralCircle: {
      width: isTablet ? 140 : 100,
      height: isTablet ? 140 : 100,
      borderRadius: isTablet ? 70 : 50,
      backgroundColor: getThemeColor('primary-600', isDarkMode),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    centralText: {
      fontSize: isTablet ? 20 : 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    subCategoriesContainer: {
      width: '100%',
      maxWidth: 600,
      alignSelf: 'center',
    },
    subCategoryRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
    },
    subCategoryCircle: {
      width: isTablet ? 85 : 65,
      height: isTablet ? 85 : 65,
      borderRadius: isTablet ? 42 : 32,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
    },
    subCategoryText: {
      fontSize: isTablet ? 13 : 11,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: isTablet ? 16 : 14,
    },
    definitionsSection: {
      marginTop: 24,
    },
    definitionsTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    definitionCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    definitionTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 12,
    },
    definitionText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 8,
    },
    examplesText: {
      fontSize: isTablet ? 14 : 12,
      lineHeight: isTablet ? 20 : 16,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      fontStyle: 'italic',
    },
    highlightedText: {
      color: getThemeColor('primary-400', isDarkMode),
      fontWeight: 'bold',
    },
  });

  const subCategories = [
    {
      title: 'مرکب عطفی',
      color: 'primary-400',
      definition: 'وہ مرکب جس میں دو یا زیادہ الفاظ عطف کے ذریعے ملے ہوں',
      examples: 'مثلاً: محمد اور احمد، کتاب اور قلم، لڑکا اور لڑکی',
    },
    {
      title: 'مرکب توصیفی',
      color: 'primary-500',
      definition: 'وہ مرکب جس میں صفت اور موصوف شامل ہوں',
      examples: 'مثلاً: اچھا لڑکا، بڑا گھر، نیک آدمی',
    },
    {
      title: 'مرکب اشاری',
      color: 'primary-600',
      definition: 'وہ مرکب جس میں اشارہ اور اشارہ شدہ چیز شامل ہوں',
      examples: 'مثلاً: یہ کتاب، وہ لڑکا، یہ گھر',
    },
    {
      title: 'مرکب اضافی',
      color: 'primary-700',
      definition: 'وہ مرکب جس میں مضاف اور مضاف الیہ شامل ہوں',
      examples: 'مثلاً: لڑکے کی کتاب، گھر کا دروازہ، شہر کی سڑک',
    },
    {
      title: 'مرکب جاری',
      color: 'primary-300',
      definition: 'وہ مرکب جس میں حرف جار اور مجرور شامل ہوں',
      examples: 'مثلاً: گھر میں، سڑک پر، کتاب سے',
    },
  ];

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
        <Text style={styles.headerTitle}>مرکب ناقص کی اقسام</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.lessonNumber}>Lesson 19</Text>
          <Text style={styles.mainTitle}>مرکب ناقص کی اقسام</Text>
          <Text style={styles.subtitle}>Types of Incomplete Compounds</Text>
        </View>

        {/* Diagram Section */}
        <View style={styles.diagramSection}>
          <Text style={styles.diagramTitle}>تصویری نمائش</Text>
          
          {/* Central Circle */}
          <View style={styles.centralCircle}>
            <Text style={styles.centralText}>مرکب ناقص</Text>
          </View>

          {/* Sub Categories */}
          <View style={styles.subCategoryRow}>
            {subCategories.map((category, index) => (
              <View key={index} style={[styles.subCategoryCircle, { backgroundColor: getThemeColor(category.color, isDarkMode) }]}>
                <Text style={styles.subCategoryText}>{category.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Definitions Section */}
        <View style={styles.definitionsSection}>
          <Text style={styles.definitionsTitle}>تفصیلی تعریفیں</Text>
          
          {subCategories.map((category, index) => (
            <View key={index} style={styles.definitionCard}>
              <Text style={styles.definitionTitle}>{category.title}</Text>
              <Text style={styles.definitionText}>
                {category.definition}
              </Text>
              <Text style={styles.examplesText}>
                {category.examples}
              </Text>
            </View>
          ))}
        </View>

        {/* Summary Section */}
        <View style={styles.diagramSection}>
          <Text style={styles.diagramTitle}>خلاصہ</Text>
          <View style={[styles.definitionCard, { backgroundColor: getThemeColor(colors.surface, isDarkMode) }]}>
            <Text style={styles.definitionText}>
              <Text style={styles.highlightedText}>مرکب ناقص</Text>{' '}
              کی پانچ اہم اقسام ہیں:
            </Text>
            <Text style={styles.examplesText}>
              1. <Text style={styles.highlightedText}>مرکب عطفی</Text> - عطف کے ذریعے
            </Text>
            <Text style={styles.examplesText}>
              2. <Text style={styles.highlightedText}>مرکب توصیفی</Text> - صفت و موصوف
            </Text>
            <Text style={styles.examplesText}>
              3. <Text style={styles.highlightedText}>مرکب اشاری</Text> - اشارہ و اشارہ شدہ
            </Text>
            <Text style={styles.examplesText}>
              4. <Text style={styles.highlightedText}>مرکب اضافی</Text> - مضاف و مضاف الیہ
            </Text>
            <Text style={styles.examplesText}>
              5. <Text style={styles.highlightedText}>مرکب جاری</Text> - حرف جار و مجرور
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson19Screen; 