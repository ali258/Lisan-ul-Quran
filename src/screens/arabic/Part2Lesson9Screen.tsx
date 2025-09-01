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

const { width } = Dimensions.get('window');
const isTablet = width > 768;

interface Part2Lesson9ScreenProps {
  onBackPress: () => void;
}

const Part2Lesson9Screen: React.FC<Part2Lesson9ScreenProps> = ({ onBackPress }) => {
  const { isDarkMode } = useThemeStore();
  const currentTheme = getIsmTheme(isDarkMode);

  

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
    contentInner: {
      maxWidth: 800,
      alignSelf: 'center',
      width: '100%',
    },
    sectionCard: {
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: currentTheme.border,
      marginTop: 50,
    },
    mainTitle: {
      fontSize: isTablet ? 32 : 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    explanationText: {
      fontSize: isTablet ? 18 : 16,
      lineHeight: 28,
      textAlign: 'right',
      marginBottom: 24,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    highlightedText: {
      color: getColorWithOpacity(currentTheme.primary, 0.9),
      fontWeight: 'bold',
    },
    tableContainer: {
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: getColorWithOpacity(currentTheme.primary, 0.8),
    },
    table: {
      width: '100%',
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: getColorWithOpacity(currentTheme.primary, 0.3),
    },
    tableHeader: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    tableCell: {
      flex: 1,
      paddingVertical: 16,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.25),
    },
    headerText: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    cellText: {
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
      lineHeight: 22,
    },
    urduCellText: {
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'center',
      lineHeight: 22,
    },
    subSection: {
      marginTop: 24,
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      textAlign: 'right',
      marginBottom: 12,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    examplesContainer: {
      marginTop: 12,
    },
    exampleItem: {
      alignItems: 'flex-start',
      marginBottom: 12,
      paddingHorizontal: 16,
    },
    exampleText: {
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'right',
      lineHeight: 24,
      width: '100%',
    },
    normalText: {
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },      
    diagramContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 32,
    },
    textContent: {
      width: '100%',
    },
    mainJamaBox: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
      borderRadius: 12,
      paddingVertical: 20,
      paddingHorizontal: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    mainJamaText: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    connectingLines: {
      position: 'relative',
      width: '100%',
      height: 100,
      marginBottom: 20,
    },
    connectingLine1: {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: 1,
      height: '100%',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.8),
    },
    connectingLine2: {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: 1,
      height: '100%',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.8),
    },
    subCategoriesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    subCategoryBox: {
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.25),
      borderRadius: 12,
      paddingVertical: 15,
      paddingHorizontal: 25,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: getColorWithOpacity(currentTheme.primary, 0.8),
    },
    subCategoryText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    tablesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 24,
    },
    tableWrapper: {
      width: '45%',
      backgroundColor: currentTheme.surface,
      borderRadius: 16,
      padding: 20,
      shadowColor: currentTheme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: currentTheme.border,
    },
    tableTitle: {
      fontSize: isTablet ? 20 : 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    comprehensiveTable: {
      width: '100%',
    },
    headerCell: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
    },
    labelCell: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.25),
    },
    labelText: {
      fontSize: isTablet ? 16 : 14,
      fontWeight: 'bold',
      color: currentTheme.text,
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    dataCell: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.25),
    },
    dataText: {
      fontSize: isTablet ? 16 : 14,
      color: currentTheme.text,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    // Single full-width table styles
    singleTableContainer: {
      width: '100%',
      backgroundColor: currentTheme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: getColorWithOpacity(currentTheme.primary, 0.8),
      marginTop: 16,
    },
    singleTableHeader: {
      flexDirection: 'row',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.9),
    },
    singleHeaderCell: {
      flex: 1,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    singleTableRow: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderTopColor: currentTheme.border,
    },
    singleCell: {
      flex: 1,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.25),
    },
    singleTypeCell: {
      flex: 1,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.25),
    },
    singleCategoryCell: {
      flex: 1,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColorWithOpacity(currentTheme.primary, 0.25),
    },
    
  });

  return (
    <View style={styles.container}>
      <AnimatedHeader 
        title="عدد"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
        customTheme={currentTheme}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Lesson Introduction */}
        <Text style={styles.lessonTitle}>عدد</Text>
        <Text style={styles.lessonTitleEnglish}>Number</Text>
        
                        
            <Text style={styles.explanationText}>
              عربی میں عدد کے اعتبار سے اسم{' '}
              <Text style={styles.highlightedText}>تین طرح</Text> کا ہو گا۔
            </Text>
            
            <View style={styles.tableContainer}>
              <View style={styles.table}>
                
                <View style={styles.tableRow}>
                  
                  <View style={styles.tableCell}>
                    <Text style={styles.urduCellText}>ایک کے لیے</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>واحد</Text>
                  </View>
                </View>
                
                <View style={styles.tableRow}>
                  
                  <View style={styles.tableCell}>
                    <Text style={styles.urduCellText}>دو کے لیے</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>مثنى</Text>
                  </View>
                </View>
                
                <View style={styles.tableRow}>
                  
                  <View style={styles.tableCell}>
                    <Text style={styles.urduCellText}>دو سے زیادہ کے لیے</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.cellText}>جمع</Text>
                  </View>
                </View>
              </View>
            </View>
            
            {/* Dual Formation Section */}
            <View style={styles.sectionCard}>
              <Text style={styles.mainTitle}>مثنی بنانے کا طریقہ</Text>
              
              {/* Nominative Case Section */}
              <View style={styles.subSection}>
                <Text style={styles.sectionTitle}>حالت رفع میں:</Text>
                <Text style={styles.explanationText}>
                  مذکر یا مونث دونوں طرح کے اسماء سے مثنی بنانے کے لیے{' '}
                  <Text style={styles.highlightedText}>( َ انِ)</Text> کا اضافہ کر دیا جاتا ہے۔
                </Text>
                
                <View style={styles.examplesContainer}>
                  <View style={styles.exampleItem}>
                    <Text style={styles.exampleText}>
                      <Text style={styles.normalText}>رَجُل</Text> سے{' '}
                      <Text style={styles.highlightedText}>رَجُلَانِ</Text>
                    </Text>
                  </View>
                  
                  <View style={styles.exampleItem}>
                    <Text style={styles.exampleText}>
                      <Text style={styles.normalText}>اِمْرَعَةٌ</Text> سے{' '}
                      <Text style={styles.highlightedText}>اِمْرَعَتَانِ</Text>
                    </Text>
                  </View>
                </View>
              </View>
              
              {/* Accusative and Genitive Case Section */}
              <View style={styles.subSection}>
                <Text style={styles.sectionTitle}>حالت نصب اور جر میں:</Text>
                <Text style={styles.explanationText}>
                  مذکر یا مونث دونوں طرح کے اسماء سے مثنی بنانے کے لیے{' '}
                  <Text style={styles.highlightedText}>( َ  يْنِ )</Text> کا اضافہ کر دیا جاتا ہے۔
                </Text>
                
                <View style={styles.examplesContainer}>
                  <View style={styles.exampleItem}>
                    <Text style={styles.exampleText}>
                      <Text style={styles.normalText}>كِتَابًا - كِتَابٍ</Text> سے{' '}
                      <Text style={styles.highlightedText}>كِتَابَيْنِ</Text>
                    </Text>
                  </View>
                  
                  <View style={styles.exampleItem}>
                    <Text style={styles.exampleText}>
                      <Text style={styles.normalText}>قَلَمًا - قَلَمٍ</Text> سے{' '}
                      <Text style={styles.highlightedText}>قَلَمَيْنِ</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            
            {/* Plural (جمع) Section */}
            <View style={styles.sectionCard}>
              
              {/* Diagram First */}
              <View style={styles.diagramContainer}>
                {/* Main جمع Box */}
                <View style={styles.mainJamaBox}>
                  <Text style={styles.mainJamaText}>جمع</Text>
                </View>
                
                {/* Connecting Lines */}
                <View style={styles.connectingLines}>
                  <View style={styles.connectingLine1} />
                  <View style={styles.connectingLine2} />
                </View>
                
                {/* Sub Categories */}
                <View style={styles.subCategoriesContainer}>
                  
                  <View style={styles.subCategoryBox}>
                    <Text style={styles.subCategoryText}>جمع مُكَسَّر</Text>
                  </View>
                  <View style={styles.subCategoryBox}>
                    <Text style={styles.subCategoryText}>جمع سالم</Text>
                  </View>
                </View>
              </View>
              
              {/* Text Content Below */}
              <View style={styles.textContent}>
                
                {/* جمع سالم Section */}
                <View style={styles.subSection}>
                  <Text style={styles.sectionTitle}>جمع سالم:</Text>
                  <Text style={styles.explanationText}>
                    جمع کی وہ قسم جس کے شروع میں متعلقہ واحد اسم اپنی اصل حالت میں صحیح و سالم موجود رہتا ہے۔
                  </Text>
                  <Text style={styles.explanationText}>
                    یہ جمع باقاعدہ ایک فارمولے کے تحت بنتی ہے۔
                  </Text>
                  
                  <View style={styles.examplesContainer}>
                    <View style={styles.exampleItem}>
                      <Text style={styles.exampleText}>
                        <Text style={styles.normalText}>مُسلِم</Text> سے{' '}
                        <Text style={styles.highlightedText}>مُسْلِمُوْنَ</Text>
                      </Text>
                    </View>
                    
                    <View style={styles.exampleItem}>
                      <Text style={styles.exampleText}>
                        <Text style={styles.normalText}>كَافِرٌ</Text> سے{' '}
                        <Text style={styles.highlightedText}>كَافِرُوْنَ</Text>
                      </Text>
                    </View>
                    
                    <View style={styles.exampleItem}>
                      <Text style={styles.exampleText}>
                        <Text style={styles.normalText}>جَنَّۃَ</Text> سے{' '}
                        <Text style={styles.highlightedText}>جَنَّاتٌ</Text>
                      </Text>
                    </View>
                  </View>
                </View>
                
                {/* جمع مكسر Section */}
                <View style={styles.subSection}>
                  <Text style={styles.sectionTitle}>جمع مُكَسَّر:</Text>
                  <Text style={styles.explanationText}>
                    جمع کی وہ قسم جس کے شروع میں متعلقہ واحد اسم اپنی اصل حالت میں صحیح و سالم نہیں رہتا بلکہ جمع بنانے کے لیے توڑ دیا جاتا ہے۔
                  </Text>
                  <Text style={styles.explanationText}>
                    جمع کی اس قسم کا کوئی فارمولا نہیں ہے۔
                  </Text>
                  
                  <View style={styles.examplesContainer}>
                    <View style={styles.exampleItem}>
                      <Text style={styles.exampleText}>
                        <Text style={styles.normalText}>قَلَمَ</Text> سے{' '}
                        <Text style={styles.highlightedText}>أَقْلَامٌ</Text>
                      </Text>
                    </View>
                    
                    <View style={styles.exampleItem}>
                      <Text style={styles.exampleText}>
                        <Text style={styles.normalText}>بَابٌ</Text> سے{' '}
                        <Text style={styles.highlightedText}>اَبْوَابٌ</Text>
                      </Text>
                    </View>
                    
                    <View style={styles.exampleItem}>
                      <Text style={styles.exampleText}>
                        <Text style={styles.normalText}>عَمَلٌ</Text> سے{' '}
                        <Text style={styles.highlightedText}>أَعْمَالٌ</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            
            {/* واحد و مثنی و جمع بنانے کی تختی */}
            <View style={styles.sectionCard}>
              <Text style={styles.mainTitle}>واحد و مثنی و جمع بنانے کی تختی</Text>
              
              {/* Single Full-Width Table (Masculine) */}
              <View style={styles.singleTableContainer}>
                {/* Header Row */}
                <View style={styles.singleTableHeader}>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>جر</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>نصب</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>رفع</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}></Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>مذکر</Text></View>
                </View>
                
                {/* Rows */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064D'} </Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> ًا</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064C'} </Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>واحد</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}></Text></View>
                </View>
                
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}> َ يْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> َ يْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> َ انِ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>مثنى</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}></Text></View>
                </View>
                
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}> ِ يْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> ِ يْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> ُ وْنِ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>جمع سالم</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}></Text></View>
                </View>
                
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064D'} </Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> ًا</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064C'} </Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>جمع مکسر</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}>منصرف</Text></View>
                </View>
                
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064E'} </Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064E'} </Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064F'} </Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>جمع مکسر</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}>غیر منصرف</Text></View>
                </View>
              </View>
              
              {/* Single Full-Width Table (Feminine) */}
              <View style={styles.singleTableContainer}>
                {/* Header Row */}
                <View style={styles.singleTableHeader}>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>جر</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>نصب</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>رفع</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}></Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>مونث</Text></View>
                </View>
                
                {/* Rows */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>ةٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>ةً</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>ةٌ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>واحد</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}></Text></View>
                </View>
                
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}> َ يْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> َ يْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> َ انِ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>مثنى</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}></Text></View>
                </View>
                
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>اتٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>اتٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>اتٌ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>جمع سالم</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}></Text></View>
                </View>
                
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>ةٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>ةً</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>ةٌ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>جمع مکسر</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}>منصرف</Text></View>
                </View>
                
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064E'} </Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064E'} </Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}> {'\u064F'} </Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>جمع مکسر</Text></View>
                  <View style={styles.singleCategoryCell}><Text style={styles.labelText}>غیر منصرف</Text></View>
                </View>
              </View>
            </View>
 
            {/* Examples Table - مثلاً */}
            <View style={styles.sectionCard}>
              <Text style={styles.mainTitle}>مثلاً</Text>
              <View style={styles.singleTableContainer}>
                {/* Header */}
                <View style={styles.singleTableHeader}>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>جر</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>نصب</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>رفع</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>مذکر جمع سالم</Text></View>
                </View>

                {/* Row: واحد (Masculine singular) */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>عَبِدٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>عَبِدًا</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>عَبِدٌ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>واحد</Text></View>
                </View>

                {/* Row: Dual */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>عَبِدَيْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>عَبِدَيْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>عَبِدَانِ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>مثنى</Text></View>
                </View>

                {/* Row: Sound plural */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>عَبِدِينَ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>عَبِدِينَ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>عَبِدُونَ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>جمع سالم</Text></View>
                </View>
              </View>
              
              {/* Feminine Sound Plural Examples */}
              <View style={styles.singleTableContainer}>
                {/* Header */}
                <View style={styles.singleTableHeader}>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>جر</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>نصب</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>رفع</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>مونث جمع سالم</Text></View>
                </View>

                {/* Row: واحد (Feminine) */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>جَنَّةٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>جَنَّةً</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>جَنَّةٌ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>واحد</Text></View>
                </View>

                {/* Row: Dual (Feminine) */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>جَنَّتَيْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>جَنَّتَيْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>جَنَّتَانِ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>مثنى</Text></View>
                </View>

                {/* Row: Sound plural (Feminine) */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>جَنَّاتٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>جَنَّاتٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>جَنَّاتٌ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>جمع سالم</Text></View>
                </View>
              </View>

              {/* Masculine Broken Plural Examples */}
              <View style={styles.singleTableContainer}>
                {/* Header */}
                <View style={styles.singleTableHeader}>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>جر</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>نصب</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>رفع</Text></View>
                  <View style={styles.singleHeaderCell}><Text style={styles.headerText}>مذکر جمع مکسر</Text></View>
                </View>

                {/* Row: واحد */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>بَابٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>بَابًا</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>بَابٌ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>واحد</Text></View>
                </View>

                {/* Row: Dual */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>بَابَيْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>بَابَيْنِ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>بَابَانِ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>مثنى</Text></View>
                </View>

                {/* Row: Broken plural */}
                <View style={styles.singleTableRow}>
                  <View style={styles.singleCell}><Text style={styles.dataText}>أَبْوَابٍ</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>أَبْوَابًا</Text></View>
                  <View style={styles.singleCell}><Text style={styles.dataText}>أَبْوَابٌ</Text></View>
                  <View style={styles.singleTypeCell}><Text style={styles.labelText}>جمع مکسر</Text></View>
                </View>
              </View>
            </View>
          
        

        
      </ScrollView>
    </View>
  );
};

export default Part2Lesson9Screen; 