import { Badge as Base, IBadgeProps as Props } from 'native-base';
import { memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type BadgeProps = Props;

const Component = ({ testID = 'Badge', ...props }: BadgeProps) => {
  return <Base {...props} {...assignTestId('View', testID)} />;
};

export const Badge = memo(Component);
