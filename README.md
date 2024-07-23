# Node.js template project

You can use this project as a starting point for trying out Lekko. Follow the instructions on our Get started guide.

## Run locally

Start "live" server:

```
$ npm run start
```

- `ts-node` transpiles TypeScript on the fly
- `nodemon` watches for source code changes and restart the server

Test it:

```
$ curl http://127.0.0.1:3000
Hello World
```

## Build

Transpile to JS:

```
npm run build
```

Run it:

```
$ node ./dist/server.js
```
