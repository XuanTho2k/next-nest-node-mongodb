import { PaginateModel } from 'mongoose';
import { Product } from 'src/schemas/product.model';

export interface IProductModel extends PaginateModel<Product> {}
