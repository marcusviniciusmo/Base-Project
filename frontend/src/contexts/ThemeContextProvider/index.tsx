import type { ThemeContextProviderProps } from '../../interfaces/ThemeContextType';
import { ThemeProvider, type DefaultTheme } from 'styled-components';
import { useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { THEME_NAME } from '../../constants/Theme';
import { DarkTheme } from '../../styles/Theme/Dark';
import { LightTheme } from '../../styles/Theme/Light';

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(LightTheme);

  function toggleTheme() {
    setTheme(prevTheme =>
      prevTheme.name === THEME_NAME.LIGHT ? DarkTheme : LightTheme,
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
