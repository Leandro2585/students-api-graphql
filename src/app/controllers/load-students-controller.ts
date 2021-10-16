import { NotFoundError } from '@app/errors';
import { badRequest, ok } from '@app/helpers';
import { Controller, HttpResponse, Validator } from '@app/protocols';
import { ValidationBuilder } from '@app/validator/validation-builder';
import { StudentModel } from '@core/models';
import { LoadStudentsListService } from '@core/usecases';

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
