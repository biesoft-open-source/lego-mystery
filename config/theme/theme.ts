import { extendTheme, ITheme } from 'native-base';

import { buttonStyle, inputStyle, textStyle } from './components';
import { colorPalette, fontConfig, fonts, fontSizes } from './foundations';

export const theme: ITheme = extendTheme({
  fontConfig,
  fonts,
  fontSizes,
  colors: colorPalette,
  components: {
    Button: buttonStyle,
    Input: inputStyle,
    Text: textStyle,
  },
});
