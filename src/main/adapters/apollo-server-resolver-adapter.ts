import { Controller } from '@app/protocols'
import { ApolloError } from 'apollo-server-express'

export const adaptResolver = async (controller: Controller, args: any): Promise<any> => {
  const httpResponse = await controller.handle(args)
  switch (httpResponse.statusCode) {
    case 200: return httpResponse.body
    default: throw new ApolloError(httpResponse.body.message)
  }
}
