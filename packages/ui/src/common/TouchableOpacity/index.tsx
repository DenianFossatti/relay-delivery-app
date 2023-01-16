import { TouchableOpacity as Base, TouchableOpacityProps as Props } from 'react-native';

import { assignTestId } from '../../tests/assignTestId';

export type TouchableOpacityProps = {
  testID?: string;
} & Props;

export const TouchableOpacity: React.FC<TouchableOpacityProps> = ({ testID = 'TouchableOpacity', ...props }) => {
  return <Base {...assignTestId('TouchableOpacity', testID)} {...props} />;
};
