import { Hono } from 'hono';
import testRouter from '@/routes/v1/test';
import usersRouter from '@/routes/v1/users';
import type { AppEnv } from '@/types/env';

const v1Router = new Hono<AppEnv>();

v1Router.route('/test', testRouter);
v1Router.route('/users', usersRouter);

export default v1Router;
