import React, { ChangeEvent, useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiPlus, FiUpload } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';
import HeaderAdm from '../components/HeaderAdm';

import { Container, FormContainer, ImagesContainer } from './styles';
import InputRegister from '../../../components/InputRegister';
import TextArea from '../../../components/TextArea';

import api from '../../../services/api';

interface ProductFormData {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: string;
  max_parcels: number;
}

const TableProducts: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const history = useHistory();

  const handleSelectImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const selectedImages = Array.from(e.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }, []);

  const handleSubmit = useCallback(
    async (data: ProductFormData) => {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('category', data.category);
      formData.append('description', data.description);
      formData.append('price', String(data.price));
      formData.append('quantity', data.quantity);
      formData.append('max_parcels', String(data.max_parcels));
      formData.append('image', images[0]);

      await api.post('/products', formData);

      // falta validar!!

      history.push('/adm/products');
    },
    [images, history],
  );

  return (
    <Container>
      <HeaderAdm />

      <FormContainer>
        <div>
          <Link to="/adm/products">
            <FiArrowLeft />
          </Link>
          <h3>Cadastrar produto</h3>
        </div>

        <Form onSubmit={handleSubmit}>
          <h4>Informações do produto</h4>
          <InputRegister name="name" type="text" label="Nome do Produto:" />
          <TextArea name="description" type="text" label="Descrição:" />

          <div className="group">
            <InputRegister name="quantity" type="number" label="Quantidade:" />
            <InputRegister name="category" type="text" label="Categoria:" />
          </div>

          <div className="group">
            <InputRegister
              name="price"
              type="number"
              label="Preço:"
              step="0.01"
              min="0"
              max="9999"
            />
            <InputRegister
              name="max_parcels"
              type="number"
              label="Máx de parcelas:"
            />
          </div>

          <ImagesContainer>
            <div className="input-block">
              <h4>Adicionar Fotos</h4>

              <div className="images-container">
                {previewImages.map(image => (
                  <img key={image} src={image} alt="nova foto" />
                ))}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={30} />
                </label>
              </div>
              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </div>
          </ImagesContainer>

          <button type="submit">
            <FiUpload />
            Cadastrar
          </button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default TableProducts;
