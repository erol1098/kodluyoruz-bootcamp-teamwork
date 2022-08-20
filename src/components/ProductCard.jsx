import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingContext from "../context/shopping-context";

const ProductCard = ({ item }) => {
  const { id, title, image, price } = item;
  const navigate = useNavigate();
  const { shoppingCart, setShoppingCart } = useContext(ShoppingContext);
  const handleAddCart = () => {
    setShoppingCart([...shoppingCart, item]);
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
