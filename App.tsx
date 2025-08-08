import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import Part1LessonsScreen from './src/screens/Part1LessonsScreen';
import Part2LessonsScreen from './src/screens/Part2LessonsScreen';
import {
  Lesson1Screen,
  Lesson2Screen,
  Lesson3Screen,
  Lesson4Screen,
  Lesson5Screen,
  Lesson6Screen,
  Lesson7Screen,
  Lesson8Screen,
  Lesson9Screen,
  Lesson10Screen,
  Lesson11Screen,
  Lesson12Screen,
} from './src/screens/lessons';

// Store
import { useThemeStore } from './src/store/themeStore';
import { COLORS } from './src/utils/constants';

// Font loading
import { initializeFonts } from './src/utils/fontLoader';

type Screen =
  | 'Splash'
  | 'Home'
  | 'QuranPart1'
  | 'QuranPart2'
  | 'QuranPart3'
  | 'QuranPart4'
  | 'Part1Lessons'
  | 'Part2Lessons'
  | 'home'
  | 'part-1'
  | 'part-2'
  | 'lesson-1'
  | 'lesson-2'
  | 'lesson-3'
  | 'lesson-4'
  | 'lesson-5'
  | 'lesson-6'
  | 'lesson-7'
  | 'lesson-8'
  | 'lesson-9'
  | 'lesson-10'
  | 'lesson-11'
  | 'lesson-12';

const { width, height } = Dimensions.get('window');

const App = () => {
  const { isDarkMode } = useThemeStore();
  const colors = isDarkMode ? COLORS.dark : COLORS.light;

  const [currentScreen, setCurrentScreen] = useState<Screen>('Splash');
  const [screenHistory, setScreenHistory] = useState<Screen[]>(['Splash']);

  // Initialize fonts when app starts
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await initializeFonts();
      } catch (error) {
        console.error('Failed to initialize fonts:', error);
      }
    };

    loadFonts();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      height: height,
      backgroundColor: colors.background,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

  // Navigation function
  const navigate = (screen: Screen) => {
    setScreenHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
  };

  // Back navigation function
  const goBack = () => {
    if (screenHistory.length > 1) {
      const newHistory = screenHistory.slice(0, -1);
      setScreenHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Splash':
        return <SplashScreen onNavigate={() => navigate('Home')} />;
      case 'Home':
        return <HomeScreen onNavigate={navigate} />;
      case 'Part1Lessons':
        return <Part1LessonsScreen onNavigate={navigate} onBack={goBack} />;
      case 'Part2Lessons':
        return <Part2LessonsScreen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-1':
        return <Lesson1Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-2':
        return <Lesson2Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-3':
        return <Lesson3Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-4':
        return <Lesson4Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-5':
        return <Lesson5Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-6':
        return <Lesson6Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-7':
        return <Lesson7Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-8':
        return <Lesson8Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-9':
        return <Lesson9Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-10':
        return <Lesson10Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-11':
        return <Lesson11Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-12':
        return <Lesson12Screen onNavigate={navigate} onBack={goBack} />;
      default:
        return <HomeScreen onNavigate={navigate} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
};

export default App; 