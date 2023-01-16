import { connectionDefinitions, timestampResolver } from '@entria/graphql-mongo-helpers';
import { GraphQLEnumType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { GraphQLContext } from '../../types';

import { nodeInterface, registerTypeLoader } from '../node/typeRegister';
import * as StoreLoader from '../store/StoreLoader';
import StoreType from '../store/StoreType';

import { load } from './OrderLoader';
import { IOrder, IOrderProduct } from './OrderModel';

export const OrderStatus = new GraphQLEnumType({
  name: 'OrderStatus',
  values: {
    CANCELLED: { value: 'CANCELLED' },
    DELIVERED: { value: 'DELIVERED' },
    PENDING: { value: 'PENDING' },
    ACCEPTED: { value: 'ACCEPTED' },
    SENT: { value: 'SENT' },
  },
});

const OrderProductType = new GraphQLObjectType<IOrderProduct, GraphQLContext>({
  name: 'OrderProducts',
  description: 'The products that this order has',
  fields: () => ({
    id: globalIdField('OrderProduct'),
    name: {
      type: GraphQLString,
      description: 'The product name. ex: Hambúrguer',
      resolve: (obj) => obj.name,
    },
    quantity: {
      type: GraphQLInt,
      description: 'The product order quantity. ex: 10',
      resolve: (obj) => obj.quantity,
    },
    price: {
      type: GraphQLInt,
      description: 'The product price. ex: 1000 (R$ 10,00)',
      resolve: (obj) => obj.price,
    },
  }),
});

const OrderType = new GraphQLObjectType<IOrder, GraphQLContext>({
  name: 'Order',
  description: 'Order data',
  fields: () => ({
    id: globalIdField('Order', (obj) => obj._id),
    // ...objectIdResolver,
    userId: {
      type: GraphQLString,
      description: 'The user id that made this order',
      resolve: (obj) => obj.userId,
    },
    total: {
      type: GraphQLInt,
      description: "The total amount of product's prices. ex: 1000 (R$ 10,00)",
      resolve: (obj) => obj.total,
    },
    products: {
      type: GraphQLNonNull(GraphQLList(OrderProductType)),
      description: 'The products that this order has',
    },
    store: {
      type: StoreType,
      description: 'The store that this order was made',
      resolve: async (obj, _args, context) => await StoreLoader.load(context, obj.storeId),
    },
    status: {
      type: OrderStatus,
      description: 'The order status. ex: pending, delivered, canceled',
      resolve: (obj) => obj.status,
    },
    ...timestampResolver,
  }),
  interfaces: () => [nodeInterface],
});

registerTypeLoader(OrderType, load);

export const OrderConnection = connectionDefinitions({
  name: 'Order',
  nodeType: OrderType,
});

export default OrderType;
