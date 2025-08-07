import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { COLORS } from '../utils/constants';

interface SplashScreenProps {
  onNavigate: () => void;
}

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC<SplashScreenProps> = ({ onNavigate }) => {
  const { isDarkMode } = useThemeStore();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  const colors = isDarkMode ? COLORS.dark : COLORS.light;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100vw',
      height: '100vh',
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    animatedContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 400,
      paddingHorizontal: 20,
    },
    logoContainer: {
      width: Math.min(width * 0.25, 120),
      height: Math.min(width * 0.25, 120),
      borderRadius: Math.min(width * 0.125, 60),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.surface,
      borderWidth: 3,
      borderColor: colors.primary,
      marginBottom: Math.min(height * 0.03, 24),
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    logoText: {
      fontSize: Math.min(width * 0.12, 48),
    },
    title: {
      fontSize: Math.min(width * 0.08, 32),
      fontWeight: 'bold',
      marginBottom: Math.min(height * 0.01, 8),
      color: colors.primary,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: Math.min(width * 0.045, 18),
      color: colors.textSecondary,
      marginBottom: Math.min(height * 0.04, 32),
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    animatedText: {
      fontSize: Math.min(width * 0.04, 16),
      color: colors.textSecondary,
      textAlign: 'center',
    },
    loadingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Math.min(height * 0.02, 16),
    },
    loadingDot: {
      width: Math.min(width * 0.02, 8),
      height: Math.min(width * 0.02, 8),
      borderRadius: Math.min(width * 0.01, 4),
      backgroundColor: colors.primary,
      marginHorizontal: Math.min(width * 0.01, 4),
    },
  });

  useEffect(() => {
    const animations = [
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ];

    Animated.sequence(animations).start(() => {
      setTimeout(() => {
        onNavigate();
      }, 2000);
    });
  }, [fadeAnim, scaleAnim, slideAnim, onNavigate]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: slideAnim },
            ],
          },
        ]}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>📖</Text>
        </View>

        <Text style={styles.title}>Lisan ul Quran</Text>
        <Text style={styles.subtitle}>Learn Arabic the Quranic Way</Text>

        <Animated.Text
          style={[
            styles.animatedText,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          Loading...
        </Animated.Text>

        <View style={styles.loadingContainer}>
          <View style={styles.loadingDot} />
          <View style={styles.loadingDot} />
          <View style={styles.loadingDot} />
        </View>
      </Animated.View>
    </View>
  );
};

export default SplashScreen; 