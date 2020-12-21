import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FiCheck } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InputRegister from '../../components/InputRegister';

import { Container } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

interface RegisterParams {
  email: string;
}

interface RegisterFormData {
  name: string;
  cpf: string;
  date_of_birth: Date;
  password: string;
  password_confirmation: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { email } = useParams<RegisterParams>();
  const { signIn } = useAuth();
  const history = useHistory();

  // faz a validação e cadastro, se tudo certo ele ja faz o login
  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          cpf: Yup.string().required('CPF obrigatório'),
          date_of_birth: Yup.string().required(
            'Data de nascimento obrigatória',
          ),
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Confirmação incorreta',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          ...data,
          email,
        });

        await signIn({
          email,
          password: data.password,
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          alert(
            'Ocorreu um erro no cadastro, verifique suas credenciais e tente novamente!',
          );
        }
      }
    },
    [email, history, signIn],
  );

  return (
    <>
      <Header />

      <Container>
        <div>
          <h1>Cadastre-se:</h1>
          <span>
            Por favor preencha alguns dados sobre você, será bem rapidinho!
          </span>
        </div>

        <Form onSubmit={handleSubmit} className="form-register">
          <InputRegister label="Nome:" name="name" type="text" />

          <InputRegister label="CPF:" name="cpf" type="text" />

          <InputRegister
            label="Data de nascimento:"
            name="date_of_birth"
            type="date"
          />

          <InputRegister label="Senha:" name="password" type="password" />

          <InputRegister
            label="Confirme a senha:"
            name="password_confirmation"
            type="password"
          />

          <button type="submit" className="btn-register">
            <FiCheck />
            Finalizar cadastro
          </button>
        </Form>
      </Container>

      <Footer />
    </>
  );
};

export default Register;
