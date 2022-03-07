import { Request, Response, NextFunction } from "express";
import { CustomError } from "server/errors/custom-error";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }
  console.error(err);
  res.status(400).json({ errors: [{ message: "Something went wrong" }] });
}
