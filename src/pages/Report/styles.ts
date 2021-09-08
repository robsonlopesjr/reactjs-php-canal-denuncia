import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const ContainerButton = styled.div`
  width: 100px;
`;

export const ButtonHeader = styled.button`
margin-bottom: 10px;
  background: #ff9000;
  height: 36px;
  border-radius: 4px;
  border: 0;
  padding: 0 10px;
  color: #FFF;
  width: 100%;
  font-weight: 500px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

export const Content = styled.div`
  form {
    width: 100%;
    text-align: center;

    button {
      display: flex;
      align-items: center;
    }
  }
`;
