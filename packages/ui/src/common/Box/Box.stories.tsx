import { Meta, Story } from '@storybook/react';
import { AspectRatio } from 'native-base';

import { Center, HStack, Heading, Image, Stack, Text } from '../../';

import { Box, BoxProps } from '.';

export default {
  component: Box,
  title: `Box`,
} as Meta;

export const basic: Story<BoxProps> = (args) => (
  <Box
    {...args}
    _text={{
      color: 'white',
      fontSize: 'md',
      fontWeight: 'bold',
    }}
    bg="primary.400"
    p={4}
  >
    This is a Box
  </Box>
);

export const linearGradient: Story<BoxProps> = () => (
  <Box
    _text={{
      color: 'white',
      fontSize: 'md',
      fontWeight: 'bold',
    }}
    bg={{
      linearGradient: {
        colors: ['primary.400', 'primary.800'],
        end: [1, 0],
        start: [0, 0],
      },
    }}
    p={12}
    rounded="lg"
  >
    This is a Box with Linear Gradient
  </Box>
);

export const composition: Story<BoxProps> = () => (
  <Box
    _dark={{
      backgroundColor: 'gray.700',
    }}
    _light={{
      backgroundColor: 'coolGray.50',
    }}
    borderRadius="lg"
    overflow="hidden"
    rounded="lg"
    shadow={1}
    width="72"
  >
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Image
          alt="image"
          source={{
            uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
          }}
        />
      </AspectRatio>
      <Center
        _dark={{
          bg: 'violet.400',
        }}
        _text={{
          color: 'warmGray.50',
          fontSize: 'xs',
          fontWeight: '700',
        }}
        bg="violet.500"
        bottom="0"
        position="absolute"
        px="3"
        py="1.5"
      >
        PHOTOS
      </Center>
    </Box>
    <Stack p="4" space={3}>
      <Stack space={2}>
        <Heading ml="-1" size="md">
          The Garden City
        </Heading>
        <Text
          _dark={{
            color: 'violet.400',
          }}
          _light={{
            color: 'violet.500',
          }}
          fontSize="xs"
          fontWeight="500"
          ml="-0.5"
          mt="-1"
        >
          The Silicon Valley of India.
        </Text>
      </Stack>
      <Text fontWeight="400">
        Bengaluru (also called Bangalore) is the center of India high-tech industry. The city is also known for its
        parks and nightlife.
      </Text>
      <HStack alignItems="center" justifyContent="space-between" space={4}>
        <HStack alignItems="center">
          <Text
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="400"
          >
            6 mins ago
          </Text>
        </HStack>
      </HStack>
    </Stack>
  </Box>
);

export const flexDirection: Story<BoxProps> = ({ flexDirection }) => (
  <Box flex={1} flexDirection={flexDirection}>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="yellow.200" h="50px" w="50px"></Box>
  </Box>
);
flexDirection.argTypes = {
  flexDirection: {
    control: { type: 'radio' },
    defaultValue: 'row',
    options: ['row', 'column', 'row-reverse', 'column-reverse'],
  },
};

export const justifyContent: Story<BoxProps> = ({ justifyContent }) => (
  <Box flex={1} justifyContent={justifyContent}>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="yellow.200" h="50px" w="50px"></Box>
  </Box>
);

justifyContent.argTypes = {
  justifyContent: {
    control: { type: 'radio' },
    defaultValue: 'flex-start',
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
  },
};
export const alignItems: Story<BoxProps> = ({ alignItems }) => (
  <Box alignItems={alignItems} flex={1}>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="yellow.200" h="50px" minW="50px" w="auto"></Box>
  </Box>
);

alignItems.argTypes = {
  alignItems: {
    control: { type: 'radio' },
    defaultValue: 'stretch',
    options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
  },
};
export const alignSelf: Story<BoxProps> = ({ alignSelf }) => (
  <Box flex={1}>
    <Box alignSelf={alignSelf} bg="yellow.200" h="50px" minW="50px" w="auto"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
  </Box>
);

alignSelf.argTypes = {
  alignSelf: {
    control: { type: 'radio' },
    defaultValue: 'stretch',
    options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
  },
};
export const alignContent: Story<BoxProps> = ({ alignContent }) => (
  <Box alignContent={alignContent} flex={1} flexWrap="wrap">
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
  </Box>
);

alignContent.argTypes = {
  alignContent: {
    control: { type: 'radio' },
    defaultValue: 'flex-start',
    options: ['flex-start', 'flex-end', 'stretch', 'center', 'space-between', 'space-around'],
  },
};
export const flexWrap: Story<BoxProps> = ({ flexWrap }) => (
  <Box flex={1} flexWrap={flexWrap}>
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
    <Box bg="orange.200" h="50px" w="50px"></Box>
    <Box bg="green.200" h="50px" w="50px"></Box>
    <Box bg="blue.200" h="50px" w="50px"></Box>
    <Box bg="purple.200" h="50px" w="50px"></Box>
    <Box bg="blue.400" h="50px" w="50px"></Box>
  </Box>
);

flexWrap.argTypes = {
  flexWrap: {
    control: { type: 'radio' },
    defaultValue: 'wrap',
    options: ['wrap', 'nowrap'],
  },
};

export const position: Story<BoxProps> = ({ position }) => (
  <Box flex={1} position="relative">
    <Box bg="green.200" h="50px" left="25px" position={position} top="25px" w="50px"></Box>
    <Box bg="blue.200" h="50px" left="50px" position={position} top="50px" w="50px"></Box>
    <Box bg="red.200" h="50px" left="75px" position={position} top="75px" w="50px"></Box>
  </Box>
);

position.argTypes = {
  position: {
    control: { type: 'radio' },
    defaultValue: 'relative',
    options: ['relative', 'absolute'],
  },
};
