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

export const getShowOfLoggedInUser = async (
  req: Request<{ page?: number; limit?: number }>,
  res: Response
) => {
  const { id } = req.currentUser!;
  const { page = 1, limit = 10 } = req.params;

  const filter = { uploader: id };

  const shows = await Show.find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 })
    .lean();

  const resPayload: { data: any[]; totalDocs?: number } = { data: shows };

  if (page === 1) {
    // Attach total pages for pagination
    resPayload.totalDocs = await Show.countDocuments(filter);
  }

  res.json(resPayload);
};
