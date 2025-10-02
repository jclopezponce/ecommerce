type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};