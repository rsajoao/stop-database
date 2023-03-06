import { Router } from 'express';
import UserController from '../Controllers/UserController';
import emailValidation from '../Middlewares/emailMiddleware';
import usernameValidation from '../Middlewares/usernameMiddleware';
import passwordValidation from '../Middlewares/passwordMiddleware';
import loginValidation from '../Middlewares/loginMiddleware';
import authorization from '../Middlewares/authorization';

const UserRouter = Router();

UserRouter.post(
  '/register',
  emailValidation,
  usernameValidation,
  passwordValidation,
  (req, res, next) => new UserController(req, res, next).createUser(),
);

UserRouter.post(
  '/login',
  loginValidation,
  passwordValidation,
  (req, res, next) => new UserController(req, res, next).login(),
);

UserRouter.delete(
  '/delete/:id',
  authorization,
  (req, res, next) => new UserController(req, res, next).deleteUser(),
);

UserRouter.get(
  '/users',
  (req, res, next) => new UserController(req, res, next).getUsers(),
);

UserRouter.get(
  '/users/:id',
  (req, res, next) => new UserController(req, res, next).getUsers(),
);

export default UserRouter;
