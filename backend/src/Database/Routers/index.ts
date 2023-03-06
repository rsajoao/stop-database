import { Router } from 'express'
import UserRouter from './UserRouter';
import ThemeRouter from './ThemeRouter';

const routers = Router();

routers.use(UserRouter);
routers.use(ThemeRouter);

export default routers;
