import type { AppBindings } from "@/types/env";

const DEFAULT_APP_NAME = "hono-restful-api";
const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 3000;
const DEFAULT_CORS_ORIGIN = "*";

const getProcessEnv = () => {
  if (typeof process === "undefined") {
    return undefined;
  }

  return process.env;
};

const parsePort = (value?: string) => {
  const port = Number(value);
  return Number.isInteger(port) && port > 0 ? port : DEFAULT_PORT;
};

export const getAppConfig = (bindings?: AppBindings) => {
  const processEnv = getProcessEnv();

  return {
    appName: bindings?.APP_NAME ?? processEnv?.APP_NAME ?? DEFAULT_APP_NAME,
    host: bindings?.HOST ?? processEnv?.HOST ?? DEFAULT_HOST,
    port: parsePort(bindings?.PORT ?? processEnv?.PORT),
    corsOrigin:
      bindings?.CORS_ORIGIN ?? processEnv?.CORS_ORIGIN ?? DEFAULT_CORS_ORIGIN,
  };
};
