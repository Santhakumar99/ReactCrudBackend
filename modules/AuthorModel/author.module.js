const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: { type: String, maxLength: 30 },
  age: { type: Number, maxLength: 3 },
  country: { type: String },
  book: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});
const Authors = mongoose.model('Author', AuthorSchema);

module.exports = Authors;
// export default mongoose.Model('Author', author)