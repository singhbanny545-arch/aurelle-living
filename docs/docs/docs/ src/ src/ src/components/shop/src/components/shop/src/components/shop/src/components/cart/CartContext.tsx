import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export interface CartProduct {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  [key: string]: unknown;
}

interface CartContextType {
  items: CartProduct[];
  itemCount: number;
  subtotal: number;
  isCartOpen: boolean;
  addToCart: (product: Omit<CartProduct, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const STORAGE_KEY = 'aurelle-living-cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

function loadCart(): CartProduct[] {
  if (typeof window === 'undefined') return [];

  try {
    const storedCart = localStorage.getItem(STORAGE_KEY);

    if (!storedCart) return [];

    const parsed: unknown = JSON.parse(storedCart);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item): item is CartProduct => {
      return (
        item !== null &&
        typeof item === 'object' &&
        (typeof item.id === 'string' || typeof item.id === 'number') &&
        typeof item.name === 'string' &&
        typeof item.price === 'number' &&
        Number.isFinite(item.price) &&
        item.price >= 0 &&
        typeof item.quantity === 'number' &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0
      );
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartProduct[]>(loadCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Unable to save cart:', error);
    }
  }, [items]);

  const addToCart = useCallback(
    (product: Omit<CartProduct, 'quantity'>, quantity = 1) => {
      if (
        !product ||
        (typeof product.id !== 'string' &&
          typeof product.id !== 'number') ||
        typeof product.name !== 'string' ||
        typeof product.price !== 'number' ||
        !Number.isFinite(product.price) ||
        product.price < 0 ||
        !Number.isInteger(quantity) ||
        quantity <= 0
      ) {
        console.error('Invalid product or quantity.');
        return;
      }

      setItems((currentItems) => {
        const existingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          return currentItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        return [
          ...currentItems,
          {
            ...product,
            quantity,
          },
        ];
      });
    },
    []
  );

  const removeFromCart = useCallback((id: string | number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }, []);

  const updateQuantity = useCallback(
    (id: string | number, quantity: number) => {
      if (!Number.isInteger(quantity)) return;

      if (quantity <= 0) {
        removeFromCart(id);
        return;
      }

      setItems((currentItems) =>
        currentItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen((previous) => !previous);
  }, []);

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    }),
    [
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart must be used within a CartProvider.'
    );
  }

  return context;
}

