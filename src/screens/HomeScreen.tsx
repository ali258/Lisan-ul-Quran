import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import ThemeToggle from '../components/ThemeToggle';
import ExpandableMenuCard from '../components/ExpandableMenuCard';
import { QURAN_ARABIC_ITEM, QURAN_PARTS, TAILWIND_COLORS, FONT_CLASSES } from '../utils/constants';
import { getThemeColor } from '../utils/colorUtils';
import { getFontWithProperFallback } from '../utils/fontUtils';

interface HomeScreenProps {
  onNavigate: (screen: 'QuranPart1' | 'QuranPart2' | 'QuranPart3' | 'QuranPart4' | 'Part1Lessons' | 'Part2Lessons' | 'Part3Lessons') => void;
}

const { width, height } = Dimensions.get('window');

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;

  const handleQuranPartPress = (item: any) => {
    if (item.route === 'QuranPart1') {
      onNavigate('Part1Lessons');
    } else if (item.route === 'QuranPart2') {
      onNavigate('Part2Lessons');
    } else if (item.route === 'QuranPart3') {
      onNavigate('Part3Lessons');
    } else {
      onNavigate(item.route);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor(colors.background, isDarkMode),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: getThemeColor(colors.primary, isDarkMode),
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 40,
    },
    welcomeSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    welcomeTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 12,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
    },
    welcomeSubtitle: {
      fontSize: 18,
      textAlign: 'center',
      opacity: 0.8,
      marginBottom: 8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 24,
    },
    welcomeDescription: {
      fontSize: 14,
      textAlign: 'center',
      opacity: 0.6,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 20,
      paddingHorizontal: 20,
    },
    duaSection: {
      marginBottom: 40,
      padding: 24,
      borderRadius: 20,
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderWidth: 2,
      borderColor: getThemeColor(colors.primary, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 8,
    },
    duaTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: getThemeColor(colors.primary, isDarkMode),
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
    },
    arabicText: {
      fontSize: 32,
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: 16,
      color: '#f2751a', // primary-500 color
      lineHeight: 48,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.arabic),
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
      // Additional styling for better Arabic rendering
      writingDirection: 'rtl',
      textAlignVertical: 'center',
    },
    urduText: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.text, isDarkMode),
      lineHeight: 28,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
    },
    englishText: {
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.8,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 24,
      fontStyle: 'italic',
      fontFamily: getFontWithProperFallback(FONT_CLASSES.sans),
    },
    decorativeLine: {
      height: 3,
      width: 60,
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 2,
      alignSelf: 'center',
      marginBottom: 24,
    },
    quranSection: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
    },
    cardContainer: {
      marginBottom: 24,
    },
    featuresSection: {
      marginTop: 40,
    },
    featuresGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    featureItem: {
      width: '48%',
      marginBottom: 16,
      padding: 16,
      borderRadius: 16,
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      alignItems: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    featureIcon: {
      fontSize: 32,
      marginBottom: 12,
    },
    featureTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 4,
      color: getThemeColor(colors.text, isDarkMode),
    },
    featureSubtitle: {
      fontSize: 12,
      textAlign: 'center',
      opacity: 0.7,
      color: getThemeColor(colors.textSecondary, isDarkMode),
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
        <Text style={styles.title}>Lisan ul Quran</Text>
        <ThemeToggle />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>
            Welcome to Quranic Learning
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Discover the beauty of Arabic through the Holy Quran
          </Text>
          <Text style={styles.welcomeDescription}>
            Begin your journey to understand the divine language and connect with the sacred text
          </Text>
        </View>

        {/* Dua Section */}
        <View style={styles.duaSection}>
          <Text style={styles.duaTitle}>دعا</Text>
          <Text style={styles.arabicText}>
            رَبِّ يَسِّرْ وَلَا تُعَسِّرْ وَتَمِّمْ بِالْخَيْرِ
          </Text>
          <Text style={styles.urduText}>
            اے میرے رب! آسان فرما اور مشکل نہ فرما، اور خیر کے ساتھ مکمل فرما۔
          </Text>
          <Text style={styles.englishText}>
            "My Lord, make it easy and do not make it difficult, and complete it with goodness."
          </Text>
        </View>

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Quran Arabic Section */}
        <View style={styles.quranSection}>
          <Text style={styles.sectionTitle}>Start Your Journey</Text>
          <View style={styles.cardContainer}>
            <ExpandableMenuCard
              mainItem={QURAN_ARABIC_ITEM}
              subItems={QURAN_PARTS}
              onSubItemPress={handleQuranPartPress}
            />
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Learning Features</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎯</Text>
              <Text style={styles.featureTitle}>Structured Learning</Text>
              <Text style={styles.featureSubtitle}>Step-by-step approach</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📱</Text>
              <Text style={styles.featureTitle}>Interactive</Text>
              <Text style={styles.featureSubtitle}>Engaging exercises</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎵</Text>
              <Text style={styles.featureTitle}>Audio Support</Text>
              <Text style={styles.featureSubtitle}>Perfect pronunciation</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📊</Text>
              <Text style={styles.featureTitle}>Progress Tracking</Text>
              <Text style={styles.featureSubtitle}>Monitor your growth</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen; 