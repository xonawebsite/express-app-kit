# express-app-kit
The minimalistic yet supercharged kit for express apps.

This library is intended to become a robust, easy to use, helper kit for creating express apps.

Right now, it just features a short way to create an express app.

## Installation
Use your preferred package manager to install it in your project:

```bash
npm install --save express-app-kit

# or

yarn add express-app-kit
```

## Use
To create a basic app all you need to do is require the library and call the `expressApp` function:

- Using TypeScript:
	```ts
	import { experssApp } from 'express-app-kit';

	const app = experssApp();
	```
- Using JavaScript:
	```js
	const { expressApp } = require('express-app-kit');

	const app = expressApp();
	```

You can add the built-in error and not found middlewares by importing and adding them to the middleware chain:

```ts
import { expressApp, notFoundMiddleware, errorMiddleware } from 'express-app-kit';

const app = expressApp();

app.use(notFoundMiddleware());
app.use(errorMiddleware('Custom error message'));

app.listen(3000, () => {
	console.log('App started and listening on port 3000');
});
```

or

```js
const { expressApp, notFoundMiddleware, errorMiddleware } = require('express-app-kit');

const app = expressApp();

app.use(notFoundMiddleware());
app.use(errorMiddleware('Custom error message'));

app.listen(3000, () => {
	console.log('App started and listening on port 3000');
});
```

## Notes
The resulting app is already packed by default with json support, helmet, morgan, cookieParser and expressSession.

## Contributing
Every contribution is welcome. Take a look at the issues and public project, pick a task, solve it, create a passing test for it, and send a pull request.
