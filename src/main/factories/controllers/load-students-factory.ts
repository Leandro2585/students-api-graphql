import { LoadStudentsController } from '@app/controllers';
import { Controller } from '@app/protocols';
import { makeLoadStudentsListServiceFactory } from '@main/factories/usecases';

export const makeLoadStudentsControllerFactory = (): Controller => {
  return new LoadStudentsController(makeLoadStudentsListServiceFactory())
}