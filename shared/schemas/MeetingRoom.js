const {
    GraphQLInt,
    GraphQLID,
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
} = require('graphql')
const { GraphQLDate } = require('graphql-iso-date')
const mongoose = require('mongoose')

const MeetingRoomSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    capacity: {
        type: Number,
    },
    timeSlots: [
        {
            start: {
                type: Date,
            },
            end: {
                type: Date,
            },
            reserved: {
                type: Boolean,
            },
        },
    ],
})

const MeetingRoomType = new GraphQLObjectType({
    name: 'MeetingRoom',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        capacity: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        timeSlots: {
            type: new GraphQLList(
                new GraphQLObjectType({
                    name: 'MeetingRoomTimeSlot',
                    fields: {
                        _id: {
                            type: new GraphQLNonNull(GraphQLID),
                        },
                        start: {
                            type: new GraphQLNonNull(GraphQLDate),
                        },
                        end: {
                            type: new GraphQLNonNull(GraphQLDate),
                        },
                        reserved: {
                            type: new GraphQLNonNull(GraphQLBoolean),
                        },
                    },
                }),
            ),
        },
    },
})

const MeetingRoomInput = new GraphQLInputObjectType({
    name: 'MeetingRoomInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        capacity: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        timeSlots: {
            type: new GraphQLList(
                new GraphQLInputObjectType({
                    name: 'MeetingRoomTimeSlotInput',
                    fields: {
                        _id: {
                            type: GraphQLString,
                        },
                        start: {
                            type: new GraphQLNonNull(GraphQLDate),
                        },
                        end: {
                            type: new GraphQLNonNull(GraphQLDate),
                        },
                        reserved: {
                            type: new GraphQLNonNull(GraphQLBoolean),
                        },
                    },
                }),
            ),
        },
    },
})

module.exports = {
    mongoose: MeetingRoomSchema,
    graphql: MeetingRoomType,
    graphqlInput: MeetingRoomInput,
}
