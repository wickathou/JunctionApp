const mongoose = require('mongoose')
const {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql')
const Misc = require('../constants/misc')

const mongooseSchema = new mongoose.Schema({
    recruiterId: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        default: '',
    },
})

const EventRecruitersType = new GraphQLObjectType({
    name: 'EventRecruiters',
    fields: {
        recruiterId: {
            type: new GraphQLNonNull(GraphQLString),
        },
        organization: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
})

const EventRecruitersInput = new GraphQLInputObjectType({
    name: 'EventRecruitersInput',
    fields: {
        recruiterId: {
            type: new GraphQLNonNull(GraphQLString),
        },
        organization: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
})

module.exports = {
    mongoose: mongooseSchema,
    graphql: EventRecruitersType,
    graphqlInput: EventRecruitersInput,
}
