import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingContext from "../context/shopping-context";

const Header = (props) => {
  // const { query, setQuery } = props;
  const navigate = useNavigate();
  const { shoppingCart } = useContext(ShoppingContext);
  return (
    <nav>
      <div></div>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/cart")}>
          Cart (
          {shoppingCart?.reduce((arr, product) => arr + product.amount, 0) || 0}
          )
        </button>
      </div>
    </nav>
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
