import { Menu as Base, IMenuProps } from 'native-base';
import { memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';
import { HStack } from '../HStack';
import { Icon, IconProps } from '../Icon';
import { IconButton, IconButtonProps } from '../IconButton';
import { Text } from '../Text';

export type MenuItem = {
  icon?: IconProps['icon'];
  onPress: () => void;
  title: string;
};

export type MenuProps = Omit<IMenuProps, 'trigger'> & {
  items: MenuItem[];
  testID?: string;
  triggerIconProps?: IconButtonProps;
};

const Component = ({ items, testID = 'Menu', triggerIconProps, ...props }: MenuProps) => {
  return (
    <Base
      // Fixes a bug in native-base where the menu puts an overlay on top of the screen (only on android)
      // And the user needs to tap "back" button to close this "invisible overlay"
      // Reference: https://github.com/GeekyAnts/NativeBase/issues/4730
      defaultIsOpen={false}
      placement="left"
      trigger={(triggerProps) => (
        <IconButton
          color="darkText"
          icon="ellipsis-h"
          iconColor="darkText"
          testID={`${testID}_Trigger`}
          {...triggerProps}
          {...triggerIconProps}
        />
      )}
      {...props}
      {...assignTestId('View', testID)}
    >
      {items.map(({ icon, onPress, title }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Base.Item key={`${testID}_MenuItem_${index}`} onPress={onPress} testID={`${testID}_MenuItem_${index}`}>
          {icon ? (
            <HStack alignItems="center" space="4">
              <Icon color="darkText" icon={icon} />
              <Text testID={`${testID}_MenuItem_${index}`}>{title}</Text>
            </HStack>
          ) : (
            title
          )}
        </Base.Item>
      ))}
    </Base>
  );
};

export const Menu = memo(Component);
