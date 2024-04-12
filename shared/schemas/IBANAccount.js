const mongoose = require('mongoose')
const { GraphQLNonNull, GraphQLObjectType, GraphQLString } = require('graphql')

const IBANAccountSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    },
    swift: {
        type: String,
        required: true,
    },
})

const IBANAccountType = new GraphQLObjectType({
    name: 'IBANAccount',
    fields: {
        accountNumber: {
            type: new GraphQLNonNull(GraphQLString),
        },
        bankName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        swift: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
})

module.exports = {
    mongoose: IBANAccountSchema,
    graphql: IBANAccountType,
}
