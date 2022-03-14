import { Request, Response } from "express";
import _ from "lodash";
import { ShowAttrs, Show } from "@models/Show";
import { NotFoundError } from "@shivam123425/express-common";

export const createShow = async (
  req: Request<{}, {}, ShowAttrs>,
  res: Response
) => {
  const {
    name,
    releaseDate,
    description,
    maturityRating,
    genres,
    isStandalone,
    seasons,
    episodes,
  } = req.body;

  const show = Show.build({
    name,
    releaseDate,
    description,
    maturityRating,
    genres,
    uploader: req.currentUser!.id,
    isStandalone,
    seasons,
    episodes,
  });
  await show.save();
  // Create a job for video and thumbnail processing
  res.status(201).json({ data: show });
};

export const getShowByShowId = async (
  req: Request<{ showId: string }>,
  res: Response
) => {
  const { showId } = req.params;

  const show = await Show.findOne({ showId }).lean();
  if (!show) {
    throw new NotFoundError();
  }
  res.json({ data: show });
};
