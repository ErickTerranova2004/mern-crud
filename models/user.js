const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator').default;
const validate = require('mongoose-validator');

const nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Name must not exceed {ARGS[1]} characters.'
  })
];

const emailValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Email must not exceed {ARGS[1]} characters.'
  }),
  validate({
    validator: 'isEmail',
    message: 'Email must be valid.'
  })
];

const ageValidator = [
  validate({
    validator: (value) => value === undefined || value === null || (Number.isInteger(value) && value >= 5 && value <= 130),
    message: 'Age must be a whole number between 5 and 130.'
  })
];

const genderValidator = [
  validate({
    validator: (value) => ['', 'm', 'f'].includes(value),
    message: 'Gender must be "m" or "f".'
  })
];

// Define the database model
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    validate: nameValidator
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    validate: emailValidator
  },
  age: {
    type: Number,
    validate: ageValidator
  },
  gender: {
    type: String,
    validate: genderValidator
  }
});

// Use the unique validator plugin
UserSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const User = module.exports = mongoose.model('user', UserSchema);
