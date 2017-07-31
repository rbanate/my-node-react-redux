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
      required: 'Please provide First name'
      }
});

module.exports = mongoose.model('Author', authorSchema);
