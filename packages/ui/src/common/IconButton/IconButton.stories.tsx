import { Meta, Story } from '@storybook/react';

import { IconButton, IconButtonProps } from '../../';

export default {
  component: IconButton,
  title: `IconButton`,
} as Meta;

export const normal: Story<IconButtonProps> = (args) => <IconButton {...args} />;

normal.args = {
  icon: 'times',
  size: 10,
};
