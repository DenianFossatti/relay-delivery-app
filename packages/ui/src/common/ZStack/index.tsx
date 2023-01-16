import { ZStack as Base } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

import { BoxProps } from '../Box';

export type ZStackProps = BoxProps;

const Component = ({ testID = 'ZStack', ...props }: ZStackProps, ref?: any) => {
  return <Base {...props} {...assignTestId('View', testID)} />;
};

export const ZStack = memo(forwardRef(Component));
