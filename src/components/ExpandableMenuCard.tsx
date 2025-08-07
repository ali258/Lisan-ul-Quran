import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { MenuItem } from '../types/navigation';
import { TAILWIND_COLORS } from '../utils/constants';
import { getThemeColor, getColorWithOpacity } from '../utils/colorUtils';
import { useThemeStore } from '../store/themeStore';

interface ExpandableMenuCardProps {
  mainItem: MenuItem;
  subItems: MenuItem[];
  onMainPress?: () => void;
  onSubItemPress?: (item: MenuItem) => void;
}

const { width } = Dimensions.get('window');

const ExpandableMenuCard: React.FC<ExpandableMenuCardProps> = ({
  mainItem,
  subItems,
  onMainPress,
  onSubItemPress,
}) => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? TAILWIND_COLORS.dark : TAILWIND_COLORS.light;
  const [isExpanded, setIsExpanded] = useState(false);

  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  const expandAnim = React.useRef(new Animated.Value(0)).current;
  const rotateAnim = React.useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.95,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handleMainPress = () => {
    if (onMainPress) {
      onMainPress();
    } else {
      // Toggle expansion
      const toValue = isExpanded ? 0 : 1;
      setIsExpanded(!isExpanded);
      
      Animated.parallel([
        Animated.timing(expandAnim, {
          toValue,
          duration: 300,
          useNativeDriver: false, // Don't use native driver for height animation
        }),
        Animated.timing(rotateAnim, {
          toValue: isExpanded ? 0 : 1,
          duration: 300,
          useNativeDriver: true, // Can use native driver for rotation
        }),
      ]).start();
    }
  };

  const handleSubItemPress = (item: MenuItem) => {
    if (onSubItemPress) {
      onSubItemPress(item);
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 16,
    },
    mainCard: {
      borderRadius: 20,
      borderWidth: 2,
      borderColor: getThemeColor(colors.border, isDarkMode),
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      overflow: 'hidden',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 12,
    },
    mainContent: {
      padding: 24,
      alignItems: 'center',
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: 20,
      borderWidth: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
      backgroundColor: getColorWithOpacity(mainItem.color, 0.2),
      borderColor: getThemeColor(mainItem.color, isDarkMode),
    },
    icon: {
      fontSize: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
      color: getThemeColor(colors.text, isDarkMode),
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.8,
      marginBottom: 16,
      color: getThemeColor(colors.textSecondary, isDarkMode),
    },
    arrowContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: getThemeColor(mainItem.color, isDarkMode),
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow: {
      fontSize: 18,
      color: getThemeColor(colors.surface, isDarkMode),
      fontWeight: 'bold',
    },
    subItemsContainer: {
      overflow: 'hidden',
    },
    subItemsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    subItem: {
      width: '48%',
      marginHorizontal: '1%',
      marginTop: 12,
    },
    subCard: {
      borderRadius: 16,
      borderWidth: 1,
      borderColor: getThemeColor(colors.border, isDarkMode),
      backgroundColor: getThemeColor(colors.surface, isDarkMode),
      padding: 16,
      alignItems: 'center',
      shadowColor: getThemeColor(colors.shadow, isDarkMode),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
    },
    subIconContainer: {
      width: 50,
      height: 50,
      borderRadius: 12,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },
    subIcon: {
      fontSize: 24,
    },
    subTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 4,
      color: getThemeColor(colors.text, isDarkMode),
    },
    subSubtitle: {
      fontSize: 10,
      textAlign: 'center',
      opacity: 0.7,
      color: getThemeColor(colors.textSecondary, isDarkMode),
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.mainCard,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <TouchableOpacity
          onPress={handleMainPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={0.9}
        >
          <View style={styles.mainContent}>
            {/* Icon */}
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{mainItem.icon}</Text>
            </View>

            {/* Title */}
            <Text style={styles.title}>
              {mainItem.title}
            </Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>{mainItem.subtitle}</Text>

            {/* Arrow */}
            <Animated.View
              style={[
                styles.arrowContainer,
                {
                  transform: [
                    {
                      rotate: rotateAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg'],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Text style={styles.arrow}>▼</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </Animated.View>

      {/* Sub Items */}
      <Animated.View
        style={[
          styles.subItemsContainer,
          {
            maxHeight: expandAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 300],
            }),
            opacity: expandAnim,
          },
        ]}
      >
        <View style={styles.subItemsGrid}>
          {subItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.subItem}
              onPress={() => handleSubItemPress(item)}
              activeOpacity={0.8}
            >
              <View style={styles.subCard}>
                <View style={[styles.subIconContainer, { 
                  backgroundColor: getColorWithOpacity(item.color, 0.15),
                  borderColor: getThemeColor(item.color, isDarkMode)
                }]}>
                  <Text style={styles.subIcon}>{item.icon}</Text>
                </View>
                <Text style={styles.subTitle}>{item.title}</Text>
                <Text style={styles.subSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

export default ExpandableMenuCard; 