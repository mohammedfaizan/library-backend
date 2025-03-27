import express from "express";

import {
  deleteBook,
  getBooks,
  newBook,
  updateBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.post("/book", newBook);
router.get("/books", getBooks);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

export default router;
