import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, Paragrafo, ButtonContainer, ButtonMenu } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Paragrafo>Esta empresa está sempre preocupado em manter o ambiente de trabalho íntegro e livre de irregularidades. Por isso, disponibilizamos para nossos colaboradores nosso Canal de Denúncia.</Paragrafo>
        <Paragrafo>Este canal é totalmente anônimo, garantimos sigilo e confidencialidade de seus relatos.</Paragrafo>
        <Paragrafo>Ao utilizar este Canal de Denúncia, você poderá fazer relatos de qualquer natureza, referentes a fatos que não estejam de acordo com nossos valores, com nossa Política de Compliance, Antissuborno e Anticorrupção.</Paragrafo>

        <ButtonContainer>
          <Link to="/report"><ButtonMenu type="button">Fazer relato</ButtonMenu></Link>
          <ButtonMenu type="button">Acompanhe seu relato</ButtonMenu>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Dashboard;
