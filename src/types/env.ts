export type AppBindings = {
  APP_NAME?: string;
  HOST?: string;
  PORT?: string;
  CORS_ORIGIN?: string;
  LOG_LEVEL?: string;
};

export type AppEnv = {
  Bindings: AppBindings;
};
