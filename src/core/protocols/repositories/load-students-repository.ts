import { StudentModel } from '@core/models/student'

export interface LoadStudentsRepository {
  load: (input: LoadStudentsRepository.Input) => LoadStudentsRepository.Output
}

export namespace LoadStudentsRepository {
  export type Input = { name?: string, email?: string, cpf?: string }
  export type Output = undefined | StudentModel[] 
}
