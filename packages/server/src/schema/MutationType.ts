import { GraphQLObjectType } from 'graphql';

import OrderMutations from '../modules/order/mutations';
import UserMutations from '../modules/user/mutations';

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...UserMutations,
    ...OrderMutations,
  }),
});

export default MutationType;
