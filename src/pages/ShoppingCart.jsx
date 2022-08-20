import React, { useContext } from "react";
import ShoppingContext from "../context/shopping-context";

const ShoppingCart = () => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);

  const handleItemRemove = (id) => {
    setShoppingCart((prevShoppingCart) =>
      prevShoppingCart.filter((item) => item.id !== id)
    );
  };
  return (
    <>
      {shoppingCart.length === 0 ? (
        <div>No Item Found!</div>
      ) : (
        <div>
          {shoppingCart.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt={item.title} width={100}></img>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => handleItemRemove(item.id)}>
                  Remove Item
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
