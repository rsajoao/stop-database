import { NextFunction, Request, Response } from 'express';

export default class {
  public static handler(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    let code: number;

    const { message, stack } = error;

    switch (message) {
      case 'Incorrect password':
      case '"themeId" must be an integer number':
        code = 400;
        break;
      case 'Unauthorized':
        code = 401;
        break;
      case 'User not found':
      case 'Theme not found':
      case 'Couldn\'t update':
        code = 404;
        break;
      case 'Username or email already in use':
      case 'Theme already exists':
      case 'Category already exists':
        code = 409;
        break;
      default:
        code = 500;
    }
    res.status(code).json({ message, stack });
    next();
  }
}