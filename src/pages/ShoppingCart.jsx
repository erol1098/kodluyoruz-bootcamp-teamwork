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
    op === "-" && temp.amount > 0 && temp.amount--;
    setShoppingCart((prevShoppingCart) => [
      ...prevShoppingCart.filter((product) => product.item.id !== id),
      temp,
    ]);
    if (op === "-") {
      if (temp.amount === 0) {
        setShoppingCart((prevShoppingCart) =>
          prevShoppingCart.filter((product) => product.item.id !== id)
        );
      }
    }
  };
  console.log("er", shoppingCart);
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
