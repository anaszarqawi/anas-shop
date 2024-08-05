export type ProductCard = {
  id: string;
  name: string;
  price: number;
  discount?: number;
  brand: string;
  image: string;
};


export type ProductPage = {
  id: string;
  createdDate: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  brand: string;
  images: string[];
  price: number;
  discount?: number;
  specification?: {
    [key: string]: string;
  };
};