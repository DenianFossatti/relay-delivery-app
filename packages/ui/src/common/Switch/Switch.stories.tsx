import { Meta, Story } from '@storybook/react';

import { Center, Heading, VStack } from '../../';

import { Switch, SwitchProps } from '.';

export default {
  component: Switch,
  title: `Switch`,
} as Meta;

export const normal: Story<SwitchProps> = () => (
  <Center>
    <VStack alignItems="center" space={4}>
      <Heading mb="10">Sizes</Heading>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </VStack>
  </Center>
);
export const colors: Story<SwitchProps> = () => (
  <Center>
    <VStack alignItems="center" space={4}>
      <Heading mb="10" textAlign="center">
        Track & Thumb color
      </Heading>
      <Switch />
      <Switch
        offThumbColor="orange.50"
        offTrackColor="orange.100"
        onThumbColor="orange.500"
        onTrackColor="orange.200"
      />
      <Switch
        offThumbColor="indigo.50"
        offTrackColor="indigo.100"
        onThumbColor="indigo.500"
        onTrackColor="indigo.200"
      />
    </VStack>
  </Center>
);
export const colorScheme: Story<SwitchProps> = () => (
  <Center>
    <VStack alignItems="center" space={4}>
      <Heading mb="10" textAlign="center">
        Color Scheme
      </Heading>
      <Switch defaultIsChecked colorScheme="primary" />
      <Switch defaultIsChecked colorScheme="secondary" />
      <Switch defaultIsChecked colorScheme="emerald" />
    </VStack>
  </Center>
);
