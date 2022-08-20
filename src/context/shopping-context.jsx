import { useState, createContext } from "react";

const ShoppingContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const values = { shoppingCart, setShoppingCart };

  return (
    <ShoppingContext.Provider value={values}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;
