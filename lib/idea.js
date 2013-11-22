var mongoose = require('mongoose');

var ideaSchema = new mongoose.Schema({
        title : String,
  description : String,
         rank : Number,
         tags : String,
    createdAt : Date
});

ideaSchema.methods.tags_array = function tags_array() {
  return this.tags.split(', ');
};

ideaSchema.methods.to_h = function to_h() {
  return {
    title: this.title,
    description: this.description,
    rank: this.rank,
    tags: this.tags
  }
};

var Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
