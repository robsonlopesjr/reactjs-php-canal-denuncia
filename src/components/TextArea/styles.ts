import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
  `}

  textarea {
    width: 100%;
    margin-top: 10px;
    width: 100%;
    height: 200px;
    resize:none;
    font-size: 1.5rem;
    padding: 5px;
  }
`;
