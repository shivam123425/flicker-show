import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor(errors: ValidationError[]) {
    super("Not found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors(): { message: String; field?: string }[] {
    return [{ message: "Not found" }]
  }
}

interface ValidationError {
  msg: any;
  param: string;
}
