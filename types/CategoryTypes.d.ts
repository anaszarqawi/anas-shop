export type Category = {
  id: string;
  createdDate: string;
  updatedDate?: string;
  name: string;
  image: string;
  subcategories?: string[];
};

export type CategoryCard = {
  id: string;
  name: string;
  image: string;
};