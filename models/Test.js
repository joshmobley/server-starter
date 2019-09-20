const { gql } = require('apollo-server');

const typeDef = gql`
  extend type Query {
    test: String!
  }
`;

const resolvers = {
  Query: {
    test() {
      return 'Hello world!';
    }
  }
}

module.exports = { typeDef, resolvers }