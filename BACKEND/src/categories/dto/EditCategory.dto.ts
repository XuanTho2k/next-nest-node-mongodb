import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class EditCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  slug: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  hidden: boolean;

  @IsArray()
  products: string[];
}
