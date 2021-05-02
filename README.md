# [`nodejs-typescript`](https://www.youtube.com/watch?v=UipIQ81kabs)

Learn how to use Typescript in your next Server applications using Nodejs. configuring typescript, connecting to a NoSQL Database such as Mongodb, using other Javascript code on the server.

- nodejs
- typescript
- mongodb
- express-handlebars

```ts
mkdir node_ts_app

npm init -y

npm i express express-bandlebars mongoose

npm install -g typescript

tsc --init

npm i -D @types/express typescript ts-node nodemon

npm i @types/express-bandlebars @types/mongoose
```

### issue

```ts
@types/express-handlebars error
access has been denied to resolve the property.
because it is not an own property of its parent

npm i -D handlebars@4.5.0
```
