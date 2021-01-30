import React from 'react';
import './styles.css';
import logo from '../../assets/logo-header.svg'
import { FiUser,FiSearch,FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="header">
        
        <img src={logo} alt="COREBIZ"/>
        <div className="search">
            <input className="search-box" type="text" placeholder="Oque está procurando?"/><FiSearch className='icon-search' size={20}/>
        </div>
            <Link className='user-account' to='/'><FiUser className='icon' size={20}/>
                <span>Minha Conta</span>
            </Link>

            <Link className='user-cart' to='/'><FiShoppingCart className='icon' size={20}/>
                <span>5</span> 
            </Link>
        
      </header>
  );
}

export default Header;
