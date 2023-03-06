import { NextFunction, Request, Response } from 'express';
import UserService from '../Services/UserService';

export default class UserController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserService();
  }

  public async createUser() {
    try {
      const { body: { username, email, password } } = this.req;
      
      const newUser = await this.service.createUser(username.toLowerCase(), email.toLowerCase(), password);

      return this.res.status(201).json(newUser);
    } catch (error) {
      this.next(error);
    }
  }

  public async login() {
    try {
      const { body: { user, password } } = this.req;

      const token = await this.service.login(user.toLowerCase(), password);

      return this.res.status(200).json({ token });
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteUser() {
    try {
      const { body: { userToken, password }, params: { id } } = this.req;
      await this.service.deleteUser(Number(id), password, userToken);

      return this.res.status(204).json();
    } catch(error) {
      this.next(error);
    }
  }

  public async getUsers() {
    try {
      const { params: { id } } = this.req;

      const result = await this.service.getUsers(Number(id));

      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}
