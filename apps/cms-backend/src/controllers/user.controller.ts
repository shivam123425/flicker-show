import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
  BadRequestError,
  NotAuthorizedError,
} from "@shivam123425/express-common";
import { UserAttrs, User } from "@models/User";

export const createUser = async (
  req: Request<{}, {}, UserAttrs>,
  res: Response
) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email }).lean();

  if (existingUser) {
    throw new BadRequestError("A user with the same email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = User.build({ name, email, password: hashedPassword });
  await user.save();
  res.status(201).json({ data: user });
};

export const loginUser = async (
  req: Request<{}, {}, { email: string; password: string }>,
  res: Response
) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).lean();
  if (!user) {
    throw new BadRequestError("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new BadRequestError("Invalid email or password");
  }
  const userJwt = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET!
  );
  req.session = {
    jwt: userJwt,
  };
  res.json({ data: user });
};

export const logoutUser = async (req: Request, res: Response) => {
  req.session = null;
  res.json({ data: true });
};

export const getCurrentUser = async (req: Request, res: Response) => {
  const { id } = req.currentUser!;
  const user = await User.findOne({ _id: id }).lean();
  if (!user) {
    throw new BadRequestError("Invalid jwt token");
  }
  res.json({ data: user });
};
