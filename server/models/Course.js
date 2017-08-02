const mongoose = require('mongoose');
const slug = require('slugs');

mongoose.Promise = global.Promise;

const courseSchema = new mongoose.Schema({
    title:{
      type: String,
      trim: true,
      required: 'Please enter a Course title'
    },
    slug: String,
    watchHref: String,
    length: String,
    category: String
});

courseSchema.pre('save', async function(next){
    if(!this.isModified('title')){
        next(); // skip it
        return; // stop this function from running
    }
    this.slug = slug(this.title);

    // find other stores that have same slug

    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i')

    const storesWithSlug = await this.constructor.find({slug: slugRegEx});

    if(storesWithSlug.length){
        this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
        this.watchHref = `http://www.pluralsight.com/courses/${this.slug}`;
    }

    next();
    // TODO: make more resilient so slugs are unique
});

module.exports = mongoose.model('Course', courseSchema);
