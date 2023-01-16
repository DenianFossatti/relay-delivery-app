import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { ReactNode, Suspense } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@workspace/ui';

import { AppLoading } from '@workspace/ui/src/common/AppLoading';

import { HomeScreen } from '../modules/home/HomeScreen';
import { CartScreen } from '../modules/order/CartScreen';
import { OrderDetailsScreen } from '../modules/order/OrderDetailsScreen';
import { OrderList } from '../modules/order/OrderList';
import { ProductListScreen } from '../modules/product/ProductListScreen';

import { RootStackParamList } from './type';

const Tab = createBottomTabNavigator();

const SuspenseWrapper =
  (Component: () => JSX.Element, FallbackComponent: ReactNode = <AppLoading />) =>
  ({ navigation, route }: any) => {
    return (
      <Suspense fallback={FallbackComponent}>
        <Component navigation={navigation} route={route} />
      </Suspense>
    );
  };

const AppTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = 'ios-home-outline';
          } else if (route.name === 'OrderList') {
            iconName = 'ios-file-tray-full-outline';
          }

          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary['400'],
        inactiveTintColor: theme.colors.primary['100'],
        showLabel: false,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Home" component={SuspenseWrapper(HomeScreen)} />
      <Tab.Screen name="OrderList" component={SuspenseWrapper(OrderList)} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitle: '', headerShown: false }} mode="modal">
      <Stack.Screen name="App" component={AppTabs} />
      <Stack.Screen name="ProductList" component={SuspenseWrapper(ProductListScreen)} />
      <Stack.Screen name="Cart" component={SuspenseWrapper(CartScreen)} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <Stack.Screen name="OrderList" component={SuspenseWrapper(OrderList)} />
    </Stack.Navigator>
  );
};

export default App;
