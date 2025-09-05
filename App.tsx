import React, { useState, useEffect } from 'react';
import { BackHandler, Alert, View, StyleSheet, Platform } from 'react-native';
import { 
  SplashScreen, 
  HomeScreen, 
  SettingsScreen, 
  QuranScreen, 
  ArabicScreen, 
  WordScreen, 
  MoreScreen,
  HarfScreen,
  IsmScreen,
  FalScreen
} from './src/screens';

type Screen = 'splash' | 'home' | 'settings' | 'quran' | 'grammar' | 'words' | 'more' | 'harf' | 'ism' | 'fal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [previousScreen, setPreviousScreen] = useState<Screen>('home');
  const [isInLesson, setIsInLesson] = useState(false);

  // Handle mobile back button
  useEffect(() => {
    const backAction = () => {
      if (currentScreen === 'splash') {
        // On splash screen, show exit confirmation
        Alert.alert(
          'Exit App',
          'Are you sure you want to exit?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Exit', onPress: () => BackHandler.exitApp() }
          ]
        );
        return true; // Prevent default behavior
      } else if (currentScreen === 'home') {
        // On home screen, show exit confirmation
        Alert.alert(
          'Exit App',
          'Are you sure you want to exit?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Exit', onPress: () => BackHandler.exitApp() }
          ]
        );
        return true; // Prevent default behavior
      } else if (currentScreen === 'settings') {
        // From settings, go back to previous screen
        handleBackFromSettings();
        return true; // Prevent default behavior
      } else if (isInLesson) {
        // If we're inside a lesson, trigger the lesson's back function
        // This will be handled by the lesson screen's onBack prop
        return false; // Let the lesson screen handle the back action
      } else if (currentScreen === 'harf' || currentScreen === 'ism' || currentScreen === 'fal') {
        // From harf/ism/fal lesson list, go back to words
        handleBackToWord();
        return true; // Prevent default behavior
      } else {
        // From other screens, go back to home
        handleBackToHome();
        return true; // Prevent default behavior
      }
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [currentScreen, isInLesson]);

  const handleSplashFinish = () => {
    setCurrentScreen('home');
  };

  const handleBackToSplash = () => {
    setCurrentScreen('splash');
  };

  const handleGoToSettings = () => {
    setPreviousScreen(currentScreen);
    setCurrentScreen('settings');
  };

  const handleBackFromSettings = () => {
    setCurrentScreen(previousScreen);
  };

  const handleBottomNavigation = (menuId: string) => {
    switch (menuId) {
      case 'quran':
        setCurrentScreen('quran');
        break;
      case 'grammar':
        setCurrentScreen('grammar');
        break;
      case 'home':
        setCurrentScreen('home');
        break;
      case 'words':
        setCurrentScreen('words');
        break;
      case 'more':
        setCurrentScreen('more');
        break;
      default:
        setCurrentScreen('home');
    }
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  const handleNavigateToHarf = () => {
    setCurrentScreen('harf');
  };

  const handleNavigateToIsm = () => {
    setCurrentScreen('ism');
  };

  const handleNavigateToFal = () => {
    setCurrentScreen('fal');
  };

  const handleBackToWord = () => {
    setCurrentScreen('words');
  };

  const handleBackToGrammar = () => {
    setCurrentScreen('grammar');
  };

  const handleBackToQuran = () => {
    setCurrentScreen('quran');
  };

  const handleBackToMore = () => {
    setCurrentScreen('more');
  };

  const handleLessonOpen = () => {
    setIsInLesson(true);
  };

  const handleLessonClose = () => {
    console.log('handleLessonClose called in App.tsx');
    setIsInLesson(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onFinish={handleSplashFinish} />;
      case 'settings':
        return <SettingsScreen onBackPress={handleBackFromSettings} />;
      case 'quran':
        return <QuranScreen onGoToSettings={handleGoToSettings} onBottomNavigation={handleBottomNavigation} />;
      case 'grammar':
        return <ArabicScreen onGoToSettings={handleGoToSettings} onBottomNavigation={handleBottomNavigation} />;
      case 'words':
        return <WordScreen onGoToSettings={handleGoToSettings} onBottomNavigation={handleBottomNavigation} onNavigateToHarf={handleNavigateToHarf} onNavigateToIsm={handleNavigateToIsm} onNavigateToFal={handleNavigateToFal} />;
      case 'harf':
        return <HarfScreen 
          onGoToSettings={handleGoToSettings} 
          onBottomNavigation={handleBottomNavigation} 
          onBackPress={handleBackToWord}
          onLessonOpen={handleLessonOpen}
          onLessonClose={handleLessonClose}
        />;
      case 'ism':
        return <IsmScreen 
          onGoToSettings={handleGoToSettings} 
          onBottomNavigation={handleBottomNavigation} 
          onBackPress={handleBackToWord}
          onLessonOpen={handleLessonOpen}
          onLessonClose={handleLessonClose}
        />;
      case 'fal':
        return <FalScreen 
          onGoToSettings={handleGoToSettings} 
          onBottomNavigation={handleBottomNavigation} 
          onBackPress={handleBackToWord}
          onLessonOpen={handleLessonOpen}
          onLessonClose={handleLessonClose}
        />;
      case 'more':
        return <MoreScreen onGoToSettings={handleGoToSettings} onBottomNavigation={handleBottomNavigation} />;
      case 'home':
      default:
        return (
          <HomeScreen 
            onBackToSplash={handleBackToSplash}
            onGoToSettings={handleGoToSettings}
            onBottomNavigation={handleBottomNavigation}
          />
        );
    }
  };

  return (
    <View style={styles.appContainer}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? 48 : 0, // Add bottom padding for Android to prevent overlap
  },
});