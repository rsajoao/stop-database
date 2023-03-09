import { DataTypes, Model } from 'sequelize';
import db from '.';
import Category from './CategoryModel';

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
  },
  visibility: {
    type: DataTypes.ENUM('public', 'privated'),
    defaultValue: 'public',
    allowNull: false,
  },
  letter: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
});
