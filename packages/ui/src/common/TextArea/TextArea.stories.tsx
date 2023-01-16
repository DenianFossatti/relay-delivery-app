import { Meta, Story } from '@storybook/react';

import { TextArea, TextAreaProps } from '.';

export default {
  component: TextArea,
  title: `TextArea`,
} as Meta;

export const normal: Story<TextAreaProps> = (args) => <TextArea {...args} />;
