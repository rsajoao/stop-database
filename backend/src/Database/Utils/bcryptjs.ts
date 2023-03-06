import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

const salt = genSaltSync(10);

export function generateHash(password: string): string {
  const hash = hashSync(password, salt);
  
  return hash;
}

export function compareHash(password: string, hash: string): boolean {
  const result = compareSync(password, hash);

  return result;
}
