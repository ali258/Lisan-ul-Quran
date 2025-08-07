# Fonts Setup Instructions

## How to Add Custom Fonts

### 1. Place TTF Files Here
Copy your TTF font files to this directory:
- `Al-Qalam-Quran-Majeed.ttf` (or your Al Qalam font file)
- Any other custom fonts you want to use

### 2. Font File Naming Convention
Use descriptive names without spaces:
- ✅ `Al-Qalam-Quran-Majeed.ttf`
- ✅ `Noto-Nastaliq-Urdu.ttf`
- ❌ `Al Qalam Quran Majeed.ttf` (spaces can cause issues)

### 3. Update Font Configuration
After adding fonts, update the font utilities to use the correct file names.

### 4. For React Native
You may need to link fonts in your native projects:
- **iOS**: Add to `ios/LisanUlQuran/Info.plist`
- **Android**: Add to `android/app/src/main/assets/fonts/`

### 5. For Web
Fonts will be automatically available when placed in this directory. 