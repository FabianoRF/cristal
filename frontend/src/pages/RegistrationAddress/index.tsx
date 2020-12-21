import React from 'react';
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RegistrationAddress: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container-address">
        <div id="titulo">
          <h1>Endereço de entrega</h1>
          <p>Por favor preencha alguns dados sobre você, será bem rapidinho!</p>
        </div>

        <div className="campos">
          <div id="nome">
            <label htmlFor="name">
              Nome do destinatario
              <input type="text" id="name" />
            </label>
          </div>

          <div id="cep">
            <label htmlFor="cep">
              CEP
              <input type="text" id="cep" />
            </label>
          </div>

          <div id="rua">
            <div id="camp_1">
              <label htmlFor="name">
                {' '}
                Rua
                <input type="text" id="name" />
              </label>
            </div>

            <div id="camp_2">
              <label htmlFor="name">
                Número
                <input type="text" id="name" />
              </label>
            </div>
          </div>

          <div id="bairro">
            <label htmlFor="name">
              Bairro
              <input type="text" id="name" />
            </label>
          </div>

          <div id="complemento">
            <label htmlFor="name">
              Complemento
              <input type="text" id="name" />
            </label>
          </div>

          <div id="cidade">
            <div id="cid">
              <label htmlFor="name">
                Cidade
                <input type="text" id="name" />
              </label>
            </div>

            <div id="est">
              <label htmlFor="name">
                Estado
                <input type="text" id="name" />
              </label>
            </div>
          </div>

          <div className="button">
            <a href="adsfasd">
              <button type="button">Continuar</button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RegistrationAddress;
