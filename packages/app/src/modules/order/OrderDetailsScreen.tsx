import { useCallback, useEffect, useState } from 'react';
import { ListRenderItem } from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { Button, Center, FlatList, HStack, Icon, Text, VStack, formatCurrency, formatDate } from '@workspace/ui';

import { AppScreen } from '@workspace/ui/src/common/AppScreen';

import { NavigationScreenProps } from '../../router/type';

import useKeyExtractor from '../common/useKeyExtractor';

import { ProductCard } from '../product/ProductCard';

import {
  OrderDetailsScreenQuery,
  OrderDetailsScreenQueryResponse,
} from './__generated__/OrderDetailsScreenQuery.graphql';
import { parseOrderStatus } from './utils';

export const OrderDetailsScreen = ({ navigation, route }: NavigationScreenProps<'OrderDetails'>) => {
  const { orderId } = route.params;
  const [fetchKey, setFetchKey] = useState('');

  const data = useLazyLoadQuery<OrderDetailsScreenQuery>(
    graphql`
      query OrderDetailsScreenQuery($orderId: ID!) {
        order: node(id: $orderId) {
          ... on Order {
            id
            createdAt
            total
            products {
              id
              name
              quantity
              price
            }
            status
          }
        }
      }
    `,
    {
      orderId,
    },
    {
      fetchKey,
      fetchPolicy: 'store-and-network',
    },
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFetchKey(Date.now().toString());
    }, 4000);

    return () => clearInterval(interval);
  });

  const { label: statusLabel } = parseOrderStatus(data.order!.status!);

  const keyExtractor = useKeyExtractor();
  const renderItem = useCallback<
    ListRenderItem<NonNullable<NonNullable<OrderDetailsScreenQueryResponse['order']>['products']>[number]>
  >(({ item }) => {
    return (
      <ProductCard
        title={item?.name ?? ''}
        subtitle={
          item?.price && item.quantity
            ? `${formatCurrency(item.price)} - Total: ${formatCurrency(item.price * item.quantity)}`
            : undefined
        }
        rightComponent={
          <Button flex={1}>
            <Center flex={1}>
              <Text fontSize={16} color="white">
                {item?.quantity}
              </Text>
            </Center>
          </Button>
        }
      />
    );
  }, []);

  return (
    <>
      <AppScreen
        header={{
          title: `Pedido - ${data.order?.createdAt && formatDate(data.order?.createdAt)}`,
          onBack: () => navigation.navigate('Home'),
        }}
      >
        <VStack space="2">
          <VStack space="2">
            <Text variant="h6" mb="6">
              Status do pedido: {statusLabel}
            </Text>
            <HStack alignItems="center" space="2">
              <Icon icon="store" size={20} color="primary.400" />
              <Text fontWeight="bold" variant="h6">
                Produtos
              </Text>
            </HStack>
            <FlatList
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              data={data.order?.products}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<VStack h="400px" />}
            />
          </VStack>
        </VStack>
      </AppScreen>
      <Center
        borderTopColor="gray.200"
        borderTopWidth={1}
        px="4"
        py="5"
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
        <Text variant="body2Bold">Total do pedido: {data.order?.total ? formatCurrency(data.order.total) : ''}</Text>
      </Center>
    </>
  );
};
