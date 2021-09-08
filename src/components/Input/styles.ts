import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #FFF;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #273FAD;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
  `}

  ${props =>
    props.isFocused &&
    css`
      color: #273FAD;
      border-color: #273FAD;
  `}

  ${props =>
    props.isFilled &&
    css`
      color: #273FAD;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 1rem;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
