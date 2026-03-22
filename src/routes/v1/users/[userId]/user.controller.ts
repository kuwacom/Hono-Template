import type { Context } from 'hono';
import logger from '@/services/logger';
import userService from '@/services/User';
import type { UserParams } from '@/schemas/user';
import type { AppEnv } from '@/types/env';

export const getUser = (c: Context<AppEnv>, params: UserParams) => {
  const { userId } = params;

  try {
    const user = userService.getUserById(userId);

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    return c.json(user);
  } catch (error) {
    logger.error('Failed to fetch user', error);
    return c.json({ error: 'Failed to fetch user' }, 500);
  }
};
