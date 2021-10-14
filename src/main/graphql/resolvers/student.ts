import { adaptResolver } from '@main/adapters'
import { makeLoadStudentsControllerFactory } from '@main/factories/controllers'

export default {
  Query: {
    loadStudents: async (parent: any, args: any) => adaptResolver(makeLoadStudentsControllerFactory(), args)
  },
}
