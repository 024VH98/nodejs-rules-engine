const fastify = require("fastify");
const app = fastify();
const { Engine } = require("json-rules-engine");
let engine = new Engine();

engine.addRule({
  conditions: {
    all: [
      {
        fact: "temperature",
        operator: "equal",
        value: 100
      }
    ]
  },
  onSuccess() {
    console.log("On success called")
  },
  onFailure() {
    console.log("On failure called")
  },
  event: {
    type: "messge",
    params: {
      data: "hello-world!"
    }
  }
});

const facts = { temperature: 200};

engine.run(facts);

app.listen(3000);