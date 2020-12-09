import { inject, injectable } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  category?: string;
  limit?: string; // utilizado na paginação
}

@injectable()
class ListProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ category, limit }: IRequest): Promise<Product[]> {
    const products = category
      ? await this.productsRepository.findByCategory(category)
      : await this.productsRepository.findAll();

    return products;
  }
}

export default ListProductService;
