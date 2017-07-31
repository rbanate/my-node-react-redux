const mongoose = require('mongoose');
const slug = require('slugs');

mongoose.Promise = global.Promise;

const courseSchema = new mongoose.Schema({
    id: String,
    title:{
      type: String,
      trim: true,
      required: 'Please enter a Course title'
    },
    slug: String,
    watchHref: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'Author',
        required: 'You must supply an author'
    },
    length: String,
    category: String
});

module.exports = mongoose.model('Course', courseSchema);
