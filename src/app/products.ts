export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  provider: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    provider: 'Samsung'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    provider: 'Apple'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    provider: 'Xiaomi'
  }
];
