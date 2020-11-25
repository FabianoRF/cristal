import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductDTO from '@modules/products/dtos/IUpdateProductDTO';
import { getRepository, Repository } from 'typeorm';

import Product from '../entities/Product';
import IProductsRepository from '../../../repositories/IProductsRepository';

export default class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create(data: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(data);

    await this.ormRepository.save(product);

    return product;
  }

  public async findByCategory(category: string): Promise<Product[]> {
    const product = await this.ormRepository.find({
      where: {
        category,
      },
    });

    return product;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }

  public async findAll(limit?: number): Promise<Product[]> {
    const products = limit
      ? await this.ormRepository.find({
          take: limit,
        })
      : await this.ormRepository.find();

    return products;
  }

  public async update(product: IUpdateProductDTO): Promise<Product> {
    await this.ormRepository.save(product);

    const updatedProduct = this.ormRepository.create(product);

    return updatedProduct;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async save(product: Product): Promise<Product> {
    return this.ormRepository.save(product);
  }
}
