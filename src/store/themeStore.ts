import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeVariant } from '../utils/theme';

interface ThemeState {
  isDarkMode: boolean;
  themeVariant: ThemeVariant;
  toggleDarkMode: () => void;
  setThemeVariant: (variant: ThemeVariant) => void;
  // Legacy compatibility
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      isDarkMode: false,
      themeVariant: 'teal',
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setThemeVariant: (variant: ThemeVariant) => set({ themeVariant: variant }),
      // Legacy compatibility - just toggles dark mode
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      // Migration function to handle old theme variant names
      migrate: (persistedState: any, version: number) => {
        if (persistedState?.themeVariant === 'blackwhite') {
          persistedState.themeVariant = 'teal';
        }
        return persistedState;
      },
      version: 1,
    }
  )
);