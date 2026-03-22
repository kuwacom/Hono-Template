import { Hono } from 'hono';
import { zValidator } from '@/middleware/zod-validator';
import { UserParamsSchema } from '@/schemas/user';
import { getUser } from './user.controller';
import type { AppEnv } from '@/types/env';

const userIdRouter = new Hono<AppEnv>();

userIdRouter.get('/', zValidator('param', UserParamsSchema), (c) => {
  return getUser(c, c.req.valid('param'));
});

export default userIdRouter;
