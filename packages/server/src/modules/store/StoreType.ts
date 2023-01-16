import { connectionDefinitions, timestampResolver } from '@entria/graphql-mongo-helpers';
import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { GraphQLContext } from '../../types';

import { nodeInterface, registerTypeLoader } from '../node/typeRegister';

import { load } from './StoreLoader';
import { IStore } from './StoreModel';

const StoreType = new GraphQLObjectType<IStore, GraphQLContext>({
  name: 'Store',
  description: 'Store data',
  fields: () => ({
    id: globalIdField('Store', (obj) => obj._id),
    // ...objectIdResolver,
    name: {
      type: GraphQLString,
      description: 'The store name. ex: Hamburguer',
      resolve: (obj) => obj.name,
    },
    ...timestampResolver,
  }),
  interfaces: () => [nodeInterface],
});

registerTypeLoader(StoreType, load);

export const StoreConnection = connectionDefinitions({
  name: 'Store',
  nodeType: StoreType,
});

export default StoreType;
