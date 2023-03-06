import { NextFunction, Request, Response } from 'express';

export default function idValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { params: { id } } = req;
  const idNumber = Number(id);

  if (Number.isNaN(idNumber) || !Number.isInteger(idNumber)) return res.status(400).json({
    message: '"id" must be a number',
  });

  next();
}
