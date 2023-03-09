import { Op } from 'sequelize';
import Answer from '../Models/AnswerModel';
import Category from '../Models/CategoryModel';
import Theme from '../Models/ThemeModel';
import User from '../Models/UserModel';

export default class CategoryService {
  constructor(private model = Category) { }

  public async getCategories(id?: number, answers: boolean = true) {
    let queryOptions: any = {};
    
    if (id) queryOptions.where = { id };
    
    if (answers) {
      queryOptions.include = [{
        model: Answer,
        as: 'answers',
        where: { visibility: 'public', status: { [Op.ne]: 'rejected' } },
        attributes: { exclude: ['userId', 'categoryId', 'updatedAt', 'status', 'visibility'] },
        include: [{
          model: User,
          as: 'byUser',
          attributes: ['id', 'username'],
        }],
        required: false,
      }];
    }

    queryOptions.attributes = ['id', 'name'];
    queryOptions.order = [['id', 'ASC']];

    const categories = await this.model.findAll(queryOptions);

    if (!categories.length) throw new Error('Category not found');
    if (categories.length === 1) return categories[0];

    return categories;
  }

  public async createCategory(name: string, themeId: number, role: 'user' | 'admin') {
    if (role !== 'admin') throw new Error('Unauthorized');

    const doesCategoryExist = await this.model.findAll({ where: { name } });
    if (doesCategoryExist.length) throw new Error('Category already exists');

    const doesThemeExist = await Theme.findByPk(themeId);
    console.log(doesThemeExist);

    if (!doesThemeExist) throw new Error('Theme not found');

    const newCategory = await this.model.create({ name, themeId }, { returning: true });

    return newCategory;
  }

  public async deleteCategory(id: number, role: 'admin' | 'user') {
    if (role !== 'admin') throw new Error('Unauthorized');

    const affectedRows: number = await this.model.destroy({ where: { id } });

    if (affectedRows === 0)  throw new Error('Category not found');
  }

  public async updateCategory(id: number, role: 'admin' | 'user', fields: Partial<Category>) {
    if (role !== 'admin') throw new Error('Unauthorized');

    const { id: _, ...rest } = fields;

    const [updated] = await this.model.update(
      { ...rest }, { where: { id } }
    );
    if (updated === 0) throw new Error('Coudn\'t update');
  }
}