import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiSearch } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../errors/getValidationErrors';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, ContainerButton, ButtonHeader, Content, Paragrafo } from './styles';
import api from '../../services/api';

interface FollowFormData {
  tracking: string;
}

interface ReportProps {
  id: number;
  hash: string;
  message: string;
  created_at: string;
}

const Follow: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [report, setReport] = useState<ReportProps>();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: FollowFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          tracking: Yup.string()
            .required('Digite um código de acompanhamento válido')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/visualizar.php', {
          hash: data.tracking,
        })
          .then((resp) => {
            if (resp.data.erro === false) {
              setReport(resp.data.records)
            } else {
              addToast({
                type: 'error',
                title: 'Erro ao pesquisar o relato',
                description: resp.data.message,
              });
            }
          });

      } catch (err) {

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro ao pesquisar o relato',
            description: errors.message,
          });

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao pesquisar o relato',
          description: 'Ocorreu um erro ao pesquisar o relato, tente novamente mais tarde.',
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
          <h1>Acompanhar relato</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="tracking" icon={FiMail} placeholder="Código de acompanhamento" />
            <Button type="submit"><FiSearch /> Pesquisar Relato</Button>
          </Form>
        </Content>

        <Paragrafo><strong>Código de Acompanhamento:</strong> {report?.hash}</Paragrafo>
        <Paragrafo><strong>Descrição do Relato:</strong> {report?.message}</Paragrafo>
        <Paragrafo><strong>Data do relato:</strong> {report?.created_at}</Paragrafo>
      </Container>
    </>
  );
}

export default Follow;
