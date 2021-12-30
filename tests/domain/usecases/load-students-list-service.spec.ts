import { mock, MockProxy } from 'jest-mock-extended'

import { LoadStudentsRepository } from '@domain/protocols/repositories'
import { LoadStudentsListService, setupLoadStudents } from '@domain/usecases'
import { NotFoundError } from '@domain/errors'
import { StudentModel } from '@domain/models'

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
    studentOne = { id: 'one', name, email, cpf }
    studentTwo = { id: 'two', name: 'other_name', email: 'other_email', cpf: 'other_cpf' }
    loadStudentsRepository.load.mockResolvedValue([studentOne, studentTwo])
  })

  beforeEach(() => {
    sut = setupLoadStudents(loadStudentsRepository)
  })

  test('should call LoadStudentsRepository with correct input', async () => {
    await sut({ name, email, cpf })

    expect(loadStudentsRepository.load).toHaveBeenCalledWith({ name, email, cpf })
  })

  test('should throw NotFoundError when LoadStudentsRepository returns undefined', async () => {
    loadStudentsRepository.load.mockResolvedValueOnce(undefined)
    const promise = sut({ name, email, cpf })

    await expect(promise).rejects.toThrow(new NotFoundError('students'))
  })

  test('should return students list on success', async () => {
    const response = await sut({ name, email, cpf })

    expect(response).toEqual([studentOne, studentTwo])
  })
})
