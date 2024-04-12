const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
    GraphQLBoolean,
} = require('graphql')
const mongoose = require('mongoose')

const ChecklistSchema = new mongoose.Schema({
    items: [
        {
            name: {
                type: String,
            },
            title: {
                type: String,
            },
            checked: {
                type: Boolean,
            },
        },
    ],
})

const ChecklistItemType = new GraphQLObjectType({
    name: 'ChecklistItem',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        checked: {
            type: new GraphQLNonNull(GraphQLBoolean),
        },
    },
})

const ChecklistItemInput = new GraphQLInputObjectType({
    name: 'ChecklistItemInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        checked: {
            type: new GraphQLNonNull(GraphQLBoolean),
        },
    },
})

const ChecklistType = new GraphQLObjectType({
    name: 'Checklist',
    fields: {
        items: { type: new GraphQLList(ChecklistItemType) },
    },
})

const ChecklistInput = new GraphQLInputObjectType({
    name: 'ChecklistInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        items: { type: new GraphQLList(ChecklistItemInput) },
    },
})

module.exports = {
    mongoose: ChecklistSchema,
    graphql: ChecklistType,
    graphqlInput: ChecklistInput,
    itemInput: ChecklistItemInput,
}
