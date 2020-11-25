import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class ListOneProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(id: string): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('This product not existing.');
    }

    return product;
  }
}

export default ListOneProductService;
