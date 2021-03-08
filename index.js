const fastify = require("fastify");
const app = fastify();
const { Engine } = require("json-rules-engine");
let engine = new Engine();

app.listen(3000);