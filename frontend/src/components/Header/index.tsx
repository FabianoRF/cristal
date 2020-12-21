import React from 'react';
import { FiSearch, FiUser, FiShoppingBag, FiMenu } from 'react-icons/fi';

import './styles.css';

import { Link } from 'react-router-dom';
import logoCristal from '../../assets/logocristal.png';

const Header: React.FC = () => {
  return (
    <header>
      <div className="half-up">
        <Link to="/">
          <img id="logo" src={logoCristal} alt="Cristal Moda Feminina" />
        </Link>

        <form action="" id="search">
          <div className="search-space">
            <FiSearch id="search" />
            <input
              type="text"
              id="textSearch"
              placeholder="O que você procura ?"
            />
          </div>
        </form>

        <div className="links-user-container">
          <Link to="/login">
            <FiUser size="20" />
          </Link>
          <Link to="/bag">
            <FiShoppingBag id="bag" size="20" />
          </Link>
        </div>
      </div>

      <nav className="half-low">
        <FiMenu />
        <Link to="/">Home</Link>
        <Link to="/">Blusas</Link>
        <Link to="/">Calçados</Link>
        <Link to="/">Calças</Link>
      </nav>
    </header>
  );
};

export default Header;
