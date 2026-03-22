import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { getAppConfig } from '@/configs/env';
import { loggerMiddleware } from '@/middleware/logger';
import router from '@/routes';
import logger from '@/services/logger';
import type { AppEnv } from '@/types/env';

export const createApp = () => {
  const app = new Hono<AppEnv>();

  app.use('*', (c, next) => {
    const middleware = cors({
      origin: getAppConfig(c.env).corsOrigin,
    });

    return middleware(c, next);
  });

  app.use('*', loggerMiddleware);

  app.route('/', router);

  app.notFound((c) => {
    if (c.req.path.startsWith('/v1')) {
      return c.text('', 404);
    }

    return c.text('', 403);
  });

  app.onError((error, c) => {
    logger.error('Unhandled application error', error);
    return c.json({ error: 'Internal server error' }, 500);
  });

  return app;
};

const app = createApp();

export default app;
