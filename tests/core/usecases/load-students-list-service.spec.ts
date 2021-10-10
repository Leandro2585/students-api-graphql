import { mock, MockProxy } from 'jest-mock-extended'

import { LoadStudentsRepository } from '@core/protocols/repositories'
import { NotFoundError } from '@core/errors'

type Setup = (loadStudentsRepository: LoadStudentsRepository) => LoadStudentsListService
type Input = { name?: string, cpf?: string, email?: string }

export type LoadStudentsListService = (input: Input) => Promise<void>

const setupLoadStudents: Setup = (loadStudentsRepository) => async (input) => {
  const students = await loadStudentsRepository.load(input)
  if (students !== undefined) {
    return console.log('dd')
  }

  throw new NotFoundError('students')
}

describe('load-students-list service', () => {
  let cpf: string
  let name: string
  let email: string
  let loadStudentsRepository: MockProxy<LoadStudentsRepository>
  let sut: LoadStudentsListService

  beforeAll(() => {
    name = 'any_name'
    email = 'any_email'
    cpf = 'any_cpf'
    loadStudentsRepository = mock()
  })

  beforeEach(() => {
    sut = setupLoadStudents(loadStudentsRepository)
  })

  test('should call LoadStudentsRepository with correct input', async () => {
    await sut({ name, email, cpf })

    expect(loadStudentsRepository.load).toHaveBeenCalledWith({ name, email, cpf })
  })

  test('should throw NotFoundExceptionError when LoadStudentsRepository returns undefined', async () => {
    loadStudentsRepository.load.mockResolvedValueOnce(undefined)
    const promise = await sut({ name, email, cpf })

    await expect(promise).rejects.toThrow(new NotFoundError('students'))
  })
})
