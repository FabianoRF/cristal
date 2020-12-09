import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px 70px;

  > h2 {
    font-size: 2.6rem;
    padding-left: 50px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .first {
      border-right: 1px solid #cecece;
    }

    > div {
      flex-direction: column;
      padding: 50px;

      h2 {
        font-size: 2rem;
        padding-bottom: 20px;
      }

      button {
        height: 6rem;
        width: 200px;
        border: 0;
        background-color: var(--color-orange-buttons);
        font-size: 2.2rem;
        font-weight: 500;
        color: var(--color-text-buttons);
        border-radius: 10px;
        cursor: pointer;
        transition: opacity 0.3s;

        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;

        svg {
          margin-right: 5px;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
