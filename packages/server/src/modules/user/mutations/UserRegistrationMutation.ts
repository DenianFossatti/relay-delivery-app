import { errorField, successField } from '@entria/graphql-mongo-helpers';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { getPlatform } from '../../../security';
import { GraphQLContext, MutationField } from '../../../types';

import { generateToken } from '../../auth/generateToken';
import { TOKEN_SCOPES } from '../../token/TokenModel';

import * as UserLoader from '../UserLoader';
import UserModel from '../UserModel';

import UserRegistrationMutationSchema from './validationSchemas/UserRegistrationMutationSchema';

interface UserRegistrationAddArgs {
  name: string;
  email: string;
  password: string;
}

const mutation = mutationWithClientMutationId({
  name: 'UserRegistration',
  inputFields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'User name. ex: Denian',
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
      description: 'User email to be used on login. ex: jean@gmail.com',
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
      description: 'User password.',
    },
  },
  mutateAndGetPayload: async (args: UserRegistrationAddArgs, context: GraphQLContext) => {
    const { t } = context;

    const { email, password } = args;

    const userEmailExists = await UserLoader.userEmailExists(context, email);

    if (userEmailExists) {
      return {
        error: t('auth', 'TheEmailIsAlreadyAssociated'),
      };
    }

    const fullName = args.name.split(' ');
    const name = fullName[0];
    const surname = fullName.length > 1 ? fullName.splice(1, fullName.length).join(' ') : '';

    const user = await new UserModel({
      name,
      surname: surname || '',
      email: { email, wasVerified: true },
      password,
    }).save();

    const token = await generateToken({
      ctx: context,
      user,
      scope: TOKEN_SCOPES.SESSION,
      platform: getPlatform(context.appplatform),
    });

    return {
      token,
      error: null,
    };
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    ...successField,
    ...errorField,
  },
});

const mutationField: MutationField = {
  ...mutation,
  extensions: {
    validationSchema: UserRegistrationMutationSchema,
  },
};

export default mutationField;
