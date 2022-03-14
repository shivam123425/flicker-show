import express from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@shivam123425/express-common";
import {
  createUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "@controllers/user.controller";

const router = express.Router();

// @route    POST /user
// @desc     Create a new user (Register)
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

// @route    POST /user/login
// @desc     Login a user by email and password
// @access   Public
router.post(
  "/login",
  [
    body("email", "Please provide a valid email").isEmail(),
    body("password", "Please provide a strong password").isStrongPassword(),
  ],
  validateRequest,
  loginUser
);

// @route    POST /user/currentuser
// @desc     Login a user by email and password
// @access   Public
router.post("/currentuser", requireAuth, getCurrentUser);

// @route    POST /user/logout
// @desc     Logout a user
// @access   Private
router.post("/logout", requireAuth, logoutUser);

export default router;
