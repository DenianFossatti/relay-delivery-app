import { Meta, Story } from '@storybook/react';

import { Box } from '../Box/index';

import { ZStack, ZStackProps } from '.';

export default {
  component: ZStack,
  title: `ZStack`,
} as Meta;
export const basic: Story<ZStackProps> = () => (
  <Box flex={1} mx="auto">
    <ZStack ml={-20} mt={3}>
      <Box bg="primary.400" rounded="lg" shadow={3} size={20} />
      <Box bg="secondary.400" ml={5} mt={5} rounded="lg" shadow={5} size={20} />
      <Box bg="emerald.400" ml={10} mt={10} rounded="lg" shadow={7} size={20} />
    </ZStack>
  </Box>
);
export const centered: Story<ZStackProps> = () => (
  <ZStack alignItems="center" flex={1} justifyContent="center">
    <Box bg="primary.400" rounded="lg" size={64} />
    <Box bg="secondary.400" rounded="lg" shadow={8} size={48} />
    <Box bg="emerald.400" rounded="lg" shadow={8} size={32} />
  </ZStack>
);
