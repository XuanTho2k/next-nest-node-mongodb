import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/schemas/category.model';
import { ICategory } from './interfaces/category.interface';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  findAll() {
    return this.categoryModel.find().populate({ path: 'products' });
  }
  findOne(id: string) {
    return this.categoryModel.findById(id).populate('products');
  }
  create(category: ICategory) {
    return this.categoryModel.create(category);
  }
  edit(id: string, category: ICategory) {
    return this.categoryModel.findByIdAndUpdate(id, category);
  }
  delete(id: string) {
    return this.categoryModel.findByIdAndDelete(id);
  }
}
