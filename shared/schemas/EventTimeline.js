const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
} = require('graphql')
const { GraphQLDate } = require('graphql-iso-date')
const mongoose = require('mongoose')

const EventTimelineSchema = new mongoose.Schema({
    items: [
        {
            title: {
                type: String,
            },
            startTime: {
                type: Date,
            },
        },
    ],
})

const EventTimelineItemType = new GraphQLObjectType({
    name: 'EventTimelineItem',
    fields: {
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        startTime: {
            type: new GraphQLNonNull(GraphQLDate),
        },
    },
})

const EventTimelineItemInput = new GraphQLInputObjectType({
    name: 'EventTimelineItemInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        startTime: {
            type: new GraphQLNonNull(GraphQLDate),
        },
    },
})

const EventTimelineType = new GraphQLObjectType({
    name: 'EventTimeline',
    fields: {
        items: { type: new GraphQLList(EventTimelineItemType) },
    },
})

const EventTimelineInput = new GraphQLInputObjectType({
    name: 'EventTimelineInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        items: { type: new GraphQLList(EventTimelineItemInput) },
    },
})

module.exports = {
    mongoose: EventTimelineSchema,
    graphql: EventTimelineType,
    graphqlInput: EventTimelineInput,
    itemInput: EventTimelineItemInput,
}
