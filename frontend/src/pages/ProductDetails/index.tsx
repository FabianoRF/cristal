import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product2mini from '../../assets/product2-mini.png';
import api from '../../services/api';

import ProductBox from '../../components/ProductBox';

import {
  Container,
  RelatedProductsContainer,
  InformationContainer,
} from './styles';
import Select from '../../components/Select';

interface ProductDetailsParams {
  id: string;
}

const optionsSelect = [
  { value: 'p', label: 'P' },
  { value: 'm', label: 'M' },
  { value: 'g', label: 'G' },
  { value: 'gg', label: 'GG' },
];

// falta no banco de dados: a numeração do produto e as fotos e a descrição detalhada(detalhes)
interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  max_parcels: number;
  description: string;
}

const ProductDetails: React.FC = () => {
  const params = useParams<ProductDetailsParams>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    api.get(`/products/${params.id}`).then(response => {
      setProduct(response.data);
    });
  }, [params.id]);

  return (
    <>
      <Header />

      <Container>
        <section>
          <div className="picture-container">
            <div className="small-picture">
              <img src={product2mini} alt="Fotos" />
              <img src={product2mini} alt="Fotos" />
              <img src={product2mini} alt="Fotos" />
              <img src={product2mini} alt="Fotos" />
            </div>

            <div className="big-picture">
              <img src={product2} alt="Foto" />
            </div>
          </div>

          <InformationContainer>
            <div>
              <h1>{product?.name}</h1>
              <p>{product?.description}</p>
            </div>

            <Form
              onSubmit={() => {
                console.log('form');
              }}
            >
              <Select
                labelTitle="Selecione o tamanho:"
                name="check"
                options={optionsSelect}
              />
            </Form>

            <div className="prices">
              <span className="product-parcels">Até 4x de R$ 20.99</span>
              <span className="product-price">
                R$
                {product?.price}
              </span>
            </div>

            <button type="button" className="buy-button">
              <FiArrowRightCircle />
              Comprar
            </button>
          </InformationContainer>
        </section>

        <section className="product-description">
          <h1>Detalhes do Produto:</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            erat massa, aliquam sit amet maximus sed, condimentum sit amet odio.
            Vivamus convallis quam vel tempus sollicitudin. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Donec eu tempor enim. Maecenas consectetur quam a
            ultricies cursus. Quisque id sollicitudin est, et sagittis tortor.
            Morbi eleifend nisl quis velit vehicula, a faucibus neque
            scelerisque. Praesent feugiat scelerisque neque vitae ultrices. Sed
            dignissim turpis orci, in mattis turpis rutrum id. Integer bibendum
            lectus metus, sed volutpat ante congue a.
          </p>
        </section>

        {/* aqui falta pesquisar produtos por categoria e listar alguns */}

        <RelatedProductsContainer className="related-products">
          <h1>Produtos Relacionados:</h1>
          <div>
            <Link to="/product-details/sem id ainda">
              <ProductBox
                id="asdf"
                image_url={product1}
                max_parcels={12}
                name="Conjunto Short e Cropped"
                price={46.99}
              />
            </Link>
            <Link to="/product-details/sem id ainda">
              <ProductBox
                id="asdf"
                image_url={product1}
                max_parcels={12}
                name="Conjunto Short e Cropped"
                price={46.99}
              />
            </Link>
            <Link to="/product-details/sem id ainda">
              <ProductBox
                id="asdf"
                image_url={product1}
                max_parcels={12}
                name="Conjunto Short e Cropped"
                price={46.99}
              />
            </Link>
            <Link to="/product-details/sem id ainda">
              <ProductBox
                id="asdf"
                image_url={product1}
                max_parcels={12}
                name="Conjunto Short e Cropped"
                price={46.99}
              />
            </Link>
          </div>
        </RelatedProductsContainer>
      </Container>

      <Footer />
    </>
  );
};

export default ProductDetails;
