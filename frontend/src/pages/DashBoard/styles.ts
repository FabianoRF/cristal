import styled from 'styled-components';

import bannerImg from '../../assets/banner.jpg';

export const Banner = styled.section`
  background: url(${bannerImg}) no-repeat;
  background-size: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: cover;

  .spot-title {
    font-family: 'Dancing Script', cursive;
    text-shadow: 5px;
  }

  span {
    font-size: 10rem;
    color: var(--color-background-in-white);
    text-shadow: 0.1rem 0.11rem rgba(0, 0, 0, 0.2);
  }

  span + span {
    padding-top: 8rem;
    font-size: 3rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 70px;

  background-color: var(--color-background-in-grey);
`;
