import mongoose from "mongoose";
import validator from "validator";

export interface UserAttrs {
  name: string;
  email: string;
  password: string;
}

export interface UserDoc extends mongoose.Document, UserAttrs {
  createdAt: String;
  updatedDate: String;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema<UserDoc, UserModel>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Invalid email"],
  },
  password: {
    type: String,
    required: true,
    validate: [validator.isStrongPassword, "Weak password"],
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
