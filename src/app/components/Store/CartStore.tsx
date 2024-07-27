import create from 'zustand';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  setQuantity: (id: number, quantity: number) => void;
  totalAmount: number;
  discount: number;
  shipping: number;
  paymentMethod: string; // Adicionando a forma de pagamento
  applyDiscount: (code: string) => void;
  setPaymentMethod: (method: string) => void; // Método para definir a forma de pagamento
};

const calculateTotalAmount = (cart: CartItem[], discount: number, shipping: number) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return subtotal - discount + shipping;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  totalAmount: 0,
  discount: 0,
  shipping: 0,
  paymentMethod: 'Não definido', // Valor padrão
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      const updatedCart = existingProduct
        ? state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
          )
        : [...state.cart, product];

      return {
        cart: updatedCart,
        totalAmount: calculateTotalAmount(updatedCart, state.discount, state.shipping),
      };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      return {
        cart: updatedCart,
        totalAmount: calculateTotalAmount(updatedCart, state.discount, state.shipping),
      };
    }),
  clearCart: () => set(() => ({ cart: [], totalAmount: 0, discount: 0, shipping: 0, paymentMethod: 'Não definido' })),
  setQuantity: (id, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      return {
        cart: updatedCart,
        totalAmount: calculateTotalAmount(updatedCart, state.discount, state.shipping),
      };
    }),
  applyDiscount: (code) => {
    let discount = 0;
    if (code === 'DISCOUNT10') discount = 10; // exemplo de desconto fixo

    set((state) => ({
      discount,
      totalAmount: calculateTotalAmount(state.cart, discount, state.shipping),
    }));
  },
  setPaymentMethod: (method) => set(() => ({ paymentMethod: method })),
}));
