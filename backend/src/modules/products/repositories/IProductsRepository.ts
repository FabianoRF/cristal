import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IUpdateProductDTO from '../dtos/IUpdateProductDTO';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findById(id: string): Promise<Product | undefined>;
  findByCategory(category: string): Promise<Product[]>;
  findAll(): Promise<Product[]>;
  delete(id: string): Promise<void>;
  update(product: IUpdateProductDTO): Promise<Product>;
  save(product: Product): Promise<Product>;
}
