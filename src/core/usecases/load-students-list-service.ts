import { NotFoundError } from '@core/errors'
import { LoadStudentsRepository } from '@core/protocols/repositories'

type Setup = (loadStudentsRepository: LoadStudentsRepository) => LoadStudentsListService
type Input = { name?: string, cpf?: string, email?: string }

export type LoadStudentsListService = (input: Input) => Promise<any>

export const setupLoadStudents: Setup = (loadStudentsRepository) => async (input) => {
  const students = await loadStudentsRepository.load(input)
  if (students !== undefined) {
    return students
  }
  throw new NotFoundError('students')
}
