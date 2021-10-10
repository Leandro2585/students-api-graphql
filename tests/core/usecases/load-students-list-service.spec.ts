import { mock, MockProxy } from 'jest-mock-extended'

import { LoadStudentsRepository } from '@core/protocols/repositories'

type Setup = (loadStudentsRepository: LoadStudentsRepository) => LoadStudentsListService
type Input = { name?: string, cpf?: string, email?: string }

export type LoadStudentsListService = (input: Input) => Promise<void>

const setupLoadStudents: Setup = (loadStudentsRepository) => async (input) => {
  await loadStudentsRepository.load(input)
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
})
