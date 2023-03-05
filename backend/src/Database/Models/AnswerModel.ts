import { DataTypes, Model } from 'sequelize';
import db from '.';
import Category from './CategoryModel';
import User from './UserModel';

export default class Answer extends Model {
  declare id: number;
  declare answer: string;
  declare rarity: 'rare' | 'common' | 'unknown';
  declare userId: number;
  declare categoryId: number;
  declare status: 'accepted' | 'rejected' | 'pending';
  declare createdAt: Date;
  declare updatedAt: Date;
}

Answer.init({
  answer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rarity: {
    type: DataTypes.ENUM('rare', 'common', 'unknown'),
    defaultValue: 'unknown',
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    field: 'user_id'
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id',
  },
  status: {
    type: DataTypes.ENUM('accepted', 'rejected', 'pending',),
    defaultValue: 'pending',
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'answers',
});

Answer.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Answer.belongsTo(User, { foreignKey: 'userId', as: 'user' });