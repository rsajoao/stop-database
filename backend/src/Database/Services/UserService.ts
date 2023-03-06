import User from '../Models/UserModel';
import IUser, { NewUser, UserPayload } from '../Interface/UserInterface';
import { Op } from 'sequelize';
import { createToken } from '../Auth/token';
import { compareHash, generateHash } from '../Utils/bcryptjs';
import Answer from '../Models/AnswerModel';
import Category from '../Models/CategoryModel';

export default class UserService {
  constructor(private model = User) { }

  private async doesUserExist(username: string, email: string): Promise<boolean> {
    const user = await this.model.findAll({ where: { [Op.or]: [{ username }, { email }] } });

    if (user.length > 0) return true;
    return false;
  }

  public async createUser(username: string, email: string, password: string): Promise<NewUser> {
    if (await this.doesUserExist(username, email)){
      throw new Error('Username or email already in use');
    }
    
      await this.model.create({ username, email, password: generateHash(password)}, { returning: true });

      return { username, email, role: 'user' };
  }

  public async login(username: string, password: string): Promise<string> {
    const user = await this.model.findOne({ where: { [Op.or]: [{ username }, { email: username }] }});

    if (!user) throw new Error('User not found');

    if (!compareHash(password, user.password)) throw new Error('Incorrect password');

    const { id, email, role } = user;

    const token = createToken({ id, username: user.username, email, role });

    return token;
  }

  public async deleteUser(id: number, password: string, userToken: UserPayload): Promise<void> {
    if (id !== userToken.id) throw new Error('Invalid token');
    
    const user = await this.model.findByPk(id) as User;

    if (!compareHash(password, user.password)) throw new Error('Incorrect password');

    await this.model.destroy({ where: { id } });
  }

  public async getUsers(id?: number): Promise<User[] | User> {
    let queryOptions: any = {}

    if (id) {
      queryOptions.where = { id };
    };
    queryOptions.attributes = ['id', 'username', 'email', 'role'];
    queryOptions.order = [['id', 'ASC']];

    const users = await this.model.findAll(queryOptions);

    if (!users.length) throw new Error('User not found');

    if (users.length === 1) return users[0] as User;

    return users as User[];
  }

  public async getUserAnswers(id: number, tokenId: number) {
    if (id !== tokenId) throw new Error('Unauthorized');
  
    const userAnswers = await this.model.findOne({
      where: { id },
      include: [{
        model: Answer,
        as: 'answers',
        attributes: ['id', 'answer', 'visibility', 'status'],
        include: [{
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        }]
      }],
      attributes: ['id', 'username', 'email', 'role'],
    });
  
    return userAnswers;
  }
}
