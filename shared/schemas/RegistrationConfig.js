const mongoose = require('mongoose')
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
} = require('graphql')

const RegistrationConfigSchema = new mongoose.Schema({
    optionalFields: {
        type: [String],
    },
    requiredFields: {
        type: [String],
    },
})

const RegistrationConfigType = new GraphQLObjectType({
    name: 'RegistrationConfig',
    fields: {
        optionalFields: {
            type: new GraphQLList(GraphQLString),
        },
        requiredFields: {
            type: new GraphQLList(GraphQLString),
        },
    },
})

const RegistrationConfigInput = new GraphQLInputObjectType({
    name: 'RegistrationConfigInput',
    fields: {
        optionalFields: {
            type: new GraphQLList(GraphQLString),
        },
        requiredFields: {
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        },
    },
})

module.exports = {
    mongoose: RegistrationConfigSchema,
    graphql: RegistrationConfigType,
    graphqlInput: RegistrationConfigInput,
}
