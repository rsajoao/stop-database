import Theme from '../Models/ThemeModel';
import Category from '../Models/CategoryModel';

export default class ThemeService {
  constructor(private model = Theme) { }

  public async getThemes(id?: number, categories: boolean = true): Promise<Theme | Theme[]> {
    let queryOptions: any = {};
  
    if (id) queryOptions.where = { id };
    
    if (categories) {
      queryOptions.include = [ { model: Category, as: 'categories', attributes: ['id', 'name'] }];
    }
    
    queryOptions.attributes = ['id', 'name'];
    queryOptions.order = [['id', 'ASC']];
    
    const themes = await this.model.findAll(queryOptions);
    
    if (!themes.length) throw new Error('Theme not found');

    if (themes.length === 1) return themes[0];
  
    return themes;
  }

  public async createTheme(theme: string, role: 'user' | 'admin'): Promise<Theme> {
    if (role !== 'admin') throw new Error('Unauthorized');

    const doesThemeExist = await this.model.findAll({ where: { name: theme } });
    
    if (doesThemeExist.length > 0) throw new Error('Theme already exists');

    const newTheme = await this.model.create({ name: theme }, { returning: true });
    return newTheme;
  }

  public async deleteTheme(id: number, role: 'user' | 'admin'): Promise<void> {
    if (role !== 'admin') throw new Error('Unauthorized');

   const affectedRows: number = await this.model.destroy({ where: { id } });

   if (affectedRows === 0) throw new Error('Theme not found');
  }

  public async updateTheme(id: number, role: 'user' | 'admin', fields: Partial<Theme>): Promise<void> {
    if (role !== 'admin') throw new Error('Unauthorized');

    const { id: _, ...rest } = fields;

    const [updated] = await this.model.update(
      { ...rest }, { where: { id } },
    );
    if (updated === 0) throw new Error('Coudn\'t update');
  }
}
