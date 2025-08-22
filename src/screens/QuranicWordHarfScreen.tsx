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
import { useThemeStore } from '../store/themeStore';
import { TAILWIND_COLORS, FONT_CLASSES } from '../utils/constants';
import { getThemeColor } from '../utils/colorUtils';
import { getFontWithProperFallback } from '../utils/fontUtils';

interface QuranicWordHarfScreenProps {
  onNavigate: (screen: any) => void;
  onBack: () => void;
}

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const QuranicWordHarfScreen: React.FC<QuranicWordHarfScreenProps> = ({ onNavigate, onBack }) => {
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
      borderRadius: 8,
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
    },
    backButtonText: {
      fontSize: 18,
      color: getThemeColor(colors.surface, isDarkMode),
      fontWeight: 'bold',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 40,
    },
    title: {
      fontSize: isTablet ? 32 : 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      color: getThemeColor(colors.primary, isDarkMode),
    },
    subtitle: {
      fontSize: isTablet ? 18 : 16,
      textAlign: 'center',
      marginBottom: 32,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 24,
    },
    comingSoonCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 20,
      padding: 40,
      marginTop: 40,
      borderWidth: 2,
      borderColor: getThemeColor(colors.primary, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
      alignItems: 'center',
    },
    comingSoonIcon: {
      fontSize: 64,
      marginBottom: 20,
    },
    comingSoonTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: getThemeColor(colors.primary, isDarkMode),
    },
    comingSoonText: {
      fontSize: isTablet ? 16 : 14,
      textAlign: 'center',
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 22,
    },
    decorativeLine: {
      height: 3,
      width: 60,
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 2,
      alignSelf: 'center',
      marginBottom: 24,
    },
    lessonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 16,
    },
    lessonCard: {
      width: isTablet ? '23%' : '48%',
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: getThemeColor(colors.border, isDarkMode),
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    lessonHeader: {
      alignItems: 'center',
      marginBottom: 16,
    },
    lessonIcon: {
      fontSize: isTablet ? 40 : 32,
      marginBottom: 12,
    },
    lessonInfo: {
      alignItems: 'center',
    },
    lessonTitle: {
      fontSize: isTablet ? 18 : 16,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      marginBottom: 8,
      textAlign: 'center',
    },
    lessonSubtitle: {
      fontSize: isTablet ? 14 : 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      opacity: 0.8,
      textAlign: 'center',
      lineHeight: 18,
    },
    lessonUrduName: {
      fontSize: isTablet ? 14 : 12,
      color: getThemeColor(colors.text, isDarkMode),
      textAlign: 'center',
      lineHeight: 18,
      fontFamily: getFontWithProperFallback(FONT_CLASSES.urdu),
      marginBottom: 4,
    },
    lessonEnglishName: {
      fontSize: isTablet ? 12 : 10,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      textAlign: 'center',
      lineHeight: 16,
      fontStyle: 'italic',
    },
    lessonDescription: {
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      lineHeight: 22,
      marginBottom: 16,
    },
    progressBar: {
      height: 6,
      backgroundColor: getThemeColor(colors.border, isDarkMode),
      borderRadius: 3,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: getThemeColor(colors.primary, isDarkMode),
      borderRadius: 3,
    },
    progressText: {
      fontSize: 12,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      marginTop: 8,
      textAlign: 'center',
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
        <Text style={styles.headerTitle}>حرف - Particles</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Title Section */}
        <Text style={styles.title}>🔤 حرف - Particles</Text>
        <Text style={styles.subtitle}>
          قرآن میں عربی حروف اور ان کے استعمال کو سیکھیں
        </Text>

        {/* Decorative Line */}
        <View style={styles.decorativeLine} />

        {/* Lessons Section */}
        <View style={styles.lessonsContainer}>
          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson1')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>🔗</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 1</Text>
                <Text style={styles.lessonUrduName}>اسم ضمائر</Text>
                <Text style={styles.lessonEnglishName}>Personal Pronouns</Text>
              </View>
            </View>
            

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '50%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson2')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>🔗</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 2</Text>
                <Text style={styles.lessonUrduName}>حروفِ جارہ</Text>
                <Text style={styles.lessonEnglishName}>Prepositions</Text>
              </View>
            </View>
            
            

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson3')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>💪</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 3</Text>
                <Text style={styles.lessonUrduName}>حروفِ جر مع الضمائر</Text>
                <Text style={styles.lessonEnglishName}>Conjunctions with the Particles</Text>
              </View>
            </View>
            
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson4')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>🔀</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 4</Text>
                <Text style={styles.lessonUrduName}>اسمائے اشارہ</Text>
                <Text style={styles.lessonEnglishName}>Demonstrative Pronouns</Text>
              </View>
            </View>
            
         

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson5')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>❓</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 5</Text>
                <Text style={styles.lessonUrduName}>اسم موصول</Text>
                <Text style={styles.lessonEnglishName}>Relative Pronouns</Text>
              </View>
            </View>
            
      
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson6')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>❌</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 6</Text>
                <Text style={styles.lessonUrduName}>حروف عطف</Text>
                <Text style={styles.lessonEnglishName}>Conjunctions</Text>
              </View>
            </View>
            

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson7')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>🚫</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 7</Text>
                <Text style={styles.lessonUrduName}>حروف و اسمائے استفهام</Text>
                <Text style={styles.lessonEnglishName}>Interrogative Particles</Text>
              </View>
            </View>
    
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson8')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>💪</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 8</Text>
                <Text style={styles.lessonUrduName}>حروف نفی و اثبات</Text>
                <Text style={styles.lessonEnglishName}>Negative & Positive Particles</Text>
              </View>
            </View>
            
            

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson9')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>🤝</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 9</Text>
                <Text style={styles.lessonUrduName}>حروف مشبه بالفعل </Text>
                <Text style={styles.lessonEnglishName}>Particles Resembling Verbs</Text>
              </View>
            </View>
            
            
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson10')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>📢</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 10</Text>
                <Text style={styles.lessonUrduName}>حروف ندا</Text>
                <Text style={styles.lessonEnglishName}>Vocative Particles</Text>
              </View>
            </View>
            
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson11')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>🔍</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 11</Text>
                <Text style={styles.lessonUrduName}>مرکب ما</Text>
                <Text style={styles.lessonEnglishName}>Compound Word with Ma</Text>
              </View>
            </View>
            

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson12')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>🎯</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 12</Text>
                <Text style={styles.lessonUrduName}>فعل کا ابتدائی حرف</Text>
                <Text style={styles.lessonEnglishName}>Prefix for Verb</Text>
              </View>
            </View>
            
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson13')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>🌟</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 13</Text>
                <Text style={styles.lessonUrduName}>قرآن کے عام حروف </Text>
                <Text style={styles.lessonEnglishName}>Quranic Common Harfs</Text>
              </View>
            </View>
            
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

         

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuranicWordHarfScreen; 