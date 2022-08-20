import React from "react";
import AppRouter from "./routes/AppRouter";
import { ShoppingContextProvider } from "./context/shopping-context";

const App = () => {
  return (
    <ShoppingContextProvider>
      <AppRouter />
    </ShoppingContextProvider>
  );
};

export default App;
