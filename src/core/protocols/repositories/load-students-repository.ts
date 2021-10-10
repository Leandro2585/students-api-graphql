export interface LoadStudentsRepository {
  load: (input: LoadStudentsRepository.Input) => any
}

export namespace LoadStudentsRepository {
  export type Input = { name?: string, email?: string, cpf?: string }
}
