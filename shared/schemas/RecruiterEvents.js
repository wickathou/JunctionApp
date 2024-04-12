const mongoose = require('mongoose')
const {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql')
const Misc = require('../constants/misc')

const mongooseSchema = new mongoose.Schema({
    eventId: {
        type: String,
        required: true,
    },
    organisation: {
        type: String,
        default: '',
    },
})

const RecruiterEventType = new GraphQLObjectType({
    name: 'RecruiterEvent',
    fields: {
        eventId: {
            type: new GraphQLNonNull(GraphQLString),
        },
        organisation: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
})

const RecruiterEventInput = new GraphQLInputObjectType({
    name: 'RecruiterEventInput',
    fields: {
        eventId: {
            type: new GraphQLNonNull(GraphQLString),
        },
        organisation: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
})

module.exports = {
    mongoose: mongooseSchema,
    graphql: RecruiterEventType,
    graphqlInput: RecruiterEventInput,
}
