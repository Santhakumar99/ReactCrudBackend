const mongoose = require("mongoose");
const config = require("config");
const Author = require("../AuthorModel/author.module");

exports.getAllauthors = async (req, res) => {
    try {
      const getAuthors = await Author.find({});
      res.json(getAuthors);
    } catch (err) {
      console.log("error" + err);
    }
  };
  exports.FindAuthor = async (req, res) => {
    try {
      const getAuthor = await Author.findOne({ _id: req.params.id });
      res.json(getAuthor);
    } catch (err) {
      console.log("error" + err);
    }
  };
  exports.CreateAuthor= async (req, res) => {
    try {
      const { name, age,country } = req.body;
      let author = new Author ({
        name, age,country
      });
      const CreateAuthor = await author.save();
      res.status(200).json(CreateAuthor);
    } catch (err) {
      console.log("error" + err);
    }
  };
//   exports.UpdateBook = async (req, res) => {
//     const { id } = req.params;
//     const { name, age, email, mobile, password } = req.body;
  
//     try {
//       const user = await User.findByIdAndUpdate(
//         id,
//         { name, age, email, mobile, password },
//         { new: true }
//       );
//       res.send(user);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error);
//     }
//   };
  exports.DeleteAuthor = async (req, res) => {
    const { id } = req.params;
  
    try {
      const author = await Author.findByIdAndDelete(id);
      res.send(author);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };