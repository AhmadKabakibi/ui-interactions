const Event = require("./models/event");
const View = require("./models/view");

const resolvers = {
    Query : {
       async getEvent(root, {_type}){
           return await Event.findById(_type);
       },
       async allEvents(){
           return await Event.find();
        }
    },
    Mutation: {
        async createEvent(root, {data}) {
           return await Event.create(data);
        },
        async createView(root, {data}) {
            return await View.create(data);
         }
    }
};

module.exports = resolvers;