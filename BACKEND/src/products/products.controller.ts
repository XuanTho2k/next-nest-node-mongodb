import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/CreateProduct.dto';
import mongoose from 'mongoose';
import { EditProductDto } from './dto/EditProduct.dto';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  findAll(@Query() queries: string) {
    return this.productService.findAll(queries);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    const findProduct = await this.productService.findOne(id);
    if (!findProduct)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    return findProduct;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  edit(@Param('id') id: string, @Body() product: EditProductDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    const editProduct = this.productService.edit(id, product);
    if (!editProduct)
      throw new HttpException('Product not Found', HttpStatus.NOT_FOUND);
    return editProduct;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    return this.productService.delete(id);
  }
}
