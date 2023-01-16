import { Meta, Story } from '@storybook/react';
import { VStack } from 'native-base';

import { Text, TextProps } from '.';

export default {
  component: Text,
  title: `Text`,
} as Meta;

export const variants: Story<TextProps> = (args) => (
  <VStack alignItems="center" space={2}>
    <Text variant="body">Body</Text>
    <Text variant="bodyBold">Body Bold</Text>
    <Text variant="body2">Body 2</Text>
    <Text variant="body2Bold">Body 2 Bold</Text>
    <Text variant="button">Button</Text>
    <Text variant="h1">H1</Text>
    <Text variant="h2">H2</Text>
    <Text variant="h3">H3</Text>
    <Text variant="h4">H4</Text>
    <Text variant="h5">H5</Text>
    <Text variant="h6">H6</Text>
    <Text variant="link">Link</Text>
    <Text variant="small">Small</Text>
    <Text variant="smallButton">Small Button</Text>
    <Text variant="subtitle">Subtitle</Text>
    <Text variant="title">Title</Text>
  </VStack>
);

export const normal: Story<TextProps> = (args) => (
  <VStack alignItems="center" space={2}>
    <Text fontSize="xs">{args.children} (xs) Extra Small</Text>
    <Text fontSize="sm">{args.children} (sm) Small</Text>
    <Text fontSize="md">{args.children} (md) Medium</Text>
    <Text fontSize="lg">{args.children} (lg) Large</Text>
    <Text fontSize="xl">{args.children} (xl) Extra Large</Text>
    <Text fontSize="2xl">{args.children} (2xl) 2 Extra Large</Text>
    <Text fontSize="3xl">{args.children} (3xl) 3 Extra Large</Text>
    <Text fontSize="4xl">{args.children} (4xl) 4 Extra Large</Text>
    <Text fontSize="5xl">{args.children} (5xl) 5 Extra Large</Text>
    <Text fontSize="6xl">{args.children} (6xl) 6 Extra Large</Text>
  </VStack>
);

normal.args = {
  children: 'Texto exemplo',
};
