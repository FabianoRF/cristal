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
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 20px auto;
        height: 5rem;
        width: 200px;
        border: 0;
        font-size: 1.8rem;
        font-weight: 600;
        border-radius: 10px;

        background-color: var(--color-orange-buttons);
        color: var(--color-text-buttons);

        cursor: pointer;
        transition: opacity 0.3s;

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
