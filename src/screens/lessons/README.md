# Lessons Folder

This folder contains all lesson screens for the Quran Arabic learning app.

## Structure

```
src/screens/lessons/
├── index.ts              # Export file for all lesson screens
├── Lesson1Screen.tsx     # حروف الهجاء (Arabic Alphabet)
├── Lesson2Screen.tsx     # حرکات و تنوین و سکون (Diacritical Marks)
├── README.md            # This documentation file
└── [Future Lessons]     # Additional lesson screens
```

## Current Lessons

### Lesson 1: حروف الهجاء (Arabic Alphabet)
- **File**: `Lesson1Screen.tsx`
- **Content**: Complete Arabic alphabet (28 letters)
- **Features**: 
  - Alphabet grid display
  - Alif vs Hamza comparison table
  - Educational notes in Urdu

### Lesson 2: حرکات و تنوین و سکون (Diacritical Marks)
- **File**: `Lesson2Screen.tsx`
- **Content**: Arabic diacritical marks system
- **Features**:
  - Hierarchical display (Red → Purple → Blue boxes)
  - Harkat (حرکات): زبر، زیر، پیش
  - Tanween (تنوین): دوزبر، دو زیر، دوپیش
  - Sukoon (سکون): سکون
  - Detailed explanations in Urdu

## Adding New Lessons

1. Create a new lesson file: `Lesson3Screen.tsx`
2. Add the export to `index.ts`
3. Update navigation in `App.tsx`
4. Update this README with lesson details

## Import Usage

```typescript
// Import individual lessons
import { Lesson1Screen, Lesson2Screen } from './src/screens/lessons';

// Or import specific lesson
import Lesson1Screen from './src/screens/lessons/Lesson1Screen';
```

## Navigation

Lessons are accessed through:
- Home → Quran Arabic → Part 1 → Lesson X
- Each lesson has a back button to return to Part 1 lessons 