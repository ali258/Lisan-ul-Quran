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
      gap: 20,
    },
    lessonCard: {
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      borderRadius: 20,
      padding: 24,
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
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    lessonIcon: {
      fontSize: isTablet ? 48 : 36,
      marginRight: 16,
    },
    lessonInfo: {
      flex: 1,
    },
    lessonTitle: {
      fontSize: isTablet ? 24 : 20,
      fontWeight: 'bold',
      color: getThemeColor(colors.text, isDarkMode),
      marginBottom: 4,
    },
    lessonSubtitle: {
      fontSize: isTablet ? 16 : 14,
      color: getThemeColor(colors.textSecondary, isDarkMode),
      opacity: 0.8,
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
              <Text style={styles.lessonIcon}>🔤</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 1</Text>
                <Text style={styles.lessonSubtitle}>حروف الابتداء والحصر</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              آغاز اور حصر/اختصاص کے حروف سیکھیں۔ إلا، إنما، لا، اور ما جیسے اہم عربی حروف کو قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson2')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>❓</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 2</Text>
                <Text style={styles.lessonSubtitle}>حروف الاستفهام</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              عربی میں سوال پوچھنے کے لیے استعمال ہونے والے استفہامی حروف سیکھیں۔ أ، أَيَّانَ، أَيْنَ، كَمْ، كَيْفَ، مَتَى، اور هَلْ جیسے حروف کو قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>⏰</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 3</Text>
                <Text style={styles.lessonSubtitle}>حروف الاستقبال</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              عربی میں مستقبل کے افعال کو ظاہر کرنے کے لیے استعمال ہونے والے مستقبل کے حروف سیکھیں۔ سَ اور سَوْفَ جیسے حروف کو قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>✨</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 4</Text>
                <Text style={styles.lessonSubtitle}>حروف التحقيق / التخفيف</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              عربی میں امید اور سبب کے لیے استعمال ہونے والے تحقیق اور تخفیف کے حروف سیکھیں۔ عَسَى، كَيْ، كَيْلاَ، لَعَلَّهُ، اور لِكَيْ جیسے حروف کو قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>⚠️</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 5</Text>
                <Text style={styles.lessonSubtitle}>حروف التنبيه</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              عربی میں توجہ مرکوز کرنے اور سننے والوں کو خبردار کرنے کے لیے استعمال ہونے والے تنبیہ کے حروف سیکھیں۔ أَلَا، أَمَّا، اور هَـ (هاء التنبيه) جیسے حروف کو قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>🔤</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 6</Text>
                <Text style={styles.lessonSubtitle}>حروف التهجي / المقطعات</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              قرآن کے بعض سورتوں کے شروع میں پائے جانے والے پراسرار منفصل حروف (مقطعات) سیکھیں۔ الر، الم، حم، ص، طس، طه، ق، ن، يس اور مزید تمام 14 ترکیبات کو ان کے قرآنی حوالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>💪</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 7</Text>
                <Text style={styles.lessonSubtitle}>حروف التوكيد</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              عربی میں بیانات کو مضبوط اور تصدیق کرنے کے لیے استعمال ہونے والے تاکید کے حروف سیکھیں۔ أَنَّ، إِنَّ، قَدْ، لَ، اور نَ جیسے حروف کو ان کی مختلف اقسام اور قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>🔗</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 8</Text>
                <Text style={styles.lessonSubtitle}>حروف الجر</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              الفاظ کو جوڑنے اور رشتے ظاہر کرنے کے لیے استعمال ہونے والے تمام عربی حروف جر سیکھیں۔ إلى، في، من، على، عن، لِ، كَ اور مزید 18 اہم حروف جر کو ان کے معانی اور قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>⚡</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 9</Text>
                <Text style={styles.lessonSubtitle}>حروف الجزم</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              عربی میں فعل کے مزاج کو متاثر کرنے اور شرطی یا منفی بیانات بنانے والے حروف جزم سیکھیں۔ إِنْ، لَا، لَمَّا، اور لَمْ جیسے حروف کو ان کے قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>💬</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 10</Text>
                <Text style={styles.lessonSubtitle}>حروف الجواب / الانتقال</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              عربی میں سوالات کے جواب دینے اور موضوعات کو تبدیل کرنے کے لیے استعمال ہونے والے جواب اور انتقال کے حروف سیکھیں۔ أَجَلْ، بَلَى، اور كَلَّا جیسے حروف کو ان کے قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>🔀</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 11</Text>
                <Text style={styles.lessonSubtitle}>حروف الشرط</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              عربی میں اگر-تو کے بیانات اور شرطی جملے بنانے کے لیے استعمال ہونے والے شرطی حروف سیکھیں۔ إِذَا، إِنْ، كُلَّمَا، لَمَّا، لَوْ، اور لَوْلَا جیسے حروف کو ان کے قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>🔗</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 12</Text>
                <Text style={styles.lessonSubtitle}>حروف العطف</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              الفاظ، جملے اور فقروں کو جوڑنے والے حروف عطف سیکھیں۔ أَمْ، أَوْ، بَلْ، ثُمَّ، حَتَّى، فَ، لَا، لَكِنْ، اور وَ جیسے حروف کو ان کے مختلف استعمال کی اقسام کے ساتھ سیکھیں۔
            </Text>

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
              <Text style={styles.lessonIcon}>📢</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 13</Text>
                <Text style={styles.lessonSubtitle}>حروف النداء</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              کسی کو پکارنے یا خطاب کرنے کے لیے استعمال ہونے والے حروف نداء سیکھیں۔ أَيُّهَا اور يَا جیسے حروف کو ان کے قرآنی مثالوں کے ساتھ سیکھیں اور عربی میں لوگوں کو مناسب طریقے سے خطاب کرنے کا طریقہ سمجھیں۔
            </Text>

            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '0%' }]} />
            </View>
            <Text style={styles.progressText}>Ready to start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => onNavigate('QuranicWordHarfLesson14')}
            activeOpacity={0.7}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonIcon}>🔧</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>Lesson 14</Text>
                <Text style={styles.lessonSubtitle}>دیگر حروف</Text>
              </View>
            </View>
            
            <Text style={styles.lessonDescription}>
              وہ مختلف حروف سیکھیں جو دوسری اقسام میں نہیں آتے۔ إِذَا/إِذْ، إِلاَّ أَن، أَيْ، قَلَّمَا، نَعَمْ، اور وَإِمَّا جیسے حروف کو ان کے قرآنی مثالوں کے ساتھ سیکھیں۔
            </Text>

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