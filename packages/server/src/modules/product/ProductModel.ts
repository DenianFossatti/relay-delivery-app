import mongoose, { Document, Model } from 'mongoose';

import isActiveMongooseField from '../../mongoose/isActiveMongooseField';
import { IStatusSchema } from '../../types';

export interface ProductRawType {
  name: string;
  quantity: number;
  price: number;
  storeId: mongoose.Types.ObjectId;
}

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      description: 'The product name. ex: Hamburguer',
      required: true,
      index: true,
    },
    quantity: {
      type: Number,
      description: 'The product quantity. ex: 100',
      required: true,
    },
    price: {
      type: Number,
      description: 'The product price. ex: 1000 (R$ 10,00)',
      required: true,
    },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store',
      description: 'The product store _id.',
      //required: true,
      index: true,
    },
    ...isActiveMongooseField,
  },
  {
    collection: 'Product',
    timestamps: true,
  },
);

export const ProductSchema = Schema;

export type IProduct = ProductRawType & Document & IStatusSchema;

Schema.index({ createdAt: 1 });

const ProductModel: Model<IProduct> = mongoose.model('Product', Schema);

export default ProductModel;
