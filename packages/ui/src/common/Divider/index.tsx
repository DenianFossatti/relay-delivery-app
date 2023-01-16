import { Divider as Base, IDividerProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type DividerProps = Props;

const Component = ({ testID = 'Divider', ...props }: DividerProps, ref?: any) => {
  return <Base {...props} ref={ref} {...assignTestId('View', testID)} />;
};

export const Divider = memo(forwardRef(Component));
