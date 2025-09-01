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
  getHarfTheme
} from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';



interface HarfLesson2ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const HarfLesson2Screen: React.FC<HarfLesson2ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getHarfTheme(isDarkMode); // Use HARF orange theme

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
      paddingBottom: 120, // Increased bottom padding to prevent content cutoff
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
    arabicText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    urduText: {
      fontSize: 14,
      color: colors.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
    },
    englishText: {
      fontSize: 12,
      color: colors.textSecondary,
      textAlign: 'center',
      fontStyle: 'italic',
      lineHeight: 16,
    },
    exampleText: {
      fontSize: 14,
      color: colors.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      lineHeight: 20,
    },
    
    
    
  });

  const prepositions = [
    {
      harf: 'بِ',
      meaning: 'کے ساتھ',
      english: 'by, with',
      example: 'بِسْمِ اللهِ، بِإِذْنِ اللهِ، بِنَصْرِهِ اللهِ'
    },
    {
      harf: 'تَ',
      meaning: 'قسم',
      english: '(oath)by',
      example: 'وَالتَّمْرِ، وَالتَّرْتِيبِ، وَالرَّبَابِ'
    },
    {
      harf: 'وَ',
      meaning: 'قسم/اور',
      english: 'and, by',
      example: 'وَاللهِ، وَالشَّمْسِ، وَالنَّجْمِ، وَالْفَجْرِ'
    },
    {
      harf: 'كَ',
      meaning: 'کی طرح',
      english: 'like, as',
      example: 'كَفَلَقِ، كَشَجَرَةٍ، كَمِثْلِهِمْ'
    },
    {
      harf: 'فِي',
      meaning: 'میں',
      english: 'in',
      example: 'فِي الْبَيْتِ فِي الْكِتَابِ، فِي الْجَنَّةِ'
    },
    {
      harf: 'مِنْ',
      meaning: 'سے',
      english: 'from',
      example: 'مِنْ مَكَّةَ مِنَ الْبَيْتِ مِنَ السَّمَاءِ'
    },
    {
      harf: 'عَنْ',
      meaning: 'کے بارے میں/سے',
      english: 'about, from',
      example: 'عَنْ أَنْفُسِهِمْ، عَنْ ذِكْرِ اللهِ'
    },
    {
      harf: 'إِلَى',
      meaning: 'کی طرف',
      english: 'to, towards',
      example: 'إِلَى الْبَيْتِ، إِلَى السَّمَاءِ، إِلَى الْمَسْجِدِ'
    },
    {
      harf: 'عَلَى',
      meaning: 'پر',
      english: 'on, upon, over',
      example: 'عَلَى الْعَرْشِ، عَلَى قُلُوبِهِمْ، عَلَى الْمَلَائِكَةِ'
    },
    {
      harf: 'حَتَّى',
      meaning: 'تک',
      english: 'till, until',
      example: 'حَتَّى مَطْلِعِ الْفَجْرِ'
    },
    {
      harf: 'لِ',
      meaning: 'کے لیے',
      english: 'for, to',
      example: 'لِرَجُلٍ، لِلذِّكْرِ، الْأَمْرُ اللهِ'
    },
    {
      harf: 'مَعَ',
      meaning: 'کے ساتھ',
      english: 'with',
      example: 'إِنَّ اللهَ مَعَ الصَّابِرِينَ'
    },
    {
      harf: 'عِنْدَ',
      meaning: 'پاس',
      english: 'near, beside',
      example: 'إِنَّ الدَّارَ الْآخِرَةَ عِندَ اللَّهِ'
    },
    {
      harf: 'لَدَىٰ',
      meaning: 'پاس',
      english: 'near, beside',
      example: 'هَـٰذَا مَا لَدَيَّ عَتِيدٌ'
    },
    {
      harf: 'لَدُنْ',
      meaning: 'پاس سے',
      english: 'from near',
      example: 'مِن لَّدُنَّا عِلْمًا'
    }
    
  ];

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="حروف جارہ"
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
        <Text style={styles.title}>حروف جارہ</Text>
        <Text style={styles.subtitle}>
          Arabic Prepositions and Particles - Essential Grammar Guide
        </Text>

        {/* Main Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>حروف جارہ کی مکمل جدول</Text>
          <Text style={styles.sectionSubtitle}>Complete Table of Arabic Prepositions</Text>
          
          <View style={styles.tableContainer}>
            {/* Header Row */}
            <View style={styles.tableHeader}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>مثال</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>معنى/استعمال</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>حرف</Text>
              </View>
            </View>

            {/* Data Rows */}
            {prepositions.map((prep, index) => (
              <View key={index} style={styles.dataRow}>
                <View style={styles.dataCell}>
                  <Text style={styles.exampleText}>{prep.example}</Text>
                </View>
                <View style={styles.dataCell}>
                  <Text style={styles.urduText}>{prep.meaning}</Text>
                  <Text style={styles.englishText}>{prep.english}</Text>
                </View>
                <View style={styles.dataCell}>
                  <Text style={styles.arabicText}>{prep.harf}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        


      </ScrollView>
    </View>
  );
};

export default HarfLesson2Screen; 