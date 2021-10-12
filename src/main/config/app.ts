import { ApolloServer, gql } from 'apollo-server'
import '@main/config/module-alias'

const typeDefs = gql`
  type Query {
    
  }
`
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => console.log(`Server started at ${url}`))
