import faker from 'faker';

import StoreModel, { IStore } from '../../src/modules/store/StoreModel';

const generateStore = (args?: Partial<IStore> | undefined) => {
  const name = args?.name || faker.company.companyName();

  return new StoreModel({ name, ...args });
};

const createStore = async () => {
  const store = generateStore({ name: 'Restaurante Primavera' });

  return StoreModel.create(store);
};

export default createStore;
