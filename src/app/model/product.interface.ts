export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discoutPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumnail: string;
  images: string[];
}
export interface pip {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
