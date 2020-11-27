import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ProductsController from '../controllers/ProductsController';

const productsRoutes = Router();
const usersController = new ProductsController();
const upload = multer(uploadConfig.multer);

productsRoutes.post('/', upload.single('image'), usersController.create);
productsRoutes.get('/', usersController.index);
productsRoutes.get('/:id', usersController.show);
productsRoutes.delete('/:id', usersController.delete);
productsRoutes.put('/:id', usersController.update);

export default productsRoutes;
