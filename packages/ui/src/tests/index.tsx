import { ThemeProvider } from '../ThemeProvider';

// eslint-disable-next-line import/export
export * from '@testing-library/react-native';

export function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      initialWindowMetrics={{
        frame: { height: 0, width: 0, x: 0, y: 0 },
        insets: { bottom: 0, left: 0, right: 0, top: 0 },
      }}
    >
      {children}
    </ThemeProvider>
  );
}

// re-export everything
export * from './assignTestId';
