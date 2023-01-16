import { Meta, Story } from '@storybook/react';

import { Center, VStack } from '../../';

import { Image, ImageProps } from '.';

export default {
  component: Image,
  title: `Image`,
} as Meta;

export const sizes: Story<ImageProps> = () => (
  <Center flex={1}>
    <VStack safeAreaTop alignItems="center" my={6} space={2}>
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size, key) => (
        <Image
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          alt={'Alternate Text ' + size}
          resizeMode="cover"
          size={size}
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
        />
      ))}
    </VStack>
  </Center>
);
export const radius: Story<ImageProps> = () => (
  <Center flex={1}>
    <Image
      alt="Alternate Text "
      borderRadius={10}
      resizeMode="cover"
      size="2xl"
      source={{
        uri: 'https://wallpaperaccess.com/full/317501.jpg',
      }}
    />
  </Center>
);
export const fallback: Story<ImageProps> = () => (
  <Center flex={1}>
    <Image
      alt="fallback text"
      borderRadius={100}
      fallbackSource={{
        uri: '../images/fallback.png',
      }}
      size={150}
      source={{
        uri: 'https://-page-icon.png', // uri: 'https://wallpaperaccess.com/full/317501.jpg',
      }}
    />
  </Center>
);
