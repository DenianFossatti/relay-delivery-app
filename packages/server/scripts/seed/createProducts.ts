import faker from 'faker';

import ProductModel, { IProduct, ProductRawType } from '../../src/modules/product/ProductModel';
import { IStore } from '../../src/modules/store/StoreModel';

const PRODUCTS: Partial<ProductRawType>[] = [
  {
    name: 'Coca-Cola 600ml',
    price: 500,
    quantity: 100,
  },
  {
    name: 'Hambúrguer Americano',
    price: 4990,
    quantity: 100,
  },
  {
    name: 'Hambúrguer Canadense',
    price: 3990,
    quantity: 100,
  },
  {
    name: 'Hambúrguer Vegano',
    price: 3990,
    quantity: 100,
  },
  {
    name: 'Hambúrguer de Frango',
    price: 3590,
    quantity: 100,
  },
];

const createProducts = async ({ store }: { store: IStore }) => {
  const _products: IProduct[] = [];

  for (let i = 0; i < PRODUCTS.length; i++) {
    const product = generateProduct({ ...PRODUCTS[i], storeId: store._id });
    _products.push(product);
  }

  return ProductModel.insertMany(_products);
};

const generateProduct = (args: Partial<ProductRawType>) => {
  const name = args.name || faker.commerce.productName();
  const price = args.price || faker.commerce.price();
  const quantity =
    args.quantity ||
    faker.datatype.number({
      max: 100,
      min: 10,
    });

  return new ProductModel({ name, price, quantity, ...args });
};

export default createProducts;
