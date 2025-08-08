import React, { useState, useEffect } from 'react';
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


interface Lesson10ScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const Lesson10Screen: React.FC<Lesson10ScreenProps> = ({ onNavigate, onBack }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const aspects = [
    {
      urdu: 'اعراب',
      english: 'Status',
      description: 'اسم کی اعرابی حالت (نصب، رفع، جر)',
      color: '#059669',
      icon: '📊',
      gradient: ['#10b981', '#059669'],
    },
    {
      urdu: 'جنس',
      english: 'Gender',
      description: 'اسم کی جنس (مذکر، مؤنث)',
      color: '#7c3aed',
      icon: '👥',
      gradient: ['#a855f7', '#7c3aed'],
    },
    {
      urdu: 'عدد',
      english: 'Number',
      description: 'اسم کی عدد (واحد، تثنیہ، جمع)',
      color: '#3b82f6',
      icon: '🔢',
      gradient: ['#60a5fa', '#3b82f6'],
    },
    {
      urdu: 'وسعت',
      english: 'Capacity',
      description: 'اسم کی وسعت (معرفہ، نکرہ)',
      color: '#f97316',
      icon: '📦',
      gradient: ['#fb923c', '#f97316'],
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
      marginBottom: 32,
    },
    mainTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    underline: {
      height: 2,
      backgroundColor: getThemeColor(colors.border, isDarkMode),
      marginTop: 8,
      width: '60%',
    },
    diagramContainer: {
      marginVertical: 32,
      minHeight: 600,
      alignItems: 'center',
    },
    centralNode: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 8,
      borderWidth: 3,
      borderColor: getColorWithOpacity('blue-500', 0.3),
    },
    centralIcon: {
      fontSize: 32,
      marginBottom: 8,
    },
    centralText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textAlign: 'center',
    },
    graphContainer: {
      width: '100%',
      maxWidth: 500,
    },
    aspectRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
      width: '100%',
    },
    connectingLine: {
      width: 50,
      height: 3,
      backgroundColor: getThemeColor(colors.border, isDarkMode),
      marginRight: 20,
      borderRadius: 2,
    },
    aspectNode: {
      width: 90,
      height: 90,
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 5,
    },
    descriptionContainer: {
      flex: 1,
      marginLeft: 20,
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      padding: 16,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    aspectIcon: {
      fontSize: 20,
      marginBottom: 4,
    },
    aspectText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      marginBottom: 2,
    },
    aspectEnglish: {
      fontSize: 10,
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    aspectDescription: {
      fontSize: 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 18,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      textAlign: 'right',
    },
    detailsSection: {
      marginTop: 32,
    },
    detailsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    detailCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      borderLeftWidth: 4,
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    detailTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      color: getThemeColor(colors.text, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    detailDescription: {
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

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>سبق ۱۰ - اسم اور اس کے چار اہم پہلو</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>اسم اور اس کے چار اہم پہلو</Text>
          <View style={styles.underline} />
        </View>

        <View style={styles.diagramContainer}>
          {/* Central Node */}
          <View style={styles.centralNode}>
            <Text style={styles.centralIcon}>📚</Text>
            <Text style={styles.centralText}>اسم</Text>
          </View>
          
          {/* Graph Lines and Nodes */}
          <View style={styles.graphContainer}>
            {aspects.map((aspect, index) => (
              <View key={index} style={styles.aspectRow}>
                {/* Connecting Line */}
                <View style={styles.connectingLine} />
                
                {/* Aspect Node */}
                <View style={[styles.aspectNode, { backgroundColor: aspect.color }]}>
                  <Text style={styles.aspectIcon}>{aspect.icon}</Text>
                  <Text style={styles.aspectText}>{aspect.urdu}</Text>
                  <Text style={styles.aspectEnglish}>• {aspect.english}</Text>
                </View>
                
                {/* Description */}
                <View style={styles.descriptionContainer}>
                  <Text style={styles.aspectDescription}>{aspect.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.detailsTitle}>تفصیلی وضاحت</Text>
          
          <View style={styles.detailCard}>
            <Text style={styles.detailTitle}>اعراب (Status)</Text>
            <Text style={styles.detailDescription}>
              اسم کی اعرابی حالت سے مراد ہے کہ اسم کس حالت میں ہے - حالت رفع، حالت نصب، یا حالت جر۔ یہ عربی گرامر کا ایک اہم پہلو ہے۔
            </Text>
          </View>

          <View style={styles.detailCard}>
            <Text style={styles.detailTitle}>جنس (Gender)</Text>
            <Text style={styles.detailDescription}>
              اسم کی جنس سے مراد ہے کہ وہ مذکر ہے یا مؤنث۔ عربی زبان میں ہر اسم کی ایک مخصوص جنس ہوتی ہے۔
            </Text>
          </View>

          <View style={styles.detailCard}>
            <Text style={styles.detailTitle}>عدد (Number)</Text>
            <Text style={styles.detailDescription}>
              اسم کی عدد سے مراد ہے کہ وہ واحد ہے، تثنیہ ہے، یا جمع ہے۔ عربی میں تین اعداد ہیں۔
            </Text>
          </View>

          <View style={styles.detailCard}>
            <Text style={styles.detailTitle}>وسعت (Capacity)</Text>
            <Text style={styles.detailDescription}>
              اسم کی وسعت سے مراد ہے کہ وہ معرفہ ہے یا نکرہ۔ معرفہ مخصوص چیز کو بتاتا ہے جبکہ نکرہ غیر مخصوص۔
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson10Screen; 