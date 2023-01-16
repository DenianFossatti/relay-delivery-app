import { Switch as Base, ISwitchProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type SwitchProps = Props;

const Component = ({ testID = 'Switch', ...props }: SwitchProps, ref?: any) => {
  return <Base ref={ref} {...props} {...assignTestId('View', testID)} />;
};

export const Switch = memo(forwardRef(Component));
