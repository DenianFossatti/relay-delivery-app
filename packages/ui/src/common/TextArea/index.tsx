import { TextArea as Base, ITextAreaProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type TextAreaProps = {
  // Resolves a bug on native-base, to be removed on future
  // reference: https://github.com/GeekyAnts/NativeBase/issues/4933
  autoCompleteType: string;
  testID?: string;
} & Props;

const Component = ({ testID = 'TextArea', ...props }: TextAreaProps, ref?: any) => {
  return <Base {...props} {...assignTestId('View', testID)} />;
};

export const TextArea = memo(forwardRef(Component));
