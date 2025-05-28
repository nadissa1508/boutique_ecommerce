import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import logoEcommerce from '../assets/logo-blush-blossom.png';
import cartIcon from '../assets/cart-icon.png';

function Header() {
  const navigate = useNavigate(); 

  function openCart() {
    navigate('/cart');
  }

  return (
    <header className="header-app">
      <img src={logoEcommerce} alt="Logo e-commerce" className="logo" />
      <SearchBar />
      <button className="cart-button" onClick={openCart} >
        <img src={cartIcon} alt="Boton de Carrito" className="cart-icon" />
      </button>
    </header>
  );
}

export default Header;