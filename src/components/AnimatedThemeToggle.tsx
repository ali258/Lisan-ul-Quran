import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { getCurrentTheme, THEME_CONFIG, Theme } from '../utils/theme';

interface AnimatedThemeToggleProps {
  customTheme?: Theme; // Optional custom theme
}

const AnimatedThemeToggle: React.FC<AnimatedThemeToggleProps> = ({ customTheme }) => {
  const { isDarkMode, themeVariant, toggleTheme } = useThemeStore();
  const currentTheme = customTheme || getCurrentTheme(themeVariant, isDarkMode);
  const rotateValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handleToggle = () => {
    // Start rotation animation
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      rotateValue.setValue(0);
    });
    
    // Scale animation for button press feedback
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
    
    toggleTheme();
  };

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: currentTheme.border,
        borderColor: currentTheme.primary,
      }
    ]}>
      <TouchableOpacity
        onPress={handleToggle}
        style={styles.toggle}
        activeOpacity={0.8}
      >
        <Animated.View style={[
          styles.iconContainer,
          {
            transform: [
              { rotate: rotation },
              { scale: scaleValue },
            ],
          }
        ]}>
          <Text style={[styles.icon, { color: currentTheme.text }]}>
            {isDarkMode ? '🌙' : '☀️'}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    width: 40,
    height: 40,
  },
  toggle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
  },
});

export default AnimatedThemeToggle;