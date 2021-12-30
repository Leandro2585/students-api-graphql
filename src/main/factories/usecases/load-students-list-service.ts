import { LoadStudentsListService, setupLoadStudents } from '@domain/usecases';
import { makeStudentsRepository } from '@main/factories/repositories';

export const makeLoadStudentsListServiceFactory = (): LoadStudentsListService => {
  const loadStudentsRepository = makeStudentsRepository()
  return setupLoadStudents(loadStudentsRepository)
}