import { Heading as Base, IHeadingProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type HeadingProps = Props;

const Component = ({ testID = 'Heading', ...props }: HeadingProps, ref?: any) => {
  return <Base {...props} ref={ref} {...assignTestId('Text', testID)} />;
};

export const Heading = memo(forwardRef(Component));
