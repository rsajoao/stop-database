import { Router } from 'express';
import ThemeController from '../Controllers/ThemeController';
import authorization from '../Middlewares/authorization';
import idValidation from '../Middlewares/idMiddleware';
import fieldsValidation from '../Middlewares/themeMiddleware';

const ThemeRouter = Router();

ThemeRouter.post(
  '/themes',
  authorization,
  (req, res, next) => new ThemeController(req, res, next).createTheme(),
);

ThemeRouter.delete(
  '/themes/:id',
  idValidation,
  authorization,
  (req, res, next) => new ThemeController(req, res, next).deleteTheme(),
);

ThemeRouter.patch(
  '/themes/:id',
  idValidation,
  fieldsValidation,
  authorization,
  (req, res, next) => new ThemeController(req, res, next).updateTheme(),
);

ThemeRouter.get(
  '/themes/categories',
  (req, res, next) => new ThemeController(req, res, next).getThemesWithCategories(),
);

ThemeRouter.get(
  '/themes/categories/:id',
  (req, res, next) => new ThemeController(req, res, next).getThemesWithCategories(),
);

ThemeRouter.get(
  '/themes',
  (req, res, next) => new ThemeController(req, res, next).getThemes(),
);

ThemeRouter.get(
  '/themes/:id',
  idValidation,
  (req, res, next) => new ThemeController(req, res, next).getThemes(),
);

export default ThemeRouter;
