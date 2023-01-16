import { Checkbox as Base, ICheckboxProps } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type CheckboxProps = ICheckboxProps;

const Component = ({ testID = 'Checkbox', ...props }: CheckboxProps, ref?: any) => {
  return <Base {...assignTestId('View', testID)} ref={ref} {...props} accessibilityLabel={props.value} />;
};

export const Checkbox = memo(forwardRef(Component));
