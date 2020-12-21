import styled from 'styled-components';

export const Container = styled.main``;

export const FormContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    padding: 20px 0;
    max-width: 1200px;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 1px solid #666666;

    svg {
      height: 26px;
      width: 26px;
      margin-right: 10px;

      color: #666666;
    }

    h3 {
      font-weight: 500;
      font-size: 22px;
      line-height: 34px;

      text-align: center;
      letter-spacing: 0.05em;

      color: #666666;
    }
  }

  form {
    padding: 20px 0;
    max-width: 800px;
    width: 100%;
    border-bottom: 1px solid #666666;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        margin: 0;
        background-color: #ff4040;
        height: 36px;
        width: 100px;
      }
    }

    h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 34px;

      letter-spacing: 0.05em;

      color: #666666;
    }

    .group {
      display: flex;
    }

    button {
      margin: 20px auto;
      display: flex;
      align-items: center;
      justify-content: center;

      height: 56px;
      width: 180px;
      border: 0;
      font-size: 16px;
      font-weight: 600;
      border-radius: 10px;

      background-color: var(--color-green);
      color: var(--color-text-buttons);

      transition: opacity 0.3s;

      svg {
        margin-right: 5px;
        height: 18px;
        width: 18px;
      }

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

export const ImagesContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  .input-block {
    margin-top: 10px;

    max-width: 800px;
    width: 100%;

    h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 34px;

      letter-spacing: 0.05em;

      color: #666666;
    }
  }

  .input-block + .input-block {
    margin-top: 24px;
  }

  .input-block label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  .input-block label span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }

  .input-block input {
    height: 64px;
    padding: 0 16px;
  }

  .input-block .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
    margin: 10px 0;
  }

  .input-block .images-container img {
    width: 100%;
    height: 156px;
    object-fit: cover;
    border-radius: 20px;
  }

  .input-block .images-container .new-image {
    width: 100%;
    height: 156px;
    background: #f5f8fa;
    border: 2px dashed var(--color-green);
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: var(--color-green);
    }
  }

  .input-block input[type='file'] {
    display: none;
  }

  .input-block .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
