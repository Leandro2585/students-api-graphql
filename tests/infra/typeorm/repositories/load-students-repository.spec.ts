import { IBackup } from 'pg-mem'
import { getConnection, getRepository, Repository } from 'typeorm'

import { LoadStudentsRepository } from '@core/protocols/repositories'
import { PostgresStudent } from '@infra/typeorm/entities'
import { makeFakeDatabase } from '../mocks'

class PostgresStudentRepository {
  async load ({ name, email, cpf }: LoadStudentsRepository.Input) {
    const postgresStudentRepository = getRepository(PostgresStudent)
    const postgresStudent = await postgresStudentRepository.findOne({ name, email, cpf })
    return postgresStudent
  }
}

describe('postgres-students repository', () => {
  let sut: PostgresStudentRepository
  let postgresStudentRepository: Repository<PostgresStudent>
  let backup: IBackup

  beforeAll(async () => {
    const database = await makeFakeDatabase([PostgresStudent])
    backup = database.backup()
    postgresStudentRepository = getRepository(PostgresStudent)
  })

  beforeEach(() => {
    backup.restore()
    sut = new PostgresStudentRepository()
  })

  afterAll(async () => {
    await getConnection().close()
  })

  test('should return student on valid email',async () => {
    await postgresStudentRepository.save({ name: 'any_name', email: 'valid_email', cpf: 'any_cpf' })
    const postgresStudent = await sut.load({ email: 'valid_email' })

    expect(postgresStudent).toMatchObject({ name: 'any_name', email: 'valid_email', cpf: 'any_cpf' })
  })
})