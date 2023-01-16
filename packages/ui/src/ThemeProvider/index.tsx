import { NativeBaseProvider, Text, NativeBaseProviderProps as ThemeProviderProps } from 'native-base';
import { Suspense } from 'react';

import { theme as defaultTheme } from '../themes';

export { ThemeProviderProps };

export const ThemeProvider = ({ theme = defaultTheme, children, ...props }: ThemeProviderProps) => {
  return (
    <NativeBaseProvider theme={theme} {...props}>
      <Suspense fallback={<Text>Provider Suspense Loading</Text>}>{children}</Suspense>
    </NativeBaseProvider>
  );
};
