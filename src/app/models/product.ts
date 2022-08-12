export interface Product {
  id: number;
  title: any;
  description: String;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: String;
  category: String;
  thumbnail: any;
  images: Array<String>;
}
