import type { ReactNode } from 'react';
import type { DefaultTheme } from 'styled-components';

export interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export interface ThemeContextProviderProps {
  children: ReactNode;
}
