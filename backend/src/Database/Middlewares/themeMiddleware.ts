import { NextFunction, Request, Response } from 'express';

function verifyName(name: string): boolean {
  return name.length > 5;
}

export default function themeValidation(req: Request, res: Response, next: NextFunction) {
  const { body: { name } } = req;

  if (!name) return res.status(400).json({ message: '"name" is required'});
  if (!verifyName(name)) return res.status(400).json({ message: '"name" must be at least 6 characters long' });

  req.body.name = name.toUpperCase();

  next();
}