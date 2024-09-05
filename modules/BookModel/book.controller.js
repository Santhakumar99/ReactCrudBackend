const mongoose = require("mongoose");
const config = require("config");
const Books = require("../BookModel/book.model");

exports.getAllBooks = async (req, res) => {
    try {
      const getbooks = await Books.find({});
      res.json(getbooks);
    } catch (err) {
      console.log("error" + err);
    }
  };
  exports.FindBook = async (req, res) => {
    try {
      const getbooks = await Books.findOne({ _id: req.params.id });
      res.json(getbooks);
    } catch (err) {
      console.log("error" + err);
    }
  };
  exports.CreateBook = async (req, res) => {
    try {
      const { Title, Subtitle } = req.body;
      let book = new Books({
        Title, Subtitle
      });
      const Createbook = await book.save();
      res.status(200).json(Createbook);
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
  exports.DeleteBook = async (req, res) => {0
    const { id } = req.params;
  
    try {
      const book = await Books.findByIdAndDelete(id);
      res.send(book);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };