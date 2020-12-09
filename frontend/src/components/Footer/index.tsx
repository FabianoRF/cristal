import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import './styles.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="text-container">
        <div className="texting">
          <p>Cristal - CNPJ 43.111.111/1902-00</p>
          <p>
            Endereço: Rua do Centro, 1050 - Centro - Cássia/MG - CEP 37980-000
          </p>
          <p>Telefone: 3541-0000</p>
        </div>
      </div>
      <div className="socials-container">
        <FiFacebook />
        <FiInstagram />
      </div>
    </footer>
  );
};

export default Footer;
