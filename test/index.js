const { expressApp, notFoundMiddleware } = require('../dist');
const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const http = require('http');

var app;
var server;
const hello = 'Hello World!';

describe('expressApp', () => {
	before(() => {
		app = expressApp({ logging: false });
		app.get('/', (req, res) => {
			res.end(hello);
		});
		app.get('/json', (req, res) => {
			res.json({ message: hello });
		});
		app.use(notFoundMiddleware({ mode: 'plain' }));
		server = http.createServer(app).listen(3000);
	});

	it('creates an app', () => {
		assert.isOk(app);
	});

	it('responses to requests', () => {
		http.get('http://localhost:3000/', (res) => {
			var data = '';
			assert.equal(res.statusCode, 200);
			res.on('data', (chunk) => {
				data += chunk;
			});
			res.on('end', () => {
				assert.isOk(data);
				assert.equal(data, hello);
			});
		});
	});

	it('responses with a not found message', () => {
		http.get('http://localhost:3000/users', (res) => {
			var data = '';
			assert.equal(res.statusCode, 404);
			res.on('data', (chunk) => {
				data += chunk;
			});
			res.on('end', () => {
				assert.isOk(data);
				assert.equal(data, 'Resource not found.');
			});
		});
	});

	it('responses with a json object', () => {
		http.get('http://localhost:3000/json', (res) => {
			var data = '';
			assert.equal(res.statusCode, 200);
			res.on('data', (chunk) => {
				data += chunk.toString();
			});
			res.on('end', () => {
				assert.isOk(data);
				assert.equal(data, JSON.stringify({ message: hello }));
			});
		});
	});

	after(() => {
		server.close();
	});
});