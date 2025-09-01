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

interface FalLesson2ScreenProps {
  onNavigate?: (screen: any) => void;
  onBack?: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const FalLesson2Screen: React.FC<FalLesson2ScreenProps> = ({ onNavigate, onBack }) => {
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
      mazi: 'نَصَرَ',
      mudari: 'يَنْصُرُ',
      amr: 'اُنْصُرْ',
      fail: 'نَاصِرٍ',
      mafool: 'مَنْصُوْر',
      masdar: 'نَصْر',
      urduTranslation: 'مدد کرنا',
      occurrence: 92,
    },
    {
      mazi: 'بَلَغَ',
      mudari: 'يَبْلُغُ',
      amr: 'اُبْلُغْ',
      fail: 'بَالِغ',
      mafool: 'مَبْلُوْغ',
      masdar: 'بُلُوْغ',
      urduTranslation: 'پہنچنا',
      occurrence: 49,
    },
    {
      mazi: 'بَسَطَ',
      mudari: 'يَبْسُطُ',
      amr: 'اُبْسُطْ',
      fail: 'بَاسِط',
      mafool: 'مَبْسُوْط',
      masdar: 'بَسْط',
      urduTranslation: 'پھیلانا',
      occurrence: 22,
    },
    {
      mazi: 'تَرَكَ',
      mudari: 'يَتْرُكُ',
      amr: 'اُتْرُكْ',
      fail: 'تَارِك',
      mafool: 'مَتْرُوْك',
      masdar: 'تَرْك',
      urduTranslation: 'چھوڑنا',
      occurrence: 43,
    },
    {
      mazi: 'حَشَرَ',
      mudari: 'يَحْشُرُ',
      amr: 'اُحْشُرْ',
      fail: 'حَاشِر',
      mafool: 'مَحْشُوْر',
      masdar: 'حَشْر',
      urduTranslation: 'جمع کرنا',
      occurrence: 43,
    },
    {
      mazi: 'حَكَمَ',
      mudari: 'يَحْكُمُ',
      amr: 'اُحْكُمْ',
      fail: 'حَاكِم',
      mafool: 'مَحْكُوْم',
      masdar: 'حُكْم',
      urduTranslation: 'فیصلہ کرنا',
      occurrence: 80,
    },
    {
      mazi: 'خَرَجَ',
      mudari: 'يَخْرُجُ',
      amr: 'اُخْرُجْ',
      fail: 'خَارِج',
      mafool: 'مَخْرُوج',
      masdar: 'خُرُوْج',
      urduTranslation: 'نکلنا',
      occurrence: 61,
    },
    {
      mazi: 'خَلَدَ',
      mudari: 'يَخْلُدُ',
      amr: 'اُخْلُدْ',
      fail: 'خَالِد',
      mafool: 'مَخْلُوْد',
      masdar: 'خُلُوْد',
      urduTranslation: 'ہمیشہ رہنا',
      occurrence: 83,
    },
    {
      mazi: 'خَلَقَ',
      mudari: 'يَخْلُقُ',
      amr: 'اُخْلُقْ',
      fail: 'خَالِق',
      mafool: 'مَخْلُوْق',
      masdar: 'خَلْق',
      urduTranslation: 'پیدا کرنا',
      occurrence: 248,
    },
    {
      mazi: 'دَخَلَ',
      mudari: 'يَدْخُلُ',
      amr: 'اُدْخُلْ',
      fail: 'دَاخِل',
      mafool: 'مَدْخُوْل',
      masdar: 'دُخُوْل',
      urduTranslation: 'داخل ہونا',
      occurrence: 78,
    },
    {
      mazi: 'ذَكَرَ',
      mudari: 'يَذْكُرُ',
      amr: 'اُذْكُرْ',
      fail: 'ذَاكِر',
      mafool: 'مَذْكُوْر',
      masdar: 'ذِكْر',
      urduTranslation: 'یاد کرنا',
      occurrence: 164,
    },
    {
      mazi: 'رَزَقَ',
      mudari: 'يَرْزُقُ',
      amr: 'اُرْزُقْ',
      fail: 'رَازِق',
      mafool: 'مَرْزُوْق',
      masdar: 'رِزْق',
      urduTranslation: 'روزی دینا',
      occurrence: 122,
    },
    {
      mazi: 'سَجَدَ',
      mudari: 'يَسْجُدُ',
      amr: 'اُسْجُدْ',
      fail: 'سَاجِد',
      mafool: 'مَسْجُوْد',
      masdar: 'سُجُوْد',
      urduTranslation: 'سجدہ کرنا',
      occurrence: 64,
    },
    {
      mazi: 'شَعَرَ',
      mudari: 'يَشْعُرُ',
      amr: 'اُشْعُرْ',
      fail: 'شَاعِر',
      mafool: 'مَشْعُوْر',
      masdar: 'شُعُوْر',
      urduTranslation: 'محسوس کرنا',
      occurrence: 30,
    },
    {
      mazi: 'شَكَرَ',
      mudari: 'يَشْكُرُ',
      amr: 'اُشْكُرْ',
      fail: 'شَاكِر',
      mafool: 'مَشْكُوْر',
      masdar: 'شُكْر',
      urduTranslation: 'شکر کرنا',
      occurrence: 63,
    },
    {
      mazi: 'صَدَقَ',
      mudari: 'يَصْدُقُ',
      amr: 'اُصْدُقْ',
      fail: 'صَادِق',
      mafool: 'مَصْدُوْق',
      masdar: 'صِدْق',
      urduTranslation: 'سچ بولنا',
      occurrence: 89,
    },
    {
      mazi: 'عَبَدَ',
      mudari: 'يَعْبُدُ',
      amr: 'اُعْبُدْ',
      fail: 'عَابِد',
      mafool: 'مَعْبُوْد',
      masdar: 'عِبَادَة',
      urduTranslation: 'عبادت کرنا',
      occurrence: 143,
    },
    {
      mazi: 'فَسَقَ',
      mudari: 'يَفْسُقُ',
      amr: 'اُفْسُقْ',
      fail: 'فَاسِق',
      mafool: 'مَفْسُوْق',
      masdar: 'فُسُوْق ، فِسْق',
      urduTranslation: 'گناہ کرنا',
      occurrence: 54,
    },
    {
      mazi: 'قَتَلَ',
      mudari: 'يَقْتُلُ',
      amr: 'اُقْتُلْ',
      fail: 'قَاتِل',
      mafool: 'مَقْتُوْل',
      masdar: 'قَتْل',
      urduTranslation: 'قتل کرنا',
      occurrence: 93,
    },
    {
      mazi: 'قَعَدَ',
      mudari: 'يَقْعُدُ',
      amr: 'اُقْعُدْ',
      fail: 'قَاعِد',
      mafool: 'مَقْعُوْد',
      masdar: 'قُعُوْد',
      urduTranslation: 'بیٹھنا',
      occurrence: 23,
    },
    {
      mazi: 'كَتَبَ',
      mudari: 'يَكْتُبُ',
      amr: 'اُكْتُبْ',
      fail: 'كَاتِب',
      mafool: 'مَكْتُوْب',
      masdar: 'كِتَابَة',
      urduTranslation: 'لکھنا',
      occurrence: 56,
    },
    {
      mazi: 'كَتَمَ',
      mudari: 'يَكْتُمُ',
      amr: 'اُكْتُمْ',
      fail: 'كَاتِمْ',
      mafool: 'مَكْتُوْم',
      masdar: 'كَتْم ، كِتْمَان',
      urduTranslation: 'چھپانا',
      occurrence: 21,
    },
    {
      mazi: 'كَفَرَ',
      mudari: 'يَكْفُرُ',
      amr: 'اُكْفُرْ',
      fail: 'كَافِر',
      mafool: 'مَكْفُوْر',
      masdar: 'كُفْر',
      urduTranslation: 'کفر کرنا',
      occurrence: 461,
    },
    {
      mazi: 'مَكَرَ',
      mudari: 'يَمْكُرُ',
      amr: 'اُمْكُرْ',
      fail: 'مَاكِر',
      mafool: 'مَمْكُوْر',
      masdar: 'مَكْر',
      urduTranslation: 'مکر کرنا',
      occurrence: 43,
    },
    {
      mazi: 'نَظَرَ',
      mudari: 'يَنْظُرُ',
      amr: 'اُنْظُرْ',
      fail: 'نَاظِر',
      mafool: 'مَنْظُوْر',
      masdar: 'نَظَر',
      urduTranslation: 'دیکھنا',
      occurrence: 95,
    },
    {
      mazi: 'نَفَخَ',
      mudari: 'يَنْفُخُ',
      amr: 'اُنْفُخْ',
      fail: 'نَافِخْ',
      mafool: 'مَنْفُوْح',
      masdar: 'نَفْخ',
      urduTranslation: 'پھونکنا',
      occurrence: 20,
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
    
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.1),
      borderRadius: THEME_CONFIG.borderRadius.large,
      padding: 20,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: getColorWithOpacity(currentTheme.primary, 0.2),
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: isTablet ? 28 : 24,
      fontWeight: 'bold',
      color: currentTheme.primary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.english),
    },
    statLabel: {
      fontSize: isTablet ? 14 : 12,
      color: currentTheme.textSecondary,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      marginTop: 4,
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
        title="فعل ثلاثی مُجَرَّد "
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
          <Text style={styles.title}>فعل ثلاثی مُجَرَّد </Text>
          <Text style={styles.titleEnglish}> Three Letter Root Verbs </Text>
          <Text style={styles.title}> فَعَلَ ، یَفْعُلُ</Text>
          
        </View>

        {/* Main Table */}
        <View style={styles.section}>
           
          
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

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{verbData.length}</Text>
            <Text style={styles.statLabel}>کل فعل</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{verbData.reduce((sum, item) => sum + item.occurrence, 0)}</Text>
            <Text style={styles.statLabel}>کل تکرار</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{((verbData.reduce((sum, item) => sum + item.occurrence, 0) / 77430) * 100).toFixed(1)}%</Text>
            <Text style={styles.statLabel}>قران میں تعداد</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default FalLesson2Screen; 