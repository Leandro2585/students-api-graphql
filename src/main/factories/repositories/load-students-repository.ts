import { StudentsRepository } from '@infra/typeorm/repositories'

export const makeStudentsRepository = (): StudentsRepository => new StudentsRepository() 