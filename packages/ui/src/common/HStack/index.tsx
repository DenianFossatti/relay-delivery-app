import { HStack as Base } from 'native-base';
import { IStackProps } from 'native-base/lib/typescript/components/primitives';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

import { BoxProps } from '../Box';

export type HStackProps = BoxProps & IStackProps;

const Component = ({ testID = 'View', ...props }: HStackProps, ref?: any) => {
  return <Base {...props} ref={ref} {...assignTestId('View', testID)} />;
};

export const HStack = memo(forwardRef(Component));
