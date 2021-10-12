import { NotFoundError } from '@app/errors';
import { badRequest, ok } from '@app/helpers';
import { Controller, HttpResponse } from '@app/protocols';
import { StudentModel } from '@core/models';
import { LoadStudentsListService } from '@core/usecases';

export type Input = {
  name?: string
  email?: string
  cpf?: string
}

export type Output = StudentModel[] | Error

export class LoadStudentsController extends Controller {
  constructor(private readonly loadStudents: LoadStudentsListService) {
    super()
  }

  async execute(httpRequest: Input): Promise<HttpResponse<Output>> {
    const studentsList = await this.loadStudents(httpRequest)
    if(studentsList === undefined) {
      return badRequest(new NotFoundError())
    }
    return ok(studentsList)
  }
}
