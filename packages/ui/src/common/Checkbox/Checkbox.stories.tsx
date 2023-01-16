import { Meta, Story } from '@storybook/react';

import { Center, Checkbox, CheckboxProps, HStack } from '../../';

export default {
  component: Checkbox,
  title: `Checkbox`,
} as Meta;

export const normal: Story<CheckboxProps> = () => (
  <Center flex={1}>
    <HStack space={6}>
      <Checkbox accessibilityLabel="This is a dummy checkbox" value="test" />
      <Checkbox defaultIsChecked accessibilityLabel="This is a dummy checkbox" value="test" />
    </HStack>
  </Center>
);
