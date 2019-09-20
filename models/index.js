const merge = require('lodash.merge');
const { gql, makeExecutableSchema } = require('apollo-server');

const { 
  typeDef: Test,
  resolvers: TestResolvers
} = require('./Test');

const Query = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [ Query, Test ],
  resolvers: merge(resolvers, TestResolvers),
});

module.exports = { schema }