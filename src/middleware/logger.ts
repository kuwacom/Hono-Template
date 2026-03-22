import { createMiddleware } from "hono/factory";
import logger from "@/services/logger";
import type { AppEnv } from "@/types/env";

export const loggerMiddleware = createMiddleware<AppEnv>(async (c, next) => {
  const startedAt = Date.now();

  logger.info(`Incoming request: ${c.req.method} ${c.req.path}`);

  await next();

  logger.info(`Response status: ${c.res.status} (${Date.now() - startedAt}ms)`);
});
