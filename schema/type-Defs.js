const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    userName: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }
  type Query {
    users: [User!]!
    user(id: ID!) : User!
  }
enum Nationality{
    CANADA
    BRAZIL   
    INDIA
    GERMANY
    CHILE
    INDONASIA
    MEXICO
    CHAD
    USA
    GHANA
    }



`;

module.exports = { typeDefs };
