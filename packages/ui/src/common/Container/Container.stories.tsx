import { Meta, Story } from '@storybook/react';

import { Heading } from '..';

import { Container, ContainerProps } from '.';

export default {
  component: Container,
  title: `Container`,
} as Meta;

export const normal: Story<ContainerProps> = (args) => (
  <Container p={4} {...args}>
    <Heading>
      A component library for the
      <Heading color="emerald.400" pl={1}>
        React Ecosystem
      </Heading>
    </Heading>
    <Heading fontWeight="md" pt={4} size="sm">
      NativeBase is a simple, modular and accessible component library that gives you building blocks to build you React
      applications.
    </Heading>
  </Container>
);
