import { NextFunction, Request, Response } from 'express';
import { emailRegex } from './Regexes';

export default function emailValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { body: { email } } = req;
  
  if (!email) return res.status(400).json({ message: '"email" is required' });

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  next();
}