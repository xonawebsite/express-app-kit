import { ExpressAppType } from '../enums';
import { ExpressAppLogLevel } from '../types';
import { NotFoundMiddlewareConfig } from './not-found-middleware-config';

export interface ExpressAppConfig {
	appType?: ExpressAppType;
	logging?: boolean;
	logLevel?: ExpressAppLogLevel;
	cookiesSupport?: boolean;
	staticDirSupport?: boolean;
	jsonSupport?: boolean;
	staticDirName?: string;
	security?: boolean;
	notFoundConfig?: NotFoundMiddlewareConfig;
}