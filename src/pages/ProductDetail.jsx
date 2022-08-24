import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ShoppingContext from "../context/shopping-context";
//? Selected Product
const ProductDetail = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { setShoppingCart } = useContext(ShoppingContext);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddCart = () => {
    setShoppingCart((prevShoppingCart) => [
      ...prevShoppingCart,
      { item: data, amount: 0 },
    ]);
  };
  return (
    <div>
      <img width={100} src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.price}</p>
      <p>{data.description}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={handleAddCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
