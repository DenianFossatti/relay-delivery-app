import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '.';

export default {
  component: Select,
  title: `Select`,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    },
  ],
  placeholder: 'Select an option',
};
