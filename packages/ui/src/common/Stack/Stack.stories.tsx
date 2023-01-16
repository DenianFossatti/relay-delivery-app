import { Meta, Story } from '@storybook/react';

import { Center } from '../Center/index';
import { Heading } from '../Heading/index';

import { Stack, StackProps } from '.';

export default {
  argTypes: {
    direction: {
      control: { type: 'radio' },
      defaultValue: 'row',
      options: ['row', 'column'],
    },
  },
  component: Stack,
  title: `Stack`,
} as Meta;

export const normal: Story<StackProps> = ({ direction }) => (
  <Stack alignItems="center" flex={1} space={3}>
    <Heading>Stack - {direction === 'row' ? 'Row' : 'Column'}</Heading>
    <Stack alignItems="center" direction={direction} mb={3} space={3}>
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
    </Stack>
  </Stack>
);
