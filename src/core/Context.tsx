import React, { useState, ReactNode } from "react";
import { Product, IProdValues } from "../constants/interfaces";
import ProductsApi from "../services/ProductsApi";

export const ProductContext = React.createContext({} as IProdValues);

interface IProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<IProductProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [count, setCount] = useState<{ [key: number]: number }>({});
  const [shopData, setShopData] = useState<Product[]>([]);

  const getProducts = (): Promise<Product[]> => {
    return ProductsApi.getPosts().then((response) => {
      if (response) {
        setShopData(response.data);
        return response.data;
      }
      return [];
    });
  };

  const values = { cart, setCart, count, setCount, shopData, setShopData, getProducts };
  return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
};
