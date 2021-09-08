import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Paragrafo = styled.p`
  margin-bottom: 0.5rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-content: center;
  justify-content: space-around;
`

export const ButtonMenu = styled.button`
  background: #273FAD;
  font-weight: 600;
  border-radius: 10px;
  border: 0;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;

  padding: 1.5rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#273FAD')};
  }
`
