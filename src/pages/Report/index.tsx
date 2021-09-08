import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../errors/getValidationErrors';

import Header from '../../components/Header';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import { Container, ContainerButton, ButtonHeader, Content } from './styles';

interface ReportFormData {
  description: string;
}

const Report: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ReportFormData) => {
      console.log(data);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          description: Yup.string()
            .required('Há campos vazios')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // Enviar para api

      } catch (err) {

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [addToast]
  );


  return (
    <>
      <Header />
      <Container>
        <ContainerButton>
          <Link to="/"><ButtonHeader type="button">Voltar</ButtonHeader></Link>
        </ContainerButton>
        <Content>
          <h1>Descreva seu relato</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <TextArea name="report"></TextArea>
            <Button type="submit"><FiMail /> Enviar Relato</Button>
          </Form>
        </Content>
      </Container>
    </>
  );
}

export default Report;
