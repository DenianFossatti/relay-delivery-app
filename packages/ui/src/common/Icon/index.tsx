import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { View } from 'react-native';

import { useColor, useColorProps } from '../../hooks/useColor';
import { assignTestId } from '../../tests/assignTestId';

export type IconProps = Props & {
  color?: useColorProps;
  icon: IconProp;
  size?: number;
  testID?: string;
};

export const Icon: React.FC<IconProps> = ({ color = 'gray.600', icon, size = 20, testID = 'Icon', ...props }) => {
  const _color = useColor(color);
  return (
    <View {...assignTestId('Image', testID)}>
      <FontAwesomeIcon {...props} color={_color} icon={icon} size={size} />
    </View>
  );
};
