import { memo } from 'react';
import { KeyboardAvoidingView as Base, Platform } from 'react-native';

import { assignTestId } from '../../tests/assignTestId';

export type KeyboardAvoidingViewProps = {
  children: React.ReactElement;
  testID?: string;
};

const Component = ({ testID = 'KeyboardAvoidingView', ...props }: KeyboardAvoidingViewProps) => {
  return (
    <Base
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 128 : 100}
      style={{ flex: 1, paddingBottom: Platform.OS === 'ios' ? 0 : 20 }}
      {...assignTestId('View', testID)}
      {...props}
    />
  );
};

export const KeyboardAvoidingView = memo(Component);
