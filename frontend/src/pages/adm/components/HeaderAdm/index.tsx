import React, { useCallback } from 'react';
import { FiPower } from 'react-icons/fi';

import { Container } from './styles';

import logoCristal from '../../../../assets/logocristal.png';
import { useAuth } from '../../../../hooks/auth';

const HeaderAdm: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <div>
        <img src={logoCristal} alt="logo" />

        <p>Área do administrador</p>

        <button type="button" onClick={handleSignOut}>
          <FiPower />
        </button>
      </div>
    </Container>
  );
};

export default HeaderAdm;
