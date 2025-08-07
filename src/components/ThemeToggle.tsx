import React from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const rotateAnim = React.useRef(new Animated.Value(0)).current;

  const handleToggle = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
      toggleTheme();
    });
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <TouchableOpacity
        onPress={handleToggle}
        style={[
          styles.toggle,
          {
            backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5dc',
            borderColor: isDarkMode ? '#333' : '#d4c4a8',
          },
        ]}
      >
        <Text style={styles.icon}>
          {isDarkMode ? '🌙' : '☀️'}
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: isDarkMode ? '#fff' : '#8b4513',
            },
          ]}
        >
          {isDarkMode ? 'Night' : 'Day'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 25,
    borderWidth: 1,
  },
  icon: {
    fontSize: 18,
    marginRight: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ThemeToggle; 