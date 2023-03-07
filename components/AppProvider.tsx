import { QueryClientProvider } from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';

import { queryClient, theme } from '../config';
import { Root } from '../contexts';
import { composeWrappers } from '../utils';

export const AppProvider = composeWrappers([
  ({ children }) => (
    <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
  ),
  ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  ),
  ({ children }) => <Root.Provider>{children}</Root.Provider>,
]);
