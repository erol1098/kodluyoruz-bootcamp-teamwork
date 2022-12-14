import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingContext from '../context/shopping-context';
import { StyledButton, StyledCard } from './styled';

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
          if (product.item.id === id) {
            product.amount = product.amount + 1;
            return product;
          } else return product;
        })
      );
    }
  };
  return (
    <StyledCard>
      <div className='img-wrapper'>
        <img width={100} src={image} alt={title} />
      </div>
      <h4>{title}</h4>
      <p>{price} €</p>
      <div className='btn-wrapper'>
        <StyledButton
          backColor={'green'}
          color={'white'}
          onClick={handleAddCart}
        >
          Add To Cart
        </StyledButton>
        <StyledButton
          backColor={'blue'}
          color={'white'}
          onClick={() => navigate(`${id}`)}
        >
          Detail
        </StyledButton>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
