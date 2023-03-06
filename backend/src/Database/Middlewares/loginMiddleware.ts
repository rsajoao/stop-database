import { NextFunction, Request, Response } from 'express';
import { emailRegex, usernameRegex } from './Regexes';

export default function loginValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { body: { user } } = req;
  
  if (!user) return res.status(400).json({ message: '"user" is required' });

  if ((!emailRegex.test(user) && !usernameRegex.test(user)) || user.length < 4) {
    return res.status(400).json({ message: 'Invalid user format' });
  }

  next();
}