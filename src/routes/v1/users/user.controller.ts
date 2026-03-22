import type { Context } from 'hono';
import logger from '@/services/logger';
import userService from '@/services/User';
import type { CreateUserBody } from '@/schemas/user';
import type { AppEnv } from '@/types/env';

export const createUser = async (
  c: Context<AppEnv>,
  payload: CreateUserBody
) => {
  const { name } = payload;

  try {
    const user = userService.createUser({ name });
    return c.json(user, 201);
  } catch (error) {
    logger.error('User registration failed', error);
    return c.json({ error: 'User registration failed' }, 500);
  }
};

export const getUsers = (c: Context<AppEnv>) => {
  try {
    const users = userService.getUsers();
    return c.json(users);
  } catch (error) {
    logger.error('Failed to fetch users', error);
    return c.json({ error: 'Failed to fetch users' }, 500);
  }
};
