import React from 'react';
import { Form } from '@unform/web';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Container } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

const Login: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <h2>Identificação</h2>
        <div>
          <div className="first">
            <h2>Quero me cadastrar:</h2>
            <Form
              onSubmit={() => {
                console.log('form');
              }}
            >
              <Input
                name="email"
                type="email"
                icon={FiMail}
                placeholder="Digite seu email"
              />

              <button type="button" className="buy-button">
                <FiLogIn />
                Cadastrar
              </button>
            </Form>
          </div>

          <div>
            <h2>Já sou cliente:</h2>
            <Form
              onSubmit={() => {
                console.log('form');
              }}
            >
              <Input
                name="email"
                type="email"
                icon={FiMail}
                placeholder="Digite seu email"
              />
              <Input
                name="password"
                type="password"
                icon={FiMail}
                placeholder="Digite sua senha"
              />

              <button type="button" className="buy-button">
                <FiLogIn />
                Entrar
              </button>
            </Form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
