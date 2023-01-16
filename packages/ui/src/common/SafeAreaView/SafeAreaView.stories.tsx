import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SafeAreaView } from '.';

export default {
  component: SafeAreaView,
  title: `SafeAreaView`,
} as ComponentMeta<typeof SafeAreaView>;

const Template: ComponentStory<typeof SafeAreaView> = (args) => <SafeAreaView {...args} />;

export const Default = Template.bind({});
