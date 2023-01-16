import { Meta, Story } from '@storybook/react';

import { Center } from '../../';

import { Slider, SliderProps } from '.';

export default {
  component: Slider,
  parameters: {
    chromatic: { viewports: [375, 812] },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/8XaOV9nOehLeNvEftlvajz/DS---Master-components?node-id=14522%3A35051',
    },
  },
  title: `Slider`,
} as Meta;

export const normal: Story<SliderProps> = (args) => (
  <Center flex={1} mx={5} width="80%">
    <Slider maxValue={100} minValue={0} value={10} {...args} />
  </Center>
);
