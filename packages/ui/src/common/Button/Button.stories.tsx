import { ComponentStory, Meta, Story } from '@storybook/react';
import { screen, userEvent, within } from '@storybook/testing-library';

import { Box, Divider, Heading, Stack, VStack } from '../';

import { Button, ButtonProps, ButtonSizeType } from './';
export default {
  argTypes: {
    onPress: { action: true },
  },
  component: Button,
  title: `Button/Button`,
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('Button_Button'));
  await screen.findByText('Hello World');
};

Default.args = {
  children: 'Hello World',
};

export const sizes: Story<ButtonProps> = () => (
  <VStack alignItems="center" space={4}>
    <Heading mb="10">Sizes</Heading>
    {['xs', 'sm', 'md', 'lg'].map((size) => (
      <Box key={size}>
        <Button key={size} size={size as ButtonSizeType}>
          {`SIZE ${size}`}
        </Button>
      </Box>
    ))}

    <Divider w="100%" />

    <Heading mb="10">Sizes - Full Width</Heading>
    {['xs', 'sm', 'md', 'lg'].map((size) => (
      <Box key={size} w="100%">
        <Button key={size} size={size as ButtonSizeType}>
          {`SIZE ${size}`}
        </Button>
      </Box>
    ))}
  </VStack>
);

export const loading: Story<ButtonProps> = () => (
  <Stack
    alignItems={{
      base: 'center',
      md: 'flex-start',
    }}
    direction={{
      base: 'column',
      md: 'row',
    }}
    space={2}
  >
    <Button isLoading>Button</Button>
    <Button isLoading isLoadingText="Submitting">
      Button
    </Button>
    <Button isLoading isLoadingText="Submitting" spinnerPlacement="end">
      Button
    </Button>
    <Button
      isLoading
      _spinner={{
        color: 'white',
      }}
      isLoadingText="Submitting"
    >
      Button
    </Button>
  </Stack>
);

loading.parameters = {
  // Notifies Chromatic to pause the animations when they finish for the specific story.
  chromatic: { pauseAnimationAtEnd: true },
};

export const colors: Story<ButtonProps> = () => (
  <Stack
    alignItems={{
      base: 'center',
      md: 'flex-start',
    }}
    direction={{
      base: 'column',
      md: 'row',
    }}
    space={2}
  >
    <Button colorScheme="primary">Primary</Button>
    <Button colorScheme="danger">Danger</Button>
    <Button colorScheme="warning">Warning</Button>
    <Button colorScheme="support">Support</Button>
    <Button colorScheme="neutral">Neutral</Button>
    <Button isDisabled colorScheme="primary">
      Disabled
    </Button>
  </Stack>
);
