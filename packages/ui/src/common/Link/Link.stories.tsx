import { Meta, Story } from '@storybook/react';

import { Link, LinkProps } from '.';

export default {
  component: Link,
  title: `Link`,
} as Meta;

export const normal: Story<LinkProps> = (args) => <Link {...args} />;
