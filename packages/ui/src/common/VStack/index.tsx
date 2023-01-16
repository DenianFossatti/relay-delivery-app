import { VStack as Base } from 'native-base';
import { forwardRef, memo } from 'react';

import { APP_PAGE_MARGIN_X } from '../../constant';
import { assignTestId } from '../../tests/assignTestId';

import { BoxProps } from '../Box';
import { StackProps } from '../Stack/index';

export type VStackProps = BoxProps & StackProps;

const Component = ({ content, testID = 'VStack', ...props }: VStackProps, ref?: any) => {
  return <Base mx={content ? APP_PAGE_MARGIN_X : 0} {...assignTestId('View', testID)} {...props} ref={ref} />;
};

export const VStack = memo(forwardRef(Component));
