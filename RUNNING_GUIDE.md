# 🚀 How to Run Lisan ul Quran React Native App

This guide will help you run the React Native app on your device or simulator.

## 📋 Prerequisites

### 1. Install Node.js and npm
```bash
# Check if Node.js is installed
node --version
npm --version

# If not installed, download from https://nodejs.org/
# Or install via Homebrew (macOS)
brew install node
```

### 2. Install React Native CLI
```bash
npm install -g @react-native-community/cli
```

## 🍎 For iOS Development (macOS only)

### Step 1: Install Xcode
1. **Open App Store** on your Mac
2. **Search for "Xcode"**
3. **Click "Get" or "Install"** (Free, but ~12GB download)
4. **Wait for download and installation** (may take 30-60 minutes)

### Step 2: Install Xcode Command Line Tools
```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

### Step 3: Install iOS Simulator
1. **Open Xcode**
2. **Go to Xcode → Preferences → Components**
3. **Download iOS Simulator** (latest version)

### Step 4: Install CocoaPods
```bash
sudo gem install cocoapods
```

## 🤖 For Android Development

### Step 1: Install Android Studio
1. **Download Android Studio** from https://developer.android.com/studio
2. **Install Android Studio**
3. **Open Android Studio** and follow the setup wizard

### Step 2: Install Android SDK
1. **Open Android Studio**
2. **Go to Tools → SDK Manager**
3. **Install Android SDK** (API level 33 or higher)
4. **Install Android SDK Platform-Tools**

### Step 3: Set up Android Environment Variables
Add these to your shell profile (`~/.zshrc` or `~/.bash_profile`):
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Step 4: Create Android Virtual Device (AVD)
1. **Open Android Studio**
2. **Go to Tools → AVD Manager**
3. **Click "Create Virtual Device"**
4. **Select a device** (e.g., Pixel 6)
5. **Select a system image** (API level 33 or higher)
6. **Click "Finish"**

## 🛠️ Project Setup

### Step 1: Navigate to Project Directory
```bash
cd /Users/aliraza/Documents/GitHub/Lisan-ul-Quran
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Install iOS Dependencies (macOS only)
```bash
cd ios && pod install && cd ..
```

## 🚀 Running the App

### Option 1: Run on iOS Simulator (macOS only)

#### Prerequisites:
- Xcode installed
- iOS Simulator installed
- CocoaPods installed

#### Commands:
```bash
# Start Metro bundler
npm start

# In a new terminal, run iOS
npm run ios
```

### Option 2: Run on Android Emulator

#### Prerequisites:
- Android Studio installed
- Android SDK installed
- Android Virtual Device created

#### Commands:
```bash
# Start Metro bundler
npm start

# In a new terminal, run Android
npm run android
```

### Option 3: Run on Physical Device

#### For iOS:
1. **Connect iPhone via USB**
2. **Trust the computer** on your iPhone
3. **Open Xcode**
4. **Select your device** in the device dropdown
5. **Run the app**

#### For Android:
1. **Enable Developer Options** on your Android device
2. **Enable USB Debugging**
3. **Connect device via USB**
4. **Run the app**

## 🔧 Troubleshooting

### Common Issues:

#### 1. Metro Bundler Issues
```bash
# Clear Metro cache
npx react-native start --reset-cache
```

#### 2. iOS Build Issues
```bash
# Clean iOS build
cd ios && xcodebuild clean && cd ..
# Reinstall pods
cd ios && pod install && cd ..
```

#### 3. Android Build Issues
```bash
# Clean Android build
cd android && ./gradlew clean && cd ..
```

#### 4. Node Modules Issues
```bash
# Remove node_modules and reinstall
rm -rf node_modules && npm install
```

#### 5. Xcode Issues
```bash
# Reset Xcode command line tools
sudo xcode-select --reset
```

### Error Messages and Solutions:

#### "xcodebuild requires Xcode"
- **Solution**: Install Xcode from App Store

#### "Android SDK not found"
- **Solution**: Install Android Studio and SDK

#### "Metro bundler not starting"
- **Solution**: Clear cache with `npx react-native start --reset-cache`

#### "Pod install failed"
- **Solution**: Update CocoaPods: `sudo gem install cocoapods`

## 📱 Alternative: Use Expo (Easier Setup)

If you're having trouble with the native setup, you can use Expo:

### Step 1: Install Expo CLI
```bash
npm install -g @expo/cli
```

### Step 2: Create Expo Project
```bash
npx create-expo-app@latest LisanUlQuranExpo --template blank-typescript
cd LisanUlQuranExpo
```

### Step 3: Install Dependencies
```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
npm install zustand @react-native-async-storage/async-storage
```

### Step 4: Run Expo App
```bash
npx expo start
```

Then scan the QR code with:
- **iOS**: Camera app
- **Android**: Expo Go app

## 🎯 Quick Start Commands

```bash
# 1. Install dependencies
npm install

# 2. Start Metro bundler
npm start

# 3. Run on iOS (macOS only)
npm run ios

# 4. Run on Android
npm run android

# 5. Run tests
npm test

# 6. Lint code
npm run lint
```

## 📞 Getting Help

If you encounter issues:

1. **Check the error message** carefully
2. **Search on Stack Overflow** for similar issues
3. **Check React Native documentation** at https://reactnative.dev/
4. **Check the troubleshooting section** above
5. **Create an issue** in the project repository

## 🎉 Success!

Once the app is running, you should see:
- **Beautiful splash screen** with Quranic styling
- **Day/Night theme toggle** in the top right
- **Menu grid** with 6 learning modules
- **Smooth animations** and transitions

## 📱 App Features

- ✅ **Splash Screen** - Animated loading
- ✅ **Theme Toggle** - Day/Night mode
- ✅ **Menu Grid** - 6 learning modules
- ✅ **Navigation** - Between screens
- ✅ **Responsive Design** - Works on all devices
- ✅ **Quranic Styling** - Beautiful Arabic-inspired design

---

**Happy coding! 🚀** 