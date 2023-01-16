import { Meta, Story } from '@storybook/react';

import { Icon, IconProps } from '.';

export default {
  component: Icon,
  title: `Icon`,
} as Meta;

export const normal: Story<IconProps> = (args) => <Icon {...args} />;

normal.args = {
  color: 'amber.200',
  icon: 'times',
  size: 20,
};
