import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f4f4f4;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid var(--color-text-grey);
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
      color: var(--color-text-price-primary);
      border-color: var(--color-text-price-primary);
    `}
  ${props =>
    props.isFilled &&
    css`
      color: var(--color-text-price-primary);
    `}



  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--color-text-grey);

    &::placeholder {
      color: var(--color-text-grey);
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
    margin-right: 0;
  }

  span {
    background: #c53030;
    color: #fff;
  }
`;
