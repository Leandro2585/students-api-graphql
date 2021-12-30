export class NotFoundError extends Error {
  constructor (model: string) {
    super(`Not found ${model}`)
    this.name = 'NotFoundError'
  }
}
