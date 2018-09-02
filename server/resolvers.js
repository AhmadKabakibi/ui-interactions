const Event = require("./models/event");

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
        }
    }
};

module.exports = resolvers;