import mongoose from "mongoose";

export interface EpisodeAttrs {
  season: string;
  epNumber: number;
  thumbnail?: string;
  url?: string;
  description?: string;
}

interface EpisodeDoc extends mongoose.Document, EpisodeAttrs {
  _id: boolean;
}

interface EpisodeModel extends mongoose.Model<EpisodeDoc> {}

export const episodeSchema = new mongoose.Schema<EpisodeDoc, EpisodeModel>({
  _id: false,
  season: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  epNumber: {
    type: Number,
    required: true,
  },
});

export function buildEpisode(attrs: EpisodeAttrs) {
  return attrs;
}
