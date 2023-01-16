import { Select as Base, ISelectItemProps, ISelectProps } from 'native-base';
import { memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';
export type SelectProps = ISelectProps & {
  items: ISelectItemProps[];
  testID?: string;
};

const Component = ({ items, testID = 'Select', ...props }: SelectProps) => {
  return (
    <Base
      backgroundColor="white"
      borderWidth={2}
      color="darkText"
      fontSize="16px"
      fontWeight={500}
      px="4"
      py="3"
      {...assignTestId('Select', `${testID}`)}
      {...props}
    >
      {items.map((item, key) => (
        <Base.Item key={`${testID}_${key.toString()}`} {...item} {...assignTestId('Select', `${testID}_item_${key}`)} />
      ))}
    </Base>
  );
};

export const Select = memo(Component);
