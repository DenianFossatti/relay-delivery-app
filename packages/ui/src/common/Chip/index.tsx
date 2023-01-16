import { ColorSchemeType } from 'native-base/src/components/types';
import React, { memo } from 'react';

import { Pressable, PressableProps } from '../Pressable';
import { Text } from '../Text';

export type ChipProps = {
  border?: ColorSchemeType;
  color?: ColorSchemeType;
  id: string;
  isSelected?: boolean;
  label: string;
  onPress?: (id: string) => void;
  selectedBorder?: string;
  selectedColor?: string;
  testID?: string;
} & PressableProps;

const Component = ({
  border = 'secondary.400',
  color = 'gray.50',
  id,
  isSelected = false,
  label,
  onPress,
  selectedBorder = 'primary.600',
  selectedColor = 'primary.100',
  testID = 'Chips',
  ...props
}: ChipProps) => {
  return (
    <Pressable
      alignItems="center"
      alignSelf="flex-start"
      backgroundColor={isSelected ? selectedColor : color}
      borderColor={isSelected ? selectedBorder : border}
      borderRadius={50}
      borderWidth={1}
      onPress={() => onPress?.(id)}
      px="4"
      py="2"
      testID={testID}
      {...props}
    >
      <Text testID={testID} variant="body">
        {label}
      </Text>
    </Pressable>
  );
};

export const Chip = memo(Component);
