import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../Auth/token';
import { UserPayload } from '../Interface/UserInterface';

export default function authorization(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { authorization: token } = req.headers;

    if (!token) return res.status(401).json({ message: 'Authentication token is missing' })

    const { id, username, email, role } = verifyToken(token);
    
    req.body.userToken = { id, username, email, role };

    next()
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message })
  }
}