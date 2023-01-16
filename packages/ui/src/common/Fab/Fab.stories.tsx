import { Meta, Story } from '@storybook/react';

import { Fab, FabProps, Icon } from '../../components/atoms';

export default {
  component: Fab,
  title: `Fab`,
} as Meta;

export const normal: Story<FabProps> = (args) => <Fab {...args} />;

normal.args = {
  icon: <Icon icon="add" />,
  position: 'absolute',
  size: 'sm',
};
export const label: Story<FabProps> = (args) => <Fab {...args} />;

label.args = {
  borderRadius: 'full',
  label: 'Add Photo',
  position: 'absolute',
  size: 'sm',
};
