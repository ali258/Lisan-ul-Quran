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

interface Part2Lesson2ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson2Screen: React.FC<Part2Lesson2ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

  const ismTypes = [
    {
      title: 'مبنى اسماء',
      subtitle: 'Indeclinable Nouns',
      percentage: '2 فیصد',
      headerColor: 'red-600',
      percentageColor: 'black',
    },
    {
      title: 'غير منصرف اسماء',
      subtitle: 'Partially Declinable Nouns',
      percentage: '13 فیصد',
      headerColor: 'red-600',
      percentageColor: 'black',
    },
    {
      title: 'منصرف اسماء',
      subtitle: 'Fully Declinable Nouns',
      percentage: '85 فیصد',
      headerColor: 'red-600',
      percentageColor: 'black',
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

    diagramContainer: {
      marginTop: 32,
      marginBottom: 32,
    },
    typesRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      gap: 12,
    },
    typeCard: {
      flex: 1,
      borderRadius: 12,
      overflow: 'hidden',
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 6,
      minHeight: 120,
    },
    typeHeader: {
      paddingVertical: 20,
      paddingHorizontal: 12,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: currentTheme.primary,
    },
    typeTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      marginBottom: 6,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 22,
    },
    typeSubtitle: {
      fontSize: 12,
      color: currentTheme.text,
      textAlign: 'center',
      opacity: 0.9,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 16,
    },
    percentageCard: {
      paddingVertical: 16,
      paddingHorizontal: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: currentTheme.surface,
    },
    percentageText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteSection: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
      borderRadius: 12,
      padding: 16,
      marginTop: 24,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
    },
    noteTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 14,
      color: currentTheme.textSecondary,
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'justify',
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="اسم کی اقسام"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>اسم کی اقسام</Text>
        <Text style={styles.lessonTitleEnglish}>Types of Nouns</Text>        

        {/* Diagram Section */}
        <View style={styles.diagramContainer}>
          
          {/* Types Row */}
          <View style={styles.typesRow}>
            {ismTypes.map((type, index) => (
              <View key={index} style={styles.typeCard}>
                <View 
                  style={styles.typeHeader}
                >
                  <Text style={styles.typeTitle}>{type.title}</Text>
                  <Text style={styles.typeSubtitle}>{type.subtitle}</Text>
                </View>
                <View 
                  style={styles.percentageCard}
                >
                  <Text style={styles.percentageText}>{type.percentage}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>


        {/* Note Section */}
        <View style={styles.noteSection}>
          <Text style={styles.noteTitle}>اہم نوٹ:</Text>
          <Text style={styles.noteText}>
            منصرف اسماء سب سے زیادہ استعمال ہوتے ہیں اور ان کی تعلیم بہت ضروری ہے۔ 
            مبنى اسماء کم استعمال ہوتے ہیں لیکن ان کی شناخت بھی اہم ہے۔
          </Text>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson2Screen; 