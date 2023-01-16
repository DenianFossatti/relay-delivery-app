import { Link as Base, ILinkProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type LinkProps = Props;

const Component = ({ testID = 'Link', ...props }: LinkProps, ref?: any) => {
  return <Base ref={ref} {...props} {...assignTestId('TouchableOpacity', testID)} />;
};

export const Link = memo(forwardRef(Component));
