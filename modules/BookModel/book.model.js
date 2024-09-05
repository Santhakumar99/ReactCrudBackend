const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  Title: { type: String, maxLength: 30 },
  Subtitle: { type:String , maxLength: 3 },
  author: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    }},
    {
        timestamps:true
    }
);
// export default mongoose.Model('Book', book )

const Books = mongoose.model('Book', BookSchema);

module.exports = Books;