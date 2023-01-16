import { connectionDefinitions, timestampResolver } from '@entria/graphql-mongo-helpers';
import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import * as StoreLoader from '../../modules/store/StoreLoader';
import { GraphQLContext } from '../../types';

import { nodeInterface, registerTypeLoader } from '../node/typeRegister';
import StoreType from '../store/StoreType';

import { load } from './ProductLoader';
import { IProduct } from './ProductModel';

const ProductType = new GraphQLObjectType<IProduct, GraphQLContext>({
  name: 'Product',
  description: 'Product data',
  fields: () => ({
    id: globalIdField('Product', (obj) => obj._id),
    // ...objectIdResolver,
    name: {
      type: GraphQLString,
      description: 'The product name. ex: Hamburguer',
      resolve: (obj) => obj.name,
    },
    quantity: {
      type: GraphQLInt,
      description: 'The product key. ex: meat',
      resolve: (obj) => obj.price,
    },
    price: {
      type: GraphQLInt,
      description: 'The product price. ex: 1000 (R$ 10,00)',
      resolve: (obj) => obj.price,
    },
    store: {
      type: StoreType,
      description: 'The store that this product belongs to',
      resolve: async (obj, args, context) => await StoreLoader.load(context, obj.storeId),
    },
    ...timestampResolver,
  }),
  interfaces: () => [nodeInterface],
});

registerTypeLoader(ProductType, load);

export const ProductConnection = connectionDefinitions({
  name: 'Product',
  nodeType: ProductType,
});

export default ProductType;
