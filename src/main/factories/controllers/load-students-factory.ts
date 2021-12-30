import { LoadStudentsController } from '@application/controllers';
import { Controller } from '@application/protocols';
import { makeLoadStudentsListServiceFactory } from '@main/factories/usecases';

export const makeLoadStudentsControllerFactory = (): Controller => {
  return new LoadStudentsController(makeLoadStudentsListServiceFactory())
}