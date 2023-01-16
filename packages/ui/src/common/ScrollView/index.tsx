import { ScrollView as Base, IScrollViewProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type ScrollViewProps = Props & { testID?: string };

const Component = ({ testID = 'ScrollView', ...props }: ScrollViewProps, ref?: any) => {
  return <Base ref={ref} {...assignTestId('View', testID)} {...props} />;
};

export const ScrollView = memo(forwardRef(Component));
