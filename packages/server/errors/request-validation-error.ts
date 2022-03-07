import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
  statusCode: number = 400;
  errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super("Invalid request params");
    this.errors = errors;
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors(): { message: String; field?: string }[] {
    return this.errors.map(({ msg, param }) => {
      return { message: msg, field: param };
    });
  }
}