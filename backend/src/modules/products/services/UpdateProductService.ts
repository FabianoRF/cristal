import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  max_parcels: number;
  image_url: string;
}

@injectable()
class ListProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    id,
    name,
    category,
    description,
    price,
    quantity,
    max_parcels,
    image_url,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('This product not existing.');
    }

    const updatedProduct = this.productsRepository.update({
      id,
      name,
      category,
      description,
      price,
      quantity,
      max_parcels,
      image_url,
    });

    return updatedProduct;
  }
}

export default ListProductService;
