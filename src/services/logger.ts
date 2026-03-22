import { getAppConfig } from '@/configs/env';
import { Logger } from 'tslog';

const LOG_LEVEL_MAP = {
  silly: 0,
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  fatal: 6,
} as const;

const resolveMinLevel = (logLevel: string) => {
  const normalized = logLevel.toLowerCase() as keyof typeof LOG_LEVEL_MAP;
  return LOG_LEVEL_MAP[normalized] ?? LOG_LEVEL_MAP.debug;
};

const { appName, logLevel } = getAppConfig();

const logger = new Logger({
  name: appName,
  type: 'pretty',
  minLevel: resolveMinLevel(logLevel),
  prettyLogTimeZone: 'local',
  prettyLogTemplate:
    '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t{{nameWithDelimiterPrefix}}{{filePathWithLine}}\t',
  prettyLogStyles: {
    logLevelName: {
      '*': ['bold', 'whiteBright'],
      DEBUG: ['bold', 'cyan'],
      INFO: ['bold', 'green'],
      WARN: ['bold', 'yellow'],
      ERROR: ['bold', 'red'],
      FATAL: ['bold', 'whiteBright', 'bgRedBright'],
    },
    dateIsoStr: 'white',
    nameWithDelimiterPrefix: ['white', 'bold'],
    filePathWithLine: 'blackBright',
  },
  prettyInspectOptions: {
    colors: true,
    compact: false,
    depth: 4,
  },
});

export const serverLogger = logger.getSubLogger({ name: 'Server' });
export const httpLogger = logger.getSubLogger({ name: 'HTTP' });

export default logger;
