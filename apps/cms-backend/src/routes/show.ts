import express from "express";
import { body, param } from "express-validator";
import { requireAuth, validateRequest } from "@shivam123425/express-common";
import { createShow, getShowByShowId } from "@controllers/show.controller";

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
    body("seasons", "Please provide atleast one season").isArray().notEmpty(),
    body("episodes", "Please provide atleast one episode").isArray().notEmpty(),
  ],
  validateRequest,
  createShow
);

// @route    GET /show/:showId
// @desc     Get a show by showId
// @access   Private
router.get(
  "/:showId",
  requireAuth,
  [param("showId", "Please provide a showId").notEmpty()],
  validateRequest,
  getShowByShowId
);

export default router;
