import { Meta, Story } from '@storybook/react';
import { Spacer } from 'native-base';

import { Box, Center, HStack, Pressable, PressableProps, Text } from '../../';

export default {
  argTypes: {
    onPress: { action: 'onPress' },
  },
  component: Pressable,
  title: `Pressable`,
} as Meta;

export const normal: Story<PressableProps> = (args) => (
  <Center flex="1" px="3">
    <Pressable {...args}>
      <Box bg="cyan.700" p="5" rounded="8" w="296">
        <HStack alignItems="flex-start">
          <Text color="cyan.50" fontSize={12} fontWeight="medium">
            Business
          </Text>
          <Spacer />
          <Text color="cyan.100" fontSize={10}>
            1 month ago
          </Text>
        </HStack>
        <Text color="cyan.50" fontSize={20} fontWeight="medium" mt="3">
          Marketing License
        </Text>
        <Text color="cyan.100" fontSize={14} mt="2">
          Unlock powerfull time-saving tools for creating email delivery and collecting marketing data
        </Text>
        <Box>
          <Text color="cyan.400" fontSize={12} fontWeight="medium" mt="2">
            Read More
          </Text>
        </Box>
      </Box>
    </Pressable>
  </Center>
);
