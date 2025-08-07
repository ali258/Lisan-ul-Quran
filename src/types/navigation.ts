export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  QuranArabic: undefined;
  QuranPart1: undefined;
  QuranPart2: undefined;
  QuranPart3: undefined;
  QuranPart4: undefined;
  Part1Lessons: undefined;
  'lesson-1': undefined;
  'lesson-2': undefined;
  'lesson-3': undefined;
  'lesson-4': undefined;
};

export type MenuItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  route: keyof RootStackParamList;
}; 