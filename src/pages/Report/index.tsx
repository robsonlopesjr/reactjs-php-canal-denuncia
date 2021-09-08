import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../errors/getValidationErrors';

import Header from '../../components/Header';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import { Container, ContainerButton, ButtonHeader, Content } from './styles';
import api from '../../services/api';

interface ReportFormData {
  message: string;
}

const Report: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ReportFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          message: Yup.string()
            .required('Há campos vazios')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/cadastrar.php', {
          message: data.message,
          hash: uuidv4()
        })
          .then((resp) => {
            console.log(resp)
            if (resp.data.erro === false) {
              addToast({
                type: 'success',
                title: 'Relato enviado com sucesso',
                description: resp.data.mensagem,
              });

              history.push({
                pathname: '/message',
                search: '?hash=' + resp.data.dados,
              });
            } else {
              addToast({
                type: 'error',
                title: 'Erro ao gravar o relato',
                description: resp.data.mensagem,
              });
            }
          });

      } catch (err) {

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro ao enviar o relato',
            description: errors.message,
          });

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao enviar o relato',
          description: 'Ocorreu um erro ao enviar o relato, tente novamente mais tarde.',
        });
      }
    },
    [addToast, history]
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
            <TextArea name="message"></TextArea>
            <Button type="submit"><FiMail /> Enviar Relato</Button>
          </Form>
        </Content>
      </Container>
    </>
  );
}

export default Report;
