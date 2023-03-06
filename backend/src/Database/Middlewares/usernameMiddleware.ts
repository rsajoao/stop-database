import { NextFunction, Request, Response } from 'express';
import { usernameRegex } from '../Utils/Regexes';

export default function usernameValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { body: { username } } = req;

  if (!username) return res.status(400).json({ message: '"username" is required' });

  if (!usernameRegex.test(username) || username.length < 4) {
    return res.status(400).json({ message: 'Invalid username' });
  }

  next();
}