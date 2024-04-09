import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Category } from './category.model';
import * as mongoosePaginate from 'mongoose-paginate-v2';

@Schema({ timestamps: true, versionKey: false })
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: 0 })
  price: number;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    default: [],
  })
  category: Category;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  images: [string];

  @Prop({ required: true })
  thumbnail: string;

  @Prop({ required: true, default: 0 })
  stock: number;

  @Prop({ required: true, default: 0 })
  rating: number;

  @Prop({ required: true, default: false })
  hidden: boolean;

  @Prop({ required: true, default: false })
  featured: boolean;
}

export const productSchema =
  SchemaFactory.createForClass(Product).plugin(mongoosePaginate);
