import { create } from 'zustand';

export type useCartType = {
  products: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  storeId?: string;
};

type useCartStateType = useCartType & {
  resetStore: () => void;
  addOrUpdateProduct: (product: useCartType['products'][number]) => void;
  removeProduct: (productId: string) => void;
  setStoreId: (storeId?: string) => void;
  getProductById: (productId?: string) => useCartType['products'][number] | undefined;
};

const INITIAL_STATE: useCartType = {
  products: [],
  storeId: undefined,
};

export const useCart = create<useCartStateType>((set, get) => ({
  ...INITIAL_STATE,
  resetStore: () => set(() => ({ ...INITIAL_STATE })),
  addOrUpdateProduct: (product) => {
    set((state) => {
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      if (productIndex >= 0) {
        state.products[productIndex] = product;
        return { ...state };
      }

      return { ...state, products: [...state.products, product] };
    });
  },
  removeProduct: (productId) =>
    set((state) => ({ ...state, products: state.products.filter((product) => product.id !== productId) })),
  setStoreId: (storeId) => set((state) => ({ ...state, storeId })),
  getProductById: (productId) => get().products.find((product) => product.id === productId),
}));
