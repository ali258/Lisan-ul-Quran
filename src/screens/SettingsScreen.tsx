import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Modal,
  Dimensions,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { getCurrentTheme, THEME_CONFIG, THEME_NAMES, ThemeVariant } from '../utils/theme';
import AnimatedHeader from '../components/AnimatedHeader';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

interface SettingsScreenProps {
  onBackPress: () => void;
}

// Theme configuration for easy addition of new themes
const THEME_CONFIGURATION = [
  {
    variant: 'green' as ThemeVariant,
    name: 'Green Theme',
    icon: '🌿',
    description: 'Natural green color scheme'
  },
  {
    variant: 'teal' as ThemeVariant,
    name: 'Teal & Gray Theme', 
    icon: '💠',
    description: 'Modern teal and gray combination'
  },
  {
    variant: 'crimsonNight' as ThemeVariant,
    name: 'Crimson Night Theme',
    icon: '🩸',
    description: 'Vibrant crimson and black tones'
  },
  {
    variant: 'sunsetCrimson' as ThemeVariant,
    name: 'Sunset Crimson Theme',
    icon: '🌅',
    description: 'Warm orange and red tones'
  },
  // Easy to add more themes here:
  // {
  //   variant: 'blue' as ThemeVariant,
  //   name: 'Ocean Blue Theme',
  //   icon: '🌊',
  //   description: 'Calming ocean blue colors'
  // },
  // {
  //   variant: 'purple' as ThemeVariant,
  //   name: 'Royal Purple Theme',
  //   icon: '👑',
  //   description: 'Elegant purple and gold'
  // },
  // {
  //   variant: 'warm' as ThemeVariant,
  //   name: 'Warm Sunset Theme',
  //   icon: '🌅',
  //   description: 'Warm orange and red tones'
  // },
];

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBackPress }) => {
  const { isDarkMode, themeVariant, toggleDarkMode, setThemeVariant } = useThemeStore();
  const currentTheme = getCurrentTheme(themeVariant, isDarkMode);
  const [showThemeModal, setShowThemeModal] = useState(false);

  // Get current theme info
  const currentThemeInfo = THEME_CONFIGURATION.find(theme => theme.variant === themeVariant) || THEME_CONFIGURATION[0];

  const settingsOptions = [
    {
      id: 'theme-variant',
      title: 'App Theme',
      description: 'Choose your preferred color theme',
      type: 'option',
      value: currentThemeInfo.name,
      onPress: () => setShowThemeModal(true),
      icon: currentThemeInfo.icon,
    },
    {
      id: 'dark-mode',
      title: 'Dark Mode',
      description: 'Switch between light and dark mode',
      type: 'toggle',
      value: isDarkMode,
      onToggle: toggleDarkMode,
      icon: isDarkMode ? '🌙' : '☀️',
    },
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'Enable push notifications for reminders',
      type: 'toggle',
      value: true,
      onToggle: () => console.log('Toggle notifications'),
      icon: '🔔',
    },
    {
      id: 'language',
      title: 'Language',
      description: 'Change app language',
      type: 'option',
      value: 'English',
      onPress: () => console.log('Change language'),
      icon: '🌐',
    },
    {
      id: 'font-size',
      title: 'Font Size',
      description: 'Adjust text size for better readability',
      type: 'option',
      value: 'Medium',
      onPress: () => console.log('Change font size'),
      icon: '📝',
    },
    {
      id: 'backup',
      title: 'Backup & Sync',
      description: 'Sync your progress across devices',
      type: 'option',
      value: 'Auto',
      onPress: () => console.log('Backup settings'),
      icon: '☁️',
    },
    {
      id: 'about',
      title: 'About',
      description: 'App version and information',
      type: 'option',
      value: 'v1.0.0',
      onPress: () => console.log('About app'),
      icon: 'ℹ️',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <AnimatedHeader 
        title="Settings"
        showSubtitle={false}
        showSettings={false}
        showBackButton={true}
        onBackPress={onBackPress}
      />
      
      <ScrollView 
        style={[styles.scrollContainer, { paddingTop: 90 }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.settingsContainer}>
          {settingsOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.settingItem,
                {
                  backgroundColor: currentTheme.card,
                  borderBottomColor: currentTheme.border,
                }
              ]}
              onPress={option.type === 'option' ? option.onPress : undefined}
              activeOpacity={option.type === 'option' ? 0.7 : 1}
            >
              <View style={styles.settingLeft}>
                <Text style={styles.settingIcon}>{option.icon}</Text>
                <View style={styles.settingTextContainer}>
                  <Text style={[styles.settingTitle, { color: currentTheme.text }]}>
                    {option.title}
                  </Text>
                  <Text style={[styles.settingDescription, { color: currentTheme.textSecondary }]}>
                    {option.description}
                  </Text>
                </View>
              </View>
              
              <View style={styles.settingRight}>
                {option.type === 'toggle' ? (
                  <Switch
                    value={option.value as boolean}
                    onValueChange={option.onToggle}
                    thumbColor={currentTheme.surface}
                    trackColor={{ 
                      false: currentTheme.border, 
                      true: currentTheme.primary 
                    }}
                  />
                ) : (
                  <View style={styles.optionValue}>
                    <Text style={[styles.optionValueText, { color: currentTheme.textSecondary }]}>
                      {option.value}
                    </Text>
                    <Text style={[styles.chevron, { color: currentTheme.textSecondary }]}>→</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.footerSection}>
          <Text style={[styles.footerText, { color: currentTheme.textSecondary }]}>
            Lisan ul Quran - Learn Quranic Arabic
          </Text>
          <Text style={[styles.versionText, { color: currentTheme.textSecondary }]}>
            Version 1.0.0
          </Text>
        </View>
      </ScrollView>

      {/* Theme Selection Modal */}
      <Modal
        visible={showThemeModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowThemeModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: currentTheme.surface }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: currentTheme.text }]}>
                Choose Theme
              </Text>
              <TouchableOpacity
                onPress={() => setShowThemeModal(false)}
                style={styles.closeButton}
              >
                <Text style={[styles.closeButtonText, { color: currentTheme.textSecondary }]}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.themeGrid}>
              {THEME_CONFIGURATION.map((theme) => {
                const themeColors = getCurrentTheme(theme.variant, isDarkMode);
                const isSelected = themeVariant === theme.variant;
                
                return (
                  <TouchableOpacity
                    key={theme.variant}
                    style={[
                      styles.themeCard,
                      {
                        backgroundColor: themeColors.surface,
                        borderColor: isSelected ? themeColors.primary : themeColors.border,
                        borderWidth: isSelected ? 3 : 1,
                      }
                    ]}
                    onPress={() => {
                      setThemeVariant(theme.variant);
                      setShowThemeModal(false);
                    }}
                  >
                    <View style={styles.themePreview}>
                      <View style={[styles.themePreviewHeader, { backgroundColor: themeColors.primary }]}>
                        <Text style={styles.themePreviewIcon}>{theme.icon}</Text>
                      </View>
                      <View style={styles.themePreviewContent}>
                        <View style={[styles.themePreviewCard, { backgroundColor: themeColors.card }]}>
                          <View style={[styles.themePreviewBar, { backgroundColor: themeColors.secondary }]} />
                          <View style={[styles.themePreviewBar, { backgroundColor: themeColors.accent, width: '60%' }]} />
                        </View>
                      </View>
                    </View>
                    
                    <View style={styles.themeInfo}>
                      <Text style={[styles.themeName, { color: themeColors.text }]}>
                        {theme.name}
                      </Text>
                      <Text style={[styles.themeDescription, { color: themeColors.textSecondary }]}>
                        {theme.description}
                      </Text>
                    </View>
                    
                    {isSelected && (
                      <View style={[styles.selectedIndicator, { backgroundColor: themeColors.primary }]}>
                        <Text style={[styles.selectedText, { color: themeColors.surface }]}>✓</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    paddingBottom: 40,
  },
  settingsContainer: {
    paddingHorizontal: THEME_CONFIG.spacing.xl,
    paddingTop: THEME_CONFIG.spacing.xl,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: THEME_CONFIG.spacing.lg,
    borderBottomWidth: 1,
    borderRadius: THEME_CONFIG.borderRadius.medium,
    marginBottom: THEME_CONFIG.spacing.sm,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 24,
    marginRight: THEME_CONFIG.spacing.md,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: THEME_CONFIG.fontSize.large,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    marginBottom: THEME_CONFIG.spacing.xs / 2,
  },
  settingDescription: {
    fontSize: THEME_CONFIG.fontSize.small,
    lineHeight: 18,
  },
  settingRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionValueText: {
    fontSize: THEME_CONFIG.fontSize.medium,
    marginRight: THEME_CONFIG.spacing.sm,
  },
  chevron: {
    fontSize: 16,
    fontWeight: THEME_CONFIG.fontWeight.bold,
  },
  footerSection: {
    alignItems: 'center',
    paddingHorizontal: THEME_CONFIG.spacing.xl,
    paddingTop: THEME_CONFIG.spacing.xxl,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    borderRadius: THEME_CONFIG.borderRadius.large,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: THEME_CONFIG.spacing.lg,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: THEME_CONFIG.fontSize.xlarge,
    fontWeight: THEME_CONFIG.fontWeight.bold,
  },
  closeButton: {
    padding: THEME_CONFIG.spacing.sm,
  },
  closeButtonText: {
    fontSize: THEME_CONFIG.fontSize.xlarge,
  },
  themeGrid: {
    padding: THEME_CONFIG.spacing.md,
  },
  themeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: THEME_CONFIG.borderRadius.medium,
    marginBottom: THEME_CONFIG.spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
  },
  themePreview: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: THEME_CONFIG.borderRadius.medium,
    marginRight: THEME_CONFIG.spacing.md,
  },
  themePreviewHeader: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: THEME_CONFIG.borderRadius.medium,
  },
  themePreviewIcon: {
    fontSize: THEME_CONFIG.fontSize.xxlarge,
  },
  themePreviewContent: {
    flex: 1,
    justifyContent: 'center',
  },
  themePreviewCard: {
    width: '100%',
    height: 10,
    borderRadius: THEME_CONFIG.borderRadius.small,
    marginBottom: THEME_CONFIG.spacing.xs,
  },
  themePreviewBar: {
    height: 10,
    borderRadius: THEME_CONFIG.borderRadius.small,
  },
  themeInfo: {
    flex: 1,
    paddingRight: THEME_CONFIG.spacing.md,
  },
  themeName: {
    fontSize: THEME_CONFIG.fontSize.medium,
    fontWeight: THEME_CONFIG.fontWeight.semibold,
    marginBottom: THEME_CONFIG.spacing.xs / 2,
  },
  themeDescription: {
    fontSize: THEME_CONFIG.fontSize.small,
    lineHeight: 16,
  },
  selectedIndicator: {
    position: 'absolute',
    top: THEME_CONFIG.spacing.sm,
    right: THEME_CONFIG.spacing.sm,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    fontSize: THEME_CONFIG.fontSize.medium,
  },
});

export default SettingsScreen;