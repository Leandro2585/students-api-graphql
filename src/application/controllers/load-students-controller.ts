import { NotFoundError } from '@application/errors';
import { badRequest, ok } from '@application/helpers';
import { ValidationBuilder } from '@application/validators';
import { Controller, HttpResponse, Validator } from '@application/protocols';
import { LoadStudentsListService } from '@domain/usecases';
import { StudentModel } from '@domain/models';

export type HttpRequest = {
  name?: string
  email?: string
  cpf?: string
}

export type Output = StudentModel[] | Error

export class LoadStudentsController extends Controller {
  constructor(private readonly loadStudents: LoadStudentsListService) {
    super()
  }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse<Output>> {
    const studentsList = await this.loadStudents(httpRequest)
    if(studentsList === undefined) {
      return badRequest(new NotFoundError())
    }
    return ok(studentsList)
  }

  buildValidators({ email }: HttpRequest): Validator[] {
    if(email) {
      return ValidationBuilder.of({ value: email }).isEmail().build()
    }
    return []
  }
}
