import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiPlus, FiUpload, FiX } from 'react-icons/fi';

import { Link, useHistory, useParams } from 'react-router-dom';
import HeaderAdm from '../components/HeaderAdm';

import { Container, FormContainer, ImagesContainer } from './styles';
import InputRegister from '../../../components/InputRegister';
import TextArea from '../../../components/TextArea';

import api from '../../../services/api';

interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: string;
  max_parcels: number;
}

interface EditProductParams {
  id: string;
}

const EditProduct: React.FC = () => {
  const { id } = useParams<EditProductParams>();
  const [product, setProduct] = useState<Product>({} as Product);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const history = useHistory();

  useEffect(() => {
    api.get(`/products/${id}`).then(response => {
      setProduct(response.data);
      setPreviewImages([response.data.image_url]);
    });
  }, [id]);

  const handleDelete = useCallback(async () => {
    const response = confirm(
      'Você tem certeza que deseja excluir este produto?',
    );
    if (!response) {
      return;
    }

    await api.delete(`/products/${id}`);

    alert('Produto excluido com sucesso!');

    history.push('/adm/products');
  }, [history, id]);

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

  // falta validar!!
  const handleSubmit = useCallback(
    async (data: Product) => {
      await api.put(`/products/${id}`, data);

      alert('Produto excluido com sucesso!');

      history.push('/adm/products');
    },
    [history, id],
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

        <Form onSubmit={handleSubmit} initialData={product}>
          <div>
            <h4>Informações do produto</h4>
            <button type="button" onClick={handleDelete}>
              <FiX />
              Excluir
            </button>
          </div>

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

export default EditProduct;
