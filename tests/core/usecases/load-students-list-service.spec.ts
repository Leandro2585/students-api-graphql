import { mock, MockProxy } from 'jest-mock-extended'

import { LoadStudentsRepository } from '@core/protocols/repositories'
import { LoadStudentsListService, setupLoadStudents } from '@core/usecases'
import { NotFoundError } from '@core/errors'
import { StudentModel } from '@core/models'

describe('load-students-list service', () => {
  let cpf: string
  let name: string
  let email: string
  let studentOne: StudentModel
  let studentTwo: StudentModel
  let loadStudentsRepository: MockProxy<LoadStudentsRepository>
  let sut: LoadStudentsListService

  beforeAll(() => {
    name = 'any_name'
    email = 'any_email'
    cpf = 'any_cpf'
    loadStudentsRepository = mock()
    studentOne = { name, email, cpf }
    studentTwo = { name: 'other_name', email: 'other_email', cpf: 'other_cpf' }
    loadStudentsRepository.load.mockImplementation(() => [studentOne, studentTwo])
  })

  beforeEach(() => {
    sut = setupLoadStudents(loadStudentsRepository)
  })

  test('should call LoadStudentsRepository with correct input', async () => {
    await sut({ name, email, cpf })

    expect(loadStudentsRepository.load).toHaveBeenCalledWith({ name, email, cpf })
  })

  test('should throw NotFoundError when LoadStudentsRepository returns undefined', async () => {
    loadStudentsRepository.load.mockImplementationOnce(() => undefined)
    const promise = sut({ name, email, cpf })

    await expect(promise).rejects.toThrow(new NotFoundError('students'))
  })

  test('should return students list on success', async () => {
    const response = await sut({ name, email, cpf })

    expect(response).toEqual([studentOne, studentTwo])
  })
})
