import styled from 'styled-components';

export const Container = styled.main`
  .text-top-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    width: 100%;

    > div {
      display: flex;
      align-items: center;

      h3 {
        font-weight: 500;
        font-size: 22px;
        line-height: 34px;

        text-align: center;
        letter-spacing: 0.05em;

        color: #666666;
      }

      input {
        width: 500px;
        margin-left: 20px;
        border-radius: 10px;
        padding: 10px;

        border: 1px solid #666666;
        color: #666666;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 5rem;
      width: 200px;
      border: 0;
      font-size: 16px;
      font-weight: 600;
      border-radius: 10px;

      background-color: var(--color-green);
      color: var(--color-text-buttons);

      transition: opacity 0.3s;

      svg {
        margin-right: 5px;
      }

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

export const Table = styled.table`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  margin-top: 20px;

  border: 1px solid #c0c0c0;
  border-radius: 20px;

  tr {
    border-top: 1px solid #c0c0c0;
  }

  th {
    text-align: start;
    font-size: 16px;
  }

  td {
    text-align: start;
    font-size: 12px;

    > input {
      width: 70px;
      border-radius: 10px;
      padding: 6px;

      border: 1px solid #666666;
      color: #666666;
    }
  }

  .td-edit {
    display: flex;
    align-items: center;

    svg {
      color: #00a000;
      margin-right: 5px;
      width: 18px;
      height: 18px;
      transition: color 0.2s;

      &:hover {
        color: #66c666;
      }
    }
  }

  th,
  td {
    padding-top: 20px;
    padding-left: 10px;
    padding-bottom: 20px;
  }
`;
