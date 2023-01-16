import { createLoader } from '@entria/graphql-mongo-helpers';

import { isLoggedAndDataIsActiveViewerCanSee } from '../../security';

import { registerLoader } from '../loader/loaderRegister';

import { storeFilterMapping } from './filters/StoreFiltersInputType';
import StoreModel from './StoreModel';

const {
  Wrapper: Store,
  getLoader,
  clearCache,
  load,
  loadAll,
} = createLoader({
  model: StoreModel,
  loaderName: 'StoreLoader',
  isAggregate: true,
  filterMapping: storeFilterMapping,
  viewerCanSee: isLoggedAndDataIsActiveViewerCanSee as any,
  shouldValidateContextUser: true,
  defaultConditions: { isActive: true },
  defaultFilters: { orderBy: [{ field: 'createdAt', direction: -1 }] },
});

registerLoader('StoreLoader', getLoader);

export { getLoader, clearCache, load, loadAll };

export default Store;
