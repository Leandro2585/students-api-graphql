import { ApolloServer } from 'apollo-server'

import resolvers from '@main/graphql/resolvers'
import typeDefs from '@main/graphql/typedefs'

const server = new ApolloServer({ resolvers, typeDefs })

export { server }