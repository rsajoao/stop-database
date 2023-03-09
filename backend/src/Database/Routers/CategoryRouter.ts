import { Router } from 'express';
import CategoryController from '../Controllers/CategoryController';
import authorization from '../Middlewares/authorization';
import { newCategoryValidation, updateCategoryValidation } from '../Middlewares/categoryMiddleware';
import idValidation from '../Middlewares/idMiddleware';

const CategoryRouter = Router();

CategoryRouter.post(
  '/categories',
  authorization,
  newCategoryValidation,
  (req, res, next) => new CategoryController(req, res, next).createCategory(),
);

CategoryRouter.delete(
  '/categories/:id',
  idValidation,
  authorization,
  (req, res, next) => new CategoryController(req, res, next).deleteCategory(),
);

CategoryRouter.patch(
  '/categories/:id',
  idValidation,
  updateCategoryValidation,
  authorization,
  (req, res, next) => new CategoryController(req, res, next).updateCategory(),
)

CategoryRouter.get(
  '/categories',
  (req, res, next) => new CategoryController(req, res, next).getCategories(),
);

CategoryRouter.get(
  '/categories/:id',
  (req, res, next) => new CategoryController(req, res, next).getCategories(),
);

export default CategoryRouter;
