import { NextFunction, Request, Response } from 'express';
import ThemeService from '../Services/ThemesServices';

export default class ThemeController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ThemeService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ThemeService();
  }

  public async getThemes() {
    try {
      const { params: { id } } = this.req;
      const themes = await this.service.getThemes(Number(id));
      return this.res.status(200).json(themes);
    } catch (error) {
      this.next(error);
    }
  }

  public async createTheme() {
    try {
      const { body: { theme, userToken: { role } } } = this.req;
      const newTheme = await this.service.createTheme(theme.toUpperCase(), role);

      return this.res.status(201).json(newTheme);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteTheme() {
    try {
      const { body: { userToken: { role } }, params: { id } } = this.req;
      await this.service.deleteTheme(Number(id), role);

      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }

  public async updateTheme() {
    try {
      const { body: { userToken: { role }, ...fields }, params: { id } } = this.req;

      await this.service.updateTheme(Number(id), role, { ...fields });

      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }

  public async getThemesWithCategories() {
    try {
      const { params: { id } } = this.req;

      const themes = await this.service.getThemesWithCategories(Number(id));

      return this.res.status(200).json(themes);
    } catch (error) {
      this.next(error);
    }
  }
}