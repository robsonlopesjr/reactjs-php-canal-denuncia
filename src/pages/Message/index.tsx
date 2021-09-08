import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../../components/Header';

import { Container, Paragrafo, ButtonContainer, ButtonMenu } from './styles';



const Message: React.FC = () => {

  const [hash, setHash] = useState('');

  const params = useLocation();

  useEffect(() => {
    let text = params.search.split("=");

    setHash(text[1]);
  }, [params.search]);


  return (
    <>
      <Header />
      <Container>
        <h1>Seu relato foi enviado com sucesso...</h1>
        <Paragrafo>Agradecemos o seu compromentimento em manter o ambiente de trabalho íntegro e livre de irregularidades</Paragrafo>
        <Paragrafo>O seu código de acompanhamento: <strong>{hash}</strong></Paragrafo>
        <Paragrafo>Utilize esse código para acompanhar o andamento do seu relato e nossa tratativa.</Paragrafo>

        <ButtonContainer>
          <Link to="/"><ButtonMenu type="button">Voltar para tela inicial</ButtonMenu></Link>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Message;
