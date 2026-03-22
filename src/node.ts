import "dotenv/config";
import { serve } from "@hono/node-server";
import app from "@/app";
import { getAppConfig } from "@/configs/env";
import logger from "@/services/logger";

const { host, port } = getAppConfig();

serve(
  {
    fetch: app.fetch,
    hostname: host,
    port,
  },
  (info) => {
    logger.info(`Server is running on: http://${host}:${info.port}`);
  },
);
