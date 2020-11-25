import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

const productsRoutes = Router();
const usersController = new ProductsController();

productsRoutes.post('/', usersController.create);
productsRoutes.get('/', usersController.index);
productsRoutes.get('/:id', usersController.show);
productsRoutes.delete('/:id', usersController.delete);
productsRoutes.put('/:id', usersController.update);

export default productsRoutes;
