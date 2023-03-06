import { NextFunction, Request, Response } from 'express';

export default function passwordValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { body: { password } } = req;
  
  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (password.length < 4) {
    return res.status(400).json({ message: 'the field "password" must contain at least 4 characters' });
  }

  next();
}