import { NotFoundError } from '@core/errors'
import { StudentModel } from '@core/models'
import { LoadStudentsRepository } from '@core/protocols/repositories'

type Setup = (loadStudentsRepository: LoadStudentsRepository) => LoadStudentsListService
type Input = { name?: string, cpf?: string, email?: string }
type Output = StudentModel[] | undefined

export type LoadStudentsListService = (input: Input) => Promise<Output>

export const setupLoadStudents: Setup = (loadStudentsRepository) => async (input) => {
  const students = await loadStudentsRepository.load(input)
  if (students !== undefined) {
    return students
  }
  throw new NotFoundError('students')
}
