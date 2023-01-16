import { getObjectId } from '@entria/graphql-mongo-helpers';

import { getCounter } from '@workspace/test-utils';

import TokenModel, { IToken, TOKEN_SCOPES } from '../modules/token/TokenModel';
import UserModel, { IUser } from '../modules/user/UserModel';

export const createUser = async (args: Partial<IUser> = {}) => {
  const { name, email, password, ...rest } = args;

  const i = getCounter('user');

  return new UserModel({
    name: name || `User #${i}`,
    email: email || { email: `user${i}@example.com`, wasVerified: true },
    password: password || '123456789',
    ...rest,
  }).save();
};

export const createToken = async (args: Partial<IToken> = {}) => {
  const { userId, ip, scope, ...rest } = args;

  return new TokenModel({
    ...(userId ? { userId: getObjectId(userId) } : {}),
    ip: ip || '::ffff:127.0.0.1',
    scope: scope || TOKEN_SCOPES.SESSION,
    ...rest,
  }).save();
};
