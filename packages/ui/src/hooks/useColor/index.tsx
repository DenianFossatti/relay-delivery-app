/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useToken } from 'native-base';
import { Leaves } from 'native-base/src/theme/base/types';

import { theme } from '../../themes';

export type useColorProps = Leaves<typeof theme.colors>;

export const useColor = (color: useColorProps): useColorProps => useToken('colors', color);
