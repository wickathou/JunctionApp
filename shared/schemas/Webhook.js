const mongoose = require('mongoose')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLInputObjectType,
} = require('graphql')

// TODO: The Project ref here might be an issue
const WebhookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    resource: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    enabled: {
        type: Boolean,
        required: true,
    },
})

const WebhookType = new GraphQLObjectType({
    name: 'Webhook',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        resource: {
            type: new GraphQLNonNull(GraphQLString),
        },
        action: {
            type: new GraphQLNonNull(GraphQLString),
        },
        url: {
            type: new GraphQLNonNull(GraphQLString),
        },
        enabled: {
            type: GraphQLBoolean,
        },
    },
})

const WebhookInput = new GraphQLInputObjectType({
    name: 'WebhookInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        resource: {
            type: new GraphQLNonNull(GraphQLString),
        },
        action: {
            type: new GraphQLNonNull(GraphQLString),
        },
        url: {
            type: new GraphQLNonNull(GraphQLString),
        },
        enabled: {
            type: GraphQLBoolean,
        },
    },
})

module.exports = {
    mongoose: WebhookSchema,
    graphql: WebhookType,
    graphqlInput: WebhookInput,
}
