import { NextFunction, Request, Response } from 'express';

export default class {
  public static handler(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    let code: number;

    const { message } = error;

    switch (message) {
      case 'Username or email already in use':
        code = 409;
        break;
      case 'User not found':
        code = 404;
        break;
      case 'Incorrect password':
        code = 400;
        break;
      default:
        code = 500;
    }
    res.status(code).json({ message });
    next();
  }
}