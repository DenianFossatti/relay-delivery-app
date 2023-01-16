import { Meta, Story } from '@storybook/react';

import { Button, Center, HStack, VStack } from '../../';

import { Badge, BadgeProps } from '.';

export default {
  component: Badge,
  title: `Badge`,
} as Meta;

export const normal: Story<BadgeProps> = (args) => {
  return (
    <Center flex={1} px="3">
      <Badge {...args}>NEW FEATURE</Badge>
    </Center>
  );
};

export const content: Story<BadgeProps> = () => {
  return (
    <HStack
      mx={{
        base: 'auto',
        md: 0,
      }}
      space={{
        base: 2,
        md: 4,
      }}
    >
      <Badge colorScheme="success">SUCCESS</Badge>
      <Badge colorScheme="danger">DANGER</Badge>
      <Badge colorScheme="info">INFO</Badge>
      <Badge colorScheme="coolGray">DARK</Badge>
    </HStack>
  );
};

export const variants: Story<BadgeProps> = () => {
  return (
    <Center flex={1} px="3">
      <HStack
        mx={{
          base: 'auto',
          md: '0',
        }}
        space={{
          base: '2',
          md: '4',
        }}
      >
        {['solid', 'outline', 'subtle'].map((key) => (
          <VStack key={key} space={4}>
            <Badge alignSelf="center" variant={key}>
              DEFAULT
            </Badge>
            <Badge alignSelf="center" colorScheme="success" variant={key}>
              SUCCESS
            </Badge>
            <Badge alignSelf="center" colorScheme="danger" variant={key}>
              DANGER
            </Badge>
            <Badge alignSelf="center" colorScheme="info" variant={key}>
              INFO
            </Badge>
          </VStack>
        ))}
      </HStack>
    </Center>
  );
};
export const composition: Story<BadgeProps> = () => {
  return (
    <Center flex={1} px="3">
      <VStack>
        <Badge // bg="red.400"
          _text={{
            fontSize: 12,
          }}
          alignSelf="flex-end"
          colorScheme="danger"
          mb={-4}
          mr={-4}
          rounded="999px"
          variant="solid"
          zIndex={1}
        >
          2
        </Badge>
        <Button
          _text={{
            fontSize: 14,
          }}
          bg="cyan.500"
          mx={{
            base: 'auto',
            md: 0,
          }}
          p="2"
        >
          Notifications
        </Button>
      </VStack>
    </Center>
  );
};
