import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  BackHandler,
  FlatList,
} from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import { 
  getFaalTheme, 
  THEME_CONFIG,  
  getColorWithOpacity, 
  getFontWithProperFallback, 
  FONT_CLASSES
} from '../../utils/theme';
import AnimatedHeader from '../../components/AnimatedHeader';

interface FalLesson12ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const FalLesson12Screen: React.FC<FalLesson12ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getFaalTheme(isDarkMode); // Use FAAL red theme

  // Colors object for backward compatibility
  const colors = currentTheme;

  // Helper function to get badge color based on occurrence frequency
  const getOccurrenceBadgeColor = (occurrence: number) => {
    if (occurrence >= 100) return '#FF6B6B'; // Very high frequency - Red
    if (occurrence >= 50) return '#4ECDC4'; // High frequency - Teal
    if (occurrence >= 25) return '#45B7D1'; // Medium-high frequency - Blue
    if (occurrence >= 10) return '#96CEB4'; // Medium frequency - Green
    return '#FFEAA7'; // Low frequency - Yellow
  };

  const verbData = [
    {
      mazi: 'ضَرَبَ',
      mudari: 'يَضْرِبُ',
      amr: 'اِضْرِبْ',
      fail: 'ضَارِب',
      mafool: 'مَضْرُوبٍ',
      masdar: 'ضَرْب',
      urduTranslation: 'مارنا',
      occurrence: 58,
    },
    
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    mainContainer: {
      flex: 1,
      paddingHorizontal: 24,
    },
    scrollContent: {
      paddingBottom: 120,
    },
    titleSection: {
      paddingTop: 32,
      marginBottom: 32,
    },
    title: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    titleEnglish: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: currentTheme.textSecondary,
      textAlign: 'center',
      marginBottom: 16,
      fontStyle: 'italic',
    },
    subtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 32,
      color: currentTheme.textSecondary,
      lineHeight: 24,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    section: {
      flex: 1,
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
      color: currentTheme.textSecondary,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    tableContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: currentTheme.border,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
      flex: 1, // Take available space
    },
    tableDataContainer: {
      flex: 1,
      minHeight: 300, // Ensure minimum height for data
    },
    tableContent: {
      width: 560, // Exact width needed for all columns (8 columns × 70px each)
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
      borderRightColor: currentTheme.surface,
    },
    headerCellOccurrence: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 2,
      borderRightWidth: 1,
      borderRightColor: currentTheme.surface,
    },
    headerCellUrdu: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 2,
      borderRightWidth: 1,
      borderRightColor: currentTheme.surface,
    },
    headerCellArabic: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 2,
      borderRightWidth: 1,
      borderRightColor: currentTheme.surface,
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.surface,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    dataRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: currentTheme.border,
    },
    dataCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    dataCellOccurrence: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 2,
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    dataCellUrdu: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 2,
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    dataCellArabic: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 2,
      borderRightWidth: 1,
      borderRightColor: currentTheme.border,
    },
    arabicText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    urduText: {
      fontSize: 14,
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      lineHeight: 20,
    },
    occurrenceText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: currentTheme.primary,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    occurrenceBadge: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      minWidth: 32,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    occurrenceBadgeText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    noteCard: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
      borderRadius: THEME_CONFIG.borderRadius.medium,
      padding: 16,
      marginTop: 32,
      borderLeftWidth: 4,
      borderLeftColor: currentTheme.primary,
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    noteText: {
      fontSize: 16,
      lineHeight: 24,
      color: currentTheme.text,
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
        title="فعل ماضی"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBack}
        customTheme={currentTheme}
      />

            <ScrollView 
        style={[styles.mainContainer, { paddingTop: 90 }]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>فعل ثلاثی مُجَرَّد - فَعَلَ ، یَفْعِلَ</Text>
          <Text style={styles.titleEnglish}>Single Action Verbs - فَعَلَ ، یَفْعَلَ</Text>
          
        </View>

        {/* Main Table */}
        <View style={styles.section}>
          <Text style={styles.title}>فعل ثلاثی مُجَرَّد - فَعَلَ ، یَفْعِلَ</Text>
          <Text style={styles.titleEnglish}>Single Action Verbs - فَعَلَ ، یَفْعَلَ</Text>
          
          
          <View style={styles.tableContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <View style={styles.tableContent}>
                {/* Fixed Header */}
                <View style={styles.tableHeader}>
              
              <View style={styles.headerCellUrdu}>
                <Text style={styles.headerText}>اردو ترجمہ</Text>
              </View>
              <View style={styles.headerCellArabic}>
                <Text style={styles.headerText}>مصدر</Text>
              </View>
              <View style={styles.headerCellArabic}>
                <Text style={styles.headerText}>مفعول</Text>
              </View>
              <View style={styles.headerCellArabic}>
                <Text style={styles.headerText}>فاعل</Text>
              </View>
              <View style={styles.headerCellArabic}>
                <Text style={styles.headerText}>امر</Text>
              </View>
              <View style={styles.headerCellArabic}>
                <Text style={styles.headerText}>مضارع</Text>
              </View>
              <View style={styles.headerCellArabic}>
                <Text style={styles.headerText}>ماضی</Text>
              </View>
              <View style={styles.headerCellOccurrence}>
                <Text style={styles.headerText}>تعداد</Text>
              </View>
            </View>

            {/* Scrollable Data */}
            <FlatList
              data={verbData}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item, index }) => (
                <View style={[
                  styles.dataRow,
                  { backgroundColor: index % 2 === 0 ? currentTheme.surface : getColorWithOpacity(currentTheme.primary, 0.05) }
                ]}>
                  
                  <View style={styles.dataCellUrdu}>
                    <Text style={styles.urduText}>{item.urduTranslation}</Text>
                  </View>
                  <View style={styles.dataCellArabic}>
                    <Text style={styles.arabicText}>{item.masdar}</Text>
                  </View>
                  <View style={styles.dataCellArabic}>
                    <Text style={styles.arabicText}>{item.mafool}</Text>
                  </View>
                  <View style={styles.dataCellArabic}>
                    <Text style={styles.arabicText}>{item.fail}</Text>
                  </View>
                  <View style={styles.dataCellArabic}>
                    <Text style={styles.arabicText}>{item.amr}</Text>
                  </View>
                  <View style={styles.dataCellArabic}>
                    <Text style={styles.arabicText}>{item.mudari}</Text>
                  </View>
                  <View style={styles.dataCellArabic}>
                    <Text style={styles.arabicText}>{item.mazi}</Text>
                  </View>
                  <View style={styles.dataCellOccurrence}>
                    <View style={[styles.occurrenceBadge, { backgroundColor: getOccurrenceBadgeColor(item.occurrence) }]}>
                      <Text style={styles.occurrenceBadgeText}>{item.occurrence}</Text>
                    </View>
                  </View>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              style={styles.tableDataContainer}
            />
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Note Section */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>یاد رکھیں</Text>
          <Text style={styles.noteText}>
            • ماضی: Past tense form of the verb{'\n'}
            • مضارع: Present tense form of the verb{'\n'}
            • امر: Imperative form (command){'\n'}
            • فاعل: Active participle (doer of the action){'\n'}
            • مفعول: Passive participle (object of the action){'\n'}
            • مصدر: Verbal noun (infinitive form){'\n'}
            • تعداد: Number of occurrences in the Quran{'\n'}
            • ہر فعل کی اپنی خاصیت اور استعمال ہے{'\n'}
            • قرآن مجید میں یہ الفاظ بکثرت استعمال ہوتے ہیں
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FalLesson12Screen; 