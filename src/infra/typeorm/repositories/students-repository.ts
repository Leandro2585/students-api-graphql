import { getRepository } from 'typeorm';

import { LoadStudentsRepository } from '@core/protocols/repositories';
import { PostgresStudent } from '@infra/typeorm/entities'

export class StudentsRepository implements LoadStudentsRepository {
  async load ({ name, email, cpf }: LoadStudentsRepository.Input): Promise<LoadStudentsRepository.Output> {
    const postgresStudentRepository = getRepository(PostgresStudent)
    const postgresStudent = postgresStudentRepository.find({ name, email, cpf })
    if(postgresStudent !== undefined) return postgresStudent
  }
}