require('dotenv/config');
import { sign, verify, JwtPayload } from 'jsonwebtoken'

const secret = process.env.JWT_SECRET as string;

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export function createToken(payload: object): string {
  const token = sign(payload, secret, jwtConfig);

  return token;
}

export function verifyToken(token: string): JwtPayload {
  const payload = verify(token, secret);

  return payload as JwtPayload;
}
