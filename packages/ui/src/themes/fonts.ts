export type FontConfigType = {
  [fontName: string]: {
    400: {
      italic: string;
      normal: string;
    };
    700: {
      normal: string;
    };
  };
};

export const fonts = {
  font: { family: 'Quicksand, Helvetica, sans-serif' },

  fontConfig: {
    Quicksand: {
      400: {
        italic: 'Quicksand-Italic',
        normal: 'Quicksand-Regular',
      },
      700: {
        normal: 'Quicksand-SemiBold',
      },
    },
  },
  fonts: {
    body: 'Quicksand',
    heading: 'Quicksand',
    mono: 'Quicksand',
  },
};
