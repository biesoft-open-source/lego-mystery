import { theme } from '.';

type CustomThemeType = typeof theme;

declare module 'native-base' {
  type ICustomTheme = CustomThemeType;
}
