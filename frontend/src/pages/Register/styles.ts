import styled from 'styled-components';

export const Container = styled.main`
  padding: 20px 70px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;

  width: 700px;

  > div {
    width: 100%;
    color: var(--color-text-grey);
    margin: 0 auto;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-text-grey);

    h1 {
      font-size: 2.6rem;
    }

    span {
      font-size: 1.4rem;
    }
  }

  form {
    margin: 0 auto;
    padding-top: 20px;
    width: 100%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 20px auto;
      height: 5rem;
      width: 200px;
      border: 0;
      font-size: 1.6rem;
      font-weight: 600;
      border-radius: 10px;

      background-color: var(--color-orange-buttons);
      color: var(--color-text-buttons);

      transition: opacity 0.3s;

      svg {
        margin-right: 5px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
