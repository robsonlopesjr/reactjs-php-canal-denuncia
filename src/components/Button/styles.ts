import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #273FAD;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #FFF;
  width: 300px;
  font-weight: 500px;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-size: 1rem;

  &:hover {
    background: ${shade(0.2, '#273FAD')};
  }

  > svg {
    margin-right: 10px;
  }
`;
