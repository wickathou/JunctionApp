const mongoose = require('mongoose')
const {
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInputObjectType,
} = require('graphql')

const RegistrationQuestionSchema = require('./RegistrationQuestion')

const RegistrationSectionSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: String,
    conditional: String,
    questions: [RegistrationQuestionSchema.mongoose],
})

const RegistrationSectionType = new GraphQLObjectType({
    name: 'RegistrationSection',
    fields: {
        label: {
            type: new GraphQLNonNull(GraphQLString),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: GraphQLString,
        },
        conditional: {
            type: GraphQLString,
        },
        questions: {
            type: new GraphQLList(RegistrationQuestionSchema.graphql),
        },
    },
})

const RegistrationSectionInput = new GraphQLInputObjectType({
    name: 'RegistrationSectionInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        label: {
            type: new GraphQLNonNull(GraphQLString),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: GraphQLString,
        },
        conditional: {
            type: GraphQLString,
        },
        questions: {
            type: new GraphQLList(RegistrationQuestionSchema.graphqlInput),
        },
    },
})

module.exports = {
    mongoose: RegistrationSectionSchema,
    graphql: RegistrationSectionType,
    graphqlInput: RegistrationSectionInput,
}
