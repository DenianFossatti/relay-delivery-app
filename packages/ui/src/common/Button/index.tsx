import { IButtonProps as INBButtonProps, Button as NBButton } from 'native-base';
import { ForwardRefRenderFunction, forwardRef, memo } from 'react';

import { assignTestId } from '../../tests/assignTestId';
import { BoxProps } from '../Box';

export type ButtonColorType = 'primary' | 'secondary' | 'danger' | 'warning' | 'support' | 'neutral';
export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonProps = {
  accessibilityLabel?: string;
  boxProps?: BoxProps;
  colorScheme?: ButtonColorType;
  size?: ButtonSizeType;
  variant?: 'boxed' | 'solid';
} & Omit<INBButtonProps, 'size' | 'variant' | 'colorScheme'>;

const Component: ForwardRefRenderFunction<INBButtonProps, ButtonProps> = (
  {
    _disabled,
    _hover,
    _loading,
    _pressed,
    _text,
    colorScheme = 'primary',
    isDisabled,
    isLoading,
    size,
    testID = 'Button',
    ...rest
  },
  ref,
) => {
  const colorSchemeWithDarkText: ButtonColorType[] = ['primary', 'neutral'];

  const bgColorMap: { [key in ButtonColorType | 'disabled']: string } = {
    danger: 'error.400',
    disabled: 'gray.400',
    neutral: 'white',
    primary: 'primary.400',
    secondary: 'secondary.400',
    support: 'support.400',
    warning: 'warning.400',
  };

  const bgColor = isDisabled || isLoading ? bgColorMap.disabled : bgColorMap[colorScheme] ?? undefined;
  const textColor = colorSchemeWithDarkText.includes(colorScheme) ? 'darkText' : 'lightText';
  const sizes: Record<ButtonSizeType, Omit<ButtonProps, 'accessibilityLabel'> | undefined> = {
    lg: { py: '12px' },
    md: { py: '7px' },
    sm: { py: '2px' },
    xs: { py: '0px' },
  };

  const ButtonDefaultProps: INBButtonProps = {
    _disabled: {
      opacity: 1,
      ..._disabled,
    },
    _hover: {
      opacity: 0.9,
      ..._hover,
    },
    _loading: {
      opacity: 1,
      ..._loading,
    },
    _pressed: {
      opacity: 0.7,
      ..._pressed,
    },
    _text: {
      color: isDisabled || isLoading ? 'gray.700' : textColor,
      fontWeight: 'bold',
      lineHeight: 17,
      textTransform: 'uppercase',
      ..._text,
    },
    bgColor,
    borderColor: colorScheme === 'neutral' ? 'gray.400' : 'transparent',
    borderRadius: 'lg',
    borderWidth: 1,
    ...(size && sizes[size]),
  };

  return (
    <NBButton
      colorScheme={colorScheme}
      isDisabled={isDisabled}
      isLoading={isLoading}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      {...assignTestId('Button', testID)}
      {...ButtonDefaultProps}
      {...rest}
    />
  );
};

export const Button = memo(forwardRef(Component));
