import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.section<ContainerProps>`
  padding: 1.4rem;
  width: 100%;
  border: 0;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & + section {
    margin-top: 8px;
  }

  div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    margin-bottom: 4px;
  }

  input {
    background: transparent;
    flex: 1;
    width: 100%;
    border: 0;
    color: var(--color-text-grey);

    border-bottom: 2px solid #232129;

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    ${props =>
      props.isFocused &&
      css`
        border-color: var(--color-text-price-primary);
      `}
    ${props =>
      props.isFilled &&
      css`
        border-color: var(--color-text-price-primary);
      `}
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 16px;
  margin-left: 16px;

  svg {
    margin-right: 0;
    height: 16px;
    width: 16px;
  }

  span {
    background: #c53030;
    color: #fff;
  }
`;
