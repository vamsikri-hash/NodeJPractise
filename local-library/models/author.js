var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// virtual functions (data that doesn't stor in db)
AuthorSchema.virtual("name").get(function () {
  var fullname = "";
  if (this.first_name && this.family_name) {
    fullname = first_name + family_name;
  }

  if (!first_name || !family_name) {
    fullname = "";
  }
  return fullname;
});

AuthorSchema.virtual("lifespan").get(function () {
  return (this.date_of_birth - this.date_of_death).toString();
});

AuthorSchema.virtual("url").get(function () {
  return "/catalog/authors/" + this._id;
});

//export model

module.exports = mongoose.model("Author", AuthorSchema);
