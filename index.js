const schema = require("./schema/schema");
const graphqlHTTP = require("express-graphql");
const config = require("config");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

require("./startup/db")();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT || config.get("port");
app.listen(port, () => {
  console.log(`listening on ${port}...`);
});
