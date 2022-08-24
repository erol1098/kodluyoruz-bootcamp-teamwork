import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { StyledCardContainer, StyledContainer } from '../components/styled';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log('first', loading);

  return (
    <StyledContainer>
      <StyledCardContainer>
        {!loading ? (
          <>
            {products?.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </>
        ) : (
          <div className='loading'>Loading...</div>
        )}
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default Home;
