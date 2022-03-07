import { Request, Response, NextFunction } from "express";
import { UserJWTPayload } from "server/types";
import jwt from "jsonwebtoken";

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt || process.env.JWT_TOKEN) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_TOKEN!
    ) as UserJWTPayload;
    req.currentUser = payload;
  } catch (error) {
    console.error(error);
  }
  next();
};
