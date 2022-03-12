import mongoose from "mongoose";

export interface ShowAttrs {
  name: string;
  maturityRating: number;
  description?: string;
  releaseDate: Date;
  genres: string[];
}

interface ShowDoc extends mongoose.Document, ShowAttrs {
  createdAt: Date;
  updatedDate: Date;
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
