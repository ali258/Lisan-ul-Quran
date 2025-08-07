# Lisan ul Quran - React Native App

A beautiful React Native application for learning Quranic Arabic with modern UI/UX, built with the latest technologies including Tailwind CSS (NativeWind), TypeScript, and Zustand for state management.

## 🚀 Tech Stack

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

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Metro** - Bundler
- **Babel** - JavaScript compiler

## ✨ Features

### 🎨 Beautiful Design
- **Day/Night Theme**: Toggle between beautiful light and dark themes
- **Quran-Inspired Colors**: Warm brown and beige color palette
- **Arabic Typography**: Support for Arabic text display
- **Smooth Animations**: Hover effects and transitions throughout the app
- **Responsive Design**: Works on all screen sizes

### 📚 Learning Modules
- **Alphabets**: Learn Arabic letters and their pronunciation
- **Vocabulary**: Quranic words and their meanings
- **Grammar**: Arabic grammar rules and structures
- **Recitation**: Learn proper Quranic recitation
- **Tajweed**: Master the rules of proper pronunciation
- **Progress**: Track your learning journey

### 🎯 User Experience
- **Persistent Settings**: Theme preferences are saved
- **Modern UI**: Material Design with custom theming
- **Smooth Navigation**: Gesture-based navigation
- **Offline Support**: Works without internet connection

## 📱 Screenshots

*Coming soon - Beautiful screenshots of the app in both day and night modes*

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/Lisan-ul-Quran.git
cd Lisan-ul-Quran
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Install iOS dependencies** (macOS only):
```bash
cd ios && pod install && cd ..
```

4. **Start Metro bundler**:
```bash
npm start
# or
yarn start
```

5. **Run the app**:

For iOS:
```bash
npm run ios
# or
yarn ios
```

For Android:
```bash
npm run android
# or
yarn android
```

## 📁 Project Structure

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

## 🎨 Theme System

The app features a sophisticated theme system with:

### Day Mode
- Light beige background (`#faf5e6`)
- Warm brown accents (`#8b4513`)
- High contrast text
- Soft shadows and gradients

### Night Mode
- Dark background (`#0d0d0d`)
- Golden brown accents (`#d2691e`)
- Reduced contrast for eye comfort
- Subtle glow effects

## 🔧 Development

### Code Style
The project uses ESLint and Prettier for code quality:

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

### Adding New Features

1. **Create new screens** in `src/screens/`
2. **Add navigation** in `App.tsx`
3. **Update types** in `src/types/navigation.ts`
4. **Add constants** in `src/utils/constants.ts`

### State Management
The app uses Zustand for state management:

```typescript
import { useThemeStore } from './src/store/themeStore';

const { isDarkMode, toggleTheme } = useThemeStore();
```

## 📦 Dependencies

### Core Dependencies
- `react-native`: 0.72.6
- `@react-navigation/native`: ^6.1.9
- `@react-navigation/stack`: ^6.3.20
- `nativewind`: ^2.0.11
- `tailwindcss`: ^3.3.6
- `zustand`: ^4.4.1
- `react-query`: ^3.39.3

### UI/UX Dependencies
- `react-native-reanimated`: ^3.5.4
- `react-native-vector-icons`: ^10.0.2
- `react-native-linear-gradient`: ^2.8.3
- `react-native-svg`: ^13.14.0
- `react-native-lottie`: ^6.3.1

## 🚀 Deployment

### Building for Release

#### Android:
```bash
cd android && ./gradlew assembleRelease
```

#### iOS:
```bash
cd ios && xcodebuild -workspace LisanUlQuran.xcworkspace -scheme LisanUlQuran -configuration Release archive
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the beauty of Quranic Arabic
- Built with React Native and TypeScript
- Uses NativeWind for styling
- Designed with accessibility in mind

---

**Made with ❤️ for learning Quranic Arabic**