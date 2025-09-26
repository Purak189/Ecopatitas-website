export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number[];
  category: string;
  images: string[];
  image: string;
  stock: number;
  status: string;
  customer: string;
  addCharacteristics: boolean;
  characteristics: string[];
  addExtensiveDescription: boolean;
  extensiveDescription: string;
  currency: string;
  sizes: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
