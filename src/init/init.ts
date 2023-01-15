import logger from 'morgan';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import expressSession from 'express-session';
import helmet from 'helmet';
import { stringGenerator } from '../utils';
import { ExpressAppConfig } from '../interfaces';
import { ExpressAppType } from '../enums';
import { notFoundMiddleware } from '../middleware';
import { ExpressAppLogLevel } from '../types';

export const defaultExpressAppConfig = {
	appType: ExpressAppType.EXPRESS_API_APP,
	logging: true,
	logLevel: 'dev' as ExpressAppLogLevel,
	cookiesSupport: true,
	staticDirSupport: true,
	staticDirName: 'uploads',
	jsonSupport: true,
	security: true,
}

export function expressApp(config: ExpressAppConfig = defaultExpressAppConfig) {
	const app = express();

	if (config.logging && config.logLevel) {
		app.use(logger(config.logLevel));
	}

	app.use(express.urlencoded({ extended: false }));

	if (config.cookiesSupport) {
		app.use(cookieParser());

		if (app.get('env') == 'development') {
			// development session management
			app.use(expressSession({
				secret: stringGenerator(16),
				genid: () => stringGenerator(32),
				resave: true,
				saveUninitialized: false,
				cookie: {
					secure: true,
					httpOnly: true,
					expires: new Date(Date.now() + (24 * 60 * 60 * 1000))
				}
			}));
		} else {
			// production session management
		}
	}

	if (config.staticDirSupport && config.staticDirName) {
		app.use(express.static(path.join(__dirname, config.staticDirName)));
	}

	if (config.jsonSupport) {
		app.use(express.json());
	}

	if (config.security) {
		app.disable('x-powered-by');
		app.use(helmet());
	}

	return app;
}