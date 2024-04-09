export interface IProduct {
  _id?: number | string;
  title: string;
  price: number;
  stock: number;
  rating: number;
  brand: string;
  category: string[];
  thumbnail: string;
  description: string;
  discountPercentage?: number;
  images?: string[];
  isHidden: boolean;
  featured: boolean;
  quantity: number;
}
