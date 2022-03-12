import express from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@skgittix/common";
import { createShow } from "@controllers/show.controller";

const router = express.Router();

// @route    POST /show
// @desc     Create a new show
// @access   Private
router.post(
  "/",
  requireAuth,
  [
    body("name", "Please provide a name").isString().notEmpty(),
    body("maturityRating", "Please provide a maturityRating").isInt(),
    body("releaseDate", "Please provide a releaseDate").isDate(),
    body("genres", "Please provide atleast one genre").isArray().notEmpty(),
  ],
  validateRequest,
  createShow
);

export default router;
