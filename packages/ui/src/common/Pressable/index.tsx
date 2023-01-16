import { Pressable as Base, IPressableProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type PressableProps = Props;

const Component = ({ testID = 'Pressable', ...props }: PressableProps, ref?: any) => (
  <Base ref={ref} {...props} {...assignTestId('Pressable', testID)} />
);

export const Pressable = memo(forwardRef(Component));
