import { useNavigation } from '@react-navigation/native';
import React, { Suspense, useCallback, useMemo } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { assignTestId } from '../../tests/assignTestId';
import { AppLoading } from '../AppLoading';

import { Box } from '../Box';

import { Header, HeaderProps } from '../Header';

import { SafeAreaView } from '../SafeAreaView';
import { ScrollView } from '../ScrollView';

export type AppScreenProps = {
  children?: React.ReactNode;
  container?: boolean;
  header?: HeaderProps;
  keyboardScreen?: boolean;
  loading?: boolean;
  onBack?: boolean;
  scroll?: boolean;
  testID?: string;
};

export function AppScreen({
  children,
  container = true,
  header,
  keyboardScreen,
  loading,
  onBack = true,
  scroll,
  testID = 'AppScreen',
}: AppScreenProps) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const customHeader = useCallback(() => {
    return {
      onBack: onBack && navigation.canGoBack() ? () => navigation.goBack() : undefined,
      ...header,
    } as HeaderProps;
  }, [header, navigation, onBack]);

  const WrapperComponent = useCallback(
    ({ children }) => {
      if (keyboardScreen) {
        return (
          <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              keyboardVerticalOffset={insets.top + 75}
              style={{ flex: 1 }}
            >
              {children}
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        );
      }

      if (scroll) {
        return (
          <ScrollView bg="background" showsVerticalScrollIndicator={false} {...assignTestId('ScrollView', testID)}>
            {children}
          </ScrollView>
        );
      }

      return children;
    },
    [insets.top, keyboardScreen, scroll, testID],
  );

  const renderChildren = useMemo(() => (loading ? <AppLoading /> : children), [loading, children]);

  return (
    <SafeAreaView {...assignTestId('View', testID)}>
      <Suspense fallback={<AppLoading />}>
        <Box flex={1} pb={keyboardScreen ? '4' : 0}>
          {header && <Header {...customHeader()} />}
          <Box flex={1} px={container ? '4' : 0}>
            <WrapperComponent>{renderChildren}</WrapperComponent>
          </Box>
        </Box>
      </Suspense>
    </SafeAreaView>
  );
}
