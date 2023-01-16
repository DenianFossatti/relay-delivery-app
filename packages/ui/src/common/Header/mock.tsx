import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { HStack } from '../HStack';

import { HeaderProps } from './';

type headerVariants =
  | 'CenteredLogo'
  | 'Title'
  | 'TitleAndSubtitle'
  | 'CustomSubtitleComponent'
  | 'leftButtons'
  | 'rightButtons'
  | 'menuProps'
  | 'NewsFeed'
  | 'WebViewForm';

export const mockHeaderRightButons: HeaderProps['rightButtons'] = [
  {
    accessibilityLabel: 'Ajuda',
    icon: ['far', 'question-circle'],
    onPress: () => console.log('ajuda'),
  },
];

export const mockHeader: Record<headerVariants, HeaderProps> = {
  CenteredLogo: {
    logoCenter: true,
  },
  CustomSubtitleComponent: {
    subtitle: (
      <HStack alignItems="center" space={1}>
        <FontAwesomeIcon color="#00AD8E" icon="lock" size={14} />
        Page Subtitle
      </HStack>
    ),
    title: 'Page Title',
  },
  NewsFeed: {
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
      {
        accessibilityLabel: 'User',
        icon: ['far', 'eye'],
        onPress: () => console.log('user'),
      },
      {
        accessibilityLabel: 'Question',
        icon: ['far', 'question-circle'],
        onPress: () => console.log('bell'),
      },
    ],
  },
  Title: {
    title: 'Page Title',
  },
  TitleAndSubtitle: {
    subtitle: 'Page Subtitle',
    title: 'Page Title',
  },
  WebViewForm: {
    leftButtons: [
      {
        accessibilityLabel: 'WebView',
        icon: 'times',
        onPress: () => console.log('onPress'),
      },
    ],
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
  },
  leftButtons: {
    leftButtons: [
      {
        accessibilityLabel: 'User',
        icon: 'times',
        onPress: () => console.log('onPress'),
      },
      {
        accessibilityLabel: 'User',
        icon: 'home',
        onPress: () => console.log('onPress'),
      },
    ],
    title: 'Page Title',
  },
  menuProps: {
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
    },
    rightButtons: [
      {
        accessibilityLabel: 'User',
        icon: 'times',
        onPress: () => console.log('onPress'),
      },
    ],
    title: 'Page Title',
  },
  rightButtons: {
    rightButtons: [
      {
        accessibilityLabel: 'User',
        icon: 'times',
        onPress: () => console.log('onPress'),
      },
      {
        accessibilityLabel: 'User',
        icon: 'home',
        onPress: () => console.log('onPress'),
      },
    ],
    title: 'Page Title',
  },
};
