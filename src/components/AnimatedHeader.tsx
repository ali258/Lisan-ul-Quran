import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { getCurrentTheme, THEME_CONFIG, Theme } from '../utils/theme';
import AnimatedThemeToggle from './AnimatedThemeToggle';

const { width } = Dimensions.get('window');

interface AnimatedHeaderProps {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  showSettings?: boolean;
  showBackButton?: boolean;
  onSettingsPress?: () => void;
  onBackPress?: () => void;
  customTheme?: Theme; // Optional custom theme
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  title = 'Lisan ul Quran',
  subtitle = 'Welcome to Quranic Arabic Learning',
  showSubtitle = false,
  showSettings = true,
  showBackButton = false,
  onSettingsPress,
  onBackPress,
  customTheme
}) => {
  const { isDarkMode, themeVariant } = useThemeStore();
  const currentTheme = customTheme || getCurrentTheme(themeVariant, isDarkMode);

  // Determine status bar style based on theme variant and mode
  const getStatusBarStyle = () => {
    if (customTheme) {
      // For custom themes (ISM blue, HARF orange), use light-content since they have dark primary colors
      return "light-content";
    } else if (themeVariant === 'teal') {
      // For teal theme: both light and dark modes have colored headers, so use light-content
      return isDarkMode ? "dark-content" : "light-content";
    } else {
      // For green theme: use the standard approach
      return isDarkMode ? "light-content" : "dark-content";
    }
  };

  return (
    <>
      <StatusBar 
        barStyle={getStatusBarStyle()} 
        backgroundColor={currentTheme.primary} 
      />
      <View style={[
        styles.header,
        { backgroundColor: currentTheme.primary }
      ]}>
        <View style={styles.headerContent}>
          <View style={styles.leftIcons}>
            {showBackButton && (
              <TouchableOpacity 
                style={styles.backButton}
                onPress={onBackPress}
                activeOpacity={0.7}
              >
                <Text style={[styles.backIcon, { color: currentTheme.surface }]}>←</Text>
              </TouchableOpacity>
            )}
            {showSettings && (
              <TouchableOpacity 
                style={styles.settingsButton}
                onPress={onSettingsPress}
                activeOpacity={0.7}
              >
                <Text style={[styles.settingsIcon, { color: currentTheme.surface }]}>⚙️</Text>
              </TouchableOpacity>
            )}
          </View>
          
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: currentTheme.surface }]}>
              {title}
            </Text>
            {showSubtitle && (
              <Text style={[styles.subtitle, { color: currentTheme.surface }]}>
                {subtitle}
              </Text>
            )}
          </View>
          
          <View style={styles.rightIcons}>
            <AnimatedThemeToggle customTheme={customTheme} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 24,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: THEME_CONFIG.fontWeight.bold,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: THEME_CONFIG.fontSize.small,
    opacity: 0.9,
    lineHeight: 16,
    textAlign: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  backIcon: {
    fontSize: 20,
    fontWeight: THEME_CONFIG.fontWeight.bold,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: THEME_CONFIG.spacing.sm,
    minWidth: 40, // Ensure consistent spacing
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: THEME_CONFIG.spacing.sm,
    minWidth: 40, // Ensure consistent spacing
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  settingsIcon: {
    fontSize: 18,
  },
});

export default AnimatedHeader;