import { createLoader } from '@entria/graphql-mongo-helpers';

import { isLoggedAndDataIsActiveViewerCanSee } from '../../security';

import { registerLoader } from '../loader/loaderRegister';

import { orderFilterMapping } from './filters/OrderFiltersInputType';
import OrderModel from './OrderModel';

const {
  Wrapper: Order,
  getLoader,
  clearCache,
  load,
  loadAll,
} = createLoader({
  model: OrderModel,
  loaderName: 'OrderLoader',
  isAggregate: true,
  filterMapping: orderFilterMapping,
  viewerCanSee: isLoggedAndDataIsActiveViewerCanSee as any,
  shouldValidateContextUser: true,
  defaultConditions: { isActive: true },
  defaultFilters: { orderBy: [{ field: 'createdAt', direction: -1 }] },
});

registerLoader('OrderLoader', getLoader);

export { getLoader, clearCache, load, loadAll };

export default Order;
