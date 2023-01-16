import { useCallback, useEffect, useState } from 'react';
import { ListRenderItem } from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { Button, Center, FlatList, HStack, Icon, Text, VStack, formatCurrency, useModal } from '@workspace/ui';

import { AppScreen } from '@workspace/ui/src/common/AppScreen';

import { NavigationScreenProps } from '../../router/type';
import { useCart, useCartType } from '../order/useCart';
import useKeyExtractor from '../common/useKeyExtractor';

import { ProductListScreenQuery } from './__generated__/ProductListScreenQuery.graphql';
import { ProductCard } from './ProductCard';

export const ProductListScreen = ({ navigation, route }: NavigationScreenProps<'ProductList'>) => {
  const { storeId } = route.params;
  const { open: showModal, isOpen: isCartModalOpen } = useModal();
  const [addOrUpdateProduct, removeProduct, setStoreId, resetCart, products, zustandStoreId, getProductById] = useCart(
    (s) => [s.addOrUpdateProduct, s.removeProduct, s.setStoreId, s.resetStore, s.products, s.storeId, s.getProductById],
  );
  const [currentProduct, setCurrentProduct] = useState<Partial<useCartType['products'][number]> | undefined>();

  const data = useLazyLoadQuery<ProductListScreenQuery>(
    graphql`
      query ProductListScreenQuery($storeId: ID!) {
        store: node(id: $storeId) {
          ... on Store {
            id
            name
          }
        }
        products {
          edges {
            node {
              id
              name
              price
            }
          }
        }
      }
    `,
    {
      storeId,
    },
  );

  const [quantity, setQuantity] = useState(1);
  const changeQuantity = useCallback(
    (num: number) => {
      const newValue = quantity + num < 0 ? 0 : quantity + num;

      setQuantity(newValue);
    },
    [quantity],
  );

  const openCartModal = useCallback(() => {
    showModal?.({
      header: {
        title: 'Adicionar ao carrinho',
        icon: {
          icon: 'cart-arrow-down',
        },
      },
      children: (
        <VStack space="3">
          <HStack space="1">
            <Button onPress={() => changeQuantity(-1)} flex={1}>
              <Icon icon="minus" size={20} color="white" />
            </Button>
            <Center flex={5} borderColor="gray.200" borderRadius="lg" borderWidth={1}>
              <Text>{quantity}</Text>
            </Center>
            <Button onPress={() => changeQuantity(1)} flex={1}>
              <Icon icon="plus" size={20} color="white" />
            </Button>
          </HStack>
          <Text mb="3" variant="body">
            Selecione a quantidade desejada e confirme para adicionar ao carrinho.
          </Text>
        </VStack>
      ),
      footerButton: {
        onConfirm: () => {
          const { id, name, price } = currentProduct || {};

          if (!id || !name || !price) return;

          addOrUpdateProduct({
            id,
            name,
            price,
            quantity,
          });
        },
        onCancelText: 'Cancelar',
        onConfirmText: 'Adicionar ao carrinho',
      },
    });
  }, [addOrUpdateProduct, changeQuantity, currentProduct, quantity, showModal]);

  useEffect(() => {
    setStoreId(storeId);
  }, [setStoreId, storeId]);

  useEffect(() => {
    if (isCartModalOpen && quantity > 0) openCartModal();
    if (!isCartModalOpen) {
      setQuantity(1);
      setCurrentProduct(undefined);
    }

    () => resetCart();
  }, [isCartModalOpen, openCartModal, quantity, resetCart]);

  const keyExtractor = useKeyExtractor();
  const renderItem = useCallback<ListRenderItem<typeof data.products.edges[number]>>(
    ({ item }) => {
      const stateProduct = getProductById(item?.node?.id);

      return (
        <ProductCard
          title={item?.node?.name ?? ''}
          subtitle={item?.node?.price ? formatCurrency(item.node.price) : undefined}
          rightComponent={
            <Button
              flex={1}
              onPress={() => {
                if (!item?.node?.id || !item?.node.name || !item.node.price) return;

                const stateProduct = getProductById(item?.node?.id);

                if (stateProduct?.quantity) setQuantity(stateProduct?.quantity);

                setCurrentProduct({
                  id: item.node.id,
                  name: item.node.name,
                  price: item.node.price,
                });
                openCartModal();
              }}
            >
              <Center flex={1}>
                {stateProduct?.quantity ? (
                  <Text fontSize={16} color="white">
                    {stateProduct.quantity}
                  </Text>
                ) : (
                  <Icon icon="plus" size={20} color="white" />
                )}
              </Center>
            </Button>
          }
        />
      );
    },
    [getProductById, openCartModal],
  );

  return (
    <>
      <AppScreen
        header={{
          title: data.store?.name,
          onBack: () => {
            resetCart();
            navigation.goBack();
          },
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
            <FlatList
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              data={data.products.edges}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<VStack h="400px" />}
            />
          </VStack>
        </VStack>
      </AppScreen>
      {products.length > 0 && (
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
          <Button w="100%" size="lg" onPress={() => navigation.navigate('Cart')}>
            Ir para o carrinho
          </Button>
        </Center>
      )}
    </>
  );
};
