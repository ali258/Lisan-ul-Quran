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

interface Part3Lesson3ScreenProps {
  onBackPress: () => void;
}

const Part3Lesson3Screen: React.FC<Part3Lesson3ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

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
    diagramSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    diagramTitle: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    centralCircle: {
      width: isTablet ? 140 : 100,
      height: isTablet ? 140 : 100,
      borderRadius: isTablet ? 70 : 50,
      backgroundColor: currentTheme.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    centralText: {
      fontSize: isTablet ? 20 : 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    subCategoriesContainer: {
      width: '100%',
      maxWidth: 600,
      alignSelf: 'center',
      position: 'relative',
      height: isTablet ? 400 : 300,
    },
    subCategoryRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
    },
    circularLayout: {
      position: 'relative',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    subCategoryCircle: {
      width: isTablet ? 85 : 65,
      height: isTablet ? 85 : 65,
      borderRadius: isTablet ? 42 : 32,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
      position: 'absolute',
    },
    subCategoryText: {
      fontSize: isTablet ? 13 : 11,
      fontWeight: 'bold',
      color: currentTheme.text,
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
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    definitionCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    definitionTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      marginBottom: 12,
    },
    definitionText: {
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 24 : 20,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      marginBottom: 8,
    },
    examplesText: {
      fontSize: isTablet ? 14 : 12,
      lineHeight: isTablet ? 20 : 16,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
      fontStyle: 'italic',
    },
    highlightedText: {
      color: currentTheme.primary,
      fontWeight: 'bold',
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="مرکب ناقص کی اقسام"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>مرکب ناقص کی اقسام</Text>
        <Text style={styles.lessonTitleEnglish}>Types of Incomplete Compounds</Text>
       
        {/* Diagram Section */}
        <View style={styles.diagramSection}>
          <Text style={styles.diagramTitle}>تصویری نمائش</Text>
          
          <View style={styles.subCategoriesContainer}>
            {/* Central Circle */}
            <View style={[styles.centralCircle, { position: 'absolute', top: '50%', left: '50%', marginTop: -50, marginLeft: -50, zIndex: 10 }]}>
              <Text style={styles.centralText}>مرکب ناقص</Text>
            </View>

            {/* Sub Categories in Circle */}
            <View style={styles.circularLayout}>
              {subCategories.map((category, index) => {
                const angle = (index * 72) - 90; // 360° / 5 = 72°, start from top (-90°)
                const radius = isTablet ? 120 : 90;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                
                return (
                  <View 
                    key={index} 
                    style={[
                      styles.subCategoryCircle, 
                      { 
                        backgroundColor: currentTheme.primary,
                        left: '50%',
                        top: '50%',
                        marginLeft: x - (isTablet ? 42 : 32),
                        marginTop: y - (isTablet ? 42 : 32),
                      }
                    ]}
                  >
                    <Text style={styles.subCategoryText}>{category.title}</Text>
                  </View>
                );
              })}
            </View>
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
          <View style={[styles.definitionCard, { backgroundColor: currentTheme.surface }]}>
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
    </View>
  );
};

export default Part3Lesson3Screen; 