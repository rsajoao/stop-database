import { Router } from 'express';
import ThemeController from '../Controllers/ThemeController';
import authorization from '../Middlewares/authorization';
import idValidation from '../Middlewares/idMiddleware';
import themeValidation from '../Middlewares/themeMiddleware';

const ThemeRouter = Router();

ThemeRouter.post(
  '/themes',
  authorization,
  themeValidation,
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
  themeValidation,
  authorization,
  (req, res, next) => new ThemeController(req, res, next).updateTheme(),
);

ThemeRouter.get(
  '/themes/',
  (req, res, next) => new ThemeController(req, res, next).getThemes(),
);

ThemeRouter.get(
  '/themes/:id',
  (req, res, next) => new ThemeController(req, res, next).getThemes(),
);

export default ThemeRouter;
