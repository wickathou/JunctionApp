const mongoose = require('mongoose')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLInputObjectType,
} = require('graphql')

const MongoFileSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
    },
    uploadData: {
        type: String,
    },
    type: {
        type: String,
    },
    size: {
        type: Number,
    },
})

const MongoFile = new GraphQLObjectType({
    name: 'MongoFile',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        uploadData: {
            type: new GraphQLNonNull(GraphQLString),
        },
        type: {
            type: new GraphQLNonNull(GraphQLString),
        },
        size: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
})

const MongoFileInput = new GraphQLInputObjectType({
    name: 'MongoFileInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        uploadData: {
            type: new GraphQLNonNull(GraphQLString),
        },
        type: {
            type: new GraphQLNonNull(GraphQLString),
        },
        size: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
})

module.exports = {
    mongoose: MongoFileSchema,
    graphql: MongoFile,
    graphqlInput: MongoFileInput,
}
