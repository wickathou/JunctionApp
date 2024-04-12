const mongoose = require('mongoose')
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')

const LegalNameSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String,
    },
    middleName: {
        required: false,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
})

const LegalNameType = new GraphQLObjectType({
    name: 'LegalName',
    fields: {
        firstName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        middleName: {
            type: GraphQLString,
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
})

module.exports = {
    mongoose: LegalNameSchema,
    graphql: LegalNameType,
}
