import React, { useContext } from "react";
import ShoppingContext from "../context/shopping-context";

const ShoppingCart = () => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);

  const handleItemRemove = (id) => {
    setShoppingCart((prevShoppingCart) =>
      prevShoppingCart.filter((product) => product.item.id !== id)
    );
  };

  const handleSetAmount = (id, op) => {
    const temp = shoppingCart.find((product) => product.item.id === id);
    op === "+" && temp.amount++;
    if (op === "-") {
      temp.amount > 1 && temp.amount--;
      temp.amount === 1 &&
        setShoppingCart((prevShoppingCart) =>
          prevShoppingCart.filter((product) => product.item.id !== id)
        );
    }
    setShoppingCart((prevShoppingCart) => [
      ...prevShoppingCart.filter((product) => product.item.id !== id),
      temp,
    ]);
  };
  return (
    <>
      {shoppingCart?.length === 0 ? (
        <div>No Item Found!</div>
      ) : (
        <div>
          {shoppingCart?.map((product) => {
            const { item, amount } = product;
            return (
              <div key={item.id}>
                <img src={item.image} alt={item.title} width={100}></img>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <div>
                  <button onClick={() => handleSetAmount(item.id, "+")}>
                    +
                  </button>
                  <p>{amount}</p>
                  <button onClick={() => handleSetAmount(item.id, "-")}>
                    -
                  </button>
                </div>
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
