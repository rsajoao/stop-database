import { Router } from 'express'
import UserRouter from './UserRouter';

const routers = Router();

routers.use(UserRouter);

export default routers;
