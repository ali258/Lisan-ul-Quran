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
import { getThemeColor, getColorWithOpacity } from '../../utils/colorUtils';
import { getFontWithProperFallback } from '../../utils/fontUtils';

interface Lesson6ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const { width } = Dimensions.get('window');

const Lesson6Screen: React.FC<Lesson6ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

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
      fontSize: 20,
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
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      opacity: 0.8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
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
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
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
    },
    typeTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
      marginBottom: 6,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 22,
    },
    typeSubtitle: {
      fontSize: 12,
      color: '#ffffff',
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
    },
    percentageText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteSection: {
      backgroundColor: getColorWithOpacity(colors.primary, 0.1),
      borderRadius: 12,
      padding: 16,
      marginTop: 24,
      borderLeftWidth: 4,
      borderLeftColor: getThemeColor(colors.primary, isDarkMode),
    },
    noteTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      marginBottom: 8,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 20,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'justify',
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
        <Text style={styles.headerTitle}>سبق ۶ - اسم کی اقسام</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>اسم کی اقسام</Text>
          <Text style={styles.subtitle}>Types of Nouns</Text>
         
        </View>

        {/* Diagram Section */}
        <View style={styles.diagramContainer}>
          
          {/* Types Row */}
          <View style={styles.typesRow}>
            {ismTypes.map((type, index) => (
              <View key={index} style={styles.typeCard}>
                <View 
                  style={[
                    styles.typeHeader, 
                    { backgroundColor: getThemeColor(type.headerColor, isDarkMode) }
                  ]}
                >
                  <Text style={styles.typeTitle}>{type.title}</Text>
                  <Text style={styles.typeSubtitle}>{type.subtitle}</Text>
                </View>
                <View 
                  style={[
                    styles.percentageCard,
                    { backgroundColor: getThemeColor(type.percentageColor, isDarkMode) }
                  ]}
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
    </SafeAreaView>
  );
};

export default Lesson6Screen; 