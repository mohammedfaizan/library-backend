import Book from "../models/book.model.js";

const newBook = async (req, res) => {
  console.log(req.body);

  try {
    const { title, author, genre, publishedYear } = req.body;

    if (!title || !author || !genre || !publishedYear) {
      return res.status(400).json({ message: "enter all the details" });
    }

    const newBook = await Book.create({
      title,
      author,
      genre,
      publishedYear,
    });

    console.log("Book Created", newBook);

    res.status(200).json({ message: "created a new Book", newBook });
  } catch (error) {
    console.log("error creating book", error);
    res.status(400).json({
      Message: "error creating a book",
      error: error.message,
    });
  }
};

const getBooks = async (req, res) => {
  try {
    let options = {};
    const books = await Book.find({}, null, options);

    res.status(200).json({
      success: true,
      books,
      message: "fetched all books",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Error finding books" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, publishedYear } = req.body;

    if (!id)
      return res.status(400).json({ success: false, message: "id is missing" });

    let book = await Book.findById(id);

    if (!book)
      return res
        .status(400)
        .json({ success: false, message: "error finding the book" });

    if (title) book.title = title;
    if (author) book.author = author;
    if (genre) book.genre = genre;
    if (publishedYear) book.publishedYear = publishedYear;

    const updatedBook = await book.save();

    console.log(updatedBook);

    return res.status(200).json({
      success: true,
      message: "book updated successfully",
      updatedBook,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res.status(400).json({ success: false, message: "id missing" });

    const book = await Book.findByIdAndDelete(id);

    console.log(book);

    return res
      .status(200)
      .json({ success: true, message: "book deleted", book });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export { newBook, getBooks, updateBook, deleteBook };
