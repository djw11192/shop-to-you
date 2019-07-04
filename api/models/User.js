const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  first_name: String,
	last_name: String
});

module.exports = mongoose.model('User', UserSchema);
