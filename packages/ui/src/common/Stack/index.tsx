import { Stack as Base } from 'native-base';
import { IStackProps } from 'native-base/lib/typescript/components/primitives';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type StackProps = IStackProps;

const Component = ({ testID = 'View', ...props }: StackProps, ref?: any) => {
  return <Base ref={ref} {...props} {...assignTestId('View', testID)} />;
};

export const Stack = memo(forwardRef(Component));
