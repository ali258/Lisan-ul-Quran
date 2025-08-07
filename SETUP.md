# Lisan ul Quran - React Native Setup Guide

This guide will help you set up the React Native development environment and run the Lisan ul Quran app with the latest technologies.

## Prerequisites

### 1. Install Node.js and npm

#### For macOS:
```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

#### For Windows:
1. Download from [nodejs.org](https://nodejs.org/)
2. Install Node.js and npm

#### For Linux:
```bash
# Using apt
sudo apt update
sudo apt install nodejs npm

# Or using nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
nvm use node
```

### 2. Install React Native CLI

```bash
npm install -g @react-native-community/cli
```

### 3. Install Development Tools

#### For Android Development:
1. Install [Android Studio](https://developer.android.com/studio)
2. Install Android SDK
3. Set up Android Virtual Device (AVD)
4. Add Android SDK to PATH

#### For iOS Development (macOS only):
1. Install [Xcode](https://developer.apple.com/xcode/)
2. Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```

### 4. Install Additional Tools

#### Install Watchman (macOS/Linux):
```bash
# macOS
brew install watchman

# Linux
sudo apt-get install watchman
```

#### Install CocoaPods (iOS):
```bash
sudo gem install cocoapods
```

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Lisan-ul-Quran.git
cd Lisan-ul-Quran
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Install iOS Dependencies (macOS only)

```bash
cd ios && pod install && cd ..
```

### 4. Environment Setup

#### For Android:
1. Set up Android environment variables:
   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

2. Add to your shell profile (`~/.zshrc` or `~/.bash_profile`)

#### For iOS:
No additional setup required if Xcode is installed.

### 5. Start Development Server

```bash
npm start
# or
yarn start
```

### 6. Run the App

#### For iOS (macOS only):
```bash
npm run ios
# or
yarn ios
```

#### For Android:
```bash
npm run android
# or
yarn android
```

## Project Structure

```
Lisan-ul-Quran/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── MenuCard.tsx     # Animated menu cards
│   │   └── ThemeToggle.tsx  # Theme toggle widget
│   ├── screens/             # App screens
│   │   ├── SplashScreen.tsx # Splash screen
│   │   ├── HomeScreen.tsx   # Main home screen
│   │   ├── AlphabetScreen.tsx # Alphabet learning
│   │   └── VocabularyScreen.tsx # Vocabulary learning
│   ├── store/               # State management
│   │   └── themeStore.ts    # Theme state with persistence
│   ├── types/               # TypeScript type definitions
│   │   └── navigation.ts    # Navigation types
│   ├── utils/               # Utility functions
│   │   └── constants.ts     # App constants and colors
│   └── assets/              # Static assets
│       ├── images/          # App images
│       ├── icons/           # App icons
│       └── animations/      # Lottie animations
├── App.tsx                  # Main app component
├── index.js                 # App entry point
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind CSS configuration
├── metro.config.js          # Metro bundler config
├── babel.config.js          # Babel configuration
└── tsconfig.json           # TypeScript configuration
```

## Technology Stack

### Core Technologies
- **React Native 0.72.6** - Cross-platform mobile development
- **TypeScript** - Type-safe development
- **NativeWind (Tailwind CSS)** - Utility-first styling
- **Zustand** - Lightweight state management
- **React Query** - Data fetching and caching
- **React Navigation 6** - Navigation solution

### UI/UX Libraries
- **React Native Reanimated** - Smooth animations
- **React Native Vector Icons** - Icon library
- **React Native Linear Gradient** - Gradient backgrounds
- **React Native SVG** - SVG support
- **React Native Lottie** - Animation support

## Development Commands

```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Run tests
npm test

# Build for release (Android)
npm run build:android

# Build for release (iOS)
npm run build:ios
```

## Troubleshooting

### Common Issues:

1. **Metro bundler issues**:
   ```bash
   npx react-native start --reset-cache
   ```

2. **iOS build issues**:
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Android build issues**:
   ```bash
   cd android && ./gradlew clean && cd ..
   ```

4. **Node modules issues**:
   ```bash
   rm -rf node_modules && npm install
   ```

### Platform-Specific Issues:

#### iOS Issues:
- **Xcode version**: Make sure you have the latest Xcode
- **CocoaPods**: Update CocoaPods if needed
- **Simulator**: Reset simulator if needed

#### Android Issues:
- **SDK version**: Make sure Android SDK is properly installed
- **AVD**: Create a new AVD if needed
- **Gradle**: Clean and rebuild project

### Debugging:

```bash
# Enable debugging
npx react-native log-ios
npx react-native log-android

# Debug with Flipper
npx react-native start --reset-cache
```

## Code Quality

### ESLint Configuration
The project uses ESLint for code quality:

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

### TypeScript Configuration
TypeScript is configured for strict type checking:

```bash
# Type checking
npm run type-check
```

## Deployment

### Building for Release

#### Android:
```bash
cd android && ./gradlew assembleRelease
```

#### iOS:
```bash
cd ios && xcodebuild -workspace LisanUlQuran.xcworkspace -scheme LisanUlQuran -configuration Release archive
```

## Support

If you encounter any issues:

1. Check the [React Native documentation](https://reactnative.dev/docs/getting-started)
2. Search for similar issues on [Stack Overflow](https://stackoverflow.com)
3. Create an issue in the project repository
4. Check the [React Native troubleshooting guide](https://reactnative.dev/docs/troubleshooting)

## Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [React Navigation Documentation](https://reactnavigation.org/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

---

**Happy coding! 🚀** 