import { NextFunction, Request, Response } from 'express';

export default function fieldsValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { body: { id, name } } = req;
  if (id) {
    if (Number.isNaN(Number(id)) || !Number.isInteger(Number(id))) return res.status(400).json({
      message: '"id" must be a integer number',
    });
  }
  if (name) {
    if (name.length < 5) return res.status(400).json({
      message: '"name" length must be at least 5 characters long',
    });
    req.body.name = name.toUpperCase();
  }

  next();
}
