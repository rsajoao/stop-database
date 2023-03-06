import { DataTypes, Model } from 'sequelize';
import db from '.';
import Answer from './AnswerModel';

export default class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
  declare role: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
});

User.hasMany(Answer, { foreignKey: 'userId', as: 'answers' });
