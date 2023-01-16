import { memo } from 'react';
import { ViewStyle } from 'react-native';
import { SafeAreaView as Base } from 'react-native-safe-area-context';

import { useColor } from '../../hooks/useColor';
import { assignTestId } from '../../tests/assignTestId';

export type SafeAreaViewProps = {
  children: React.ReactElement;
  style?: ViewStyle;
  testID?: string;
};

const Component = ({ testID = 'SafeAreaView', ...props }: SafeAreaViewProps) => {
  const backgroundColor = useColor('background');
  return <Base {...assignTestId('View', testID)} style={{ backgroundColor, flex: 1 }} {...props} />;
};

export const SafeAreaView = memo(Component);
