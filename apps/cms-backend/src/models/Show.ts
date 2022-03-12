import mongoose from "mongoose";
import { UserDoc } from "./User";

export interface ShowAttrs {
  name: string;
  maturityRating: number;
  description?: string;
  releaseDate: Date;
  genres: string[];
  uploader: string | UserDoc;
}

interface ShowDoc extends mongoose.Document, ShowAttrs {
  createdAt: string;
  updatedDate: string;
}

interface ShowModel extends mongoose.Model<ShowDoc> {
  build(attrs: ShowAttrs): ShowDoc;
}

const showSchema = new mongoose.Schema<ShowDoc, ShowModel>(
  {
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
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

showSchema.statics.build = (attrs: ShowAttrs) => {
  return new Show(attrs);
};

const Show = mongoose.model<ShowDoc, ShowModel>("Show", showSchema);

export { Show };
