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
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  count: { [key: number]: number };
  setCount: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  shopData: Product[];
  setShopData: React.Dispatch<React.SetStateAction<Product[]>>;
  getProducts: () => Promise<Product[]>;
}

export type { Product, Rating, IProdValues };