import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { getCurrentTheme, THEME_CONFIG } from '../utils/theme';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const { isDarkMode, themeVariant } = useThemeStore();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.5));
  const currentTheme = getCurrentTheme(themeVariant, isDarkMode);

  useEffect(() => {
    // Start splash animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto hide splash after 4 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, onFinish]);

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.primary }]}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={currentTheme.primary} 
      />
      
      <Animated.View 
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {/* Islamic Logo */}
        <View style={[
          styles.logoCircle, 
          { 
            backgroundColor: currentTheme.surface, 
            borderColor: currentTheme.accent 
          }
        ]}>
          <Text style={styles.logoIcon}>🕌</Text>
        </View>
        
        {/* App Title */}
        <Text style={[styles.appTitle, { color: currentTheme.surface }]}>
          Lisan ul Quran
        </Text>
        <Text style={[styles.appSubtitle, { color: currentTheme.surface }]}>
          Learn Quranic Arabic
        </Text>
        
        {/* Loading dots */}
        <View style={styles.loadingDots}>
          <View style={[styles.dot, { backgroundColor: currentTheme.surface }]} />
          <View style={[styles.dot, { backgroundColor: currentTheme.surface }]} />
          <View style={[styles.dot, { backgroundColor: currentTheme.surface }]} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: THEME_CONFIG.spacing.xxl + THEME_CONFIG.spacing.lg,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: THEME_CONFIG.spacing.xxl + THEME_CONFIG.spacing.sm,
    borderWidth: 3,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  logoIcon: {
    fontSize: 50,
  },
  appTitle: {
    fontSize: THEME_CONFIG.fontSize.header,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    marginBottom: THEME_CONFIG.spacing.sm + THEME_CONFIG.spacing.xs,
    textAlign: 'center',
  },
  appSubtitle: {
    fontSize: THEME_CONFIG.fontSize.large + 2,
    textAlign: 'center',
    marginBottom: THEME_CONFIG.spacing.xxl + THEME_CONFIG.spacing.xl,
  },
  loadingDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: THEME_CONFIG.spacing.xs + 1,
  },
});

export default SplashScreen;