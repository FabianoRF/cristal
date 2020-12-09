import React from 'react';
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Register: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <div className="mensage">
          <h1>Cadastre-se:</h1>
          <h3>
            Por favor preencha alguns dados sobre você, será bem rapidinho!
          </h3>
        </div>

        <div className="campin">
          <div id="email">
            <label htmlFor="text">
              Email
              <input type="text" id="email" />
            </label>
          </div>

          <div id="cpf">
            <label htmlFor="cpf">
              CPF
              <input type="text" id="cpf" />
            </label>
          </div>

          <div id="name">
            <label htmlFor="name">
              Nome Completo
              <input type="text" id="name" />
            </label>
          </div>

          <div id="date">
            <label htmlFor="date">
              Data de nascimento
              <input type="date" id="date" placeholder="DD/MM/AAAA" />
            </label>
          </div>

          <div id="senha">
            <label htmlFor="senha">
              Senha(minímo de 6 caracteres)
              <input type="text" id="senha" />
            </label>
          </div>

          <div id="conf_senha">
            <label htmlFor="conf_senha">
              Confirmar senha
              <input type="text" id="conf_senha" />
            </label>
          </div>
        </div>

        <div className="button">
          <a href="sadfas">
            <button type="button">Continuar</button>
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Register;
