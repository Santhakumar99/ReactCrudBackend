const express = require("express");
const router = express.Router();

const {getAllauthors,FindAuthor,CreateAuthor,DeleteAuthor}= require('../AuthorModel/author.controller');

router.get("/Allauthors",getAllauthors);
router.get("/author/:id",FindAuthor);
router.post("/AddAuthor",CreateAuthor);
router.delete("/DeleteAuthor",DeleteAuthor);
module.exports = router;
