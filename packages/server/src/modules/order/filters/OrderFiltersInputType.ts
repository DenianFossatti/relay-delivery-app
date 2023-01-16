import { FILTER_CONDITION_TYPE, buildSortFromArg } from '@entria/graphql-mongo-helpers';
import { FilterMapping } from '@entria/graphql-mongo-helpers/lib/types';
import { GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';

import { StatusDateOrdering, StatusDateOrderingInputType } from '../../../graphql/filters/StatusDateOrderingInputType';

import { GraphQLArgFilter } from '../../../types';

export type CategoriesArgFilters = GraphQLArgFilter<{
  orderBy?: StatusDateOrdering[];
}>;

export const orderFilterMapping: FilterMapping = {
  orderBy: {
    type: FILTER_CONDITION_TYPE.AGGREGATE_PIPELINE,
    pipeline: (value: StatusDateOrdering[]) => [{ $sort: buildSortFromArg(value) }],
  },
};

const OrderFiltersInputType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'OrderFilters',
  description: 'Used to filter categories',
  fields: () => ({
    OR: {
      type: GraphQLList(OrderFiltersInputType),
    },
    AND: {
      type: GraphQLList(OrderFiltersInputType),
    },
    orderBy: {
      type: GraphQLList(GraphQLNonNull(StatusDateOrderingInputType)),
      description: 'Order orders by StatusDateOrderingInputType.',
    },
  }),
});

export default OrderFiltersInputType;
