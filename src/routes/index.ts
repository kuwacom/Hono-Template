import { Hono } from 'hono';
import v1Router from '@/routes/v1';
import type { AppEnv } from '@/types/env';

const router = new Hono<AppEnv>();

router.route('/v1', v1Router);

export default router;
