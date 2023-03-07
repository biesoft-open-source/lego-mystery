import 'dotenv/config';

export default {
  expo: {
    name: 'lego-task',
    slug: 'lego-task',
    scheme: 'com.jbiesiada.legotask',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
      bundler: 'metro',
    },
    androidNavigationBar: {
      backgroundColor: '#F2F2F2',
    },
    extra: {
      rebrickableApiBaseUrl: process.env.REBRICKABLE_API_BASE_URL,
      rebrickableApiKey: process.env.REBRICKABLE_API_KEY,
      allowedLegoThemeId: process.env.ALLOWED_LEGO_THEME_ID,
      mockApiBaseUrl: process.env.MOCK_API_BASE_URL,
    },
  },
};
