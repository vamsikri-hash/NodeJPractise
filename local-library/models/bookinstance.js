var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", reference: true },
  imprint: { type: String, reference: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintaince", "Loaned", "Reserved"],
    default: "Maintaince",
  },
  due_back: { type: Date, default: Date.now },
});

BookInstanceSchema.virtual("url").get(function () {
  return "catalog/bookinstance/" + this._id;
});

//Export model

module.exports = mongoose.model("BookInstance", BookInstanceSchema);
