# express-app-kit
The minimalistic yet supercharged kit for express apps.

This library is intended to become a robust, easy to use, helper kit for creating express apps.

Right now, it just features a short way to create an express app.

# The Goal
I just want to say this: I'm a Rails fan for many reasons...

Express app kit comes as an inspiration after asking "How to make express more like rails?".

The idea is to make possible to create AND manage a project with a CLI commands (maybe you're thinking in `express-generator` right now (and yeah, me too, but, I want to make something twice better, imagine to create a MVC api with database integration and JWT auth already included)).

This library is the very early start point to my plan. This library will provide several tools to make developers' life easier, initially reducing the amount of code needed to get an express app up and running at least 4 times.

Next step is to add database and authentication helpers, so the developer can add database support (ideally) with one line.

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

## Documentation
Generated API specification docs is available [here](https://xonawebsite.github.io/express-app-kit).

## Notes
The resulting app is already packed by default with json support, helmet, morgan, cookieParser and expressSession.

## Contributing
Every contribution is welcome. Take a look at the issues and public project, pick a task, solve it, create a passing test for it, and send a pull request.


## Roadmap
The general upcomming features are these:
- Easy to use built-in database-agnostic authentication and authorization system
- One-function-call database integration
- One-function-call session management
- CLI tool to scaffold and manage the created project
- Plug and play interface
