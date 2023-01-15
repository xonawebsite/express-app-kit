export interface NotFoundMiddlewareConfig {
	mode: 'json' | 'plain' | 'static';
	staticDirName?: string;
	message?: string;
}