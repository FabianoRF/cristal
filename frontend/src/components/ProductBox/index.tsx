import React, { useMemo } from 'react';

import { Container } from './styles';

interface ProductBoxProps {
  id: string;
  name: string;
  price: number;
  image_url: string;
  max_parcels: number;
}

const ProductBox: React.FC<ProductBoxProps> = ({
  id,
  image_url,
  max_parcels,
  name,
  price,
}) => {
  const parceledPricesFormatted = useMemo(() => {
    const parcelValue = price / max_parcels;

    return `Até ${max_parcels}x de R$${parcelValue.toFixed(2)}`;
  }, [max_parcels, price]);

  return (
    <Container className="product-container" key={id}>
      <img className="p-image" src={image_url} alt={name} />

      <div className="product-text">
        <span className="p-title">{name}</span>
        <span className="p-parcels">{parceledPricesFormatted}</span>
        <span className="p-price">
          R$
          {price}
        </span>
      </div>
    </Container>
  );
};

export default ProductBox;
