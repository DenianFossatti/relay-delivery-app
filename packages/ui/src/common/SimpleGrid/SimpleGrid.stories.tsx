import { Meta, Story } from '@storybook/react';

import { SimpleGrid, SimpleGridProps } from '../../';

import { Box } from '../Box/index';
export default {
  component: SimpleGrid,
  title: `SimpleGrid`,
} as Meta;

export const normal: Story<SimpleGridProps> = (args) => {
  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push(i);
  }

  return (
    <SimpleGrid flex={1} {...args}>
      {data.map((item, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={key} bg={item % 2 ? `primary.400` : `secondary.400`} h="50px" mb={1} w="50px">
          {item}
        </Box>
      ))}
    </SimpleGrid>
  );
};
normal.argTypes = {
  columns: {
    control: {
      type: 'number',
    },
  },
  space: {
    control: {
      type: 'number',
    },
  },
};

normal.args = {
  columns: 4,
  space: 4,
};
