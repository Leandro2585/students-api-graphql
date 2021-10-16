import { getRepository } from 'typeorm';

import { LoadStudentsRepository } from '@core/protocols/repositories';
import { PostgresStudent } from '@infra/typeorm/entities'

export class StudentsRepository implements LoadStudentsRepository {
  async load (input: LoadStudentsRepository.Input): Promise<LoadStudentsRepository.Output> {
    const postgresStudentRepository = getRepository(PostgresStudent)
    const postgresStudent = postgresStudentRepository.find(input)
    if(postgresStudent !== undefined) return postgresStudent
  }
}