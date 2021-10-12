import { LoadStudentsListService, setupLoadStudents } from '@core/usecases';
import { makeStudentsRepository } from '@main/factories/repositories';

export const makeLoadStudentsListServiceFactory = (): LoadStudentsListService => {
  const loadStudentsRepository = makeStudentsRepository()
  return setupLoadStudents(loadStudentsRepository)
}