import { SimpleGrid as Base, ISimpleGridProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type SimpleGridProps = Props;

const Component = ({ testID = 'SimpleGrid', ...props }: SimpleGridProps, ref?: any) => {
  return <Base ref={ref} {...props} {...assignTestId('View', testID)} />;
};
export const SimpleGrid = memo(forwardRef(Component));
