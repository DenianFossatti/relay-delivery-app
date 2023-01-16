import { connectionArgs } from '@entria/graphql-mongo-helpers';
import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { nodeField, nodesField } from '../modules/node/typeRegister';
import OrderFiltersInputType from '../modules/order/filters/OrderFiltersInputType';
import * as OrderLoader from '../modules/order/OrderLoader';
import { OrderConnection } from '../modules/order/OrderType';
import ProductFiltersInputType from '../modules/product/filters/ProductFiltersInputType';
import * as ProductLoader from '../modules/product/ProductLoader';
import { ProductConnection } from '../modules/product/ProductType';

import StoreFiltersInputType from '../modules/store/filters/StoreFiltersInputType';
import * as StoreLoader from '../modules/store/StoreLoader';
import { StoreConnection } from '../modules/store/StoreType';
import * as UserLoader from '../modules/user/UserLoader';
import UserType from '../modules/user/UserType';
import { GraphQLContext } from '../types';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries.',
  fields: () => ({
    id: globalIdField('Query'),
    node: nodeField,
    nodes: nodesField,

    me: {
      type: UserType,
      description: 'Me is the logged User.',
      resolve: (_obj, _args, context: GraphQLContext) => UserLoader.load(context, context.user && context.user.id),
    },

    orders: {
      type: GraphQLNonNull(OrderConnection.connectionType),
      description: 'Connection to all orders.',
      args: {
        ...connectionArgs,
        filters: {
          type: OrderFiltersInputType,
        },
      },
      resolve: (_obj, args, context: GraphQLContext) => OrderLoader.loadAll(context, args),
    },

    stores: {
      type: GraphQLNonNull(StoreConnection.connectionType),
      description: 'Connection to all stores.',
      args: {
        ...connectionArgs,
        filters: {
          type: StoreFiltersInputType,
        },
      },
      resolve: (_obj, args, context: GraphQLContext) => StoreLoader.loadAll(context, args),
    },

    products: {
      type: GraphQLNonNull(ProductConnection.connectionType),
      description: 'Connection to all products.',
      args: {
        ...connectionArgs,
        filters: {
          type: ProductFiltersInputType,
        },
      },
      resolve: (_obj, args, context) => ProductLoader.loadAll(context, args),
    },
  }),
});

export default QueryType;
