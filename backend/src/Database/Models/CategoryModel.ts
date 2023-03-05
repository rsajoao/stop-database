import { DataTypes, Model } from 'sequelize';
import db from '.';
import Answer from './AnswerModel';
import Theme from './ThemeModel';

export default class Category extends Model {
  declare id: number;
  declare name: string;
  declare themeId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  themeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'theme_id',
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'categories'
});

Category.hasMany(Answer, { foreignKey: 'category_id', as: 'answers' });
Category.belongsTo(Theme, { foreignKey: 'theme_id', as: 'theme' });