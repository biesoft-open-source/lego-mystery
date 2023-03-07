import {
  useFonts,
  ChangaOne_400Regular,
  ChangaOne_400Regular_Italic,
} from '@expo-google-fonts/changa-one';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AppProvider, InitNavbar } from '../components';

const Layout = () => {
  const [fontsLoaded] = useFonts({
    ChangaOne_400Regular,
    ChangaOne_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <AppProvider>
      <StatusBar style="light" />

      <InitNavbar />

      <Stack
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </AppProvider>
  );
};

export default Layout;
