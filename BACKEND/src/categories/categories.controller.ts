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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/CreateCategory.dto';
import { EditCategoryDto } from './dto/EditCategory.dto';
import mongoose from 'mongoose';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    const findCategory = await this.categoryService.findOne(id);
    if (!findCategory)
      throw new HttpException('Category is not found', HttpStatus.NOT_FOUND);
    return findCategory;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() category: CreateCategoryDto) {
    return this.categoryService.create(category);
  }

  @Patch()
  @UsePipes(new ValidationPipe())
  edit(@Param('id') id: string, @Body() category: EditCategoryDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    return this.categoryService.edit(id, category);
  }

  @Delete()
  delete(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    return this.categoryService.delete(id);
  }
}
