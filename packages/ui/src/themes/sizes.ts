export const baseSizes = {
  '0': '0',
  '1': '4px',
  '10': '40px',
  '12': '48px',
  '16': '64px',
  '2': '8px',
  '20': '80px',
  '24': '96px',
  '3': '12px',
  '32': '128px',
  '4': '16px',
  '40': '160px',
  '48': '192px',
  '5': '20px',
  '56': '224px',
  '6': '24px',
  '64': '256px',
  '8': '32px',
};

const container = {
  lg: '1024px',
  md: '768px',
  sm: '640px',
  xl: '1280px',
};

export const sizes = {
  ...baseSizes,
  container,
};

export type BaseSizes = typeof baseSizes;
export type Sizes = typeof baseSizes & { container: typeof container };
