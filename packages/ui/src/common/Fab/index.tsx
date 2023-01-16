import { Fab as Base, ITextProps, IFabProps as Props } from 'native-base';
import { forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export type FabProps = Props & {
  color?: string;
  textStyle?: ITextProps;
  translate?: boolean;
};

const Component = ({ testID = 'Fab', ...props }: FabProps, ref?: any) => {
  return <Base {...props} ref={ref} {...assignTestId('Button', testID)} />;
};

export const Fab = memo(forwardRef(Component));
