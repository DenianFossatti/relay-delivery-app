import { createLoader } from '@entria/graphql-mongo-helpers';

import { isLoggedAndDataIsActiveViewerCanSee } from '../../security';

import { registerLoader } from '../loader/loaderRegister';

import { productFilterMapping } from './filters/ProductFiltersInputType';
import ProductModel from './ProductModel';

const {
  Wrapper: Product,
  getLoader,
  clearCache,
  load,
  loadAll,
} = createLoader({
  model: ProductModel,
  loaderName: 'ProductLoader',
  isAggregate: true,
  filterMapping: productFilterMapping,
  viewerCanSee: isLoggedAndDataIsActiveViewerCanSee as any,
  shouldValidateContextUser: true,
  defaultConditions: { isActive: true },
  defaultFilters: { orderBy: [{ field: 'createdAt', direction: -1 }] },
});

registerLoader('ProductLoader', getLoader);

export { getLoader, clearCache, load, loadAll };

export default Product;
