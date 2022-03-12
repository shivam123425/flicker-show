import { Request, Response } from "express";
import _ from "lodash";
import { ShowAttrs, Show } from "@models/Show";

export const createShow = async (
  req: Request<{}, {}, ShowAttrs>,
  res: Response
) => {
  const { name, releaseDate, description, maturityRating, genres } = req.body;

  const show = Show.build({
    name,
    releaseDate,
    description,
    maturityRating,
    genres,
    uploader: req.currentUser!.id,
  });
  await show.save();
  res.status(201).json(show);
};
