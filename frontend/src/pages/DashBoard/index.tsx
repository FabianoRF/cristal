import React, { useEffect, useMemo, useState } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductBox from '../../components/ProductBox';

import api from '../../services/api';

import { Banner, ProductContainer } from './styles';

interface ProductData {
  id: string;
  name: string;
  price: number;
  image_url: string;
  max_parcels: number;
}

const DashBoard: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    api.get('/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <Banner>
        <span className="spot-title">Cristal moda feminina</span>
        <span className="spot-title">
          A loja que acredita no potencial das mulheres.
        </span>
      </Banner>

      <ProductContainer>
        {products.map((product, index) => (
          <Link to={`/product-details/${product.id}`}>
            <ProductBox
              id={product.id}
              image_url={product.image_url}
              max_parcels={product.max_parcels}
              name={product.name}
              price={product.price}
              key={product.id}
            />
          </Link>
        ))}
      </ProductContainer>
      <Footer />
    </>
  );
};

export default DashBoard;
