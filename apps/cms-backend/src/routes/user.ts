import express from "express";
import { body } from "express-validator";
import { validateRequest } from "@skgittix/common";
import { createUser } from "@controllers/user.controller";

const router = express.Router();

// @route    POST /user
// @desc     Create a new user
// @access   Public
router.post(
  "/",
  [
    body("name", "Please provide a name").isString().notEmpty(),
    body("email", "Please provide a valid email").isEmail(),
    body("password", "Please provide a strong password").isStrongPassword(),
  ],
  validateRequest,
  createUser
);

export default router;
