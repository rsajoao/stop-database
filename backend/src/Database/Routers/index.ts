import { Router } from 'express'
import UserRouter from './UserRouter';
import ThemeRouter from './ThemeRouter';
import CategoryRouter from './CategoryRouter';

const routers = Router();

routers.use(UserRouter);
routers.use(ThemeRouter);
routers.use(CategoryRouter);

export default routers;
