import { DataTypes, Model } from 'sequelize';
import db from '.';
import Category from './CategoryModel';

export default class Theme extends Model {
  declare id: number;
  declare name: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Theme.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'themes',
});

Theme.hasMany(Category, { foreignKey: 'themeId', as: 'categories' });
