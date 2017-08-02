const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const authorSchema = new Schema({

    firstName: {
      type: String,
      required: 'Please provide First name'
      },
    lastName: {
      type: String,
      required: 'Please provide Last name'
      }
});

// function autoPopulate(next){
//     this.populate('course');
//     next();
// }

// authorSchema.pre('find', autoPopulate);
// reviewSchema.pre('findOne', autoPopulate);

module.exports = mongoose.model('Author', authorSchema);
