import { Meta, Story } from '@storybook/react';

import { Box } from '../Box/index';
import { Center } from '../Center/index';
import { Heading } from '../Heading/index';

import { Flex, FlexProps } from '.';

export default {
  argTypes: {
    direction: {
      control: { type: 'radio' },
      defaultValue: 'row',
      options: ['row', 'column'],
    },
  },
  component: Flex,
  title: `Flex`,
} as Meta;

export const normal: Story<FlexProps> = ({ direction }: any) => (
  <Center>
    <Box>
      <Heading mb={3} size="md">
        Primary Shades
      </Heading>
    </Box>

    <Box>
      <Flex flexDirection={direction}>
        <Center
          _text={{
            color: 'gray.800',
          }}
          bg="primary.100"
          size={16}
        >
          100
        </Center>
        <Center
          _text={{
            color: 'white',
          }}
          bg="primary.200"
          size={16}
        >
          200
        </Center>
        <Center
          _text={{
            color: 'white',
          }}
          bg="primary.300"
          size={16}
        >
          300
        </Center>
        <Center
          _text={{
            color: 'white',
          }}
          bg="primary.400"
          size={16}
        >
          400
        </Center>
      </Flex>
    </Box>
  </Center>
);
