import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';

import { InvalidSessionError, UnavailableServiceError } from '@workspace/relay';

import { Text } from './Text';
import { VStack } from './VStack';

interface IState {
  error: Error | InvalidSessionError | UnavailableServiceError | null;
}

interface IErrorBoundaryProps {
  children: React.ReactNode;
  authKey: string;
  resetRelayEnvironment(): void;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps> {
  state: IState = { error: null };

  async componentDidCatch(error: Error) {
    const { authKey, resetRelayEnvironment } = this.props;

    this.setState({ error });

    if (error instanceof InvalidSessionError) {
      await AsyncStorage.removeItem(authKey);
      resetRelayEnvironment();
      this.setState({ error: null });
    }
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <VStack space="5" alignItems="center" justifyContent="center" flex={1}>
          <Text variant="h3" fontWeight="bold" textAlign="center">
            Oops, an error occurred. Try again later
          </Text>
          <Text color="darkText" textAlign="center">
            Error: {error.message}
          </Text>
        </VStack>
      );
    }

    return children;
  }
}
