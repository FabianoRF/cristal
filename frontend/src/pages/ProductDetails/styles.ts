import styled from 'styled-components';

export const Container = styled.div`
  > section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 0px 70px;
    border-bottom: 1px solid var(--color-shadows-pictures-box);

    > div {
      display: flex;
      justify-content: flex-start;

      img {
        display: flex;
        flex-direction: column;
        padding: 1.6rem;

        img + img {
          padding-top: 1.6rem;
        }
      }
      .big-picture,
      .small-picture {
        padding: 1.6rem 0;
      }
    }
  }

  .product-description {
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .product-description h1 {
    font-size: 2.6rem;
  }

  .product-description p {
    padding-top: 10px;
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--color-text-grey);
  }
`;

export const InformationContainer = styled.section`
  flex: 1;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr 0.5fr;
  justify-content: space-between;
  padding: 1.6rem 0;

  margin-left: 5rem;

  div {
  }

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.6rem;
    color: var(--color-shadows-pictures-box);
  }

  label {
    font-size: 1.8rem;
  }

  .check-size-container {
    display: flex;
  }

  .check-size {
    margin-right: 10px;
  }

  .check-size + .check-size {
    border-left: 1px solid black;
    padding-left: 5px;
  }

  .check-size #check {
    width: 2rem;
    height: 3rem;
  }

  .check-size #check:checked {
    background: var(--color-orange-buttons);
  }

  .check-size label {
    left: 0;
    font-size: 1.6rem;
  }

  .prices {
    display: flex;
    flex-direction: column;
  }

  .prices .product-parcels {
    font-weight: bold;
    font-size: 1.6rem;
  }

  .prices .product-price {
    font-size: 5rem;
    color: var(--color-text-price-primary);
  }

  a {
    width: 100%;
  }

  button {
    height: 6rem;
    width: 200px;
    border: 0;
    background-color: var(--color-orange-buttons);
    font-size: 2.6rem;
    font-weight: 500;
    color: var(--color-text-buttons);
    border-radius: 10px;
    box-shadow: 0px 0.2px 2px var(--color-shadow-black);
    cursor: pointer;
    transition: opacity 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 5px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const RelatedProductsContainer = styled.div`
  padding: 0 70px;

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
