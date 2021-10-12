import { ServerError } from '@app/errors';
import { HttpResponse } from '@app/protocols';

export const ok = <T = any> (data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data
})

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  body: error
})

export const serverError = (error: unknown): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error instanceof Error ? error : undefined)
})