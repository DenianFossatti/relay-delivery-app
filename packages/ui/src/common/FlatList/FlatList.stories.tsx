import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FlatList } from '.';

export default {
  component: FlatList,
  title: `FlatList`,
} as ComponentMeta<typeof FlatList>;

const Template: ComponentStory<typeof FlatList> = (args) => <FlatList {...args} />;

export const Default = Template.bind({});
