import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '@modules/products/services/CreateProductService';
import DeleteProductService from '@modules/products/services/DeleteProductService';
import UpdateProductService from '@modules/products/services/UpdateProductService';
import ListOneProductService from '@modules/products/services/ListOneProductService';
import ListProductsService from '@modules/products/services/ListProductsService';

interface IRequestQueryIndex {
  category?: string | undefined;
  limit?: string | undefined;
}

export default class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      category,
      description,
      price,
      quantity,
      max_parcels,
      image_url,
    } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      category,
      description,
      price,
      quantity,
      max_parcels,
      image_url,
    });

    return response.json(product);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProduct = container.resolve(DeleteProductService);

    await deleteProduct.execute(id);

    return response.send();
  }

  async update(request: Request, response: Response): Promise<Response> {
    const {
      name,
      category,
      description,
      price,
      quantity,
      max_parcels,
      image_url,
    } = request.body;

    const { id } = request.params;

    const updateProduct = container.resolve(UpdateProductService);

    const product = await updateProduct.execute({
      id,
      name,
      category,
      description,
      price,
      quantity,
      max_parcels,
      image_url,
    });

    return response.json(product);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listOneProduct = container.resolve(ListOneProductService);

    const product = await listOneProduct.execute(id);

    return response.json(product);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { category, limit } = request.query as IRequestQueryIndex;

    const listProducts = container.resolve(ListProductsService);

    const users = await listProducts.execute({ category, limit });

    return response.json(users);
  }
}
