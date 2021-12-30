export class NotFoundError extends Error {
  constructor(error?: Error) {
    super('Not found Error')
    this.name = 'NotFoundError'
  }
}