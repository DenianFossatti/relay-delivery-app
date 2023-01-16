import mongoose, { Document, Model } from 'mongoose';

import isActiveMongooseField from '../../mongoose/isActiveMongooseField';
import { IStatusSchema } from '../../types';

export interface OrderRawType {
  id: string;
  userId: string;
  total: number;
  storeId: mongoose.Types.ObjectId;
  products: OrderProductRawType[];
  status: 'PENDING' | 'ACCEPTED' | 'DELIVERED' | 'CANCELED' | 'SENT';
}

export interface OrderProductRawType {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export const OrderProductSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    description: 'The product _id',
    required: true,
    index: true,
  },
  name: {
    type: String,
    description: 'The book name. ex: O Alienista',
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
});

const Schema = new mongoose.Schema(
  {
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      description: 'The store that this order is related to (_id from store)',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      description: 'The user that created this order',
      required: true,
    },
    total: {
      type: Number,
      description: 'The total price of the order',
      required: true,
    },
    status: {
      type: String,
      description: 'The status of the order',
      required: true,
      enum: ['PENDING', 'ACCEPTED', 'DELIVERED', 'CANCELED', 'SENT'],
    },
    products: [OrderProductSchema],
    ...isActiveMongooseField,
  },
  {
    collection: 'Order',
    timestamps: true,
  },
);

export type IOrderProduct = OrderProductRawType & Document & IStatusSchema;
export type IOrder = OrderRawType & Document & IStatusSchema;

Schema.index({ createdAt: 1 });

const OrderModel: Model<IOrder> = mongoose.model('Order', Schema);

export default OrderModel;
