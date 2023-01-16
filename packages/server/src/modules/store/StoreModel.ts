import mongoose, { Document, Model } from 'mongoose';

import isActiveMongooseField from '../../mongoose/isActiveMongooseField';
import { IStatusSchema, ObjectId } from '../../types';

export interface StoreRawType {
  name: string;
  quantity: number;
  price: number;
  storeId: ObjectId;
}

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      description: 'The store name. ex: Hamburgueria do João',
      required: true,
      index: true,
    },
    ...isActiveMongooseField,
  },
  {
    collection: 'Store',
    timestamps: true,
  },
);

export type IStore = StoreRawType & Document & IStatusSchema;

Schema.index({ createdAt: 1 });

const StoreModel: Model<IStore> = mongoose.model('Store', Schema);

export default StoreModel;
