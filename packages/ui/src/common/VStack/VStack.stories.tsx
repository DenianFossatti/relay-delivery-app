import { Meta, Story } from '@storybook/react';

import { Center, Heading } from '../../';

import { VStack, VStackProps } from '.';

export default {
  component: VStack,
  title: `VStack`,
} as Meta;

export const normal: Story<VStackProps> = (args) => (
  <VStack alignItems="center" space={4} {...args}>
    <Heading>VStack</Heading>
    <Center
      _text={{
        color: 'white',
      }}
      bg="primary.400"
      rounded="md"
      shadow={3}
      size={16}
    >
      Box 1
    </Center>
    <Center
      _text={{
        color: 'white',
      }}
      bg="secondary.400"
      rounded="md"
      shadow={3}
      size={16}
    >
      Box 2
    </Center>
    <Center
      _text={{
        color: 'white',
      }}
      bg="emerald.400"
      rounded="md"
      shadow={3}
      size={16}
    >
      Box 3
    </Center>
  </VStack>
);
