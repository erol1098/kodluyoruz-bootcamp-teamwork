import React, { useState, useEffect } from "react";
import axios from "axios"; //* Products
import ProductCard from "../components/ProductCard";
import { StyledCardContainer, StyledContainer } from "../components/styled";
const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <StyledContainer>
      <StyledCardContainer>
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default Home;
