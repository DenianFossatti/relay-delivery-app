import { Meta, Story } from '@storybook/react';

import { Center, Stack } from '../../';

import { HStack, HStackProps } from '.';

export default {
  component: HStack,
  title: `HStack`,
} as Meta;

export const normal: Story<HStackProps> = (args) => (
  <Stack alignItems="center" flex={1} space={3}>
    <HStack alignItems="center" flex={1} space={3} {...args}>
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
    </HStack>
  </Stack>
);
