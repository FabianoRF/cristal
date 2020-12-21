import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Container } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/InputLogin';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

interface RegisterFormData {
  email: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formLoginRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmitToRegister = useCallback(
    (data: RegisterFormData) => {
      history.push(`/register/${data.email}`);
    },
    [history],
  );

  const handleSubmitLogin = useCallback(
    async (data: LoginFormData) => {
      try {
        formLoginRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formLoginRef.current?.setErrors(errors);
        } else {
          alert('Não foi possivel entrar, verifique suas credenciais!');
        }
      }
    },
    [history, signIn],
  );

  return (
    <>
      <Header />

      <Container>
        <h2>Identificação</h2>
        <div>
          <div className="first">
            <h2>Quero me cadastrar:</h2>
            <Form onSubmit={handleSubmitToRegister}>
              <Input
                name="email"
                type="email"
                icon={FiMail}
                placeholder="Digite seu email"
              />

              <button type="submit" className="buy-button">
                <FiLogIn />
                Cadastrar
              </button>
            </Form>
          </div>

          <div>
            <h2>Já sou cliente:</h2>
            <Form ref={formLoginRef} onSubmit={handleSubmitLogin}>
              <Input
                name="email"
                type="email"
                icon={FiMail}
                placeholder="Digite seu email"
              />
              <Input
                name="password"
                type="password"
                icon={FiLock}
                placeholder="Digite sua senha"
              />

              <button type="submit" className="buy-button">
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
