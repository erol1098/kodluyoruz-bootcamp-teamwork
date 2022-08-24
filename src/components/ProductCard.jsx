import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingContext from "../context/shopping-context";

const ProductCard = ({ item }) => {
  const { id, title, image, price } = item;
  const navigate = useNavigate();
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);

  const handleAddCart = () => {
    if (shoppingCart.every((product) => product.item.id !== id)) {
      setShoppingCart((prevCart) => [...prevCart, { item, amount: 1 }]);
    } else {
      setShoppingCart(
        shoppingCart.map((product) => {
          console.log(product);
          if (product.item.id === id) {
            product.amount = product.amount + 1;
            return product;
          } else return product;
        })
      );
    }
  };
  return (
    <li>
      <img width={100} src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <div>
        <button onClick={handleAddCart}>Add To Cart</button>
        <button onClick={() => navigate(`${id}`)}>Detail</button>
      </div>
    </li>
  );
};

export default ProductCard;
