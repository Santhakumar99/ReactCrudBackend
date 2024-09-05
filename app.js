const express = require("express");
const app = express();

const path = require("path");

const cors = require("cors");
app.use(cors());
app.use(express.static("public"));

const connectDb = require("./config/DBConnection");
// const firebaseAdmin = require("firebase-admin");
// const serviceAccount = require("./config/firebase-adminsdk.json");

// Connect Database
connectDb();

// Init Middleware
app.use(express.json({ extended: true }));

//production used area [start]
app.use(express.static(path.join("public")));
//production used area [end]

// Define Routes
app.use("/users", require("./modules/users/user.route"));
app.use("/books", require("./modules/BookModel/book.route"));
app.use("/authors", require("./modules/AuthorModel/author.router"));
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(500);
//   res.json({ message: error.message || "An unknown error occurred!" });
module.exports = app;
