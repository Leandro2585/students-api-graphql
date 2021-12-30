export class ServerError extends Error {
  constructor(error?: Error) {
    super('Server failed. Try again soon')
    this.name = 'ServerError'
    if(error !== undefined) {
      this.stack = error.stack
    }
  }
}