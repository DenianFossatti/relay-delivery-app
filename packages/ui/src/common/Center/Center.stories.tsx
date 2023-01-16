import { Meta, Story } from '@storybook/react';
import { Square } from 'native-base';

import { Box, HStack } from '../../';

import { Center, CenterProps } from '.';

export default {
  component: Center,
  title: `Center`,
} as Meta;

export const normal: Story<CenterProps> = (args) => (
  <Center flex={1}>
    <Center
      _text={{
        color: 'white',
        fontWeight: 'bold',
      }}
      bg="primary.400"
      height={200}
      width={{
        base: 200,
        lg: 400,
      }}
      {...args}
    >
      This is the Center
    </Center>
  </Center>
);
export const iconFrames: Story<CenterProps> = (args) => (
  <Center flex={1}>
    <HStack space={1}>
      <Center bg="secondary.400" h="40px" w="40px">
        <Box
          _text={{
            color: 'white',
            fontSize: 'lg',
            fontWeight: 'bold',
          }}
        >
          20
        </Box>
      </Center>
    </HStack>
  </Center>
);
export const squareCircle: Story<CenterProps> = (args) => (
  <Center flex={1} px="3" {...args}>
    <HStack space={3}>
      <Square bg="primary.400" size="lg">
        <Box
          _text={{
            color: 'white',
            fontSize: 'lg',
            fontWeight: 'bold',
          }}
        >
          20
        </Box>
      </Square>
    </HStack>
  </Center>
);
