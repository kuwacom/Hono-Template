type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const resolveConsoleMethod = (level: LogLevel) => {
  switch (level) {
    case 'debug':
      return console.debug;
    case 'info':
      return console.info;
    case 'warn':
      return console.warn;
    case 'error':
      return console.error;
    default:
      return console.log;
  }
};

const writeLog = (level: LogLevel, message: string, metadata?: unknown) => {
  const prefix = `[${new Date().toISOString()}] [${level.toUpperCase()}]`;
  const log = resolveConsoleMethod(level);

  if (typeof metadata === 'undefined') {
    log(prefix, message);
    return;
  }

  log(prefix, message, metadata);
};

const logger = {
  debug: (message: string, metadata?: unknown) => writeLog('debug', message, metadata),
  info: (message: string, metadata?: unknown) => writeLog('info', message, metadata),
  warn: (message: string, metadata?: unknown) => writeLog('warn', message, metadata),
  error: (message: string, metadata?: unknown) => writeLog('error', message, metadata),
};

export default logger;
