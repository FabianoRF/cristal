import React, { useEffect, useState } from 'react';
import { FiEdit, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import HeaderAdm from '../components/HeaderAdm';

import { Container, Table } from './styles';

interface ProductData {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: string;
  max_parcels: number;
}

const TableProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [showProducts, setShowProducts] = useState<ProductData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    api.get('/products').then(response => {
      setProducts(response.data);
      setShowProducts(response.data);
    });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm),
      );
      setShowProducts(results);
    } else {
      setShowProducts(products);
    }
  }, [searchTerm, products]);

  const handleChangeSearchTerm = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <Container>
      <HeaderAdm />

      <div className="text-top-list">
        <div>
          <h3>Seus produtos:</h3>
          <input
            type="text"
            id="txtBusca"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
        </div>

        <Link to="/adm/register-product">
          <FiPlus />
          Adicionar produto
        </Link>
      </div>

      <Table className="table01">
        <thead>
          <tr>
            <th>Nome:</th>
            <th>Preço:</th>
            <th>Categoria:</th>
            <th>Quantidade:</th>
          </tr>
        </thead>

        <tbody>
          {showProducts.map(product => (
            <tr key={product.id}>
              <td className="td-edit">
                <FiEdit />
                {product.name}
              </td>
              <td>
                R$
                {product.price}
              </td>
              <td>{product.category}</td>
              <td>
                {/* implementar aqui uma chamada para alterar apenas a quantidade do produto */}
                <input type="number" value={product.quantity} />
                {/* <select name="quantity" id="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="+10">+10</option>
                  <option value="20">+20</option>
                  <option value="30">+30</option>
                  <option value="40">+40</option>
                  <option value="50">+50</option>
                  <option value="60">+60</option>
                  <option value="70">+70</option>
                  <option value="80">+80</option>
                  <option value="90">+90</option>
                  <option value="100">+100</option> 
                </select> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableProducts;
