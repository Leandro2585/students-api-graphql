import { Validator } from '@app/protocols';
import { EmailValidator } from '@app/validator';

type BuilderInput = {
  value: string
}

export class ValidationBuilder {
  private constructor(
    private readonly value: string,
    private readonly validators: Validator[] = []
  ) {}

  static of(input: BuilderInput): ValidationBuilder {
    return new ValidationBuilder(input.value)
  }

  isEmail(): ValidationBuilder {
    this.validators.push(new EmailValidator(this.value))
    return this
  }

  build (): Validator[] {
    return this.validators
  }
}