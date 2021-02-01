import React, { useEffect, useState, Component } from 'react';
import './styles.css';
import { FiUser, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-header.svg';

export interface Cart {
  name: string;
  productId: number;
  quantity: number;
}
export interface HeaderProps {
  handleCartTotal: boolean;
}

// function Header({handleCartTotal = false}:HeaderProps) {
const Header: React.FC<HeaderProps> = ({ handleCartTotal }) => {
  const [cart, setCart] = useState<Cart[]>();
  const [cartQuant, setCartQuant] = useState<number>(0);

  function addCart() {
    const storage = localStorage.getItem('@Corebiz/cart');
    if (storage) {
      const data: Cart[] = JSON.parse(storage.toString());
      setCart(data);

      if (data) {
        let temp = 0;
        data.forEach((item) => {
          temp += item.quantity;
        });
        setCartQuant(temp);
      }
    }
  }

  useEffect(() => {
    console.log(handleCartTotal);

    addCart();
  }, [handleCartTotal]);

  return (
    <>
      <header className="header">
        <img src={logo} alt="COREBIZ" />
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Oque está procurando?"
          />
          <FiSearch className="icon-search" size={20} />
        </div>
        <Link className="user-account" to="/">
          <FiUser className="icon" size={20} />
          <span>Minha Conta</span>
        </Link>

        <Link className="user-cart" to="/">
          <FiShoppingCart className="icon" size={20} />
          <span>{cartQuant}</span>
        </Link>
      </header>
    </>
  );
};

export default Header;
