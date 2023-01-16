import { FILTER_CONDITION_TYPE, buildSortFromArg } from '@entria/graphql-mongo-helpers';
import { FilterMapping } from '@entria/graphql-mongo-helpers/lib/types';
import { GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';

import { StatusDateOrdering, StatusDateOrderingInputType } from '../../../graphql/filters/StatusDateOrderingInputType';

import { GraphQLArgFilter } from '../../../types';

export type CategoriesArgFilters = GraphQLArgFilter<{
  orderBy?: StatusDateOrdering[];
}>;

export const productFilterMapping: FilterMapping = {
  orderBy: {
    type: FILTER_CONDITION_TYPE.AGGREGATE_PIPELINE,
    pipeline: (value: StatusDateOrdering[]) => [{ $sort: buildSortFromArg(value) }],
  },
};

const ProductFiltersInputType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'ProductFilters',
  description: 'Used to filter categories',
  fields: () => ({
    OR: {
      type: GraphQLList(ProductFiltersInputType),
    },
    AND: {
      type: GraphQLList(ProductFiltersInputType),
    },
    orderBy: {
      type: GraphQLList(GraphQLNonNull(StatusDateOrderingInputType)),
      description: 'Order products by StatusDateOrderingInputType.',
    },
  }),
});

export default ProductFiltersInputType;
