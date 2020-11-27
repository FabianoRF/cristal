import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import { inject, injectable } from 'tsyringe';

// import AppError from '@shared/errors/AppError';s

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  max_parcels: number;
  image_url: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    name,
    category,
    description,
    price,
    quantity,
    max_parcels,
    image_url,
  }: IRequest): Promise<Product> {
    // tratar aqui regras referentes a categoria do produto
    const filename = await this.storageProvider.saveFile(image_url);

    const product = await this.productsRepository.create({
      name,
      category,
      description,
      price,
      quantity,
      max_parcels,
      image_url: filename,
    });

    return product;
  }
}

export default CreateProductService;
