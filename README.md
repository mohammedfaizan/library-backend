# 📚 Library Management System

This project is a simple **Library Management System** built using the **MERN stack**. The system allows users to manage a collection of books by implementing **CRUD (Create, Read, Update, Delete) operations** on book records.

## 🚀 Features

- ✅ **Create** a book record (Add a new book to the library).
- ✅ **Retrieve** all books (Fetch a list of all books in the library).
- ✅ **Update** book details (Modify the details of an existing book).
- ✅ **Delete** a book by ID (Remove a book from the database).

---

## 📌 Data Model

A **Book Schema** is defined in **Mongoose** with the following fields:

- **title** (String, required)
- **author** (String, required)
- **genre** (String, required)
- **publishedYear** (Number, required)

---

## 🌐 REST API Endpoints

| Method     | Endpoint     | Description         |
| ---------- | ------------ | ------------------- |
| **POST**   | `/books`     | Add a new book      |
| **GET**    | `/books`     | Get all books       |
| **PUT**    | `/books/:id` | Update book details |
| **DELETE** | `/books/:id` | Delete a book       |

---

## 🛠 Implementations

- **Controller**: Separate file for handling API logic.
- **Server Setup**: MongoDB connection and Express server setup in `index.js` or `server.js`.
- **Testing**: Use **Postman** to test API endpoints.

---

## 📄 Example Request

### ➕ Add a Book (POST `/books`)

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "publishedYear": 1925
}
```

---

## 📌 Technologies Used

- **MongoDB** - Database
- **Express.js** - Backend Framework
- **React.js** - Frontend Framework (optional)
- **Node.js** - JavaScript Runtime

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Start the Server

```sh
npm start
```

### 3️⃣ Test with Postman or Frontend

---

## 🤝 Contributing

Feel free to fork this repository and submit a pull request for improvements!

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

Happy Coding! 🚀
