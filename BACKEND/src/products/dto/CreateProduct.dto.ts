import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  title: string;

  @IsString()
  @MinLength(3)
  @MaxLength(300)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  brand: string;

  @IsArray()
  @IsMongoId({ each: true })
  category: string[];

  discountPercentage: number;

  images: string[];
  thumbnail: string;
  stock: number;
  rating: number;
  hidden: boolean;
  featured: boolean;
}
