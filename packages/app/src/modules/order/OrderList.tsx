import { useCallback, useEffect, useState } from 'react';
import { ListRenderItem } from 'react-native';

import { graphql, useLazyLoadQuery } from 'react-relay';

import { FlatList, HStack, Icon, Pressable, Text, VStack, formatCurrency, formatDate } from '@workspace/ui';

import { AppScreen } from '@workspace/ui/src/common/AppScreen';

import { NavigationScreenProps } from '../../router/type';

import useKeyExtractor from '../common/useKeyExtractor';

import { OrderListScreenQuery, OrderListScreenQueryResponse } from './__generated__/OrderListScreenQuery.graphql';
import { parseOrderStatus } from './utils';

export const OrderList = ({ navigation, route }: NavigationScreenProps<'Cart'>) => {
  const [fetchKey, setFetchKey] = useState('');

  const data = useLazyLoadQuery<OrderListScreenQuery>(
    graphql`
      query OrderListScreenQuery {
        orders {
          edges {
            node {
              id
              total
              createdAt
              store {
                name
              }
              status
            }
          }
        }
      }
    `,
    {},
    { fetchKey, fetchPolicy: 'store-and-network' },
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFetchKey(Date.now().toString());
    }, 4000);

    return () => clearInterval(interval);
  });

  const renderItem = useCallback<ListRenderItem<OrderListScreenQueryResponse['orders']['edges'][number]>>(
    ({ item }) => {
      const { label: statusLabel } = parseOrderStatus(item!.node!.status!);

      return (
        <Pressable
          mb="4"
          justifyContent="center"
          p="4"
          minH="100px"
          borderWidth={1}
          borderColor="gray.200"
          borderRadius="lg"
          onPress={() =>
            navigation.navigate('OrderDetails', {
              orderId: item!.node!.id,
            })
          }
        >
          <HStack justifyContent="center">
            <VStack flex={5} space="1">
              <Text variant="body2">{item?.node?.store?.name}</Text>
              <Text variant="body">Data do pedido: {item?.node?.createdAt && formatDate(item?.node?.createdAt)}</Text>
              <Text variant="body">Total: {item?.node?.total && formatCurrency(item?.node?.total)}</Text>
              <Text variant="body">Status: {statusLabel}</Text>
            </VStack>
          </HStack>
        </Pressable>
      );
    },
    [navigation],
  );

  const keyExtractor = useKeyExtractor();

  return (
    <AppScreen
      header={{
        title: 'Pedidos',
      }}
    >
      <VStack space="2">
        <VStack space="2">
          <HStack alignItems="center" space="2">
            <Icon icon="store" size={20} color="primary.400" />
            <Text fontWeight="bold" variant="h6">
              Meus Pedidos
            </Text>
          </HStack>
          <FlatList
            ListFooterComponent={<VStack h="300px" />}
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={data.orders.edges}
          />
        </VStack>
      </VStack>
    </AppScreen>
  );
};
