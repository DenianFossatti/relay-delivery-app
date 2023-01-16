import { Meta, Story } from '@storybook/react';

import { Spinner, SpinnerProps } from '.';

export default {
  component: Spinner,
  title: `Spinner`,
} as Meta;

export const normal: Story<SpinnerProps> = (args) => <Spinner {...args} />;
