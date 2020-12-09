import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-background-in-white);
  margin: 1rem;
  padding: 1.6rem;

  &:hover .p-title,
  &:hover .p-parcels,
  &:hover .p-price {
    text-decoration-line: underline;
  }

  .p-image {
    transition: opacity 0.3s;
    object-fit: cover;

    height: 300px;
    width: 250px;
  }

  &:hover .p-image {
    opacity: 0.9;
  }

  .product-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.2rem;
  }

  .product-text .p-title {
    font-size: 1.6rem;
    color: var(--color-text-description);
  }

  .product-text .p-parcels {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .product-text .p-price {
    font-size: 2.6rem;
    font-weight: 500;
    color: var(--color-text-price-primary);
  }
`;
