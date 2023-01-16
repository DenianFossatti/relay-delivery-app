import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { ListRenderItem } from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { FlatList, HStack, Icon, Pressable, Text, VStack } from '@workspace/ui';

import { AppScreen } from '@workspace/ui/src/common/AppScreen';

import useKeyExtractor from '../common/useKeyExtractor';

import { HomeScreenQuery } from './__generated__/HomeScreenQuery.graphql';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const data = useLazyLoadQuery<HomeScreenQuery>(
    graphql`
      query HomeScreenQuery {
        me {
          name
        }
        stores {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    {},
  );

  const keyExtractor = useKeyExtractor();
  const renderItem = useCallback<ListRenderItem<typeof data.stores.edges[number]>>(
    ({ item }) => {
      return (
        <Pressable
          onPress={() =>
            navigation.navigate('ProductList', {
              storeId: item?.node?.id,
            })
          }
          p="4"
          minH="100px"
          borderWidth={1}
          justifyContent="center"
          borderColor="gray.200"
          borderRadius="lg"
        >
          <VStack justifyContent="center" space="2">
            <Text variant="h6">{item?.node?.name}</Text>
            <HStack space="1">
              <Text>Avaliação:</Text>
              <Icon icon="star" size={20} color="primary.400" />
              <Icon icon="star" size={20} color="primary.400" />
              <Icon icon="star" size={20} color="primary.400" />
              <Icon icon="star" size={20} color="primary.400" />
              <Icon icon="star" size={20} color="gray.100" />
            </HStack>
          </VStack>
        </Pressable>
      );
    },
    [navigation],
  );

  return (
    <AppScreen>
      <VStack space="2">
        <VStack>
          <Text variant="h4">Bem vindo,</Text>
          <Text variant="h4">{data?.me?.name}</Text>
        </VStack>
        <VStack py="3" space="2">
          <HStack mb="3" alignItems="center" space="2">
            <Icon icon="store" size={20} color="primary.400" />
            <Text fontWeight="bold" variant="h6">
              Restaurantes em destaque
            </Text>
          </HStack>
          <FlatList keyExtractor={keyExtractor} renderItem={renderItem} data={data.stores.edges} />
        </VStack>
      </VStack>
    </AppScreen>
  );
};
