import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type NavigationScreenProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

export type RootStackParamList = {
  App: undefined;
  OrderDetails: {
    orderId: string;
  };
  Home: undefined;
  Cart: undefined;
  ProductList: { storeId: string };
  OrderList: undefined;
};
