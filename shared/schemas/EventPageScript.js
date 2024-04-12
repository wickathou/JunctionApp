const mongoose = require('mongoose')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
} = require('graphql')
const { GraphQLBoolean } = require('graphql')

const EventPageScriptSchema = new mongoose.Schema({
    page: {
        type: String,
    },
    script: {
        type: String,
    },
    approved: {
        type: Boolean,
        default: false,
    },
})

const EventPageScriptType = new GraphQLObjectType({
    name: 'EventPageScript',
    fields: {
        page: {
            type: new GraphQLNonNull(GraphQLString),
        },
        script: {
            type: new GraphQLNonNull(GraphQLString),
        },
        approved: {
            type: new GraphQLNonNull(GraphQLBoolean),
        },
    },
})

const EventPageScriptInput = new GraphQLInputObjectType({
    name: 'EventPageScriptInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        page: {
            type: new GraphQLNonNull(GraphQLString),
        },
        script: {
            type: new GraphQLNonNull(GraphQLString),
        },
        approved: {
            type: new GraphQLNonNull(GraphQLBoolean),
        },
    },
})

module.exports = {
    mongoose: EventPageScriptSchema,
    graphql: EventPageScriptType,
    graphqlInput: EventPageScriptInput,
}
