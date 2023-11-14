import React, { ComponentType, Dispatch, ReactNode, SetStateAction } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    count: number;
    rating: Rating;
  }
  
interface Rating {
    rate: number;
    count: number;
}

interface IProdValues {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  count: { [key: number]: number };
  setCount: Dispatch<SetStateAction<{ [key: number]: number }>>;
  shopData: Product[];
  setShopData: Dispatch<SetStateAction<Product[]>>;
  getProducts: () => Promise<Product[]>;
}

interface IProductProviderProps {
  children: ReactNode;
}

interface ProductsProps {
    product: Product;
    count: { [key: number]: number };
    setCount: Dispatch<SetStateAction<{ [key: number]: number }>>;
}

interface RouteType {
  path: string;
  component: ComponentType;
}

export type { Product, Rating, IProdValues, IProductProviderProps, ProductsProps, RouteType };