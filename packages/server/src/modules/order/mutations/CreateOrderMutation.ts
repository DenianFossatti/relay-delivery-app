import { errorField, successField } from '@entria/graphql-mongo-helpers';
import { GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId, toGlobalId } from 'graphql-relay';
import mongoose from 'mongoose';

import { LoggedGraphQLContext, MutationField } from '../../../types';

import * as ProductLoader from '../../product/ProductLoader';
import * as OrderLoader from '../OrderLoader';
import OrderModel from '../OrderModel';
import { OrderConnection } from '../OrderType';

import CreateOrderMutationSchema from './validationSchemas/CreateOrderMutationSchema';

const OrderProductType = new GraphQLInputObjectType({
  name: 'OrderProduct',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'The global product id',
    },
    quantity: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'The quantity of the product',
    },
  }),
});

export interface CreateOrderArgs {
  storeId: string;
  products: {
    id: string;
    quantity: number;
  }[];
}

const mutation = mutationWithClientMutationId({
  name: 'CreateOrder',
  inputFields: {
    storeId: {
      type: GraphQLString,
      description: 'The global store id for the order',
    },
    products: {
      type: GraphQLNonNull(GraphQLList(OrderProductType)),
      description: 'The products to make the order',
    },
  },
  mutateAndGetPayload: async (args: CreateOrderArgs, context: LoggedGraphQLContext) => {
    const { user, t } = context;
    const { products, storeId } = args;

    const orderProducts = await Promise.all(
      products.map(({ id: productId }) => ProductLoader.load(context, fromGlobalId(productId).id)),
    );

    // Verify if all products are valid
    if (orderProducts.some((product) => product === null)) {
      return { error: 'ProductNotFound' }; // TODO: add error to order
    }

    const storeIdAsObjectId = mongoose.Types.ObjectId(fromGlobalId(storeId).id);

    if (orderProducts.some((product) => product?.storeId && !storeIdAsObjectId.equals(product.storeId))) {
      return { error: 'StoreAndProductsDontMatch' };
    }

    const order = await new OrderModel({
      storeId: storeIdAsObjectId,
      userId: user.id,
      status: 'PENDING',
      products: orderProducts.map((product) => ({
        ...product,
        quantity: products.find((i) => i.id === toGlobalId('Product', product?._id))?.quantity,
      })),
      total: orderProducts.reduce((acc, product) => {
        const quantity = products.find((i) => i.id === toGlobalId('Product', product?._id))?.quantity;
        return acc + product!.price * quantity!;
      }, 0),
    }).save();

    return {
      id: order._id,
      error: null,
    };
  },
  outputFields: {
    orderEdge: {
      type: OrderConnection.edgeType,
      resolve: async ({ id }, _args, context) => {
        const order = await OrderLoader.load(context, id);

        if (!order) {
          return null;
        }

        return {
          cursor: toGlobalId('Order', order.id),
          node: order,
        };
      },
    },
    ...successField,
    ...errorField,
  },
});

const mutationField: MutationField = {
  ...mutation,
  extensions: {
    authenticatedOnly: true,
    validationSchema: CreateOrderMutationSchema,
  },
};

export default mutationField;
