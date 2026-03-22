import { Hono } from 'hono';
import { zValidator } from '@/middleware/zod-validator';
import { CreateUserBodySchema } from '@/schemas/user';
import userIdRouter from './[userId]';
import { createUser, getUsers } from './user.controller';
import type { AppEnv } from '@/types/env';

const usersRouter = new Hono<AppEnv>();

usersRouter.post('/', zValidator('json', CreateUserBodySchema), c => {
  return createUser(c, c.req.valid('json'));
});
usersRouter.get('/', getUsers);
usersRouter.route('/:userId', userIdRouter);

export default usersRouter;
