import React, { useState } from "react";
import { Product, IProdValues, IProductProviderProps } from "../constants/interfaces";
import ProductsApi from "../services/ProductsApi";

export const ProductContext = React.createContext({} as IProdValues);

export const ProductProvider: React.FC<IProductProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [count, setCount] = useState<{ [key: number]: number }>({});
  const [shopData, setShopData] = useState<Product[]>([]);

  const getProducts = async (): Promise<Product[]> => {
    return await ProductsApi.getPosts().then((response) => {
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
