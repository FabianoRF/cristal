import React from 'react';
import { FiPower } from 'react-icons/fi';

import { Container } from './styles';

import logoCristal from '../../../../assets/logocristal.png';

const HeaderAdm: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logoCristal} alt="logo" />

        <p>Área do administrador</p>

        <FiPower />
      </div>
    </Container>
  );
};

export default HeaderAdm;
