import { Spinner as Base, ISpinnerProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { Box } from '../Box/index';

export type SpinnerProps = Props;

const Component = ({ testID = 'Spinner', ...props }: SpinnerProps, ref?: any) => {
  return (
    <Box testID={testID}>
      <Base ref={ref} {...props} />
    </Box>
  );
};

export const Spinner = memo(forwardRef(Component));
