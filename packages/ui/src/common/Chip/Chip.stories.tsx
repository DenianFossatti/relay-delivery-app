import { ComponentMeta, ComponentStory } from '@storybook/react';

import { mockChips } from './mock';

import { Chip } from '.';

export default {
  component: Chip,
  title: `Chips`,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockChips,
};

export const Selected = Template.bind({});

Selected.args = {
  isSelected: true,
  label: 'Banana',
  onPress: () => console.log('teste'),
  testID: 'Chip',
};
