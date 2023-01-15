import { NotFoundMiddlewareConfig } from '../interfaces/not-found-middleware-config';

export function notFoundMiddleware(config: NotFoundMiddlewareConfig = { mode: 'json' }) {
	if (config.mode === 'json') {
		return (req: any, res: any) => {
		    res.status(404).json({
		        code: 404,
		        message: config.message ? config.message : 'Resource not found.',
		    });
		}
	} else if (config.mode === 'static' && config.staticDirName) {
		return (req: any, res: any) => {
		    res.status(404).render(config.staticDirName);
		}
	} else if (config.mode === 'plain') {
		return (req: any, res: any) => {
			res.status(404).end(config.message ? config.message : 'Resource not found.');
		}
	} else {
		return (req: any, res: any) => {
			res.status(404).end(config.message ? config.message : 'Resource not found.');
		}
	}
}