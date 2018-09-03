const qlTools = require("graphql-tools");
const resolvers =  require("./resolvers");

const typeDefs = `
 type Event {
  _type: String!
  type: String!
  productId: Int
 }

 type View {
  _type: String!
  type: String!
  pageName: Int
  productsCount: Int
 }

 type Query {
  getEvent(_type: String!): Event
  allEvents: [Event]
  allViews: [View]
 }

 input EventInput {
  type: String!
  productId: Int
 }
 
 input ViewInput {
    type: String!
    pageName: Int
    productsCount: Int
 }

 type Mutation {
  createEvent(input: EventInput) : Event
  createView(input: ViewInput) : View
 }  
`;

const schema = qlTools.makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;