import User from './UserModel';
import Theme from './ThemeModel';
import Category from './CategoryModel';
import Answer from './AnswerModel';

export function associateModels(): void {
  User.hasMany(Answer, { foreignKey: 'userId', as: 'answers' });
  Theme.hasMany(Category, { foreignKey: 'themeId', as: 'categories' });
  Answer.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
  Answer.belongsTo(User, { foreignKey: 'userId', as: 'byUser' });
  Category.hasMany(Answer, { foreignKey: 'categoryId', as: 'answers' });
}
