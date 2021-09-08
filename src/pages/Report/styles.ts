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

`;

export const InputGroup = styled.form`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  flex-direction: column;

  background: #fff;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
margin-top: 10px;
  width: 100%;
  height: 200px;
  resize:none;
  font-size: 1.5rem;
  padding: 5px;
`;

export const ButtonForm = styled.button`
  margin-top: 10px;
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: #3FAD27;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 14px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  > svg {
    margin-right: 10px;
  }
`;

