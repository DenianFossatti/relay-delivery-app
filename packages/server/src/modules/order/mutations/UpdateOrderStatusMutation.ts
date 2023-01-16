import { errorField, successField } from '@entria/graphql-mongo-helpers';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId, toGlobalId } from 'graphql-relay';

import { LoggedGraphQLContext, MutationField } from '../../../types';

import * as OrderLoader from '../OrderLoader';
import OrderModel, { OrderRawType } from '../OrderModel';
import { OrderConnection, OrderStatus } from '../OrderType';

export interface UpdateOrderStatusArgs {
  orderId: string;
  status: OrderRawType['status'];
}

const mutation = mutationWithClientMutationId({
  name: 'UpdateOrderStatus',
  inputFields: {
    orderId: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The global order id',
    },
    status: {
      type: OrderStatus,
      description: 'The new status for the order',
    },
  },
  mutateAndGetPayload: async (args: UpdateOrderStatusArgs, context: LoggedGraphQLContext) => {
    const { orderId, status } = args;

    const updatedOrder = await OrderModel.findOneAndUpdate({ _id: fromGlobalId(orderId).id }, { status });

    if (!updatedOrder) {
      return { error: 'OrderNotFound' };
    }

    OrderLoader.clearCache(context, updatedOrder._id);

    return {
      id: updatedOrder._id,
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
    // validationSchema: UpdateOrderStatusMutationSchema, // TODO: adicionar validation
  },
};

export default mutationField;
