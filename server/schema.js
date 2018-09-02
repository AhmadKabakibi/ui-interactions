const qlTools = require("graphql-tools");
const resolvers =  require("./resolvers");

const typeDefs = `
 type Event {
  _type: String!
  type: String!
  data: String
 }

 type Query {
  getEvent(_type: String!): Event
  allEvents: [Event]
 }

 input EventInput {
  type: String!
  data: String
 }

 type Mutation {
  createEvent(input: EventInput) : Event
 }
`;

const schema = qlTools.makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;