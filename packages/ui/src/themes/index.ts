import { extendTheme } from 'native-base';

import { colors } from './colors';
import { config } from './config';
import * as components from './extra';
import { fonts } from './fonts';
import { radius } from './radius';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { typography } from './typography';

export const theme = extendTheme({
  config,
  radius,
  ...typography,
  ...fonts,
  colors,
  components: { ...components },
  shadows,
  sizes,
});
