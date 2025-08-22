import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import Part1LessonsScreen from './src/screens/Part1LessonsScreen';
import Part2LessonsScreen from './src/screens/Part2LessonsScreen';
import Part3LessonsScreen from './src/screens/Part3LessonsScreen';
import QuranicWordIsmScreen from './src/screens/QuranicWordIsmScreen';
import QuranicWordHarfScreen from './src/screens/QuranicWordHarfScreen';
import QuranicWordFalScreen from './src/screens/QuranicWordFalScreen';
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
  Lesson13Screen,
  Lesson14Screen,
  Lesson15Screen,
  Lesson16Screen,
  Lesson17Screen,
  Lesson18Screen,
  Lesson19Screen,
  Lesson20Screen,
  Lesson21Screen,
  Lesson22Screen,
  Lesson23Screen,
  Lesson24Screen,
  Lesson25Screen,
  Lesson26Screen,
  QuranicWordLesson1Screen,
  QuranicWordLesson2Screen,
  QuranicWordLesson3Screen,
  QuranicWordLesson4Screen,
  QuranicWordLesson5Screen,
  QuranicWordLesson6Screen,
  QuranicWordLesson7Screen,
  QuranicWordLesson8Screen,
  QuranicWordHarfLesson1Screen,
  QuranicWordHarfLesson2Screen,
  QuranicWordHarfLesson3Screen,
  QuranicWordHarfLesson4Screen,
  QuranicWordHarfLesson5Screen,
  QuranicWordHarfLesson6Screen,
  QuranicWordHarfLesson7Screen,
  QuranicWordHarfLesson8Screen,
  QuranicWordHarfLesson9Screen,
  QuranicWordHarfLesson10Screen,
  QuranicWordHarfLesson11Screen,
  QuranicWordHarfLesson12Screen,
  QuranicWordHarfLesson13Screen,
} from './src/screens/lessons';

// Store
import { useThemeStore } from './src/store/themeStore';
import { COLORS } from './src/utils/constants';

// Font loading
import { initializeFonts } from './src/utils/fontLoader';

type Screen =
  | 'Splash'
  | 'Home'
  | 'QuranicWord'
  | 'QuranicWordHarf'
  | 'QuranicWordIsm'
  | 'QuranicWordFal'
  | 'QuranicWordLessons'
  | 'QuranPart1'
  | 'QuranPart2'
  | 'QuranPart3'
  | 'QuranPart4'
  | 'Part1Lessons'
  | 'Part2Lessons'
  | 'Part3Lessons'
  | 'QuranicWordLessons'
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
  | 'lesson-12'
  | 'lesson-13'
  | 'lesson-14'
  | 'lesson-15'
  | 'lesson-16'
  | 'lesson-17'
  | 'lesson-18'
  | 'lesson-19'
  | 'lesson-20'
  | 'lesson-21'
  | 'lesson-22'
  | 'lesson-23'
  | 'lesson-24'
  | 'lesson-25'
  | 'lesson-26'
  | 'QuranicWordLesson1'
  | 'QuranicWordLesson2'
  | 'QuranicWordLesson3'
  | 'QuranicWordLesson4'
  | 'QuranicWordLesson5'
  | 'QuranicWordLesson6'
  | 'QuranicWordLesson7'
  | 'QuranicWordLesson8'
  | 'QuranicWordHarfLesson1'
  | 'QuranicWordHarfLesson2'
  | 'QuranicWordHarfLesson3'
  | 'QuranicWordHarfLesson4'
  | 'QuranicWordHarfLesson5'
  | 'QuranicWordHarfLesson6'
  | 'QuranicWordHarfLesson7'
  | 'QuranicWordHarfLesson8'
  | 'QuranicWordHarfLesson9'
  | 'QuranicWordHarfLesson10'
  | 'QuranicWordHarfLesson11'
  | 'QuranicWordHarfLesson12'
  | 'QuranicWordHarfLesson13';

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
      case 'QuranicWord':
        return <QuranicWordIsmScreen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarf':
        return <QuranicWordHarfScreen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordFal':
        return <QuranicWordFalScreen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordIsm':
        return <QuranicWordIsmScreen onNavigate={navigate} onBack={goBack} />;
      case 'Part1Lessons':
        return <Part1LessonsScreen onNavigate={navigate} onBack={goBack} />;
      case 'Part2Lessons':
        return <Part2LessonsScreen onNavigate={navigate} onBack={goBack} />;
      case 'Part3Lessons':
        return <Part3LessonsScreen onNavigate={navigate} onBack={goBack} />;
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
      case 'lesson-13':
        return <Lesson13Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-14':
        return <Lesson14Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-15':
        return <Lesson15Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-16':
        return <Lesson16Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-17':
        return <Lesson17Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-18':
        return <Lesson18Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-19':
        return <Lesson19Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-20':
        return <Lesson20Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-21':
        return <Lesson21Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-22':
        return <Lesson22Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-23':
        return <Lesson23Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-24':
        return <Lesson24Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-25':
        return <Lesson25Screen onNavigate={navigate} onBack={goBack} />;
      case 'lesson-26':
        return <Lesson26Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordLesson1':
        return <QuranicWordLesson1Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordLesson2':
        return <QuranicWordLesson2Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordLesson3':
        return <QuranicWordLesson3Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordLesson4':
        return <QuranicWordLesson4Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordLesson5':
        return <QuranicWordLesson5Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordLesson6':
        return <QuranicWordLesson6Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordLesson7':
        return <QuranicWordLesson7Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordLesson8':
        return <QuranicWordLesson8Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson1':
        return <QuranicWordHarfLesson1Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson2':
        return <QuranicWordHarfLesson2Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson3':
        return <QuranicWordHarfLesson3Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson4':
        return <QuranicWordHarfLesson4Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson5':
        return <QuranicWordHarfLesson5Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson6':
        return <QuranicWordHarfLesson6Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson7':
        return <QuranicWordHarfLesson7Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson8':
        return <QuranicWordHarfLesson8Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson9':
        return <QuranicWordHarfLesson9Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson10':
        return <QuranicWordHarfLesson10Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson11':
        return <QuranicWordHarfLesson11Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson12':
        return <QuranicWordHarfLesson12Screen onNavigate={navigate} onBack={goBack} />;
      case 'QuranicWordHarfLesson13':
        return <QuranicWordHarfLesson13Screen onNavigate={navigate} onBack={goBack} />;
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