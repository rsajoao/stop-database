import { NextFunction, Request, Response } from 'express';
import CategoryService from '../Services/CategoryService';

export default class CategoryController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CategoryService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CategoryService();
  }

  public async getCategories() {
    try {
      const { params: { id }, query: { a } } = this.req;

      const answers = a === 'true' as string;      

      const categories = await this.service.getCategories(Number(id), answers);

      return this.res.status(200).json(categories);
    } catch (error) {
      this.next(error);
    }
  }

  public async createCategory() {
    try {
      const { body: { userToken: { role }, name, themeId } } = this.req;

      const newCategory = await this.service.createCategory(name, Number(themeId), role);

      return this.res.status(200).json(newCategory);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteCategory() {
    try {
      const { body: { userToken: { role } }, params: { id } } = this.req;
      await this.service.deleteCategory(Number(id), role);

      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCategory() {
    try {
      const { body: { userToken: { role }, ...fields }, params: { id } } = this.req;

      await this.service.updateCategory(Number(id), role, { ...fields });

      return this.res.status(200).json();
    } catch (error) {
      this.next(error);
    }
  }
}