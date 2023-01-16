import { Flex as Base, IFlexProps } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type FlexProps = IFlexProps;

const Component = ({ testID = 'View', ...props }: FlexProps, ref?: any) => {
  return <Base {...props} ref={ref} {...assignTestId('View', testID)} />;
};

export const Flex = memo(forwardRef(Component));
