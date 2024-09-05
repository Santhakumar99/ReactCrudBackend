const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  FindBook,
  CreateBook,
  DeleteBook,
} = require("../BookModel/book.controller");
router.get("/getbooks", getAllBooks);
router.get("/getbooks/:id", FindBook);
router.post("/newbook", CreateBook);
router.delete("/bookdelete", DeleteBook);
module.exports = router;