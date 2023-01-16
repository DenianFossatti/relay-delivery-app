import { ComponentMeta, ComponentStory } from '@storybook/react';

import { KeyboardAvoidingView } from '.';

export default {
  component: KeyboardAvoidingView,
  title: `KeyboardAvoidingView`,
} as ComponentMeta<typeof KeyboardAvoidingView>;

const Template: ComponentStory<typeof KeyboardAvoidingView> = (args) => <KeyboardAvoidingView {...args} />;

export const Default = Template.bind({});
