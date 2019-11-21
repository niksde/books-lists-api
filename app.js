const schema = require("./schema/schema");
const graphqlHTTP = require("express-graphql");

const express = require("express");
const app = express();

require("./startup/db")();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listening on 4000...");
});
