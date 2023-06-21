const { ApolloServer } = require('apollo-server')
const {typeDefs} = require('./schema/type-Defs')
const { resolvers } = require('./schema/resolvers')

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`you api is running on : ${url}`)
})