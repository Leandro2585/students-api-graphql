import '@main/config/module-alias'
import { ApolloServer } from 'apollo-server'
import typeDefs from '@main/graphql/typedefs'
import resolvers from '@main/graphql/resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

export { server }
