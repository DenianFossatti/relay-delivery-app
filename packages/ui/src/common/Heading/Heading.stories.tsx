import { Meta, Story } from '@storybook/react';

import { Heading, HeadingProps } from '.';

export default {
  component: Heading,
  title: `Heading`,
} as Meta;

export const normal: Story<HeadingProps> = (args) => <Heading {...args} />;
