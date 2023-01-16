import { Center as Base } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

import { BoxProps } from '../Box';

export type CenterProps = BoxProps;

const Component = ({ testID = 'Center', ...props }: CenterProps, ref?: any) => {
  return <Base {...props} ref={ref} {...assignTestId('View', testID)} />;
};

export const Center = memo(forwardRef(Component));
