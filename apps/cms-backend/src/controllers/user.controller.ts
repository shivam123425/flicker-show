import { Request, Response } from "express";
import { UserAttrs, User } from "@models/User";

export const createUser = async (
  req: Request<{}, {}, UserAttrs>,
  res: Response
) => {
  const { name, email, password } = req.body;
  const user = User.build({ name, email, password });
  await user.save();
  res.status(201).json(user);
};
