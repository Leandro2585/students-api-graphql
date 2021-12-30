import { Controller } from '@application/protocols'
import { ApolloError, UserInputError } from 'apollo-server'

export const adaptResolver = async (controller: Controller, args: any): Promise<any> => {
  const httpResponse = await controller.handle(args)
  switch (httpResponse.statusCode) {
    case 200: return httpResponse.body
    case 400: throw new UserInputError(httpResponse.body.message)
    default: throw new ApolloError(httpResponse.body.message)
  }
}
