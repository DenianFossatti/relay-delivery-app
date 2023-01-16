import { useCallback, useEffect, useMemo } from 'react';
import { ListRenderItem } from 'react-native';

import { useMutation } from 'react-relay';

import { Button, Center, FlatList, HStack, Icon, Text, VStack, formatCurrency } from '@workspace/ui';

import { AppScreen } from '@workspace/ui/src/common/AppScreen';

import { NavigationScreenProps } from '../../router/type';

import { ProductCard } from '../product/ProductCard';

import { CreateOrderMutation } from './mutations/__generated__/CreateOrderMutation.graphql';
import { CreateOrder } from './mutations/CreateOrderMutation';
import { useCart } from './useCart';

export const CartScreen = ({ navigation, route }: NavigationScreenProps<'Cart'>) => {
  const [removeProduct, products, storeId, resetCart] = useCart((s) => [
    s.removeProduct,
    s.products,
    s.storeId,
    s.resetStore,
  ]);

  if (!products.length) {
    navigation.goBack();
  }

  const cartTotal = useMemo(
    () => formatCurrency(products.reduce((acc, { price, quantity }) => acc + price * quantity, 0)),
    [products],
  );

  const [createOrder] = useMutation<CreateOrderMutation>(CreateOrder);

  const handleFinishCheckout = useCallback(() => {
    createOrder({
      variables: {
        input: {
          storeId,
          products: products.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        },
      },
      onError: (err) => {
        console.log(err);
      },
      onCompleted: (response) => {
        console.log(response.CreateOrder);
        const { id: orderId } = response.CreateOrder?.orderEdge?.node ?? {};

        if (orderId) {
          navigation.navigate('OrderDetails', { orderId });
        }
      },
    });
  }, [createOrder, navigation, products, storeId]);

  useEffect(() => {
    return () => resetCart();
  }, [resetCart]);

  const renderItem = useCallback<ListRenderItem<typeof products[number]>>(
    ({ item }) => {
      return (
        <ProductCard
          title={`${item?.name} - ${item?.quantity} un.` ?? ''}
          subtitle={
            item?.price
              ? `${formatCurrency(item.price)} - Total: ${formatCurrency(item.price * item.quantity)}`
              : undefined
          }
          rightComponent={
            <Button colorScheme="neutral" flex={1} onPress={() => removeProduct(item.id)}>
              <Center flex={1}>
                <Icon icon="trash" size={20} color="error.500" />
              </Center>
            </Button>
          }
        />
      );
    },
    [removeProduct],
  );

  return (
    <>
      <AppScreen
        header={{
          title: 'Carrinho',
        }}
      >
        <VStack space="2">
          <VStack space="2">
            <HStack alignItems="center" space="2">
              <Icon icon="store" size={20} color="primary.400" />
              <Text fontWeight="bold" variant="h6">
                Produtos
              </Text>
            </HStack>
            <FlatList keyExtractor={({ id }) => id} renderItem={renderItem} data={products} />
          </VStack>
        </VStack>
      </AppScreen>
      <Center
        borderTopColor="gray.200"
        borderTopWidth={1}
        px="4"
        py="3"
        background="white"
        position="absolute"
        w="100%"
        right="0"
        bottom="0"
      >
        <Text variant="body" mb="2">
          Pagamento: No Local
        </Text>
        <Text textAlign="center" variant="body" mb="2">
          Endereço: Rua do Comércio, 999 - Centro, Frederico Westphalen - RS
        </Text>
        <Button
          w="100%"
          size="lg"
          onPress={handleFinishCheckout}
          // FIXME: Text breaking in two lines
          // eslint-disable-next-line react/no-children-prop
          children={`Finalizar pedido - ${cartTotal}`}
        />
      </Center>
    </>
  );
};
