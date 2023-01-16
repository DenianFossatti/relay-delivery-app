import { Container as Base } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

import { BoxProps } from '../Box';

export type ContainerProps = BoxProps;

const Component = ({ testID = 'Container', ...props }: ContainerProps, ref?: any) => {
  return <Base {...assignTestId('View', testID)} ref={ref} {...props} />;
};

export const Container = memo(forwardRef(Component));
