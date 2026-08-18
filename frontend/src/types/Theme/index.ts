import 'styled-components';
import type { THEME_NAME } from '../../constants/Theme';

declare module 'styled-components' {
  interface DefaultTheme {
    name: ThemeNameType;
  }
}

export type ThemeNameType = (typeof THEME_NAME)[keyof typeof THEME_NAME];
