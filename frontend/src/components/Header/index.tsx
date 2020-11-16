import React from 'react';
import { FiSearch, FiUser, FiShoppingBag, FiMenu } from 'react-icons/fi'

import './styles.css'

import logoCristal from '../../assets/logocristal.png'

const Header: React.FC =() => {
  return (
    <header>
      <div id="half-up">
        <a href="index.html">
          <img id="logo" src={logoCristal} alt="Cristal Moda Feminina"/>
        </a>

        <form action="" id="search">
          <div className="search-space">
            <FiSearch  id="search" />
            <input type="text" id="textSearch" placeholder="O que você procura ?"/>
          </div>
        </form>

        <div className="links-user-container">
          <a href="/pages/cadastro.html">
            <FiUser  size="20" />
          </a>
          <a href="/pages/bag.html">
            <FiShoppingBag id="bag" size="20" />
          </a>
        </div>
      </div>

      <div id="half-low">
        <ol>
          <FiMenu  />
          <a href="index.html">
              <li><p>Home</p></li>
          </a>
          <li><p>Blusas</p></li>
          <li><p>Calças</p></li>
          <li><p>Calçados</p></li>
        </ol>
      </div>
    </header>
  )
}

export default Header;
