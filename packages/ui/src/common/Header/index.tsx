import { Box, HStack, VStack } from 'native-base';
import { memo } from 'react';

import { Icon } from '../Icon';
import { IconButton, IconButtonProps } from '../IconButton';
import { Menu, MenuProps } from '../Menu';
import { Pressable } from '../Pressable';
import { Text } from '../Text';

type RightButtonText = {
  icon?: string;
  onPress: () => void;
  text: string;
};

export type HeaderProps = {
  leftButtons?: IconButtonProps[];
  logo?: boolean;
  logoCenter?: boolean;
  menuProps?: MenuProps;
  onBack?: () => void;
  onClose?: () => void;
  onHelp?: () => void;
  rightButtonText?: RightButtonText;
  rightButtons?: IconButtonProps[];
  subtitle?: string | React.ReactNode;
  testID?: string;
  title?: string | React.ReactNode;
};

const Component = ({
  leftButtons,
  logo = true,
  logoCenter,
  menuProps,
  onBack,
  onClose,
  onHelp,
  rightButtons,
  rightButtonText,
  subtitle,
  testID = 'Header',
  title,
}: HeaderProps) => {
  return (
    <HStack alignItems="center" h="56px" pb={1} px="1" space={3} testID={testID}>
      <HStack alignItems="center" flex={logoCenter ? 1 : 2} justifyContent="flex-start" space={1}>
        {onBack && (
          <IconButton
            accessibilityLabel="Voltar"
            icon="chevron-left"
            iconColor="darkText"
            onPress={onBack}
            size={16}
            testID={`${testID}_onBack`}
          />
        )}
        {leftButtons?.map(({ accessibilityLabel, icon, onPress, size = 18 }, index) => (
          <IconButton
            // eslint-disable-next-line react/no-array-index-key
            key={`leftButtons_${index}`}
            accessibilityLabel={accessibilityLabel}
            color="darkText"
            icon={icon}
            iconColor="darkText"
            onPress={onPress}
            size={size}
            testID={`${testID}_leftButton_${index}`}
          />
        ))}
        {!!title && (
          <VStack ml={onBack ? 0 : leftButtons ? 2 : 8}>
            <Text ml={onBack && !subtitle ? 2 : 3} testID={`${testID}_title`} variant={subtitle ? 'subtitle' : 'title'}>
              {title}
            </Text>
            {!!subtitle && (
              <Box ml={3}>
                {typeof subtitle === 'string' ? (
                  <Text fontSize={12} numberOfLines={1} testID={`${testID}_subtitle`}>
                    {subtitle}
                  </Text>
                ) : (
                  subtitle
                )}
              </Box>
            )}
          </VStack>
        )}
      </HStack>

      <HStack flex={1} justifyContent="flex-end" space={1}>
        {rightButtons?.map(({ accessibilityLabel, icon, onPress, size = 18 }, index) => (
          <IconButton
            // eslint-disable-next-line react/no-array-index-key
            key={`rightButtons_${index}`}
            accessibilityLabel={accessibilityLabel}
            color="darkText"
            icon={icon}
            iconColor="darkText"
            onPress={onPress}
            size={size}
            testID={`${testID}_rightButton_${index}`}
          />
        ))}
        {menuProps && <Menu {...menuProps} testID={`${testID}_menu`} />}

        {onHelp && (
          <IconButton
            accessibilityLabel="Ajuda"
            color="darkText"
            icon={['far', 'question-circle']}
            iconColor="darkText"
            onPress={onHelp}
            size={18}
            testID={`${testID}_onHelp`}
          />
        )}

        {rightButtonText && (
          <Pressable mr={2} onPress={rightButtonText.onPress} testID={`${testID}_rightButtonText`}>
            <HStack alignItems="center" justifyContent="center" space={1}>
              <Text testID={`${testID}_rightButtonText`} variant="subtitle">
                {rightButtonText.text}
              </Text>
              <Icon color="darkText" icon="chevron-right" size={14} testID={`${testID}_rightButtonText`} />
            </HStack>
          </Pressable>
        )}

        {onClose && (
          <IconButton
            accessibilityLabel="Fechar"
            color="darkText"
            icon="times"
            iconColor="darkText"
            onPress={onClose}
            size={22}
            testID={`${testID}_onClose`}
          />
        )}
      </HStack>
    </HStack>
  );
};

export const Header = memo(Component);
