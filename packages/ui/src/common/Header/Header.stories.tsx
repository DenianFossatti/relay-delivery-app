import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Meta, Story } from '@storybook/react';

import { HStack } from '../HStack';

import { Header, HeaderProps } from './index';
export default {
  component: Header,
  parameters: {
    actions: { argTypesRegex: null },
    chromatic: { viewports: [375, 812] },
  },
  title: `Header`,
} as Meta;

const Template: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});

export const CenteredLogo = Template.bind({});
CenteredLogo.args = {
  logoCenter: true,
};

export const Title = Template.bind({});
Title.args = {
  title: 'Page Title',
};
Title.parameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const TitleAndSubtitle = Template.bind({});
TitleAndSubtitle.args = {
  subtitle: 'Page Subtitle',
  title: 'Page Title',
};
TitleAndSubtitle.parameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const CustomSubtitleComponent = Template.bind({});
CustomSubtitleComponent.args = {
  subtitle: (
    <HStack alignItems="center" space={1}>
      <FontAwesomeIcon color="#00AD8E" icon="lock" size={14} />
      Page Subtitle
    </HStack>
  ),
  title: 'Page Title',
};
CustomSubtitleComponent.parameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const leftButtons = Template.bind({});
leftButtons.args = {
  leftButtons: [
    { icon: 'times', onPress: () => console.log('onPress') },
    { icon: 'home', onPress: () => console.log('onPress') },
  ],
  title: 'Page Title',
};

export const rightButtons = Template.bind({});
rightButtons.args = {
  rightButtons: [
    { icon: 'times', onPress: () => console.log('onPress') },
    { icon: 'home', onPress: () => console.log('onPress') },
  ],
  title: 'Page Title',
};

export const rightButtonText = Template.bind({});
rightButtonText.args = {
  rightButtonText: {
    icon: 'times',
    onPress: () => console.log('onPress'),
    text: 'Pular',
  },
  title: 'Page Title',
};

export const leftAndRightButtons = Template.bind({});
leftAndRightButtons.args = {
  leftButtons: [{ icon: 'times', onPress: () => console.log('onPress') }],
  rightButtons: [{ icon: 'ellipsis', onPress: () => console.log('onPress') }],
  title: 'Page Title',
};

export const WithAllIcons = Template.bind({});
WithAllIcons.parameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const WithOnBack = Template.bind({});
WithOnBack.argTypes = { onBack: { action: 'onBack' } };

export const WithOnClose = Template.bind({});
WithOnClose.argTypes = { onClose: { action: 'onClose' } };

export const WithOnHelp = Template.bind({});
WithOnHelp.argTypes = { onHelp: { action: 'onHelp' } };

export const NewsFeed = Template.bind({});
NewsFeed.args = {
  logo: true,
  logoCenter: false,
  menuProps: {
    items: [
      { onPress: () => console.log('onPress'), title: 'Menu Option 1' },
      { icon: 'home', onPress: () => console.log('onPress'), title: 'Home' },
      {
        icon: 'arrow-right-from-bracket',
        onPress: () => console.log('onPress'),
        title: 'Logout',
      },
    ],
    triggerIconProps: {
      icon: ['far', 'user'],
    },
  },
  rightButtons: [
    { icon: ['far', 'eye'], onPress: () => console.log('user') },
    { icon: ['far', 'question-circle'], onPress: () => console.log('bell') },
  ],
};

export const WebViewForm = Template.bind({});
WebViewForm.args = {
  leftButtons: [{ icon: 'times', onPress: () => console.log('onPress') }],
  menuProps: {
    items: [
      {
        icon: ['fas', 'share-nodes'],
        onPress: () => console.log('onPress'),
        title: 'Compartilhar',
      },
      {
        icon: ['far', 'copy'],
        onPress: () => console.log('onPress'),
        title: 'Copiar link',
      },
      {
        icon: ['far', 'window-maximize'],
        onPress: () => console.log('onPress'),
        title: 'Abrir no navegador',
      },
    ],
    triggerIconProps: {
      icon: ['fas', 'ellipsis'],
    },
  },

  subtitle: (
    <HStack alignItems="center" space={1}>
      <FontAwesomeIcon color="#00AD8E" icon="lock" size={14} />
      Page Subtitle
    </HStack>
  ),
  title: 'Page Title',
};
