import { Meta, Story } from '@storybook/react';

import { TouchableOpacity, TouchableOpacityProps } from '.';

export default {
  component: TouchableOpacity,
  title: `TouchableOpacity`,
} as Meta;

export const normal: Story<TouchableOpacityProps> = (args) => <TouchableOpacity {...args} />;
