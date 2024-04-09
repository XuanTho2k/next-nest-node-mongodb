import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  slug: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  hidden: boolean;

  @IsArray()
  products: string[];
}
