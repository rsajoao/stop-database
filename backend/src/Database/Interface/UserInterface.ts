export default interface IUser {
  id?: number | string;
  username?: string;
  email?: string;
  password?: string;
  role?: 'admin' | 'user';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserPayload {
  id: number | string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}