import { ApolloServer, gql } from 'apollo-server'
import '@main/config/module-alias'
import { makeLoadStudentsControllerFactory } from '@main/factories/controllers'

const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    email: String!
    cpf: String!
  }
  type Query {
    students: [Student!]!
  }
`
const resolvers = {
  Query: {
    students: () => makeLoadStudentsControllerFactory().handle
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => console.log(`Server started at ${url}`))
