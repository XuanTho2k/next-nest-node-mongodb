import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/schemas/product.model';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { IProductModel } from './interfaces/product.model.interface';
import { EditProductDto } from './dto/EditProduct.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: IProductModel) {}
  findAll(query: any) {
    const {
      _page = 1,
      _limit = 2,
      _sort = 'createAt',
      _order = 'asc',
      _expand,
    } = query;
    const options = {
      page: _page,
      limit: _limit,
      sort: { [_sort]: _order === 'desc' ? -1 : 1 },
    };

    const populateOptions = _expand
      ? []
      : [{ path: 'category', select: 'name' }];

    console.log(populateOptions);
    return this.productModel.paginate(
      {
        categoryId: null,
      },
      { ...options, populate: populateOptions },
    );
  }
  findOne(id: string) {
    return this.productModel.findById(id);
  }
  create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }
  edit(id: string, product: EditProductDto) {
    return this.productModel.findByIdAndUpdate(id, product);
  }
  delete(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
