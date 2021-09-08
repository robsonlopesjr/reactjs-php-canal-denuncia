import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';

import Header from '../../components/Header';

import { Container, ContainerButton, ButtonHeader, Content, InputGroup, TextArea, ButtonForm } from './styles';

const Report: React.FC = () => {
  const [newReportDescription, setNewReportDescription] = useState('');

  function handleCreateNewReport() {
    if (!newReportDescription) return;

    const newReport = {
      id: uuidv4(),
      description: newReportDescription,
    }

    console.log(newReport);
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerButton>
          <Link to="/"><ButtonHeader type="button">Voltar</ButtonHeader></Link>
        </ContainerButton>
        <Content>
          <h1>Descreva seu relato</h1>

          <InputGroup>
            <TextArea name="description" id="description" onChange={(e) => setNewReportDescription(e.target.value)}></TextArea>
            <ButtonForm type="submit" data-testid="add-task-button" onClick={handleCreateNewReport}>
              <FiMail size={16} color="#fff" /> Enviar Relato
            </ButtonForm>
          </InputGroup>
        </Content>
      </Container>
    </>
  );
}

export default Report;
