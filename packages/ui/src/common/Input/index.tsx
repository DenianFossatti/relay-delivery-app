import { Box, FormControl, IInputProps as Props, Input as TextInput, useTheme } from 'native-base';
import { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, NativeSyntheticEvent, TextInputChangeEventData, ViewProps } from 'react-native';

import { assignTestId } from '../../tests/assignTestId';
import { IconButton } from '../IconButton';
import { Text } from '../Text';

import { InputVariant, InputVariantType } from './variant';

export type InputProps = Omit<Props, 'variant'> & {
  InputComponent?: React.ElementType;
  InputRightElement?: JSX.Element | JSX.Element[];
  accessibilityLabel?: string;
  helperText?: string;
  label?: string;
  testID?: string;
  variant?: InputVariantType;
};

const Component = (
  {
    helperText,
    InputRightElement,
    isDisabled,
    isInvalid,
    isRequired,
    keyboardType,
    label,
    maxLength,
    onChange,
    onChangeText,
    testID = 'Input',
    value = '',
    variant = 'text',
    ...props
  }: InputProps,
  ref?: any,
) => {
  const [active, setActive] = useState(false);
  const [valueControled, setValueControled] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  const activeValue = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();
  const _variant = InputVariant[variant];

  const scaleAnim = useCallback(() => {
    Animated.spring(activeValue, {
      speed: 15,
      toValue: valueControled.length || active ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [active, activeValue, valueControled.length]);

  useEffect(() => {
    scaleAnim();
  }, [scaleAnim]);

  const AnimatedLabel = useMemo(() => Animated.createAnimatedComponent(FormControl.Label), []);

  const animatedStyles: Animated.Animated & Animated.AnimatedProps<ViewProps> = useMemo(
    () => ({
      top: activeValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['50%', '0%'],
      }),
      transform: [
        {
          scale: activeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.8],
          }),
        },
        {
          translateY: -12,
        },
        {
          translateX: activeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -10],
          }),
        },
      ],
    }),
    [activeValue],
  );

  const inputBorderColor = useMemo(() => {
    if (isInvalid) return colors.error[400];
    return valueControled.length ? colors.primary[400] : colors.gray[400];
  }, [colors.error, colors.gray, colors.primary, isInvalid, valueControled.length]);

  const onBlur = useCallback(() => {
    if (valueControled) return;
    setActive(false);
  }, [valueControled]);
  const onFocus = useCallback(() => {
    if (valueControled) return;
    setActive(true);
  }, [valueControled]);

  const _onChange = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const value = e.nativeEvent.text;
      setValueControled(value);
      onChange?.(e);
      onChangeText?.(value);
    },
    [onChange, onChangeText],
  );
  const _onChangeText = useCallback(
    (text: string) => {
      const value = text;
      setValueControled(value);
      onChangeText?.(value);
    },
    [onChangeText],
  );

  return (
    <Box h="66px">
      <Box position="relative">
        <AnimatedLabel
          _text={{
            color: isDisabled ? 'gray.400' : isInvalid ? 'error.400' : 'darkText',
          }}
          backgroundColor="white"
          fontSize="12px"
          fontWeight={400}
          importantForAccessibility="no-hide-descendants"
          isRequired={isRequired}
          left="10px"
          margin="0"
          pointerEvents="none"
          position="absolute"
          px="2"
          style={animatedStyles}
          zIndex={1}
          {...assignTestId('Text', `${testID}_label`)}
        >
          {label}
        </AnimatedLabel>

        <TextInput
          {...props}
          _focus={{
            borderColor: inputBorderColor,
          }}
          _hover={{
            borderColor: inputBorderColor,
          }}
          backgroundColor="white"
          borderColor={inputBorderColor}
          borderWidth={2}
          color="darkText"
          fontSize="16px"
          fontWeight={500}
          InputRightElement={
            variant === 'password' && !InputRightElement ? (
              <IconButton
                accessibilityLabel={showPassword ? 'Esconder senha' : 'Exibir senha'}
                icon={showPassword ? 'eye' : 'eye-slash'}
                iconColor="gray.700"
                onPress={() => setShowPassword(!showPassword)}
                testID={`${testID}_securePassword`}
              />
            ) : (
              InputRightElement
            )
          }
          isDisabled={isDisabled}
          keyboardType={keyboardType || _variant?.keyboardType}
          maxLength={maxLength || _variant?.length}
          onBlur={onBlur}
          onChange={_onChange}
          onChangeText={_onChangeText}
          onFocus={onFocus}
          px="4"
          py="3"
          ref={ref}
          type={variant === 'password' && !showPassword ? 'password' : 'text'}
          value={valueControled}
          {...assignTestId('TextInput', testID)}
        />
      </Box>
      {!!helperText && (
        <Text color={isInvalid ? 'error.400' : 'darkText'} fontSize="xs" ml="16px" testID={`${testID}_helper`}>
          {helperText}
        </Text>
      )}
    </Box>
  );
};

export const Input = memo(forwardRef(Component));
