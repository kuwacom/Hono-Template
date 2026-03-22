import "dotenv/config";
import { serve } from "@hono/node-server";
import app from "@/app";
import { getAppConfig } from "@/configs/env";
import { serverLogger } from "@/services/logger";

const { appName, host, port, logLevel } = getAppConfig();

serve(
  {
    fetch: app.fetch,
    hostname: host,
    port,
  },
  (info) => {
    serverLogger.info("Server started", {
      appName,
      url: `http://${host}:${info.port}`,
      logLevel,
      runtime: "node",
    });
  },
);
