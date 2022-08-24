import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingContext from '../context/shopping-context';
import { StyledButton, StyledHeader } from './styled';

const Header = (props) => {
  // const { query, setQuery } = props;
  const navigate = useNavigate();
  const { shoppingCart } = useContext(ShoppingContext);
  return (
    <StyledHeader backColor={'linear-gradient(to right, #74ebd5, #acb6e5)'}>
      <div>Logo</div>
      <nav>
        <StyledButton onClick={() => navigate('/')}>Home</StyledButton>
        <StyledButton onClick={() => navigate('/cart')}>
          Cart (
          {shoppingCart?.reduce((arr, product) => arr + product.amount, 0) || 0}
          )
        </StyledButton>
      </nav>
    </StyledHeader>
    // <form>
    //   <input
    //     type="search"
    //     placeholder="Aradığınız ürünü yazınız"
    //     onChange={(e) => setQuery(e.target.value)}
    //   />
    // </form>
  );
};

export default Header;
