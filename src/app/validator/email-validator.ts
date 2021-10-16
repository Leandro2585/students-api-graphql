import { InvalidParamError } from '@app/errors/invalid-param-error';
import { Validator } from '@app/protocols';
import validator from 'validator'

export class EmailValidator implements Validator {
  constructor (private readonly email: string) {}

  validate (): Error | undefined {
    const isValid = validator.isEmail(this.email)
    if(!isValid) {
      return new InvalidParamError('email')
    }
  }
} 