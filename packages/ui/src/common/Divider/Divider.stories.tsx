import { Meta, Story } from '@storybook/react';

import { Center } from '..';

import { Box } from '../Box/index';
import { Flex } from '../Flex/index';
import { Heading } from '../Heading/index';

import { Divider, DividerProps } from '.';

export default {
  component: Divider,
  title: `Divider`,
} as Meta;

export const normal: Story<DividerProps> = () => (
  <Center flex={1}>
    <Box w={160}>
      <Heading mx="auto">Browser</Heading>
      <Divider my={2} />
      <Flex flexDirection="row" justifyContent="space-evenly" mx={3}>
        <Divider orientation="vertical" />
      </Flex>
    </Box>
  </Center>
);
