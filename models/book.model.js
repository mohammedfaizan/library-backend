import mongoose from "mongoose";
import { Schema } from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publishedYear: { type: Number, required: true },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
