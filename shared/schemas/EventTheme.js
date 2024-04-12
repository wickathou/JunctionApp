const mongoose = require('mongoose')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
} = require('graphql')

const EventThemeSchema = new mongoose.Schema({
    headerBackgroundColor: {
        type: String,
        default: '#ffffff',
    },
    headerTextColor: {
        type: String,
        default: '#000000',
    },
    bodyBackgroundColor: {
        type: String,
        default: '#ffffff',
    },
    detailsBackgroundColor: {
        type: String,
        default: '#ffffff',
    },
    detailsTextColor: {
        type: String,
        default: '#000000',
    },
    sidebarBackgroundColor: {
        type: String,
        default: '#ffffff',
    },
    sidebarTextColor: {
        type: String,
        default: '#000000',
    },
    accentColor: {
        type: String,
        default: '#73f9ec',
    },
    linkColor: {
        type: String,
        default: '#52d7af',
    },
})

const EventThemeInput = new GraphQLInputObjectType({
    name: 'EventThemeInput',
    fields: {
        _id: {
            type: GraphQLString,
        },
        headerBackgroundColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        headerTextColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        bodyBackgroundColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        detailsBackgroundColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        detailsTextColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        sidebarBackgroundColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        sidebarTextColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        accentColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        linkColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
})

const EventThemeType = new GraphQLObjectType({
    name: 'EventTheme',
    fields: {
        headerBackgroundColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        headerTextColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        bodyBackgroundColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        detailsBackgroundColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        detailsTextColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        sidebarBackgroundColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        sidebarTextColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        accentColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
        linkColor: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
})

module.exports = {
    mongoose: EventThemeSchema,
    graphql: EventThemeType,
    graphqlInput: EventThemeInput,
}
