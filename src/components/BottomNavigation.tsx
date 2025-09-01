import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { getCurrentTheme, THEME_CONFIG, Theme } from '../utils/theme';

const { width } = Dimensions.get('window');

export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
}

interface BottomNavigationProps {
  onMenuSelect: (menuId: string) => void;
  activeMenu?: string;
  customTheme?: Theme; // Optional custom theme
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'quran',
    title: 'Quran',
    icon: '📖',
  },
  {
    id: 'grammar',
    title: 'Grammar',
    icon: '🔤',
  },
  {
    id: 'home',
    title: 'Home',
    icon: '🏠',
  },
  {
    id: 'words',
    title: 'Words',
    icon: '📝',
  },
  {
    id: 'more',
    title: 'More',
    icon: '⚙️',
  },
];

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  onMenuSelect,
  activeMenu = 'quran',
  customTheme,
}) => {
  const { isDarkMode, themeVariant } = useThemeStore();
  const currentTheme = customTheme || getCurrentTheme(themeVariant, isDarkMode);

  const handleMenuPress = (menuId: string) => {
    onMenuSelect(menuId);
  };

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: currentTheme.surface,
        borderTopColor: currentTheme.border,
        shadowColor: currentTheme.shadow,
      }
    ]}>
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = activeMenu === item.id;
        
        return (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.menuItem,
              isActive && {
                backgroundColor: currentTheme.primary + '15', // 15% opacity
              }
            ]}
            onPress={() => handleMenuPress(item.id)}
            activeOpacity={0.7}
          >
            <View style={[
              styles.iconContainer,
              isActive && {
                backgroundColor: currentTheme.primary,
              }
            ]}>
              <Text style={[
                styles.icon,
                { color: isActive ? currentTheme.surface : currentTheme.textSecondary }
              ]}>
                {item.icon}
              </Text>
            </View>
            <Text style={[
              styles.title,
              {
                color: isActive ? currentTheme.primary : currentTheme.textSecondary,
                fontWeight: isActive ? THEME_CONFIG.fontWeight.semibold : THEME_CONFIG.fontWeight.normal,
              }
            ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: THEME_CONFIG.spacing.sm,
    paddingHorizontal: THEME_CONFIG.spacing.xs,
    borderTopWidth: 1,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: THEME_CONFIG.spacing.sm,
    paddingHorizontal: THEME_CONFIG.spacing.xs,
    borderRadius: THEME_CONFIG.borderRadius.medium,
    marginHorizontal: 2,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: THEME_CONFIG.spacing.xs,
  },
  icon: {
    fontSize: 16,
  },
  title: {
    fontSize: THEME_CONFIG.fontSize.small - 1,
    textAlign: 'center',
    lineHeight: 12,
  },
});

export default BottomNavigation;