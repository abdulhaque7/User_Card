const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  domain: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  availability: { type: String, enum: ['Available', 'Unavailable'], required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
