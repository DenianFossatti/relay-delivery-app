import 'react-native-gesture-handler';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StatusBar } from 'react-native';
import { RelayEnvironmentProvider } from 'react-relay';

import { createRelayEnvironment } from '@workspace/relay';
import { ErrorBoundary, ModalProvider, ThemeProvider } from '@workspace/ui';

import { AUTH_KEY } from './common/config';
import i18n from './i18n';
import Router from './router/Router';

import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/pt';
import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-numberformat/locale-data/pt';

library.add(fab, fas, far);

const App = () => {
  const [relayEnvironment, setRelayEnvironment] = useState(createRelayEnvironment());

  const resetRelayEnvironment = useCallback(() => {
    setRelayEnvironment(createRelayEnvironment());
  }, []);

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <ErrorBoundary authKey={AUTH_KEY} resetRelayEnvironment={resetRelayEnvironment}>
            <ModalProvider>
              <Router resetRelayEnvironment={resetRelayEnvironment} />
            </ModalProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </I18nextProvider>
    </RelayEnvironmentProvider>
  );
};

export default App;
