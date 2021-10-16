import { makeLoadStudentsControllerFactory } from '@main/factories/controllers'

export default {
  Query: {
    async loadStudents (parent: any, args: any) {
      const loadStudentsController = makeLoadStudentsControllerFactory()
      const httpResponse = await loadStudentsController.handle(args)
      return httpResponse.body
    }
  }
}