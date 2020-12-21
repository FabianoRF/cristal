import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--color-shadows-pictures-box);
  box-shadow: none;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    padding: 10px 0;

    img {
      width: 200px;
      height: 70.02px;
      left: 68px;
      top: 27px;
    }

    p {
      font-weight: 500;
      font-size: 29px;
      line-height: 34px;

      text-align: center;
      letter-spacing: 0.05em;

      color: #666666;
    }

    button {
      border: 0;
      background: transparent;

      svg {
        color: #666666;
        height: 45px;
        width: 45px;
        transition: color 0.2s;

        &:hover {
          color: var(--color-orange-buttons);
        }
      }
    }
  }
`;
