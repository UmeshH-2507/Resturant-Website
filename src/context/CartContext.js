import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); // Initialize with an empty array

  return (
    <CartContext.Provider value={{ orders, setOrders }}>
      {children}
    </CartContext.Provider>
  );
};
