const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
} = require('graphql')

module.exports = {
    graphql: new GraphQLObjectType({
        name: 'RegistrationQuestionSettings',
        fields: {
            options: {
                type: new GraphQLList(GraphQLString),
            },
            default: {
                type: GraphQLBoolean,
            },
            maxSize: {
                type: GraphQLInt,
            },
            allowedTypes: {
                type: new GraphQLList(GraphQLString),
            },
        },
    }),
    graphqlInput: new GraphQLInputObjectType({
        name: 'RegistrationQuestionSettingsInput',
        fields: {
            options: {
                type: new GraphQLList(GraphQLString),
            },
            default: {
                type: GraphQLBoolean,
            },
            maxSize: {
                type: GraphQLInt,
            },
            allowedTypes: {
                type: new GraphQLList(GraphQLString),
            },
        },
    }),
}
