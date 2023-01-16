import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ForwardRefRenderFunction, forwardRef, memo } from 'react';

import { useColorProps } from '../../hooks/useColor/';
import { Button, ButtonProps } from '../Button';

import { Icon } from '../Icon/index';

export type IconButtonProps = Omit<ButtonProps, 'size'> & {
  accessibilityLabel: string;
  icon: IconProp;
  iconColor?: useColorProps;
  size?: number;
  testID?: string;
};

const Component: ForwardRefRenderFunction<ButtonProps, IconButtonProps> = (
  { icon, iconColor, size = 20, testID = 'IconButton', ...props },
  ref,
) => {
  return (
    <Button backgroundColor="transparent" borderRadius="full" ref={ref} variant="solid" {...props} testID={testID}>
      <Icon color={iconColor} icon={icon} size={size} />
    </Button>
  );
};

export const IconButton = memo(forwardRef(Component));
