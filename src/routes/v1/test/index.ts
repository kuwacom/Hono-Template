import { Hono } from 'hono';
import type { AppEnv } from '@/types/env';

const testRouter = new Hono<AppEnv>();

testRouter.get('/', c => {
  return c.json({ message: 'Hello from /v1/test!' });
});

export default testRouter;
