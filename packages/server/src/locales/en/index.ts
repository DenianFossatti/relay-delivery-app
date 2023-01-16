import auth, { Keys as AuthKeys } from './auth';
import common, { Keys as CommonKeys } from './common';

const namespaces = {
  common,
  auth,
};

export default namespaces;

export type NamespaceKeys = keyof typeof namespaces;

export type MessageKeys = CommonKeys | AuthKeys;
