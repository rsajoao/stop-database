import { NextFunction, Request, Response } from 'express';

function verifyName(name: string): boolean {
  return name.length > 5;
}

function verifyId(id: unknown): boolean {
  const numberId = Number(id);

  return !Number.isNaN(numberId) && Number.isInteger(numberId);
}

export function newCategoryValidation(req: Request, res: Response, next: NextFunction) {
  const { body: { name, themeId } } = req;

  if (!name) return res.status(400).json({ message: '"name" is required'});
  if (!verifyName(name)) return res.status(400).json({ message: '"name" must contain at least 6 characters' });

  if (!themeId) return res.status(400).json({ message: '"themeId" is required' });
  if (!verifyId(themeId)) return res.status(400).json({ message: '"themeId" must be an integer number'});

  req.body.name = name.toUpperCase();

  next();
}

export function updateCategoryValidation(req: Request, res: Response, next: NextFunction) {
  const { body: { name, themeId } } = req;
  if (name) {
    req.body.name = name.toUpperCase();

    if (!verifyName(name)) return res.status(400).json({ message: '"name" must contain at least 6 characters' });
  }
  if (themeId && !verifyId(themeId)) return res.status(400).json({ message: '"themeId" must be an integer number'});
  
  next();
}