const express = require("express");
const graphlHTTP = require( "express-graphql");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require( "mongoose");
const schema = require( "./schema");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 4050;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/gql_db`, {useNewUrlParser: true});

app.get("/", (req, res) => {
    res.json({
        msg: "Welcome to UI Interactions GraphQL"
    })
});
app.use("/graphql", graphlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
console.log("Running a GraphQL API server at localhost:4050/graphql");
});
