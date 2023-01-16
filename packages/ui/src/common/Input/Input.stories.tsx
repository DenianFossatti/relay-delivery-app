import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ComponentStory, Meta } from '@storybook/react';

import { Box } from '../Box';

import { Input } from '.';
export default {
  argTypes: {
    onChange: { action: 'changed' },
    onChangeText: { action: 'onChangeText' },
  },
  component: Input,
  parameters: {
    actions: { argTypesRegex: null },
    chromatic: { viewports: [375, 812] },
  },
  title: `Input`,
} as Meta;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <Box m="2">
      <Input {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = { label: 'Default' };

export const Password = Template.bind({});
Password.args = { label: 'Password', variant: 'password' };

export const HelperText = Template.bind({});
HelperText.args = { helperText: 'Some important text', label: 'HelperText' };

export const isInvalid = Template.bind({});
isInvalid.args = {
  helperText: 'Incorrect entry.',
  isInvalid: true,
  label: 'isInvalid',
  value: 'Incorrect',
};

export const isDisabled = Template.bind({});
isDisabled.args = { isDisabled: true, label: 'isDisabled', value: 'Disabled' };

export const isRequired = Template.bind({});
isRequired.args = {
  isRequired: true,
  label: 'isRequired',
};

export const rightComponent = Template.bind({});
rightComponent.args = {
  InputRightElement: (
    <Box mr="2">
      <FontAwesomeIcon icon="eye-slash" />
    </Box>
  ),
  label: 'rightComponent',
};

export const Cpf = Template.bind({});
Cpf.args = {
  label: 'Cpf',
  variant: 'cpf',
};

export const Phone = Template.bind({});
Phone.args = {
  label: 'Phone',
  variant: 'phone',
};
