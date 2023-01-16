import { Text as Base } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

import { TextProps } from './type';
import { TextVariants } from './variants';

export { TextProps };

const Component = ({ testID = 'Text', variant, ...props }: TextProps, ref?: any) => {
  if (variant) {
    return (
      <Base ref={ref} {...assignTestId('Text', testID)} {...TextVariants[variant]} {...props}>
        {props.children}
      </Base>
    );
  }
  return <Base {...props} ref={ref} {...assignTestId('Text', testID)} />;
};

export const Text = memo(forwardRef(Component));
