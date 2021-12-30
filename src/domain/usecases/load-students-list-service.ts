import { NotFoundError } from '@domain/errors'
import { StudentModel } from '@domain/models'
import { LoadStudentsRepository } from '@domain/protocols/repositories'

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
