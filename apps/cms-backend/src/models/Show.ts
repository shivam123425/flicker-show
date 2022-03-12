import mongoose from "mongoose";
import uniqid from "uniqid";
import { UserDoc } from "./User";
import { EpisodeAttrs, episodeSchema as Episode } from "@models/Episode";

export interface ShowAttrs {
  name: string;
  maturityRating: number;
  description?: string;
  releaseDate: Date;
  genres: string[];
  isStandalone?: boolean;
  seasons: string[];
  episodes: EpisodeAttrs[];
  uploader: string | UserDoc;
}

interface ShowDoc extends mongoose.Document, ShowAttrs {
  showId: string;
  createdAt: string;
  updatedDate: string;
}

interface ShowModel extends mongoose.Model<ShowDoc> {
  build(attrs: ShowAttrs): ShowDoc;
}

const showSchema = new mongoose.Schema<ShowDoc, ShowModel>(
  {
    showId: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    maturityRating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    isStandalone: {
      type: Boolean,
      default: false,
    },
    seasons: [{ type: String }],
    episodes: [Episode],
    genres: [{ type: String, required: true }],
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
      },
    },
  }
);

showSchema.statics.build = (attrs: ShowAttrs) => {
  return new Show({ ...attrs, showId: uniqid() });
};

const Show = mongoose.model<ShowDoc, ShowModel>("Show", showSchema);

export { Show };
