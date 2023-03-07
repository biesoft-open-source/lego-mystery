import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import { colorPalette } from '../config/theme/foundations';

export const InitNavbar = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(colorPalette.primary);
    }
  }, []);

  return null;
};
