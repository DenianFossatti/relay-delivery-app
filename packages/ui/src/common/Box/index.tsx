import { Box as Base, IBoxProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { APP_PAGE_MARGIN_X } from '../../constant';
import { assignTestId } from '../../tests/assignTestId';

export type BoxProps = Props & {
  content?: boolean;
};

const Component = ({ content, testID = 'Box', ...props }: BoxProps, ref?: any) => {
  return <Base {...props} mx={content ? APP_PAGE_MARGIN_X : 0} ref={ref} {...assignTestId('View', testID)} />;
};

export const Box = memo(forwardRef(Component));
