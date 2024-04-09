import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { UserRole } from 'src/users/interfaces/user.role';

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: UserRole.USER, enum: UserRole })
  role: UserRole;
}

export const userSchema =
  SchemaFactory.createForClass(User).plugin(mongoosePaginate);
