import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { getCurrentTheme, THEME_CONFIG } from '../utils/theme';
import AnimatedHeader from '../components/AnimatedHeader';
import BottomNavigation from '../components/BottomNavigation';

interface MoreScreenProps {
  onGoToSettings?: () => void;
  onBottomNavigation?: (menuId: string) => void;
}

const MoreScreen: React.FC<MoreScreenProps> = ({ onGoToSettings, onBottomNavigation }) => {
  const { isDarkMode, themeVariant } = useThemeStore();
  const currentTheme = getCurrentTheme(themeVariant, isDarkMode);

  const moreOptions = [
    {
      id: 'tajweed',
      title: 'Tajweed Rules',
      description: 'Learn the art of Quranic recitation',
      icon: '🎵',
      category: 'Learning',
      onPress: () => console.log('Tajweed'),
    },
    {
      id: 'duas',
      title: 'Daily Duas',
      description: 'Essential prayers for daily life',
      icon: '🤲',
      category: 'Spiritual',
      onPress: () => console.log('Duas'),
    },
    {
      id: 'progress',
      title: 'Learning Progress',
      description: 'Track your learning journey',
      icon: '📊',
      category: 'Analytics',
      onPress: () => console.log('Progress'),
    },
    {
      id: 'notes',
      title: 'My Notes',
      description: 'Your personal study notes',
      icon: '📝',
      category: 'Study',
      onPress: () => console.log('Notes'),
    },
    {
      id: 'calendar',
      title: 'Islamic Calendar',
      description: 'Important Islamic dates and events',
      icon: '📅',
      category: 'Reference',
      onPress: () => console.log('Calendar'),
    },
    {
      id: 'qibla',
      title: 'Qibla Direction',
      description: 'Find the direction to Mecca',
      icon: '🧭',
      category: 'Tools',
      onPress: () => console.log('Qibla'),
    },
    {
      id: 'prayer-times',
      title: 'Prayer Times',
      description: 'Daily prayer time notifications',
      icon: '🕐',
      category: 'Tools',
      onPress: () => console.log('Prayer Times'),
    },
    {
      id: 'community',
      title: 'Community',
      description: 'Connect with other learners',
      icon: '👥',
      category: 'Social',
      onPress: () => console.log('Community'),
    },
    {
      id: 'downloads',
      title: 'Downloads',
      description: 'Offline content and resources',
      icon: '📥',
      category: 'Resources',
      onPress: () => console.log('Downloads'),
    },
    {
      id: 'feedback',
      title: 'Send Feedback',
      description: 'Help us improve the app',
      icon: '💬',
      category: 'Support',
      onPress: () => console.log('Feedback'),
    },
    {
      id: 'about',
      title: 'About App',
      description: 'App information and credits',
      icon: 'ℹ️',
      category: 'Info',
      onPress: () => console.log('About'),
    },
  ];

  const groupedOptions = moreOptions.reduce((groups, option) => {
    const category = option.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(option);
    return groups;
  }, {} as Record<string, typeof moreOptions>);

  const categoryColors: Record<string, string> = {
    Learning: '#4CAF50',
    Spiritual: '#9C27B0',
    Analytics: '#2196F3',
    Study: '#FF9800',
    Reference: '#795548',
    Tools: '#607D8B',
    Social: '#E91E63',
    Resources: '#009688',
    Support: '#FFC107',
    Info: '#9E9E9E',
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <AnimatedHeader 
        title="More"
        showSubtitle={false}
        showSettings={true}
        showBackButton={false}
        onSettingsPress={onGoToSettings}
      />
      
      <ScrollView 
        style={[styles.scrollContainer, { paddingTop: 90 }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(groupedOptions).map(([category, options]) => (
          <View key={category} style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              <View 
                style={[
                  styles.categoryIndicator, 
                  { backgroundColor: categoryColors[category] || currentTheme.primary }
                ]} 
              />
              <Text style={[styles.categoryTitle, { color: currentTheme.text }]}>
                {category}
              </Text>
            </View>
            
            {options.map((option) => (
              <TouchableOpacity 
                key={option.id}
                style={[
                  styles.optionItem, 
                  { 
                    backgroundColor: currentTheme.card, 
                    borderColor: currentTheme.border 
                  }
                ]}
                onPress={option.onPress}
              >
                <View style={styles.optionLeft}>
                  <View 
                    style={[
                      styles.optionIconContainer,
                      { backgroundColor: (categoryColors[category] || currentTheme.primary) + '20' }
                    ]}
                  >
                    <Text style={styles.optionIcon}>{option.icon}</Text>
                  </View>
                  <View style={styles.optionTextContainer}>
                    <Text style={[styles.optionTitle, { color: currentTheme.text }]}>
                      {option.title}
                    </Text>
                    <Text style={[styles.optionDescription, { color: currentTheme.textSecondary }]}>
                      {option.description}
                    </Text>
                  </View>
                </View>
                <Text style={[styles.chevron, { color: currentTheme.textSecondary }]}>
                  →
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        
        <View style={styles.footerSection}>
          <Text style={[styles.footerText, { color: currentTheme.textSecondary }]}>
            Lisan ul Quran - Learn Quranic Arabic
          </Text>
          <Text style={[styles.versionText, { color: currentTheme.textSecondary }]}>
            Made with ❤️ for the Muslim Ummah
          </Text>
        </View>
      </ScrollView>
      
      <BottomNavigation 
        onMenuSelect={onBottomNavigation || (() => {})}
        activeMenu="more"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Space for bottom navigation
  },
  categorySection: {
    marginBottom: THEME_CONFIG.spacing.xl,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: THEME_CONFIG.spacing.xl,
    paddingVertical: THEME_CONFIG.spacing.md,
  },
  categoryIndicator: {
    width: 4,
    height: 20,
    borderRadius: 2,
    marginRight: THEME_CONFIG.spacing.md,
  },
  categoryTitle: {
    fontSize: THEME_CONFIG.fontSize.large,
    fontWeight: THEME_CONFIG.fontWeight.bold,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: THEME_CONFIG.spacing.lg,
    marginHorizontal: THEME_CONFIG.spacing.xl,
    marginBottom: THEME_CONFIG.spacing.sm,
    borderRadius: THEME_CONFIG.borderRadius.medium,
    borderWidth: 1,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: THEME_CONFIG.spacing.md,
  },
  optionIcon: {
    fontSize: 24,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: THEME_CONFIG.fontSize.medium,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    marginBottom: THEME_CONFIG.spacing.xs / 2,
  },
  optionDescription: {
    fontSize: THEME_CONFIG.fontSize.small,
    lineHeight: 18,
  },
  chevron: {
    fontSize: 18,
    fontWeight: THEME_CONFIG.fontWeight.bold,
  },
  footerSection: {
    alignItems: 'center',
    paddingHorizontal: THEME_CONFIG.spacing.xl,
    paddingVertical: THEME_CONFIG.spacing.xl,
  },
  footerText: {
    fontSize: THEME_CONFIG.fontSize.medium,
    textAlign: 'center',
    marginBottom: THEME_CONFIG.spacing.xs,
  },
  versionText: {
    fontSize: THEME_CONFIG.fontSize.small,
    textAlign: 'center',
  },
});

export default MoreScreen;