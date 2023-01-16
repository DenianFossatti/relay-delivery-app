import { connectionDefinitions, timestampResolver } from '@entria/graphql-mongo-helpers';
import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { GraphQLContext } from '../../types';

import { nodeInterface, registerTypeLoader } from '../node/typeRegister';

import { load } from './UserLoader';
import { IUser } from './UserModel';

// @TODO - add avatar
const UserType = new GraphQLObjectType<IUser, GraphQLContext>({
  name: 'User',
  description: 'User data',
  fields: () => ({
    id: globalIdField('User', (obj) => obj._id),
    name: {
      type: GraphQLString,
      description: 'The user name. Ex: Denian.',
      resolve: (obj) => obj.name,
    },
    surname: {
      type: GraphQLString,
      description: 'The user surname. Ex: Fossatti.',
      resolve: (obj) => obj.surname,
    },
    fullName: {
      type: GraphQLString,
      description: 'The user full name. Ex: Denian Fossatti.',
      resolve: (obj) => (obj.surname ? `${obj.name} ${obj.surname}` : obj.name),
    },
    email: {
      type: GraphQLString,
      description: 'The user email. Ex: jean@deliveryapp.com.',
      resolve: (obj) => obj.email.email,
    },
    emailWasVerified: {
      type: GraphQLString,
      description: 'If the user email was verified.',
      resolve: (obj) => obj.email.wasVerified,
    },
    lang: {
      type: GraphQLString,
      description: 'The user language. Ex: en.',
      resolve: (obj) => obj.lang,
    },
    ...timestampResolver,
  }),
  interfaces: () => [nodeInterface],
});

registerTypeLoader(UserType, load);

export const UserConnection = connectionDefinitions({
  name: 'User',
  nodeType: UserType,
});

export default UserType;
